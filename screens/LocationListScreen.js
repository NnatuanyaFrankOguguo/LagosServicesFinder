import { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LOCATIONS } from '../data/locations';
import CategoryFilter from '../components/CategoryFilter';
import LocationCard from '../components/LocationCard';
import { COLORS } from '../constants/theme';

// filterLocations
// Works out which locations to show for the chosen filter.
// Takes in: the full list and the selected filter key ("all", "hospital", ...).
// Gives back: the whole list for "all", otherwise only the matching ones.
// Kept outside the component so it's a plain function that's easy to test
// and explain on its own.
function filterLocations(locations, filter) {
  if (filter === 'all') {
    return locations;
  }
  return locations.filter((location) => location.category === filter);
}

// LocationListScreen
// The first screen the user sees.
// Takes in: `navigation`, which React Navigation passes to every screen.
// Renders: a header with the app name, the filter buttons, a
// "Showing X of Y" count, and the list of location cards. Tapping a card
// opens the detail screen for that place. The only state here is which filter
// is selected; the visible list is recalculated from it on every render.
export default function LocationListScreen({ navigation }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const insets = useSafeAreaInsets();

  const visibleLocations = filterLocations(LOCATIONS, selectedFilter);

  // openDetails
  // Called when a card is tapped. Moves to the Detail screen and hands over
  // the tapped location so that screen knows what to show.
  function openDetails(location) {
    navigation.navigate('Detail', { location });
  }

  return (
    <View style={styles.container}>
      {/* This screen hides the default navigation header and draws its own.
          insets.top pushes it below the notch / Dynamic Island. */}
      <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
        <View style={styles.titleRow}>
          <MaterialCommunityIcons name="map-search-outline" size={28} color={COLORS.text} />
          <Text style={styles.title}>Lagos Service Finder</Text>
        </View>
        <Text style={styles.subtitle}>
          Hospitals, pharmacies, fuel and transport across Lagos
        </Text>
      </View>

      <CategoryFilter selected={selectedFilter} onSelect={setSelectedFilter} />

      <Text style={styles.count}>
        Showing {visibleLocations.length} of {LOCATIONS.length} locations
      </Text>

      <FlatList
        data={visibleLocations}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <LocationCard location={item} onPress={() => openDetails(item)} />
        )}
        style={styles.list}
        // Extra space at the bottom so the last card isn't hidden behind the
        // home indicator on iPhone or the navigation bar on Android.
        contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}
        ListEmptyComponent={
          <View style={styles.empty}>
            <MaterialCommunityIcons name="map-marker-off-outline" size={48} color={COLORS.textMuted} />
            <Text style={styles.emptyText}>No locations found in this category.</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.surface,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: COLORS.border,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    flexShrink: 1,
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.text,
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  count: {
    marginHorizontal: 16,
    marginBottom: 10,
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  list: {
    flex: 1,
  },
  empty: {
    alignItems: 'center',
    marginTop: 48,
    gap: 12,
  },
  emptyText: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
});
