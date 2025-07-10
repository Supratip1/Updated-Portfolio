import React from 'react';

const experiences = [
  {
    company: 'Kimberly-Clark (Via Soojh AI)',
    title: 'AI Full Stack Engineer',
    period: 'Apr 2025 – Present',
    description: `Currently driving frontend development for AI Observe 360, a premium internal AI/ML Product built to provide enterprise-grade observability into model performance, drift, reliability, and cost.`,
    skills: ['React.js', 'TypeScript', 'AI', 'ML', 'Observability'],
  },
  {
    company: 'News Corp',
    title: 'Software Development Engineer',
    period: 'Oct 2022 – Sep 2024',
    description: `Accomplished a high-performance web application: Reduced task completion time from 20 minutes to 10 seconds, by implementing React, state management, and dynamic API integration.\nEngineered a modular system for news delivery: Built a component-driven architecture to enable seamless real-time data rendering and API integration, improving user engagement by 40%.\nEnhanced accessibility and compliance: Implemented responsive design and WCAG standards, increasing cross-browser accessibility by 15%.\nOptimized CI/CD processes: Automated testing and deployment pipelines using GitHub Actions, reducing deployment times by 30%.`,
    skills: ['JavaScript', 'React.js', 'CI/CD', 'API', 'WCAG'],
  },
  {
    company: 'Tata Consultancy Services',
    title: 'Assistant System Engineer (Front end Developer)',
    period: 'Oct 2020 – Oct 2022',
    description: `Revamped enterprise frontend: Designed a React-based architecture, reducing load times by 50% and enabling 1M+ users to interact seamlessly.\nBoosted user engagement: Redesigned responsive UI components, leading to a 50% increase in session duration and a 15% decrease in bounce rates.\nImplemented analytics-driven improvements: Integrated Google Analytics to assess user behavior, driving a 20% increase in retention.`,
    skills: ['React.js', 'Google Analytics', 'UI/UX', 'Frontend', 'Performance'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-10 bg-zinc-900 text-white">
      <div className="container w-full">
        <div className="w-full border-b-[1px] border-zinc-700 pb-5">
          <h2 className="text-4xl sm:text-6xl font-NueueMontreal mb-0">Experience</h2>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <div className="flex flex-col gap-16">
          {experiences.map((exp, idx) => (
            <div key={exp.company} className="flex flex-col md:flex-row items-start md:items-center bg-white rounded-2xl shadow-md p-8 md:p-12 gap-8 md:gap-0">
              {/* Company Name */}
              <div className="md:w-1/4 w-full text-left mb-2 md:mb-0">
                <div className="font-bold text-2xl md:text-3xl uppercase text-gray-800">{exp.company}</div>
                <div className="text-xs text-gray-500 mt-1">{exp.period}</div>
              </div>
              {/* Skills */}
              <div className="md:w-1/4 w-full flex flex-wrap gap-3 justify-start md:justify-center mb-2 md:mb-0 md:mb-0 mb-4">
                {exp.skills.map(skill => (
                  <span key={skill} className="px-6 py-2 border-2 border-gray-600 rounded-full text-base font-sans font-medium uppercase tracking-wide text-gray-900 bg-transparent">
                    {skill}
                  </span>
                ))}
              </div>
              {/* Work Description */}
              <div className="md:w-2/4 w-full text-left text-gray-700 whitespace-pre-line text-lg md:mt-0 mt-4">
                <div className="font-semibold mb-1 text-xl md:text-2xl">{exp.title}</div>
                <div>{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 