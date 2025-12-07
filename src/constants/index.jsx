import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";
import { FaNodeJs, FaBootstrap, FaGithub, FaDocker } from "react-icons/fa";



import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
  RiCodeFill,
  RiGitRepositoryFill,
  RiCodeBoxLine,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  // { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "HII I'M balram",
  role: "Full Stack Web Developer",
  subheading:
    "I  am a full-stack Web Developer , I  trying to build efficient, scalable web applications. Not on the job hunt, but always curious about interesting projects.",
};



export const PROJECTS = [
  // {
  //   id: 1,
  //   title: "E-commerce Website ",
  //   description:
  //     " A fully featured E-commerce Website  ",
  //   techStack: ["React", "Node.js", "Express", "MongoDB"],
  //   imgSrc: project1,
  //   link: "https://example-ecommerce.com",
  // },
  // {
  //   id: 2,
  //   title: "",
  //   description:
  //     "",
  //   techStack: [],
  //   imgSrc: project2,
  //   link: "https://example-socialapp.com",
  // },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["React.js", "Tailwind CSS","Gsap"],
    imgSrc: project3,
    link: "",
  },
  {
    id: 4,
    title: "Wanderlust",
    description:
      " A fullstack website complete frontend and backend. Wanderlust is your ultimate travel companion, helping you explore, review, and share breathtaking destinations from around the world. Whether you're a traveler looking for hidden gems or an adventurer sharing your experiences, Wanderlust makes discovering new places easier than ever.",
    techStack: ["MERN","Bootstrap"],
    imgSrc: project4,
    link: "https://wanderlust-m4rl.onrender.com/signup",
  },
  {
    // id: 5,
    title: "NEW PROJECT",
    description:
      "Coming soon",
    techStack: [],
    imgSrc: project5,
    // link: "https://example-taskapp.com",
  },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
  //   techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
  //   imgSrc: project6,
  //   link: "https://example-learningplatform.com",
  // },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },{
    name: "Node.js",
    icon: <FaNodeJs size={40} color="#339933" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Terminal",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
  {
    name: "Express",
    icon: <RiCodeFill className="text-pink-400" />,
  },
   {
    name: "Git/GitHub",
    icon: <FaGithub size={40} color="#181717" />, // GitHub's dark gray
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={40} color="#7952B3" />,
  },
  {
    name: "Material-UI",
    // icon: <RiNodeTree className="text-green-500" />,
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="Material UI" width={40} />,
  },
  {
    name: "Docker",
    icon: <FaDocker size={40} color="#2496ED" />, 
  },
    {
    name: "Python",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width={40} />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description:
      "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
    techStack: ["Javascript", "React.js", "Next.js", "MongoDB"],
  },
  {
    yearRange: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description:
      "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
    techStack: ["HTML", "CSS", "Vue.js", "MySQL"],
  },
  {
    yearRange: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description:
      "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.",
    techStack: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    yearRange: "2020 - 2021",
    role: "Software Engineer",
    company: "PayPal",
    description:
      "Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.",
    techStack: ["Ruby", "Rails", "PHP", "SQLite"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science (Cyber Security)",
    institution: "Rungta college of engineering and technology",
    duration: "2024 - 2028",
    description:
      "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development.",
  },
  {
    id: 2,
    degree: "CLASS 12th",
    institution: " GIRIDIH(+2) HIGH SCHOOL GIRIDIH",
    duration: "2022 - 2024",
    description:
      "",
  },
  {
    id: 3,
    degree: "CLASS 10th",
    institution: "DAV PUBLIC SCHOOL ",
    duration: "2013-2022",
    description:
      "",
  },
];

export const TESTIMONIAL  = {
  name: "",
  title: "",
  quote:
    "Working with Balram was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};




