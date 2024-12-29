import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "Oct 2024 - Present",
    role: "Engineering Consultant",
    company: "GorgeousTV Inc.",
    description:
      "As an Engineering Consultant at GorgeousTV, I assessed and optimized GCP virtual machines for Azure migration using Azure Migrate, ensuring resource efficiency and seamless compatibility. I secured Kubernetes database connections with cloud-sql-proxy and implemented robust firewall rules in GCP to streamline migration planning. By mapping workloads and dependencies, I facilitated a structured and efficient migration process to Azure.",
    skills: [
      "React Native",
      "Expo",
      "NodeJs",
      "TypeScript",
      "GCP",
      "Kubernetes",
      "Azure",
    ],
  },
  {
    year: "Aug 2022 - Present",
    role: "OpenSource Contributor",
    company: "Freelance",
    description:
      "Contributed to projects like FiguringOut, SuperMemory, and Wordcorn by enhancing UI/UX, improving functionality, and optimizing performance. Collaborated with distributed teams to integrate APIs seamlessly and proposed codebase optimizations for better maintainability and scalability. Focused on improving application accessibility and reducing redundancy for a refined user experience.",
    skills: [
      "React",
      "NexJs",
      "NodeJs",
      "MongoDB",
      "TypeScript",
      "Postgres",
      "PrismaORM",
      "AWS",
      "Docker",
    ],
  },
  {
    year: "Oct 2021 - Juul 2022",
    role: "Software Engineer",
    company: "ZeMoSo Technologies",
    description:
      "Delivered high-quality features for the Field Squared app using Agile methodologies. Implemented dynamic form generation with JSON Schema, offline-first capabilities with RealmDB, and route-finding functionality with Google Maps API. Enhanced GraphQL middleware efficiency, reducing latency by 40%. Focused on creating scalable, user-centric solutions for field service operations.",
    skills: ["React Native", "Expo", "TypeScript", "GraphQL", "AWS", "XCode"],
  },
  {
    year: "Aug 2021 - Sep 2021",
    role: "Software Engineer Intern",
    company: "ZeMoSo Technologies",
    description:
      "Built a full-stack e-commerce application using Spring Boot and Thymeleaf, implementing CRUD operations and role-based authentication. Enhanced security and code quality using SonarQube, adhering to SOLID principles. Developed scalable backends with dependency injection and robust access control using Spring Security.",
    skills: [
      "Java",
      "JavaScript",
      "React",
      "Spring Boot",
      "Hibernate",
      "SQL",
      "Git",
    ],
  },
  {
    year: "Jan 2021 - Jun 2021",
    role: "Software Engineer",
    company: "KeeStep",
    description:
      "Architected and developed a College Management Application with ReactJS, NestJS, and MongoDB, creating RESTful APIs and role-based access control. Implemented real-time security protocols using WebSockets and Guards in NestJS. Focused on enhancing scalability and responsiveness through task scheduling and middleware design.",
    skills: [
      "React",
      "TypeScript",
      "NestJs",
      "Express",
      "MongoDB",
      "AWS",
      "Git",
    ],
  },
];

export const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="flex mb-4 text-neutral-400">
                {experience.description}
              </p>
              <div className="flex flex-wrap">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
