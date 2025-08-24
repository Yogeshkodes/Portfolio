import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

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
          <div className="mb-6">
            <img
              src={project.imageUrl}
              alt={`${project.title} hero`}
              className="w-full h-64 object-cover rounded-lg"
            />
            <DialogTitle
              as="h2"
              className="mt-4 text-3xl font-bold text-gray-900"
            >
              {project.title}
            </DialogTitle>
            <p className="mt-2 text-lg text-gray-600">{project.description}</p>{" "}
            {/* Short desc as subtitle */}
          </div>

          {/* Detailed Sections */}
          <div className="space-y-8">
            {/* Full Description */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Overview
              </h3>
              <p className="text-gray-700">
                {project.fullDescription ||
                  "Detailed project overview goes here."}
              </p>
            </section>

            {/* Tech Stack */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Tech Stack
              </h3>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges & Solutions */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Challenges & Solutions
              </h3>
              <p className="text-gray-700">
                {project.challenges ||
                  "Describe key challenges and how they were overcome."}
              </p>
            </section>

            {/* Outcomes */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Outcomes
              </h3>
              <p className="text-gray-700">
                {project.outcomes ||
                  "Results, metrics, or learnings from the project."}
              </p>
            </section>

            {/* Gallery (Optional) */}
            {project.galleryImages && (
              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.galleryImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Links */}
            <section className="flex justify-end gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              >
                GitHub
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Live Demo
              </a>
            </section>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ProjectModal;
