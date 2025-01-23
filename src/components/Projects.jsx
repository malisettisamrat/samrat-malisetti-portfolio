import React from "react";
import dcmh from "../assets/dcmh.avif";
import edtech from "../assets/edtech.jpg";
import reactdom from "../assets/dom.png";
import tracker from "../assets/tracker.avif";
import paymentApp from "../assets/paymentapp.jpg";
import analytics from "../assets/analytics.png";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "EdTech Learning Platform - Data Science",
    description:
      "This project provides a comprehensive roadmap for learning data science, covering essential topics and guiding users through a structured learning path. It offers an intuitive and visually engaging interface to help users navigate their data science journey effectively.",
    technologies: [
      "NextJs",
      "TypeScript",
      "TailwindCSS",
      "Docker",
      "tRPC",
      "MonoRepo",
    ],
    image: edtech,
    link: "https://github.com/malisettisamrat/data-science-roadmap",
  },
  {
    title: "Payment App",
    description:
      "The Payment App is a full-stack application designed to streamline payment processing, featuring secure transactions and a user-friendly interface. Built using ReactJS for the frontend, Node.js and Express for the backend, and MongoDB for the database, it incorporates robust authentication and efficient API integrations to deliver a seamless payment experience.",
    technologies: [
      "ReactJs",
      "TailwindCSS",
      "NodeJs",
      "Express",
      "MongoDB",
      "Vercel",
    ],
    image: paymentApp,
    link: "https://github.com/malisettisamrat/payment-app",
  },
  {
    title: "DCMH - Mobile App",
    description:
      "DCMH-Mobile is a cross-platform mobile app developed for Davis Community Meals & Housing (DCMH) to streamline inventory and donation workflows. Built using React Native, TypeScript, and Supabase, the app features real-time notifications for low-stock items, improving operational efficiency and community support. Developed during HackDavis 2024, the app demonstrates innovation and rapid prototyping in addressing non-profit needs.",
    technologies: [
      "React Native",
      "TypeScript",
      "Supabase",
      "Expo",
      "Git",
      "XCode",
    ],
    image: dcmh,
    link: "https://github.com/MaheshtheDev/DCMH-Mobile",
  },
  {
    title: "Issue Tracker",
    description:
      "The Issue Tracker Application is a full-stack project designed to manage and track issues efficiently, providing features like issue categorization, prioritization, and status updates. Built using React, Node.js, Express, and MongoDB, it follows clean architecture principles and ensures seamless API integration for a smooth user experience.",
    technologies: [
      "React",
      "NodeJs",
      "TypeScript",
      "RadixUI",
      "Express",
      "MongoDB",
      "Git",
    ],
    image: tracker,
    link: "https://github.com/malisettisamrat/issue-tracking-system",
  },
  {
    title: "Analytical Dashboard - Media",
    description:
      "Developed an analytics dashboard using Next.js and React, hosted on Vercel, to visualize and interpret complex data using libraries recharts and Chart.js. The project focuses on delivering real-time insights through interactive visualizations and a responsive design, enhancing decision-making for users. Integrated efficient data handling and visualization techniques to optimize performance and usability.",
    technologies: [
      "React",
      "NextJs",
      "TypeScript",
      "ShadcnUI",
      "React Hook Forms",
      "TailwindCSS",
      "Zod",
    ],
    image: analytics,
    link: "https://github.com/malisettisamrat/analytics-dashboard",
  },
  {
    title: "ReactDOM re-render Implementation",
    description:
      "This project, React DOM Implementation, provides a custom implementation of React's reconciliation algorithm and virtual DOM concepts, showcasing the core principles of React's rendering process. Built using JavaScript, it includes features like fiber-based updates and efficient DOM manipulation, offering a hands-on exploration of React's inner workings.",
    technologies: ["Vanilla JavaScript", "ES6", "React"],
    image: reactdom,
    link: "https://github.com/malisettisamrat/react-dom-implementation",
  },
];

export const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                className="mb-6 rounded"
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="flex mb-2 gap-2 items-center">
                <h6 className="font-semibold">{project.title}</h6>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="cursor-pointer" size={16} />
                </a>
              </div>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 text-sm font-medium text-purple-400"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
