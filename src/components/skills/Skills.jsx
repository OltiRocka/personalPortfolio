import React from 'react'
import rust from '../assets/skills/rust.png'
import python from '../assets/skills/python.svg'
import machLea from '../assets/skills/brainstorming.png'
import webSc from '../assets/skills/data-mining.png'
import visualize from '../assets/skills/bar-chart.png'
import api from '../assets/skills/api.png'
import auto from '../assets/skills/bot.png'
import genAi from '../assets/skills/artificial-intelligence.png'
import './skills.css'
const Skills = () => {
  const tools = [
    { img: python, name: 'Python' },
    { img: rust, name: 'Rust' },
    { img: machLea, name: 'Machine Learning' },
    { img: webSc, name: 'WebScraping' },
      { img: visualize, name: 'Data Visualising' },
      { img: api, name: 'APIs' },
      { img: auto, name: 'Automation' },
      { img: genAi, name: 'Generative AI' }
  ]
  return (
    <div className="tools">
    <h2 className="text">Services</h2>
    <div className="tool-container">
        {tools.slice(0,4).map((tool, index) => (
            <div key={index} className="tool">
            <img src={tool.img} alt={tool.name} />
            <p>{tool.name}</p>
          </div>
        ))}
</div>
      <div className="tool-container">
        {tools.slice(-4).map((tool, index) => (
            <div key={index} className="tool">
            <img src={tool.img} alt={tool.name} />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;