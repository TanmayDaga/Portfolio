import { faCode, faBriefcase, faGraduationCap, faDatabase, faBroadcastTower, faComments, faLock, faProjectDiagram, faCloud } from "@fortawesome/free-solid-svg-icons";
import { faReact, faNodeJs, faPython, faJs, faAws, faDocker, faJava, faWpforms, faRust } from "@fortawesome/free-brands-svg-icons";

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  techStack?: Array<{ icon: any; name: string }>;
  logo?: string;
}

export const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "ScrapC Marketplace",
    location: "Remote",
    period: "Jul 2025 – Sep 2025",

    description: "Migrated and optimized web application for scalability and performance.",
    achievements: [
      "Migrated React.js app to Next.js, reducing code size by 60%",
      "Enhanced SEO-friendly routing and page load efficiency by 40%",
      "Built responsive UI with Shadcn, Formik, and Zustand for 900+ users"
    ],
    techStack: [
      { icon: faReact, name: "React.js" },
      { icon: faJs, name: "Next.js" },
      { icon: faDatabase, name: "Zustand" },
      { icon: faWpforms, name: "Formik" }
    ]
  },
  {
    title: "Frontend Developer",
    company: "Vanii.ai",
    location: "Remote",
    period: "Aug 2024 – Nov 2024",

    description: "Developed AI-powered language learning platform with real-time interactions.",
    achievements: [
      "Built frontend using WebRTC and LiveKit for 30+ active users",
      "Designed responsive UI and multistep forms",
      "Developed chatbot frontend for live audio and text-based interactions"
    ],
    techStack: [
      { icon: faReact, name: "React.js" },
      { icon: faJs, name: "Next.js" },
      { icon: faBroadcastTower, name: "WebRTC" },
      { icon: faComments, name: "LiveKit" }
    ]
  },
];
