import React from "react";
import machLea from "../assets/skills/brainstorming.png";
import webSc from "../assets/skills/data-mining.png";
import visualize from "../assets/skills/bar-chart.png";
import api from "../assets/skills/api.png";
import auto from "../assets/skills/bot.png";
import genAi from "../assets/skills/artificial-intelligence.png";
import "./skills.css";
const Skills = () => {
  const tools = [
    // { img: python, name: 'Python' },
    // { img: rust, name: 'Rust' },
    {
      img: machLea,
      name: "Machine Learning",
      description: "TensorFlow or PyTorch for problem solutions.",
      url:"https://guthib.com"
    },
    {
      img: webSc,
      name: "Data Analytics",
      description: "Pandas, SciKit-Learn, NumPy.",
      url:"https://guthib.com"
    },
    {
      img: visualize,
      name: "Data Visualising",
      description: "PowerBI and Tableau.",
      url:"https://guthib.com"
    },
    {
      img: api,
      name: "Backend Engineering",
      description: "FastAPI or Flask to develop backend solutions.",
      url:"https://guthib.com"
    },
    {
      img: auto,
      name: "Automation",
      description: "Selenium, BeautifulSoup, RobotFramework, PyautoGUI.",
      url:"https://guthib.com"
    },
    {
      img: genAi,
      name: "Generative AI",
      description: "Diffusers Framework and Diffusers Models.",
      url:"https://guthib.com"
    },
  ];
  return (
    <div className="tools">
      <p className="text">My Services</p>
      <div className="tool-container">
        {tools.slice(0, 3).map((tool, index) => (
          <div key={index} className="tool">
            <a className="image-container" href={tool.url} target="_blank">
              <img src={tool.img} alt={tool.name} />
            </a>
            <div className="service-text">
              <p className="name-service">{tool.name}</p>
              <p className="description-service">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="tool-container">
        {tools.slice(-3).map((tool, index) => (
          <div key={index} className="tool">
            <a className="image-container" href={tool.url} target="_blank">              
              <img src={tool.img} alt={tool.name} href={tool.url}/>
            </a>
            <div className="service-text">
              <p className="name-service">{tool.name}</p>
              <p className="description-service">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
