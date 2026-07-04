export interface ProjectSpec {
  label: string
  value: string
}

export interface ProjectNarrative {
  concept: string
  design: string
  execution: string
}

export interface Project {
  id: string
  name: string
  location: string
  year: string
  category: string
  tagline: string
  description: string
  cover: string
  gallery: string[]
  specs: ProjectSpec[]
  narrative: ProjectNarrative
}

export const projects: Project[] = [
  {
    id: 'skyline-tower-residences',
    name: 'Skyline Tower Residences',
    location: 'Singapore',
    year: '2025',
    category: 'Luxury Residential',
    tagline: 'A vertical neighborhood framed for tropical airflow.',
    description:
      'A 68-floor residential landmark balancing density with open sky terraces and passive cooling strategies.',
    cover:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1800&q=80',
    ],
    specs: [
      { label: 'Gross Floor Area', value: '124,000 sqm' },
      { label: 'Completion', value: '2025' },
      { label: 'Sustainability', value: 'LEED Platinum' },
      { label: 'Units', value: '412 residences' },
    ],
    narrative: {
      concept:
        'The tower was conceived as a stack of sky communities. Each cluster shares planted social decks to create meaningful urban living above ground.',
      design:
        'A structural exoskeleton allows column-free interior spans while horizontal shading fins reduce solar gain and add rhythm to the skyline profile.',
      execution:
        'Digital twin coordination shortened construction by 14 months and optimized material usage through parametric prefabrication.',
    },
  },
  {
    id: 'green-horizon-city-district',
    name: 'Green Horizon City District',
    location: 'Copenhagen, Denmark',
    year: '2024',
    category: 'Sustainable Urban Design',
    tagline: 'A carbon-conscious district where infrastructure is a public park.',
    description:
      'A mixed-use city district integrating clean mobility, adaptive public spaces, and circular energy systems.',
    cover:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1800&q=80',
    ],
    specs: [
      { label: 'Site Area', value: '42 hectares' },
      { label: 'Mobility', value: 'Car-light district model' },
      { label: 'Energy', value: 'District geothermal grid' },
      { label: 'Public Realm', value: '61% open space' },
    ],
    narrative: {
      concept:
        'The district framework treats streets as climate buffers and social connectors, creating resilient neighborhoods around walkability.',
      design:
        'The masterplan layers transit, water management, and public life into one continuous ecological network.',
      execution:
        'Phased delivery tied infrastructure investment to occupancy milestones, enabling measurable sustainability outcomes from day one.',
    },
  },
  {
    id: 'aurora-cultural-center',
    name: 'Aurora Cultural Center',
    location: 'Oslo, Norway',
    year: '2023',
    category: 'Civic Architecture',
    tagline: 'A luminous civic stage for art, dialogue, and community exchange.',
    description:
      'A contemporary cultural forum with acoustic halls, open galleries, and a weather-responsive facade.',
    cover:
      'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?auto=format&fit=crop&w=1800&q=80',
    ],
    specs: [
      { label: 'Main Hall Capacity', value: '2,100 seats' },
      { label: 'Facade', value: 'Kinetic aluminum veil' },
      { label: 'Certification', value: 'BREEAM Excellent' },
      { label: 'Program', value: '8 cultural venues' },
    ],
    narrative: {
      concept:
        'The building forms a civic lantern, inviting people inward through an open plaza and transparent ground level.',
      design:
        'Interior pathways choreograph movement between music, exhibition, and education spaces, enabling layered public experiences.',
      execution:
        'Acoustic simulation and robotic facade prototyping ensured precision between design intent and built performance.',
    },
  },
  {
    id: 'nexus-smart-office-complex',
    name: 'Nexus Smart Office Complex',
    location: 'Dubai, UAE',
    year: '2026',
    category: 'Smart City Infrastructure',
    tagline: 'An intelligent workplace ecosystem for adaptive urban productivity.',
    description:
      'A twin-tower corporate campus with responsive environmental systems and AI-assisted operations.',
    cover:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?auto=format&fit=crop&w=1800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80',
    ],
    specs: [
      { label: 'Built Area', value: '189,000 sqm' },
      { label: 'Floors', value: '2 x 54 levels' },
      { label: 'Building Intelligence', value: 'AI climate adaptation' },
      { label: 'Energy Reduction', value: '32% below baseline' },
    ],
    narrative: {
      concept:
        'Nexus was envisioned as a flexible headquarters framework where architecture continuously adapts to occupancy and climate.',
      design:
        'Bridging sky gardens and hybrid work terraces connect both towers while creating outdoor workspaces in an extreme climate.',
      execution:
        'A modular facade package and integrated sensor network allowed rapid deployment and real-time performance tuning.',
    },
  },
  {
    id: 'coastal-luxury-villas',
    name: 'Coastal Luxury Villas',
    location: 'Santorini, Greece',
    year: '2022',
    category: 'Luxury Residential',
    tagline: 'Mediterranean minimalism shaped by wind, light, and sea horizon.',
    description:
      'A collection of cliffside villas with discreet massing, panoramic framing, and regenerative landscape strategy.',
    cover:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560185008-a33f4c528d35?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1600563438938-a9a27216b7f0?auto=format&fit=crop&w=1800&q=80',
    ],
    specs: [
      { label: 'Villas', value: '12 residences' },
      { label: 'Material Palette', value: 'Limestone + microcement' },
      { label: 'Water Strategy', value: 'Rainwater harvesting' },
      { label: 'Site Integration', value: '97% native planting' },
    ],
    narrative: {
      concept:
        'Each villa is anchored into the terrain to minimize visual impact while preserving uninterrupted sea vistas.',
      design:
        'The architecture combines monolithic walls with open courtyards to create cool thermal buffers and private outdoor rooms.',
      execution:
        'Local craft-led construction and prefabricated joinery kept intervention precise and materially restrained.',
    },
  },
  {
    id: 'metro-transit-hub-redesign',
    name: 'Metro Transit Hub Redesign',
    location: 'Toronto, Canada',
    year: '2021',
    category: 'Urban Infrastructure',
    tagline: 'A transit interchange transformed into a civic gateway.',
    description:
      'A multimodal interchange redesign prioritizing intuitive flow, accessibility, and climate resilience.',
    cover:
      'https://images.unsplash.com/photo-1468436385273-8abca6dfd8d3?auto=format&fit=crop&w=1800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1529429611273-7bb870e11810?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1489514354504-1653aa90e34e?auto=format&fit=crop&w=1800&q=80',
    ],
    specs: [
      { label: 'Daily Capacity', value: '640,000 passengers' },
      { label: 'Transit Modes', value: 'Rail, metro, bus, cycle' },
      { label: 'Accessibility', value: 'Universal path network' },
      { label: 'Completion', value: 'Phased 2019-2021' },
    ],
    narrative: {
      concept:
        'The hub reimagines transit as a civic room, not a corridor, supporting social life while moving people efficiently.',
      design:
        'A unified canopy system organizes circulation and daylight while integrating wayfinding through light and material contrast.',
      execution:
        'Operational continuity was maintained through phased night-shift construction and temporary circulation rerouting.',
    },
  },
]

export const getProjectById = (id: string) => projects.find((project) => project.id === id)
