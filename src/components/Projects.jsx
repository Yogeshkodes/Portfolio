import React from "react";
import { useState } from "react";
import ProjectCard from "../features/ProjectsCard";
import ProjectModal from "../features/ProjectModal";

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
      title: "E-Commerce App",
      description:
        "A full-stack online store with user authentication and payment integration.",
      imageUrl: "https://example.com/ecommerce-screenshot.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      demoUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/yourusername/ecommerce",
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
