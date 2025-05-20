import tatparya from './Tatparya.png';
import APCS from './APCS.png';
import neon_chat from './NeonChat.png'
import linkup from './Link-Up.png';
import repohub from './Repo-hub.png';

const mywork_data = [
  {
    w_no: 1,
    title: "Automated Transparent College System",
    description: "A comprehensive full-stack web application developed to automate and streamline various college administrative functions. The system includes modules for online student elections with institutional email authentication, complaint registration, leave and health notifications, campus facility booking, and a structured approval workflow. Real-time budget tracking features ensure transparency in club and departmental spending. Designed with a focus on improving efficiency, security, and accessibility for both students and faculty.",
    w_img: APCS,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    live: "https://hackfusion-project.vercel.app"
  },
  {
    w_no: 2,
    title: "Tatparya – AI SaaS PDF Summarizer",
    description: "Tatparya is a production-ready AI-powered SaaS platform that generates structured visual summaries of PDF documents using GPT-4 and LangChain. The application features secure user authentication via Clerk, subscription-based access with Stripe integration, and a clean, responsive UI built with TailwindCSS. The platform is optimized for SEO and server-side rendering using Next.js 15, delivering a seamless and efficient summarization experience to users.",
    w_img: tatparya,
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "LangChain", "GPT-4", "Clerk", "NeonDB", "Stripe"],
    live: "https://tatparya-ai.vercel.app"
  },
  {
    w_no: 3,
    title: "Neon Chat – AI-Powered Chat Application",
    description: "A modern real-time chat application integrating Socket.io for live messaging and Zustand for efficient state management. The app features an intelligent chatbot powered by the Gemini API, enhancing user engagement with AI responses. Designed with DaisyUI, it supports 30+ themes for a customizable and responsive user interface. Built as a full-stack solution with React, Node.js, and MongoDB, it offers both utility and interactivity.",
    w_img: neon_chat,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Zustand", "DaisyUI", "Gemini API"],
    live: "https://neon-chat.onrender.com"
  },
  {
    w_no: 4,
    title: "LinkUp",
    description:
      "LinkUp is a modern social media platform built using Next.js, Prisma, PostgreSQL, and Clerk for authentication, with a sleek UI powered by ShadCN. It allows users to create and like posts, follow other users, comment and reply, and receive real-time notifications for interactions. The platform ensures seamless authentication, a responsive interface, and efficient data handling with Prisma and PostgreSQL. With a focus on engagement and user experience, LinkUp delivers a dynamic and interactive social networking environment.",
    w_img: linkup,
    tech: ["React", "Next Js", "MongoDB", "JavaScript", "Tailwind", "Clerk", "Shadcn", "Postgress SQL", "Prisma"],
    github: "https://github.com/Tanmayraut16/LinkUp",
  },
  {
    w_no: 5,
    title: "RepoHub",
    description:
      "RepoHub is a web application that allows users to explore GitHub repositories effortlessly. It leverages the GitHub API to fetch repositories of various users, enabling seamless discovery and interaction. Users can search for repositories, like their favorites, and access key repository details in a user-friendly interface.",
    w_img: repohub,
    tech: ["React", "MongoDB", "JavaScript", "NodeJs", "Express", "PassportJs"],
    github: "https://github.com/Tanmayraut16/RepoHub",
  },
  
];

export default mywork_data;
