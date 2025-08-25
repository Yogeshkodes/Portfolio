import React from "react";

const ProjectCard = ({
  isOpenModal,
  onViewDetails,
  title = "Project Title",
  description = "A brief description of the project.",
  imageUrl = "https://via.placeholder.com/400x200",
  tags = ["React", "Tailwind", "JavaScript"],
  demoUrl = "#",
  githubUrl = "#",
}) => {
  const skills = [
    { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
    { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
    { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
    { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
    { name: "Azure", icon: "https://skillicons.dev/icons?i=azure" },
    { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
    { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "Shadcn UI", icon: "https://skillicons.dev/icons?i=react" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
    { name: "VMware", icon: "https://skillicons.dev/icons?i=cloudflare" },
  ];

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-2xs  border-[#EFF0F3] border-0 bg-[#F9FAFB] transition-transform duration-300 hover:scale-101 hover:shadow-lg">
      {/* Project Image */}
      <div className="flex items-center justify-center h-40">
        <img
          className="w-70%  object-cover"
          src={imageUrl}
          alt={`${title} screenshot`}
        />
      </div>

      {/* Content Section */}
      <div className="px-6 py-4 flex flex-col h-75 gap-2">
        <div className="">
          <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 text-base mb-4">{description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => {
            const matchedSkill = skills.find((s) => s.name === tag);
            return matchedSkill ? (
              <li
                key={index}
                className="text-gray-200 bg-neutral-600 px-3 py-1 rounded-md text-[12px] transition duration-300 flex items-center gap-2 hover:bg-neutral-500"
              >
                <img
                  src={matchedSkill.icon}
                  alt={`${matchedSkill.name} logo`}
                  className="w-4 h-4"
                />
                {matchedSkill.name}
              </li>
            ) : (
              <li
                key={index}
                className="text-gray-200 bg-neutral-600 px-3 py-1 rounded-md text-[12px] transition duration-300 flex items-center gap-2 hover:bg-neutral-500"
              >
                {tag}
              </li>
            );
          })}
        </div>

        {/* Action Buttons */}

        <div className="flex justify-end ">
          <button
            className="bg-gray-300 text-gray-700 font-medium py-1 px-2 rounded hover:bg-gray-400 transition-colors"
            onClick={onViewDetails}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
