import React from "react";

const ExperienceCard = ({
  company = "Company Name",
  location = "Location",
  date = "Date Range",
  role = "Your Role",
  description = "Brief description of responsibilities and achievements.",
}) => {
  return (
    <div className="rounded-lg shadow-sm  border-[#EFF0F3] border bg-[#F9FAFB] p-4 mb-4">
      {" "}
      {/* Light blue bg, rounded, minimal padding */}
      <div className="flex justify-between items-baseline">
        <h3 className="font-semibold text-lg text-gray-800">
          {company} <span className="text-gray-500 text-sm">{location}</span>
        </h3>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <h4 className="font-medium text-gray-700 mt-1">{role}</h4>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
};

export default ExperienceCard;
