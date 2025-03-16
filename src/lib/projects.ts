import { faCode, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faImage } from "@fortawesome/free-solid-svg-icons";
import { faAndroid, faGithub, faReact, faNodeJs, faPython, faJs, faAws, faDocker } from "@fortawesome/free-brands-svg-icons";

export const projectCategories = [
    {
      title: "Web Development",
      order: 1,
      gradient: {
        from: "#14b8a6",
        to: "#059669"
      },
      projects: [
        {
          title: "Web Development",
          image: "",
          isContainer: true,
          icon: faCode
        },
        {
          title: "Portfolio Website",
          image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000",
          githubLink: "https://github.com/TanmayDaga/portfolio",
          description: "A modern portfolio website built with SolidJS and Tailwind CSS. Features smooth animations, dark mode support, and responsive design.",
          techStack: [
            { icon: faJs, name: "JavaScript" },
            { icon: faReact, name: "SolidJS" },
            { icon: faDocker, name: "Docker" }
          ],
          timeline: [
            { date: "Mar 2024", milestone: "Added dark mode and animations" },
            { date: "Feb 2024", milestone: "Initial release with basic features" },
            { date: "Jan 2024", milestone: "Project started" }
          ],
          screenshots: [
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000"
          ]
        },
        {
          title: "E-commerce Platform",
          image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000",
          githubLink: "https://github.com/TanmayDaga/e-commerce",
          description: "A full-featured e-commerce platform with real-time inventory management, secure payment processing, and admin dashboard.",
          techStack: [
            { icon: faReact, name: "React" },
            { icon: faNodeJs, name: "Node.js" },
            { icon: faAws, name: "AWS" }
          ],
          timeline: [
            { date: "Feb 2024", milestone: "Added payment gateway integration" },
            { date: "Jan 2024", milestone: "Implemented user authentication" },
            { date: "Dec 2023", milestone: "Project initialization" }
          ],
          screenshots: [
            "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000"
          ]
        },
        {
          title: "AI Chat Interface",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000",
          githubLink: "https://github.com/TanmayDaga/ai-chat",
          description: "An intelligent chat interface powered by AI, featuring real-time responses, code highlighting, and conversation history.",
          techStack: [
            { icon: faPython, name: "Python" },
            { icon: faReact, name: "React" },
            { icon: faAws, name: "AWS" }
          ],
          timeline: [
            { date: "Mar 2024", milestone: "Added code highlighting" },
            { date: "Feb 2024", milestone: "Implemented AI integration" }
          ],
          screenshots: [
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000"
          ]
        }
      ]
    },
    {
      title: "Mobile Development",
      order: 2,
      gradient: {
        from: "#a855f7",
        to: "#db2777"
      },
      projects: [
        {
          title: "Android Development",
          image: "",
          isContainer: true,
          icon: faAndroid
        },
        {
          title: "Fitness Tracker",
          image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000",
          githubLink: "https://github.com/TanmayDaga/fitness-tracker",
          description: "A comprehensive fitness tracking app with workout plans, progress monitoring, and social features.",
          techStack: [
            { icon: faAndroid, name: "Android" },
            { icon: faJs, name: "JavaScript" },
            { icon: faNodeJs, name: "Node.js" }
          ],
          timeline: [
            { date: "Mar 2024", milestone: "Added social features" },
            { date: "Feb 2024", milestone: "Implemented workout tracking" }
          ],
          screenshots: [
            "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000"
          ]
        },
        {
          title: "Social Media App",
          image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000",
          githubLink: "https://github.com/TanmayDaga/social-app",
          description: "A feature-rich social media application with real-time messaging, post sharing, and media management.",
          techStack: [
            { icon: faAndroid, name: "Android" },
            { icon: faNodeJs, name: "Node.js" },
            { icon: faAws, name: "AWS" }
          ],
          timeline: [
            { date: "Mar 2024", milestone: "Added real-time messaging" },
            { date: "Feb 2024", milestone: "Implemented post sharing" }
          ],
          screenshots: [
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000"
          ]
        }
      ]
    }
  ];
  