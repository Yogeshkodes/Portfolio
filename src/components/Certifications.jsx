import React from "react";

function Certifications() {
  const Certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      date: "2023",
      issuer: "Amazon Web Services",
    },
    {
      name: "Full Stack Development",
      date: "2025",
      issuer: "Chai and Code BootCamp",
    },
    {
      name: "Microsoft Certified: AZ-900 ",
      date: "2023",
      issuer: "Microsoft",
    },
  ];
  return (
    <div>
      <h2 className="text-2xl md:text-3xl mt-10 md:mt-15 mb-8">
        Certifications
      </h2>
      <ul className="list-disc ml-5">
        {Certifications.map((cert, index) => (
          <li key={index} className="mb-2 ">
            <span className="font-semibold">{cert.name}</span> - {cert.date} (
            {cert.issuer})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certifications;
