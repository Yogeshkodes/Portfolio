import React from "react";
import ExperienceCard from "../features/ExperienceCard"; // Adjust path

const Experience = () => {
  const experiences = [
    {
      company: "CrackedDevs",
      location: "US Remote",
      date: "May 2025 - Present",
      role: "Full Stack Engineer",
      description:
        "Building a application to the folks who love to customize thier subliminals.",
    },
    {
      company: "InterspectAl",
      location: "Freelance",
      date: "Nov 2024 - Present",
      role: "Full Stack Engineer",
      description:
        "Developed a real-time AI interview platform with live transcription, audio processing, and TTS.",
    },
    {
      company: "Team Tamizhan",
      location: "Remote",
      date: "Dec 2022 - May 2024",
      role: "Full Stack/DevOps Engineer",
      description:
        "Cutting-edge tools using React JS for dynamic interfaces, seamlessly integrated with GitLab for version control and CI/CD.",
    },
    // Add more...
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl mt-10 md:mt-15 mb-8">
          Work Experience
        </h2>
        <div className="space-y-4">
          {" "}
          {/* Vertical stack for timeline feel */}
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
