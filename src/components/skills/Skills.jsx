import React from 'react'
import rust from '../assets/rust.png'
import python from '../assets/python.svg'
import machLea from '../assets/brainstorming.png'
import webSc from '../assets/data-mining.png'
import visualize from '../assets/bar-chart.png'
import api from '../assets/api.png'
import auto from '../assets/bot.png'
import genAi from '../assets/artificial-intelligence.png'
import './skills.css'
const Skills = () => {
    const tools_1 = [
        { img: python, name: 'Python' },
        { img: rust, name: 'Rust' },
        { img: machLea, name: 'Machine Learning' },
        { img: webSc, name: 'WebScraping' }
      ];
      const tools_2 = [
        { img: visualize, name: 'Data Visualising' },
        { img: api, name: 'FastAPI' },
        { img: auto, name: 'Automation' },
        { img: genAi, name: 'Generative AI' }
      ];
  return (
    
    <div className="tools">
        <h2 className="text">Tools I use</h2>
        <div className="container">
        {tools_1.map((tool, index) => (
          <div key={index} className="tool">
            <img src={tool.img} alt={tool.name} />
            <p>{tool.name}</p>
          </div>
        ))}
        </div>
        
        <div className="container">
        {tools_2.map((tool, index) => (
          <div key={index} className="tool">
            <img src={tool.img} alt={tool.name} />
            <p>{tool.name}</p>
          </div>
        ))}
        </div>
      </div>
  )
}

export default Skills