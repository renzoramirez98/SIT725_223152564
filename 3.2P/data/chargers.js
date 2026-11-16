// Illustrative sample data created for this university task.
// These are example listings, NOT verified real-world charging stations.
module.exports = [
  {
    id: 1,
    title: 'City charging hub',
    area: 'Sydney city (example)',
    connector: 'CCS2',
    powerKw: 150,
    priceNote: 'Tariff not available in demo',
    image: '/images/city-charger.svg',
    description: 'A sample rapid charging stop designed for drivers visiting the city. Check the connector and charging power before planning a visit.'
  },
  {
    id: 2,
    title: 'Coastal charging stop',
    area: 'Eastern suburbs (example)',
    connector: 'Type 2',
    powerKw: 22,
    priceNote: 'Tariff not available in demo',
    image: '/images/coastal-charger.svg',
    description: 'A sample destination charger for a longer stop. This card shows how a lower-power connector can be presented alongside rapid chargers.'
  },
  {
    id: 3,
    title: 'Highway rest stop',
    area: 'Regional NSW (example)',
    connector: 'CHAdeMO',
    powerKw: 50,
    priceNote: 'Tariff not available in demo',
    image: '/images/highway-charger.svg',
    description: 'A sample regional charging stop. Its details demonstrate how a second DC connector type appears in the same interface.'
  }
];
