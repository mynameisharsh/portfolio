import { tatvasoft } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  chakraui,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  antdesign,
  webflow,
  zoom,
  auth,
  risk
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: chakraui,
    name: "Chakra-UI",
    type: "Frontend",
  },
  {
    imageUrl: antdesign,
    name: "Ant Design",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: webflow,
    name: "WebFlow",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Tatvasoft | Ahmedabad (Remote)",
    icon: tatvasoft,
    iconBg: "#F1952166",
    date: "July 2023 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Boosted page indexing and user engagement through effective SEO strategies",
      "Participating in code reviews and providing constructive feedback to other developers",
      "Flexibly contributed to backend development as needed, showcasing adaptability across both front-end and backend tasks",
      "Worked with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability, and performance.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Tatvasoft | Ahmedabad (Remote)",
    icon: tatvasoft,
    iconBg: "#F1952166",
    date: "Oct 2020 - Jun 2023",
    points: [
      "Developed high performance customer facing applications using ReactJS, Redux Toolkit, React Hooks, React-Router, JavaScript, HTML5, CSS3, Bootstrap5, JQuery",
      "Maintained high-level expertise in React state management strategies",
      "Expertise usage of Git and JIRA as version control and tracking units",
      "Revised, modularized and updated old code bases to modern development standards, reducing operating costs, and improving functionality",
      "Updated old code bases to modern development standards, improving functionality",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: zoom,
    theme: "btn-back-blue",
    name: "Video Conference Application (Livedeo)",
    description:
      "Design and built professional enterprise-ready video conferencing app using Next.js 14, Stream, and Tailwind CSS. Application supports joining the meeting, creating the meeting, schedule a meeting, create a personal room, view previous and next meetings and view recordings.",
    link: "https://github.com/mynameisharsh/video-conference-app",
  },
  {
    iconUrl: auth,
    theme: "btn-back-green",
    name: "Auth Application",
    description:
      'Built own auth toolkit using the newest Next Auth v5 (Auth.js) with Two Factor Authentication (2FA), Forgot Password functionality, Email Verification functionality, Credential Login, OAuth (Google & Github) Login and much more.',
    link: "https://github.com/mynameisharsh/next-auth",
  },
  {
    iconUrl: risk,
    theme: "btn-back-red",
    name: "Risk Screening Platform",
    description:
      "Our project offers a comprehensive application for businesses, facilitating compliance and risk management. It scans entities against PEP sanctions lists and organizations against terrorism watchlists. Additionally, it provides advanced ID verification and KYB solutions. Our solution ensures regulatory adherence and risk mitigation for clients.",
  },
];
