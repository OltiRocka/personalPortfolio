import React, {useState, useEffect}from "react";
import "./Style.css";
import me from "../assets/me.jpeg";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { Container } from "react-bootstrap";
import GithubCorner from "react-github-corner";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const [text, setText] = useState("");
  const message = "Hi! I'm Olti"; // type your text here
  let currentText = "";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      currentText += message[index];
      setText(currentText);
      index++;
      if (index === message.length) {
        clearInterval(timer);
      }
    }, 70); // change 70 for speed

    // Cleanup function to clear interval if component unmounts while typing animation is happening
    return () => clearInterval(timer);
  }, []); // Empty dependency array so effect only runs on mount

  return (
    <Container id="home-container">
      <div className="first-block">
        <div className="text-innpmtroduction">
          <h2 className="introduction-text">{text}</h2>
          <p>Data Scientist and ML Engineer</p>
          <div className="socials">
          <a href="https://github.com/OltiRocka" className="github"target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png"
            />
          </a>
          <a href="https://www.linkedin.com/in/olti-roka-10685522a/" className="linked-in" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
            />
          </a>
          <a href="https://www.kaggle.com/oltirocka" className="kaggle" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9507/9507512.png"
            />
          </a>
          {/* <a href="https://drive.google.com/uc?id=1Fe1lzb1B7TtxLQLWuJpEDKpckix5O5m1&export=download" download>
            <img src="   https://cdn-icons-png.flaticon.com/512/1758/1758140.png "/>  
          </a> */}

        </div>
        </div>
        <img src={me} className="me-image" />
      </div>
      <GithubCorner className="git-cat" href="https://github.com/OltiRocka/personalPortfolio" target="_blank"/>
    </Container>
  );
};

export default Home;
