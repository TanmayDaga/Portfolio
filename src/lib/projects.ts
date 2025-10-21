import { faCloud, faCode, faDatabase, faLeaf, faMobile, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faAndroid, faGithub, faReact, faNodeJs, faPython, faJs, faAws, faDocker, faCss3, faJava } from "@fortawesome/free-brands-svg-icons";

export interface Project {
  title: string;
  image: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  techStack: Array<{ icon: any; name: string }>;
  featured?: boolean;
  category: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    title: "Bio Lab Website",
    image: "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/webd/pyadav/img1.png?raw=true",
    description: "Research Lab Digital Platform for the Biology Lab of Institute showcasing research, publications, and academic contributions.",
    githubLink: "https://github.com/pankaj-iitj/Website/",
    liveLink: "http://home.iitj.ac.in/~pyadav",
    techStack: [
      { icon: faJs, name: "Next.js" },
      { icon: faCss3, name: "Tailwind CSS" },
      { icon: faDatabase, name: "Sanity CMS" }
    ],
    featured: true,
    category: "Web Development",
    screenshots: [
      "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/webd/pyadav/img1.png?raw=true",
      "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/webd/pyadav/img2.png?raw=true",
      "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/webd/pyadav/img3.png?raw=true"
    ]
  },
  {
    title: "InstiApp Backend",
    image: "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/webd/iitjinstiapp/img1.png?raw=true",
    description: "A large-scale modular Spring Boot backend for IIT Jodhpur’s institutional platform integrating OAuth2 authentication, JWT-based authorization, Cloudinary media handling, AWS S3 storage, and PostgreSQL persistence. Features 20+ services, 40+ repositories, 15+ controllers, async task execution, and Dockerized deployment with multi-environment configuration.",
    githubLink: "https://github.com/TanmayDaga/InstiApp-Backend",
    techStack: [
      { icon: faJava, name: "Java" },
      { icon: faLeaf, name: "Spring Boot" },
      { icon: faDatabase, name: "PostgreSQL" },
      { icon: faAws, name: "AWS S3" },
      { icon: faCloud, name: "Cloudinary" },
      { icon: faDocker, name: "Docker" }
    ],
    featured: true,
    category: "Backend Development",
    screenshots: []
  },
  {
    title: "Spacekart",
    image: "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/webd/spacekart/img2.png?raw=true",
    description: "A full-stack platform built with Spring Boot and React. Includes role-based access, bidding, proposals, comments, multimedia support with a complex schema of database consisting of over 14 entities.",
    githubLink: "https://github.com/TanmayDaga/Spacekart-Backend",
    techStack: [
      { icon: faJava, name: "Java" },
      { icon: faReact, name: "React" },
      { icon: faCss3, name: "Tailwind CSS" },
      { icon: faAws, name: "AWS" },
      { icon: faCloud, name: "Cloudinary" },
      { icon: faDatabase, name: "NeonDB" },
      { icon: faLeaf, name: "Spring Boot" }
    ],
    featured: true,
    category: "Web Development",
    screenshots: [
      "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/webd/spacekart/img1.png?raw=true",
      "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/webd/spacekart/img2.png?raw=true",
      "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/webd/spacekart/img3.png?raw=true",
      "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/webd/spacekart/img4.png?raw=true"
    ]
  },
  {
    title: "BedLinen",
    image: "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/webd/bedlinen/img1.png?raw=true",
    description: "BedLinen is a frontend project designed to serve as the user interface for a fully operational real business.",
    githubLink: "https://github.com/TanmayDaga/Bedlinen",
    liveLink: "https://bedlinen.vercel.app/",
    techStack: [
      { icon: faReact, name: "React" },
      { icon: faNodeJs, name: "Node.js" },
      { icon: faCss3, name: "Tailwind CSS" }
    ],
    featured: true,
    category: "Web Development",
    screenshots: [
      "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/webd/bedlinen/img1.png?raw=true"
    ]
  },


  {
    title: "2048 Game",
    image: "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/android/2048/img1.png?raw=true",
    description: "Classic 2048 puzzle game built as an Android app with Java.",
    githubLink: "https://github.com/TanmayDaga/android_2048",
    techStack: [
      { icon: faAndroid, name: "Android" },
      { icon: faJava, name: "Java" }
    ],
    featured: false,
    category: "Mobile Development",
    screenshots: [
      "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/android/2048/img1.png?raw=true"
    ]
  },
  {
    title: "Calculator",
    image: "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/android/calculator/img1.png?raw=true",
    description: "A simple calculator Android app built using Java.",
    githubLink: "https://github.com/TanmayDaga/MyAndroidProjects/tree/main/Calculator",
    techStack: [
      { icon: faAndroid, name: "Android" },
      { icon: faJava, name: "Java" }
    ],
    featured: false,
    category: "Mobile Development",
    screenshots: [
      "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/android/calculator/img1.png?raw=true"
    ]
  },
  {
    title: "News App",
    image: "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/android/news/img1.png?raw=true",
    description: "A simple Android news reader application.",
    githubLink: "https://github.com/TanmayDaga/MyAndroidProjects/tree/main/News",
    techStack: [
      { icon: faAndroid, name: "Android" },
      { icon: faJava, name: "Java" }
    ],
    featured: false,
    category: "Mobile Development",
    screenshots: [
      "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/android/news/img1.png?raw=true"
    ]
  },
  {
    title: "Unit Converter",
    image: "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/android/unitConverter/img1.png?raw=true",
    description: "An Android app to convert units across categories like length, weight, and temperature.",
    githubLink: "https://github.com/TanmayDaga/MyAndroidProjects/tree/main/UnitConverter",
    techStack: [
      { icon: faAndroid, name: "Android" },
      { icon: faJava, name: "Java" }
    ],
    featured: false,
    category: "Mobile Development",
    screenshots: [
      "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/android/unitConverter/img1.png?raw=true",
      "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/android/unitConverter/img2.png?raw=true"
    ]
  },
  {
    title: "Tic Tac Toe",
    image: "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/android/tic-tac-toe/image.png?raw=true",
    description: "A Tic Tac Toe Android game built using Java.",
    githubLink: "https://github.com/TanmayDaga/Android-TicTacToe",
    techStack: [
      { icon: faAndroid, name: "Android" },
      { icon: faJava, name: "Java" }
    ],
    featured: false,
    category: "Mobile Development",
    screenshots: [
      "https://github.com/TanmayDaga/Portfolio/blob/version-3/src/assets/projects/android/tic-tac-toe/image.png?raw=true"
    ]
  }
];
