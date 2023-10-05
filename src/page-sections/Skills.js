import React from "react";
import { styled } from "styled-components";
import SkillBox from "../components/SkillBox";
import { ReactComponent as Dots } from "../files/Dots.svg";
import { ReactComponent as Logo } from "../files/BackgroundLogo.svg";

const Handler = styled.div`
  display: flex;
  width: 1024px;
  align-items: center;
  margin: 12px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Container = styled.div`
  display: flex;
  margin-top: 60px;
  font-family: "Fira Code", monospace;
  flex-direction: column;
  margin-bottom: 30px;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  width: 1024px;
  height: auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const Figures = styled.div`
  width: 100%;
  position: relative;
  height: inherit;
  @media (max-width: 768px) {
    position: static;
    display: block;
    height: 300px;
    align-items: center;
    width: 100%;
  }
`;

const SkillSets = styled.div`
  width: 55%;
  height: auto;
  padding-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  grid-template-areas:
    "lang . ."
    "db other ."
    "tools frameworks .";
  @media (max-width: 768px) {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "lang db"
      "other frameworks"
      "tools tools";
  }
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

const Dots1 = styled(Dots)`
  position: absolute;
  margin-top: 10%;
  margin-left: -30%;
  width: 63px;
  height: 63px;
`;
const SkillBoxLanguages = styled(SkillBox)`
  grid-area: lang;
`;

const SkillBoxDatabases = styled(SkillBox)`
  grid-area: db;
`;

const SkillBoxOther = styled(SkillBox)`
  grid-area: other;
`;

const SkillBoxTools = styled(SkillBox)`
  grid-area: tools;

  @media (max-width: 768px) {
    width: 100%;
    grid-column: 1 / span 2;
  }
`;

const SkillBoxFrameworks = styled(SkillBox)`
  grid-area: frameworks;
`;
const Dots2 = styled(Dots)`
  position: absolute;
  margin-top: 40%;
  margin-left: 0%;
  width: 63px;
  height: 63px;
  @media (max-width: 768px) {
    margin-top: 40%;
    margin-left: -5%;
  }
`;

const Square1 = styled.div`
  position: absolute;
  margin-top: 5%;
  margin-left: 60%;
  width: 86px;
  height: 86px;
  border: 1px solid #abb2bf;
  @media (max-width: 768px) {
    margin-left: 60%;
  }
`;

const Square2 = styled.div`
  position: absolute;
  margin-top: 50%;
  margin-left: 70%;
  width: 52px;
  height: 52px;
  border: 1px solid #abb2bf;
  @media (max-width: 768px) {
    margin-left: 80%;
  }
`;

const Logo1 = styled(Logo)`
  position: absolute;
  margin-top: 45%;
  margin-left: -40%;
  width: 113px;
  height: 113px;
`;
export default function Skills() {
  return (
    <section id="skills">
      <Container>
        <Handler>
          <span style={{ color: "#C778DD", fontSize: "32px" }}>#</span>
          <span style={{ color: "white", fontSize: "32px" }}>skills</span>
          <Line />
        </Handler>
        <Content>
          <Figures>
            <Dots1 />
            <Square1 />
            <Logo1 />
            <Dots2 />
            <Square2 />
          </Figures>
          <SkillSets>
            <SkillBoxLanguages
              type="Languages"
              skills="Python Ruby Rust JavaScript"
            />
            <SkillBoxDatabases
              type="Databases"
              skills="SQLite PostgreSQL MongoDB"
            />
            <SkillBoxOther type="Other" skills="HTML CSS EJS SCSS REST" />
            <SkillBoxFrameworks
              type="Frameworks"
              skills="TensorFlow PyTorch Node.js FastAPI Django"
            />
            <SkillBoxTools
              type="Tools"
              skills="VSCode Neovim Linux FFmpeg Git Some Other Cool Shit"
            />
          </SkillSets>
        </Content>
      </Container>
    </section>
  );
}
