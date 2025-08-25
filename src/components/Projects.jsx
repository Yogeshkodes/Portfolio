import React from "react";
import { useState } from "react";
import ProjectCard from "../features/ProjectsCard";
import ProjectModal from "../features/ProjectModal";

import { ProjectImages } from "../utils/imports";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  const projects = [
    {
      title: "OmniFood",
      description:
        "A modern and responsive food ordering website built using HTML, CSS, and JavaScript. The project focuses on clean UI design, mobile responsiveness.",
      overview:
        "A modern and responsive food ordering website built using HTML, CSS, and JavaScript. The project focuses on clean UI design, mobile responsiveness, and smooth user interactions to provide a professional landing-page experience.",
      imageUrl: ProjectImages.OmniFood.main,
      galleryImages: ProjectImages.OmniFood.gallery || [],
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      demoUrl: "https://my-first-learning-project.vercel.app",
      githubUrl:
        "https://github.com/Yogeshkodes/My-first-learning-project/tree/main/09-Omnifood-Optimizations",
      learnings: [
        "Gained hands-on experience with responsive web design using CSS Grid and Flexbox.",
        "Improved skills in writing clean, reusable, and structured HTML & CSS code.",
        "Learned how to enhance user experience with smooth scrolling and JavaScript-based interactions.",
        "Practiced following a design mockup and converting it into a real, functional website.",
        "Understood importance of mobile-first approach in modern web development.",
      ],
    },
    {
      title: "Portfolio Site",
      description: "My personal portfolio showcasing projects and skills.",
      imageUrl: "https://example.com/portfolio-screenshot.jpg",
      tags: ["React", "Tailwind CSS"],
      demoUrl: "https://yourportfolio.com",
      githubUrl: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Portfolio Site",
      description: "My personal portfolio showcasing projects and skills.",
      imageUrl: "https://example.com/portfolio-screenshot.jpg",
      tags: ["React", "Tailwind CSS"],
      demoUrl: "https://yourportfolio.com",
      githubUrl: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Portfolio Site",
      description: "My personal portfolio showcasing projects and skills.",
      imageUrl: "https://example.com/portfolio-screenshot.jpg",
      tags: ["React", "Tailwind CSS"],
      demoUrl: "https://yourportfolio.com",
      githubUrl: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Portfolio Site",
      description: "My personal portfolio showcasing projects and skills.",
      imageUrl: "https://example.com/portfolio-screenshot.jpg",
      tags: ["React", "Tailwind CSS"],
      demoUrl: "https://yourportfolio.com",
      githubUrl: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Portfolio Site",
      description: "My personal portfolio showcasing projects and skills.",
      imageUrl: "https://example.com/portfolio-screenshot.jpg",
      tags: ["React", "Tailwind CSS"],
      demoUrl: "https://yourportfolio.com",
      githubUrl: "https://github.com/yourusername/portfolio",
    },
    // Add more projects...
  ];

  return (
    <>
      <h2 className="text-2xl md:text-3xl mt-15 mb-8">Projects</h2>
      <section className="p-5 bg-white rounded-md">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                onViewDetails={() => openModal(project)}
              />
            ))}
          </div>
        </div>
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      </section>
    </>
  );
};

export default Projects;
