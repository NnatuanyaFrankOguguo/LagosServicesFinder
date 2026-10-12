import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CATEGORIES } from '../data/locations';
import { COLORS } from '../constants/theme';

// The list of buttons to show, in order. "all" isn't a real category, so it's
// added by hand at the front (white when selected); the rest come straight
// from CATEGORIES.
const FILTERS = [
  { key: 'all', label: 'All', icon: 'view-grid-outline', light: COLORS.text },
  ...Object.keys(CATEGORIES).map((key) => ({ key, ...CATEGORIES[key] })),
];

// CategoryFilter
// A row of filter buttons the user can swipe sideways.
// Takes in: `selected` (the key of the active filter) and `onSelect` (a
// function to call with the new key when a button is tapped).
// Renders: one pill per filter with an icon and a label. The selected pill is
// filled with a light shade of its category colour and uses dark text, so it
// stands out and stays readable. This component doesn't hold any state
// itself; the list screen owns the selected value.
export default function CategoryFilter({ selected, onSelect }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      // A horizontal ScrollView grows and shrinks with its parent by default,
      // which squashed the buttons on some screens. This keeps the row at
      // its natural height.
      style={styles.scroll}
      contentContainerStyle={styles.row}
    >
      {FILTERS.map((filter) => {
        const isSelected = filter.key === selected;
        return (
          <TouchableOpacity
            key={filter.key}
            activeOpacity={0.8}
            style={[
              styles.chip,
              isSelected && { backgroundColor: filter.light, borderColor: filter.light },
            ]}
            onPress={() => onSelect(filter.key)}
          >
            <MaterialCommunityIcons
              name={filter.icon}
              size={18}
              color={isSelected ? COLORS.onLight : filter.light}
            />
            <Text style={[styles.label, isSelected && styles.labelSelected]}>
              {filter.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 0,
    flexShrink: 0,
  },
  row: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
  },
  labelSelected: {
    color: COLORS.onLight,
  },
});
