import React from "react";

const Timeline = () => {
  const events = [
    {
      date: "2021-09-01",
      title: "Started University",
      description: "Enrolled in Computer Science at XYZ University.",
    },
    {
      date: "2022-06-15",
      title: "Internship at ABC Corp",
      description: "Completed a summer internship at ABC Corporation.",
    },
    {
      date: "2023-01-10",
      title: "Joined OpenAI",
      description: "Started working at OpenAI as a Developer.",
    },
  ];

  return (
    <div className="container mx-auto my-10 p-5">
      <div className="relative border-l-2 border-gray-300">
        {events.map((event, index) => (
          <div key={index} className="mb-8 ml-4">
            <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full bg-blue-500"></div>
            <p className="text-sm text-gray-500">{event.date}</p>
            <h4 className="mb-1 text-lg font-semibold">{event.title}</h4>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
