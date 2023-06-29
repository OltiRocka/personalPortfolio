import './App.css';
import React from 'react';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import History from './components/history/History';
function App() {
  return (
    <div className="App">
      <Home/>
      <Skills/>
      <History/>
    </div>
  );
}

export default App;
