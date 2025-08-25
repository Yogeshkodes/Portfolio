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
      <div className="flex justify-between items-baseline mt-2 md:mt-0 ">
        <div className="flex items-center justify-center gap-1 mt-3">
          <h3 className="font-semibold text-sm md:text-lg text-gray-800">
            {company}{" "}
          </h3>
          <span className=" text-[8px] ml-2 bg-gray-500 text-white px-2 py-1 rounded">
            {location}
          </span>
        </div>
        <span className="text-gray-500 text-sm w-[25%]">{date}</span>
      </div>
      <h4 className="font-medium text-gray-700 mt-4 mb-3 md:mb-5">{role}</h4>
      <ul>
        {description.map((item, index) => (
          <li
            key={index}
            className="list-disc ml-5 mb-3 tracking-tight text-sm text-gray-500"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
