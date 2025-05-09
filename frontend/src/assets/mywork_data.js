import project1_img from "./project_1.svg";
import project2_img from "./project_2.svg";
import project3_img from "./project_3.svg";
import project4_img from "./project_4.svg";
import project5_img from "./project_5.svg";
import project6_img from "./project_6.svg";

const mywork_data = [
  {
    w_no: 1,
    title: "Automated College System",
    description:
      "Designed and developed a web-based platform to enhance transparency and efficiency in college administrative processes. Key features include an online student election system, automated health and leave notifications, campus facility booking, a structured approval workflow, anonymous complaint handling, and real-time budget tracking. Ensured secure access via college email authentication, improving accountability and accessibility for students and faculty. The system reduces manual workload, streamlines operations, and fosters fairness in decision-making.",
    w_img: project5_img,
    tech: ["React", "NodeJs", "Express", "MongoDB", "Tailwind CSS", "Googe Api Vision", "Cloudinary"],
    github: "https://github.com/akashm011/hackfusion-project",
    live: "#",
  },
  {
    w_no: 2,
    title: "RepoHub",
    description:
      "RepoHub is a web application that allows users to explore GitHub repositories effortlessly. It leverages the GitHub API to fetch repositories of various users, enabling seamless discovery and interaction. Users can search for repositories, like their favorites, and access key repository details in a user-friendly interface.",
    w_img: project1_img,
    tech: ["React", "MongoDB", "JavaScript", "NodeJs", "Express", "PassportJs"],
    github: "https://github.com/Tanmayraut16/RepoHub",
    live: "https://project1.example.com",
  },
  {
    w_no: 3,
    title: "LinkUp",
    description:
      "TLinkUp is a modern social media platform built using Next.js, Prisma, PostgreSQL, and Clerk for authentication, with a sleek UI powered by ShadCN. It allows users to create and like posts, follow other users, comment and reply, and receive real-time notifications for interactions. The platform ensures seamless authentication, a responsive interface, and efficient data handling with Prisma and PostgreSQL. With a focus on engagement and user experience, LinkUp delivers a dynamic and interactive social networking environment.",
    w_img: project2_img,
    tech: ["React", "Next Js", "MongoDB", "JavaScript", "Tailwind", "Clerk", "Shadcn", "Postgress SQL", "Prisma"],
    github: "https://github.com/Tanmayraut16/LinkUp",
    live: "https://project2.example.com",
  },
  {
    w_no: 4,
    title: "Blog Website",
    description:
      "Blog Website is a modern, responsive platform built for creating, sharing, and exploring blogs. Users can write, edit, and publish blogs, engage with content through likes and comments, and follow their favorite authors.",
    w_img: project3_img,
    tech: ["React.js", "MySQL", "Tailwind CSS", "Node.js", "Express.js"],
    github: "https://github.com/user/project3",
    live: "https://project3.example.com",
  },
  {
    w_no: 5,
    title: "Chat Application",
    description:
      "A full-stack application with a React frontend and a Node.js backend. It includes authentication and real-time updates.",
    w_img: project4_img,
    tech: ["React", "Node.js", "Firebase", "Tailwind CSS", "Express.js"],
    github: "https://github.com/user/project4",
    live: "https://project4.example.com",
  },
  
];

export default mywork_data;
