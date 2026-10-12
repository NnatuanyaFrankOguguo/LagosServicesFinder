import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CategoryBadge, CategoryIcon } from '../components/LocationCard';
import { COLORS } from '../constants/theme';

// InfoRow
// One line of contact information, such as the phone number.
// Takes in: `icon` (an icon name), `label` and `value`.
// Renders: the icon on the left, the label in small grey text, and the value
// underneath it.
function InfoRow({ icon, label, value }) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoIcon}>
        <MaterialCommunityIcons name={icon} size={20} color={COLORS.text} />
      </View>
      <View style={styles.infoText}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
}

// LocationDetailScreen
// The second screen, showing everything about one place.
// Takes in: `route`, which React Navigation passes in. The tapped location
// arrives as `route.params.location`.
// Renders: the name, category icon and badge, address and description. Phone
// and opening hours are only shown if that record actually has them. If no
// location was passed at all, it shows a friendly message instead of crashing.
export default function LocationDetailScreen({ route }) {
  const insets = useSafeAreaInsets();
  // The `?.` means "stop and give undefined if params is missing", so a
  // missing location doesn't throw an error.
  const location = route.params?.location;

  if (!location) {
    return (
      <View style={styles.missing}>
        <MaterialCommunityIcons name="alert-circle-outline" size={48} color={COLORS.textMuted} />
        <Text style={styles.missingText}>
          Sorry, we couldn't find that location. Go back and try another one.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 24 }]}
    >
      <View style={styles.hero}>
        <CategoryIcon category={location.category} size={32} />
        <Text style={styles.name}>{location.name}</Text>
        <CategoryBadge category={location.category} style={styles.heroBadge} />
      </View>

      <View style={styles.section}>
        <InfoRow icon="map-marker-outline" label="Address" value={location.address} />
        {/* `!!` turns the value into true/false. Without it, an empty string
            would be rendered as bare text, which React Native doesn't allow. */}
        {!!location.phone && (
          <InfoRow icon="phone-outline" label="Phone" value={location.phone} />
        )}
        {!!location.hours && (
          <InfoRow icon="clock-outline" label="Opening hours" value={location.hours} />
        )}
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <MaterialCommunityIcons name="information-outline" size={20} color={COLORS.text} />
          <Text style={styles.sectionTitle}>About</Text>
        </View>
        <Text style={styles.description}>
          {location.description || 'No description available.'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 16,
    gap: 16,
  },
  hero: {
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.text,
    textAlign: 'center',
    marginTop: 14,
    marginBottom: 10,
  },
  heroBadge: {
    alignSelf: 'center',
    marginBottom: 0,
  },
  section: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 6,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 12,
  },
  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.surfaceRaised,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    color: COLORS.text,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingTop: 14,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.text,
  },
  description: {
    fontSize: 15,
    lineHeight: 23,
    color: COLORS.textSecondary,
    paddingBottom: 14,
  },
  missing: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 24,
    backgroundColor: COLORS.background,
  },
  missingText: {
    fontSize: 16,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
});
