import './App.css';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import React, { useRef } from 'react';

const HomeWrapper = React.forwardRef((_, ref) => (
  <div ref={ref}>
    <Home/>
  </div>
));

const SkillsWrapper = React.forwardRef((_, ref) => (
  <div ref={ref}>
    <Skills/>
  </div>
));

const ProjectsWrapper = React.forwardRef((_, ref) => (
  <div ref={ref}>
    <Projects/>
  </div>
));


function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null)
  const sections = [homeRef, skillsRef,projectsRef];
  let currentSectionIndex = 0;


  const scrollHandler = (e) => {
    // if we're scrolling up, decrement currentSectionIndex, but stop at 0
    if (e.deltaY < 0) {
      currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
    }
    // if we're scrolling down, increment currentSectionIndex, but stop at sections.length - 1
    else {
      currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
    }

    // scroll to the current section
    sections[currentSectionIndex].current.scrollIntoView({ behavior: "smooth" });
  };

  
  return (
    <div className="App" onWheel={scrollHandler} onTouchMove={scrollHandler}>
      <HomeWrapper ref={homeRef} />
      <SkillsWrapper ref={skillsRef} />
      <ProjectsWrapper ref={projectsRef} />
    </div>
  );
}

export default App;
