import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "./History.css";

const History = () => {
  const events = [
    {
      type: "work",
      title: "MetDaan - AI Analyst",
      description: "MetDaan Media \n Apr.2023 - Ongoing \n TensorFlow, PyTorch, Diffusers,\n FastAPI, PyQT6",
      url:'https://metdaan.media'
    },
    {
      type: "work",
      title: "Banka Ekonomike - MIS & Financial Controlling",
      description: "Banka Ekonomike SH,A \n Apr.2022 - Apr.2023\nPandas, OpenPyXL, PyTorch, SQL,\n AWS, Azure and PowerBI",
      url: "https://bekonomike.com/en/Fillimi"
    },
    {
      type: "academic",
      title: "MicroMasters - Statistics and Data Science",
      description: "MIT \n Oct.2023 - Ongoing\nProbability Theory, Statistics, Data Analytics\nand Machine Learning",
      url:"https://micromasters.mit.edu/ds/"
    },
    {
      type: "academic",
      title: "BSc - Financial Mathematics",
      description: "University of Prishtina\nOct.2020 - Ongoing\nAdvanced Mathematics, Advanced Finance\n and Advanced CompSci",
      url:"https://uni-pr.edu/page.aspx?id=1,1"
    }
    // Add more events as necessary
  ];
  const descriptionRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  }

  const handleMouseOut = () => {
    setHoveredIndex(null);
  }

  return (
    <div className="history">
      <h1 className="history-header">Professional History</h1>
      <div className="timeline">
        {events.map((event, index) => (
          <div 
            key={index} 
            className={`history-event ${index % 2 === 0 ? "left" : "right"}`} 
            style={{marginBottom: hoveredIndex === index ? `calc( 4% + ${descriptionRefs.current[index].clientHeight}px)` : '5%'}}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          >
            <div className="history-icon">
              <FontAwesomeIcon
                icon={event.type === "work" ? faBriefcase : faGraduationCap}
                style={{ color: "#F4EEE0" }}
              />
            </div>
            <div className="history-content">
            <h2 className="history-title">
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                  {event.title.split(" - ")[0]}
                </a> - {event.title.split(" - ")[1]}
              </h2>
              <p className="history-description" ref={el => descriptionRefs.current[index] = el}>
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;