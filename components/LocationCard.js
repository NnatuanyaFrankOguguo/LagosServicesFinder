import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CATEGORIES } from '../data/locations';
import { COLORS } from '../constants/theme';

// Used when a record has a category we don't recognise.
const UNKNOWN = { badge: 'Other', color: '#7f8c8d', light: '#b8c2cc', icon: 'map-marker-outline' };

// getCategory
// Looks up the label, colours and icon for a category key.
// Takes in: a key such as "hospital".
// Gives back: the matching entry from CATEGORIES, or a grey "Other" entry so
// the app never crashes on a typo in the data.
export function getCategory(key) {
  return CATEGORIES[key] || UNKNOWN;
}

// CategoryBadge
// A small coloured pill showing what kind of place this is.
// Takes in: `category` (e.g. "hospital") and an optional `style` so the
// screen using it can adjust its position.
// Renders: the category name in the light shade of its colour, on a faint
// tint of the main colour. It's exported because the detail screen shows the
// same badge.
export function CategoryBadge({ category, style }) {
  const info = getCategory(category);
  return (
    // Adding "33" to a hex colour makes it about 20% opaque, giving a soft
    // background in the same shade as the text.
    <View style={[styles.badge, { backgroundColor: info.color + '33' }, style]}>
      <Text style={[styles.badgeText, { color: info.light }]}>{info.badge}</Text>
    </View>
  );
}

// CategoryIcon
// The rounded square with the category's icon in it.
// Takes in: `category` and an optional `size` for the icon.
// Renders: the icon in the light shade of the category colour on a faint
// tint of the main colour.
export function CategoryIcon({ category, size = 24 }) {
  const info = getCategory(category);
  const box = size * 2;
  return (
    <View
      style={[
        styles.iconBox,
        { width: box, height: box, borderRadius: box * 0.3, backgroundColor: info.color + '33' },
      ]}
    >
      <MaterialCommunityIcons name={info.icon} size={size} color={info.light} />
    </View>
  );
}

// LocationCard
// One row in the list on the main screen.
// Takes in: `location` (one object from data/locations.js) and `onPress`
// (what to do when the card is tapped).
// Renders: the category icon on the left, then the name, badge and address,
// with an arrow on the right hinting that the card can be tapped.
export default function LocationCard({ location, onPress }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={onPress}>
      <CategoryIcon category={location.category} />

      <View style={styles.body}>
        <Text style={styles.name} numberOfLines={2}>
          {location.name}
        </Text>
        <CategoryBadge category={location.category} />
        <View style={styles.addressRow}>
          <MaterialCommunityIcons name="map-marker-outline" size={14} color={COLORS.textMuted} />
          <Text style={styles.address} numberOfLines={1}>
            {location.address}
          </Text>
        </View>
      </View>

      <MaterialCommunityIcons name="chevron-right" size={24} color={COLORS.textMuted} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: COLORS.surface,
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 14,
    borderRadius: 16,
    // Shadows barely show on a dark background, so a thin border separates
    // the card from the screen instead.
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // flex: 1 lets the text take the space between the icon and the arrow and
  // wrap inside it, instead of pushing the arrow off the screen.
  body: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 6,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  address: {
    flex: 1,
    fontSize: 13,
    color: COLORS.textSecondary,
  },
});
