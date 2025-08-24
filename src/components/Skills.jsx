import { div } from "motion/react-client";
import { useState, useEffect } from "react";

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = (skill, event) => {
    if (!isMobile) {
      setHoveredSkill(skill);
      const rect = event.target.getBoundingClientRect();
      setMousePosition({
        x: rect.left + rect.width / 2,
        y: rect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredSkill(null);
    }
  };

  const skills = [
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
    { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
    { name: "VMware", icon: "https://skillicons.dev/icons?i=cloudflare" },
    {
      name: "TensorFlow (AI/ML)",
      icon: "https://skillicons.dev/icons?i=tensorflow",
    },
    { name: "Serverless", icon: "https://skillicons.dev/icons?i=aws" },
    { name: "Blockchain", icon: "https://skillicons.dev/icons?i=solidity" },
    { name: "Rust", icon: "https://skillicons.dev/icons?i=rust" },
    { name: "Quantum Tools", icon: "https://skillicons.dev/icons?i=python" },
  ];

  return (
    <div>
      <h2 className="text-2xl md:text-3xl mt-10 md:mt-15 mb-8">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <div key={i}>
            <span
              className={`text-gray-200 bg-neutral-700 px-3 py-1 rounded-md w-full transition duration-300 ${
                isMobile
                  ? "flex items-center gap-2"
                  : "hover:bg-neutral-500 cursor-pointer"
              }`}
              onMouseEnter={(e) => handleMouseEnter(skill, e)}
              onMouseLeave={handleMouseLeave}
            >
              {isMobile && (
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  className="w-5 h-5"
                />
              )}
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Tooltip - Desktop only */}
      {!isMobile && hoveredSkill && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: mousePosition.x - 30,
            top: mousePosition.y - 70,
          }}
        >
          <div className="bg-white bg-opacity-90 rounded-lg p-2 shadow-lg">
            <img
              src={hoveredSkill.icon}
              alt={`${hoveredSkill.name} logo`}
              className="w-10 h-10"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;
