import './App.css';
import React from 'react';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import History from './components/history/History';
import Aboutme from './components/aboutme/Aboutme';
function App() {
  return (
    <div className="App">
      <Home/>
      <Skills/>
      <History/>
      <Aboutme/>
    </div>
  );
}

export default App;
