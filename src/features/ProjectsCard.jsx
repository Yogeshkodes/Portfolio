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
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-2xs  border-[#EFF0F3] border bg-[#F9FAFB] transition-transform duration-300 hover:scale-101 hover:shadow-lg">
      {/* Project Image */}
      <div className="flex items-center justify-center h-40">
        <img
          className="w-70%  object-cover"
          src={imageUrl}
          alt={`${title} screenshot`}
        />
        dfmsdk
      </div>

      {/* Content Section */}
      <div className="px-6 py-4">
        <div className="h-30">
          <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 text-base mb-4">{description}</p>
        </div>

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

        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white font-semibold py-1 px-2 rounded hover:bg-blue-600 transition-colors"
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
