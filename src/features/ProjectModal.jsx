import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper imports
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Modules for nav, dots, auto

// Import Swiper styles (if not in global CSS)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  const skills = [
    { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "React.js", icon: "https://skillicons.dev/icons?i=react" },
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
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      {/* Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-2xl custom-scrollbar pr-5 transform overflow-auto rounded-lg max-h-[80vh] bg-white p-6 text-left align-middle shadow-xl transition-all">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            aria-label="Close modal"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {/* Header with Image */}
          <div className="mb-6 ">
            {/* Gallery as Carousel */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <section className="bg-neutral-100  px-2 rounded-lg">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]} // Enable features
                  spaceBetween={10} // Subtle spacing
                  slidesPerView={1} // One slide at a time for focus
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3s
                  loop // Infinite loop for smooth experience
                  className="rounded-lg overflow-hidden " // Match your rounded style
                >
                  {project.galleryImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt={`Gallery slide ${index + 1}`}
                        className="w-full h-64 object-contain rounded-lg" // Match hero image style
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </section>
            )}
            <div className="flex items-center justify-between">
              <DialogTitle
                as="h2"
                className="mt-4 text-2xl font-bold text-gray-700"
              >
                {project.title}
              </DialogTitle>

              <div className="flex mt-4 gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-300 text-gray-700 font-medium py-1 px-2 rounded hover:bg-gray-400 transition-colors h-[50%]"
                >
                  GitHub
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 bg-neutral-600 font-medium  px-2 py-1 rounded hover:bg-gray-500 h-[50%]"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">{project.description}</p>{" "}
            {/* Short desc as subtitle */}
          </div>

          {/* Detailed Sections */}
          <div className="space-y-8">
            {/* Full Description */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                Overview
              </h3>
              <p className="text-gray-700">
                {project.overview || "Detailed project overview goes here."}
              </p>
            </section>

            {/* Tech Stack */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                Tech Stack & Skills
              </h3>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => {
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
              </ul>
            </section>

            {/* Challenges & Solutions */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Challenges & Solutions
              </h3>
              <ul className="text-gray-700">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="mb-2">
                    - {learning}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ProjectModal;
