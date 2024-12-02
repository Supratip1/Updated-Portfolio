// Define the type for a timeline item
interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string[];
  icon: string;
}

// Define the timeline data
export const timelineData: TimelineItem[] = [
  {
    year: '2022 - 2024',
    title: 'Software Engineer',
    company: 'NewsCorp India',
    description: [
      '-Accomplished a high-performance web application: Reduced task completion time from 20 minutes to 10 seconds, by implementing React, state management, and dynamic API integration.',
      '-Engineered a modular system for news delivery: Built a component-driven architecture to enable seamless real-time data rendering and API integration, improving user engagement by 40%.',
    ],
    icon: 'newscorp'
  },
  {
    year: '2020-2022',
    title: 'Frontend Developer',
    company: 'Tata Consultancy Services',
    description: [
      '-Revamped enterprise frontend: Designed a React-based architecture, reducing load times by 50% and enabling 1M+ users to interact seamlessly.',
      '-Boosted user engagement: Redesigned responsive UI components, leading to a 50% increase in session duration and a 15% decrease in bounce rates.',
    ],
    icon: 'tcs'
  },
  {
    year: '2016 - 2020',
    title: 'B.Tech in CS',
    company: 'FIEM',
    description: [
      'Foundation in computer science and programming',
    ],
    icon: 'fiem'
  }
];

// Export the data for use in other files
export default timelineData;
