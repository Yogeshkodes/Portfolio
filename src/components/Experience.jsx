import React from "react";
import ExperienceCard from "../features/ExperienceCard"; // Adjust path

const Experience = () => {
  const experiences = [
    {
      company: "Wipro",
      location: "Pune",
      date: "Sep 2024 - Apr 2025",
      role: "L1 React Developer",
      description: [
        "Developed and maintained internal web applications using React.js.",
        "Built reusable and scalable UI components to improve development efficiency.",
        "Collaborated with product teams to design user-friendly features and improve overall UX.",
        "Optimized front-end performance, reducing load times and improving responsiveness.",
        "Integrated APIs and worked on debugging and fixing UI-related issues.",
      ],
    },

    {
      company: "Wipro - Client: RSA",
      location: "Hybrid",
      date: "Sep 2023 - March 2024",
      role: "Major Incident Manager",
      description: [
        "Led incident and problem management processes aligned with ITIL standards.",
        "Worked closely with cross-functional teams including Networking, DB2, and Windows to drive quick resolutions.",
        "Coordinated escalations with technical teams and ensured proper documentation of issues.",
        "Monitored SLAs and KPIs to track operational efficiency and compliance.",
        "Identified process gaps and recommended improvements to streamline IT operations.",
      ],
    },
    {
      company: "Wipro - Client: Liverpool",
      location: "Hybrid",
      date: "Feb 2022 - June 2023",
      role: "Cloud Administrator",
      description: [
        "Managed VMware vSphere and VMware Horizon infrastructure supporting 1200+ virtual desktops (VDIs).",
        "Performed daily health checks, monitored system performance, and ensured high availability of services.",
        "Diagnosed and resolved end-user issues related to VDI machines, reducing downtime and improving user experience.",
        "Collaborated with team members to implement best practices for system stability and security.",
        "Generated reports on VDI performance and suggested improvements for infrastructure optimization.",
      ],
    },
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
