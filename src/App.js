import './App.css';
import React from 'react';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Home/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
