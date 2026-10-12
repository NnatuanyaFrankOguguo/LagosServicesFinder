// Every category the app knows about. The key matches the `category` field on
// each location, `label` is what the filter button shows, and `icon` is a
// MaterialCommunityIcons name.
// `color` is the category's main colour, used for icons and tinted boxes.
// `light` is a brighter shade of the same colour, used wherever the colour is
// text or sits behind text, because the main colours are too dark to read
// against the app's dark background.
export const CATEGORIES = {
  hospital: { label: 'Hospitals', badge: 'Hospital', color: '#e74c3c', light: '#ff8a80', icon: 'hospital-building' },
  pharmacy: { label: 'Pharmacies', badge: 'Pharmacy', color: '#27ae60', light: '#6fdc9a', icon: 'pill' },
  fuel: { label: 'Fuel', badge: 'Fuel Station', color: '#f39c12', light: '#ffc15e', icon: 'gas-station' },
  transport: { label: 'Transport', badge: 'Transport', color: '#2980b9', light: '#6ab7f0', icon: 'bus' },
};

// The places listed in the app. These are real Lagos landmarks, but the phone
// numbers are sample placeholders, not real contact numbers. A few records have
// no phone or no hours on purpose so the detail screen can show it handles
// missing fields.
export const LOCATIONS = [
  // ---------- Hospitals ----------
  {
    id: 1,
    name: 'Lagos University Teaching Hospital (LUTH)',
    category: 'hospital',
    address: 'Ishaga Road, Idi-Araba, Surulere, Lagos',
    phone: '+234 1 234 5601',
    hours: '24 hours',
    description:
      'One of the largest federal teaching hospitals in Nigeria, attached to the University of Lagos College of Medicine. Offers emergency care and most specialist services.',
  },
  {
    id: 2,
    name: 'Lagos State University Teaching Hospital (LASUTH)',
    category: 'hospital',
    address: '1-5 Oba Akinjobi Way, Ikeja, Lagos',
    phone: '+234 1 234 5602',
    hours: '24 hours',
    description:
      'The main state-owned teaching hospital in Ikeja. Runs a busy accident and emergency unit and a wide range of outpatient clinics.',
  },
  {
    id: 3,
    name: 'General Hospital Lagos (Odan)',
    category: 'hospital',
    address: 'Broad Street, Lagos Island, Lagos',
    phone: '+234 1 234 5603',
    hours: '24 hours',
    description:
      'A historic public hospital on Lagos Island serving residents and workers in the central business district.',
  },
  {
    id: 4,
    name: 'Federal Medical Centre Ebute-Metta',
    category: 'hospital',
    address: 'Railway Compound, Ebute-Metta, Lagos',
    hours: '24 hours',
    description:
      'A federal hospital on the mainland that provides general and specialist care, formerly the Nigerian Railway Corporation hospital.',
  },
  {
    id: 5,
    name: 'Reddington Hospital',
    category: 'hospital',
    address: '12 Idowu Martins Street, Victoria Island, Lagos',
    phone: '+234 1 234 5605',
    hours: '24 hours',
    description:
      'A private multi-specialist hospital in Victoria Island known for cardiac care and diagnostics.',
  },
  {
    id: 6,
    name: 'Lagoon Hospitals Ikoyi',
    category: 'hospital',
    address: '17B Bourdillon Road, Ikoyi, Lagos',
    phone: '+234 1 234 5606',
    description:
      'Private hospital group with a branch in Ikoyi offering emergency, maternity and general medical services.',
  },
  {
    id: 7,
    name: 'St. Nicholas Hospital',
    category: 'hospital',
    address: '57 Campbell Street, Lagos Island, Lagos',
    phone: '+234 1 234 5607',
    hours: '24 hours',
    description:
      'Long-established private hospital on Lagos Island, well known for its kidney care and transplant unit.',
  },

  // ---------- Pharmacies ----------
  {
    id: 8,
    name: 'HealthPlus Pharmacy, Ikeja City Mall',
    category: 'pharmacy',
    address: 'Ikeja City Mall, Obafemi Awolowo Way, Alausa, Ikeja',
    phone: '+234 1 234 5608',
    hours: '9am - 9pm daily',
    description:
      'Branch of a large Nigerian pharmacy chain inside Ikeja City Mall. Stocks prescription drugs, wellness and beauty products.',
  },
  {
    id: 9,
    name: 'HealthPlus Pharmacy, Surulere',
    category: 'pharmacy',
    address: 'Adeniran Ogunsanya Shopping Mall, Surulere, Lagos',
    phone: '+234 1 234 5609',
    hours: '9am - 9pm daily',
    description:
      'Mall pharmacy in Surulere with a pharmacist on duty for advice and prescription refills.',
  },
  {
    id: 10,
    name: 'HealthPlus Pharmacy, Victoria Island',
    category: 'pharmacy',
    address: 'Adeola Odeku Street, Victoria Island, Lagos',
    hours: '8am - 10pm daily',
    description:
      'Street-front branch close to the offices and hotels of Victoria Island.',
  },
  {
    id: 11,
    name: 'MedPlus Pharmacy, The Palms',
    category: 'pharmacy',
    address: 'The Palms Shopping Mall, Lekki, Lagos',
    phone: '+234 1 234 5611',
    hours: '9am - 9pm daily',
    description:
      'Pharmacy chain branch inside The Palms mall in Lekki, convenient for shoppers and nearby estates.',
  },
  {
    id: 12,
    name: 'MedPlus Pharmacy, Yaba',
    category: 'pharmacy',
    address: 'Herbert Macaulay Way, Yaba, Lagos',
    phone: '+234 1 234 5612',
    description:
      'Busy branch close to UNILAG and Yaba College of Technology, popular with students.',
  },
  {
    id: 13,
    name: 'Alpha Pharmacy, Allen Avenue',
    category: 'pharmacy',
    address: 'Allen Avenue, Ikeja, Lagos',
    phone: '+234 1 234 5613',
    hours: '8am - 9pm, Mon - Sat',
    description:
      'Community pharmacy on one of Ikeja’s main commercial streets.',
  },
  {
    id: 14,
    name: 'Nett Pharmacy, Lekki Phase 1',
    category: 'pharmacy',
    address: 'Admiralty Way, Lekki Phase 1, Lagos',
    phone: '+234 1 234 5614',
    hours: '8am - 10pm daily',
    description:
      'Neighbourhood pharmacy serving the Lekki Phase 1 area with medicines and health supplies.',
  },

  // ---------- Fuel stations ----------
  {
    id: 15,
    name: 'NNPC Mega Station, Ikoyi',
    category: 'fuel',
    address: 'Alfred Rewane Road, Ikoyi, Lagos',
    phone: '+234 1 234 5615',
    hours: '24 hours',
    description:
      'Large NNPC retail station selling petrol, diesel and gas, with a convenience shop on site.',
  },
  {
    id: 16,
    name: 'TotalEnergies, Ozumba Mbadiwe',
    category: 'fuel',
    address: 'Ozumba Mbadiwe Avenue, Victoria Island, Lagos',
    phone: '+234 1 234 5616',
    hours: '6am - 10pm daily',
    description:
      'Busy station on the main road into Victoria Island, with a car wash and lubricant shop.',
  },
  {
    id: 17,
    name: 'Oando Station, Obafemi Awolowo Way',
    category: 'fuel',
    address: 'Obafemi Awolowo Way, Ikeja, Lagos',
    hours: '6am - 10pm daily',
    description:
      'Fuel station along one of Ikeja’s main roads, close to the Alausa government secretariat.',
  },
  {
    id: 18,
    name: 'Conoil Station, Maryland',
    category: 'fuel',
    address: 'Ikorodu Road, Maryland, Lagos',
    phone: '+234 1 234 5618',
    hours: '6am - 9pm daily',
    description:
      'Roadside station near the Maryland junction, handy for drivers heading to Ikorodu or the Island.',
  },
  {
    id: 19,
    name: 'MRS Station, Allen Avenue',
    category: 'fuel',
    address: 'Allen Avenue, Ikeja, Lagos',
    phone: '+234 1 234 5619',
    description:
      'Neighbourhood fuel station in the Allen Avenue commercial area.',
  },
  {
    id: 20,
    name: 'Mobil Station, Lekki-Epe Expressway',
    category: 'fuel',
    address: 'Lekki-Epe Expressway, Lekki, Lagos',
    phone: '+234 1 234 5620',
    hours: '24 hours',
    description:
      'Expressway station serving traffic between Lekki, Ajah and Epe.',
  },
  {
    id: 21,
    name: 'Ardova Station, Gbagada',
    category: 'fuel',
    address: 'Gbagada-Oshodi Expressway, Gbagada, Lagos',
    phone: '+234 1 234 5621',
    hours: '6am - 10pm daily',
    description:
      'Station on the Gbagada Expressway, convenient for commuters crossing the Third Mainland Bridge.',
  },

  // ---------- Transport ----------
  {
    id: 22,
    name: 'Oshodi Transport Interchange',
    category: 'transport',
    address: 'Oshodi-Apapa Expressway, Oshodi, Lagos',
    hours: '5am - 11pm daily',
    description:
      'Large multi-terminal bus hub in Oshodi linking BRT and regular buses to most parts of Lagos.',
  },
  {
    id: 23,
    name: 'CMS Bus Terminal',
    category: 'transport',
    address: 'Marina, Lagos Island, Lagos',
    hours: '5am - 10pm daily',
    description:
      'Major BRT terminal on Lagos Island with buses to Ikorodu, Oshodi and the mainland.',
  },
  {
    id: 24,
    name: 'Lagos Blue Line, Marina Station',
    category: 'transport',
    address: 'Marina, Lagos Island, Lagos',
    phone: '+234 1 234 5624',
    hours: '6am - 9pm, Mon - Sat',
    description:
      'Eastern terminus of the Lagos Rail Mass Transit Blue Line, running to Mile 2 along the Badagry corridor.',
  },
  {
    id: 25,
    name: 'Lagos Red Line, Ikeja Station',
    category: 'transport',
    address: 'Ikeja, Lagos',
    phone: '+234 1 234 5625',
    hours: '6am - 9pm, Mon - Sat',
    description:
      'Station on the Red Line commuter rail, which runs between Agbado and Oyingbo.',
  },
  {
    id: 26,
    name: 'Murtala Muhammed International Airport',
    category: 'transport',
    address: 'Airport Road, Ikeja, Lagos',
    phone: '+234 1 234 5626',
    hours: '24 hours',
    description:
      'Lagos’ main airport, handling both international and domestic flights.',
  },
  {
    id: 27,
    name: 'Ikorodu Bus Terminal',
    category: 'transport',
    address: 'Ikorodu Road, Ikorodu, Lagos',
    phone: '+234 1 234 5627',
    description:
      'BRT terminal at the end of the Ikorodu corridor with buses to TBS, CMS and Oshodi.',
  },
  {
    id: 28,
    name: 'Five Cowries Ferry Terminal',
    category: 'transport',
    address: 'Falomo, Ikoyi, Lagos',
    phone: '+234 1 234 5628',
    hours: '7am - 7pm daily',
    description:
      'Waterways terminal near Falomo Bridge with ferries to Ikorodu, Badore and other lagoon routes.',
  },
];
