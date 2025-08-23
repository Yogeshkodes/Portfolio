// import { BentoGridDemo } from "../features/bentogrid";

// function Projects() {
//   return (
//     <div>
//       <h2 className="text-3xl mt-15 mb-10">Projects</h2>
//       <BentoGridDemo />
//     </div>
//   );
// }

// export default Projects;

import React from "react";

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project.",
  imageUrl = "https://via.placeholder.com/400x200", // Fallback image
  tags = ["React", "Tailwind", "JavaScript"],
  demoUrl = "#",
  githubUrl = "#",
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Project Image */}
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={`${title} screenshot`}
      />

      {/* Content Section */}
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-base mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white font-semibold py-2 px-4 rounded hover:bg-gray-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
