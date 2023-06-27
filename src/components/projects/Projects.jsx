import React from 'react'
import './Projects.css'
import project_1 from '../assets/projects/project_1.png'
import project_2 from '../assets/projects/project_2.png'
import project_3 from '../assets/projects/project_3.png'
import project_4 from '../assets/projects/project_4.png'

const Projects = () => {
    const   projects = [
        { img: project_1, name: 'Project One' , url:'http://example.com/'},
        { img: project_2, name: 'Project Two' , url:'http://example.com/'},
        { img: project_3, name: 'Project Three' , url:'http://example.com/'},
        { img: project_4, name: 'Project Four' , url:'http://example.com/'}
      ];
  return (
    <div className="projects-container">
        <h2 className="text">Projects</h2>
        <div className="projects">
        {projects.map((project, index) => (
          <a key={index} className="project" href={project.url}>
            <img src={project.img} alt={project.name} />
            <p>{project.name}</p>
          </a>
        ))}
        </div>

    </div>
  )
}

export default Projects