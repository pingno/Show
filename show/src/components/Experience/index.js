import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      startDate: "2006",
      endDate: "2014",
      title: "Customer Service Representative",
      company: "Various Hospitality Establishments",
      description: "Handled customer inquiries and complaints with professionalism."
    },
    {
      id: 2,
      startDate: "2006",
      endDate: "2014",
      title: "Dancer",
      company: "Dallas Dance Community",
      description: "Engaged in various roles including student director and social media coordinator."
    },
    // Add more experiences as needed
  ];

  return (
    <div className="experience-container">
      <h3 className="section-title">Experience Timeline</h3>
      {experiences.map((experience) => (
        <div key={experience.id} className="experience-item">
          <div className="experience-content">
            <h4 className="experience-title">{experience.title}</h4>
            <p className="experience-company">{experience.company}</p>
            <p className="experience-description">{experience.description}</p>
          </div>
          <div className="experience-dates">
            <p className="experience-duration">{`${experience.startDate} - ${experience.endDate}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
