import React from "react";
import { styled } from "styled-components";
import ProjectFormat from "../components/ProjectContainer";
import HuggingFace from "../files/Hugging Face.png";
import Llama2 from "../files/Llama2.png";
import { Link } from "react-router-dom";
import VeshDesh from "../files/VeshDesh.png";
const Container = styled.div`
  display: flex;
  margin-top: 64px;
  font-family: "Fira Code", monospace;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  width: 1024px;
  height: auto;
  justify-content: space-between;
  font-family: "Fira Code", monospace;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const Handler = styled.div`
  display: flex;
  width: 1024px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  width: 510px;
  margin-left: 16px;
  height: 0;
  border: 1px solid #c778dd;
  @media (max-width: 768px) {
    width: 0%;
  }
`;

const ProjectSpacer = styled.div`
  height: 0;
  width: 40px;
`;

export default function Projects() {
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  return (
    <section id="projects">
      <Container>
        <Handler>
          <Heading>
            <span style={{ color: "#C778DD", fontSize: "32px" }}>#</span>
            <span style={{ color: "white", fontSize: "32px" }}>projects</span>
            <Line />
          </Heading>
          <Link
            to="/projects"
            onClick={scrollTop}
            style={{ textDecoration: "none" }}
          >
            <p
              style={{
                alignSelf: "left",
                color: "white",
                fontWeight: "bold",
              }}
            >
              View all <span style={{ fontSize: "24px" }}>➔</span>
            </p>
          </Link>
        </Handler>
        <ProjectsContainer>
          <ProjectFormat
            src={VeshDesh}
            tech="Python, Rails, Node.js"
            desc="Automatic Shipping, Stock Managment, other Internal Tools"
            title="VeshDesh"
            url="https://veshdesh.com"
            url_where="Website"
          />
          <ProjectSpacer />
          <ProjectFormat
            src={HuggingFace}
            tech="Python, PyTorch, Diffusers"
            desc="Generative AI, with OpenPose, Canny and Face-Keeping."
            title="Diffusers Model"
            url="https://github.com/OltiRocka/image-gen-diffusers"
            url_where="GitHub"
          />
          <ProjectSpacer />
          <ProjectFormat
            src={Llama2}
            tech="Python, LangChain, VectorDB"
            desc="Using LLaMa 2 to ask about uploaded files."
            title="LLaMa 2 PDF LLM"
            url="https://github.com/OltiRocka"
            url_where="GitHub"
          />
        </ProjectsContainer>
      </Container>
    </section>
  );
}
