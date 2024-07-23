"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li> Languages & Tools: Python, Java, Go,  Ruby, Objective-C, SQL, C, C++, PyTorch, scikit-learn, NumPy, Pandas, LangChain 
</li>
        <li>Web Technologies: HTML, CSS, React JS, Django, Flask, Node.js, Angular, jQuery, Bootstrap, Express.js, GraphQL, RESTful APIs</li>
        <li>Other: Git, Postman API, Google Cloud, Power BI, Azure AI, JIRA, Confluence, Agile, Scrum </li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Georgia State University: Bachelors of Science in Computer Science</li>
        <li>GPA: 3.89, Magna Cum Laude</li>
        <li> Achievements: Outstanding Service Award by CS Department, Society of Women Engineers 2023 Scholar, STEM Academic Achievement Award, Presidential Scholar </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>DeepLearning.AI: Generative AI with LLMs</li>
        <li></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/graphic.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am passionate about applying my technical skills and knowledge to develop 
            innovative solutions and products. I am particularly interested in the areas of AI/ML. As an advocate for creating more representation 
            of women in tech, I served as the President of Girls Who Code, 
            inspiring and mentoring young women looking to pursue careers in technology.
            I am committed to creating a more diverse and inclusive tech industry and
            am excited to continue making a positive impact. 
            I am always open to new opportunities and learning experiences 
            so don't hesitate to reach out!.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;