"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "Information Technology Intern- AI & Product",
    description: "Elevance Health",
    image: "/images/EH.png",
    tag: ["Experience"],
    gitUrl: "",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "AI/ML Intern",
    description: "ModelN",
    image: "/images/modelN.jpeg",
    tag: ["Experience"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Tech Consulting Intern",
    description: "Ernst & Young",
    image: "/images/ey.png",
    tag: ["Experience"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    description: "NCR",
    image: "/images/ncr.png",
    tag: ["Experience"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Founder & Director",
    description: "HackHers",
    image: "/images/hackhers.png",
    tag: ["Experience"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "President",
    description: "Girls Who Code",
    image: "/images/gwc.png",
    tag: ["Experience"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Grade Insight",
    description: "AI-Powered Essay Insight Generator ",
    image: "/images/grade.png",
    tag: ["Projects"],
    gitUrl: "https://github.com/YulduzM1/aiATL",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Culinary Cache",
    description: "Food Saver Full-Stack Application",
    image: "/images/culinary.png",
    tag: ["Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Aid-Ed",
    description: "First Response App for College Students",
    image: "/images/Aid-Ed.png",
    tag: ["Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Lexical-Syntax Analyzer",
    description: "First Response App for College Students",
    image: "/images/lexical.jpeg",
    tag: ["Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Campus Bites",
    description: "Yelp curated for Georgia State Students",
    image: "/images/campusbites.png",
    tag: ["Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "",
    description: "Yelp curated for Georgia State Students",
    image: "/images/campusbites.png",
    tag: ["Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Experience");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="experience">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Experience & Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Experience"
          isSelected={tag === "Experience"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Projects"
          isSelected={tag === "Projects"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;