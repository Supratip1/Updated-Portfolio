import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "Hirrd",
    description:
      "A modern job portal application connecting talent with opportunities",
    image: "hirrd.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com",
    live: "https://hirrd.vercel.app/",
    details: {
      problem:
        "Traditional job boards lack modern features and user experience",
      solution:
        "Built a streamlined job portal with real-time updates and intelligent matching",
      features: [
        "Real-time job notifications",
        "AI-powered job matching",
        "Advanced search filters",
        "Application tracking system",
      ],
      impact: "Helping thousands of job seekers find their dream positions",
    },
  },
  {
    title: "Schedulrr",
    description: "A Calendly clone for seamless meeting scheduling",
    image: "schedulrr.png",
    tech: ["Next.js", "TypeScript", "Prisma", "tRPC"],
    github: "https://github.com",
    live: "https://schedulrr.vercel.app/",
    details: {
      problem: "Complex meeting scheduling across time zones",
      solution:
        "Created an intuitive scheduling platform with automated time zone handling",
      features: [
        "Multiple calendar integration",
        "Custom availability rules",
        "Automated reminders",
        "Team scheduling",
      ],
      impact: "Reduced meeting scheduling time by 80% for users",
    },
  },
  {
    title: "Zcrum",
    description: "A Jira-inspired project management solution",
    image: "zcrum.png",
    tech: ["React", "Redux", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://getzcrum.vercel.app/",
    details: {
      problem: "Need for a simplified project management tool for small teams",
      solution:
        "Developed a streamlined alternative to complex enterprise tools",
      features: [
        "Kanban and Scrum boards",
        "Sprint planning",
        "Time tracking",
        "Performance analytics",
      ],
      impact: "Helping teams increase productivity by 40%",
    },
  },
  {
    title: "Reflct",
    description: "A minimalist journaling application",
    image: "reflct.png",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    github: "https://github.com",
    live: "https://getreflct.vercel.app/",
    details: {
      problem: "Digital journaling apps are often cluttered and complex",
      solution:
        "Created a clean, focused writing experience with powerful features",
      features: [
        "Markdown support",
        "Daily prompts",
        "Mood tracking",
        "Privacy-focused design",
      ],
      impact: "Helping users maintain consistent journaling habits",
    },
  },
];
