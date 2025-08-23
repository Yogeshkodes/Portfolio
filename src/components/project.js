import React from "react";
import ProjectCard from "./ProjectCard"; // Adjust path

const Projects = () => {
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
    // Add more projects...
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
