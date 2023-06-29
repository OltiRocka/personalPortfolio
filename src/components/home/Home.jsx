import React, { useRef } from "react";
import "./Style.css";
import me from "../assets/me.jpeg";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Container } from "react-bootstrap";
const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Container id="home-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.1,
              },
            },
          },
          particles: {
            color: {
              value: "#F4EEE0",
            },
            links: {
              color: "#F4EEE0",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              bounce: false,
              random: true,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="first-block">
        <div className="text-introduction">
          <h2 className="introduction-text">Hi! I'm Olti</h2>
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
        </div>
        </div>
        <img src={me} className="me-image" />
      </div>
    </Container>
  );
};

export default Home;
