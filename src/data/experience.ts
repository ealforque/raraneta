export interface ExperienceItem {
  year: string
  role: string
  scope: string
  organization: string
  summary: string
  achievements: string[]
}

export const experience: ExperienceItem[] = [
  {
    year: '2025 - Present',
    role: 'Senior Architect',
    scope: 'High-rise and civic landmarks',
    organization: 'Ramir Studio',
    summary:
      'Leading multidisciplinary teams across mega-scale developments in Asia, Europe, and the Middle East.',
    achievements: [
      'Directed design for 3 towers above 300m',
      'Implemented low-carbon envelope standards across all projects',
    ],
  },
  {
    year: '2022 - 2025',
    role: 'Design Director',
    scope: 'Mixed-use urban regeneration',
    organization: 'Urban Arc Collective',
    summary:
      'Built design frameworks for resilient districts, balancing mobility, ecology, and social equity.',
    achievements: [
      'Delivered city district masterplans in 5 global capitals',
      'Won International Urban Vision Award 2024',
    ],
  },
  {
    year: '2019 - 2022',
    role: 'Urban Planning Consultant',
    scope: 'Smart city infrastructure strategy',
    organization: 'Atlas Urban Systems',
    summary:
      'Advised governments and private developers on adaptive transit hubs and intelligent public infrastructure.',
    achievements: [
      'Designed AI-assisted mobility framework for 2 million residents',
      'Reduced transit transfer time by 23% in pilot hubs',
    ],
  },
  {
    year: '2015 - 2019',
    role: 'Technical Project Lead',
    scope: 'Complex cultural and residential projects',
    organization: 'Studio Formline',
    summary:
      'Integrated BIM and digital fabrication workflows from concept to construction administration.',
    achievements: [
      'Managed BIM execution on 11 international projects',
      'Cut coordination clashes by 34% through digital twin reviews',
    ],
  },
]
