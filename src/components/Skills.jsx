import { div } from "motion/react-client";
import { useState } from "react";

function Skills() {
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
    <div>
      <h2 className="text-2xl md:text-3xl mt-10 md:mt-15 mb-8">
        Skills & Technologies
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <div key={i}>
            <span className="text-gray-200 bg-neutral-600 px-3 py-1 rounded-md w-full transition duration-300 flex items-center gap-2 hover:bg-neutral-500">
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                className="w-5 h-5"
              />
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
