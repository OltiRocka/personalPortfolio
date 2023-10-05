import styled from "styled-components";
import { ReactComponent as Dots } from "../files/Dots.svg";
import { ReactComponent as BackgroundLogo } from "../files/BackgroundLogo.svg";
import meImage from "../files/Olti2.png";
import { ReactComponent as Quotes } from "../files/Quotes.svg";
import React, { useState, useEffect } from "react";
import { ReactComponent as Github } from "../files/Github.svg";
import { ReactComponent as LinkedIn } from "../files/Linkedin.svg";
import { ReactComponent as Instagram } from "../files/Instagram.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
  @media (max-width: 767px) {
    width: 95vw;
  }
`;

const Socials = styled.div`
  display: none;
  width: 40%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
  }
`;
const MeContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
`;

const BigText = styled.div`
  font-size: 32px;
  display: inline-block;
  text-decoration: none;
  align-items: left;
  font-weight: bold;
  text-align: left;
  .hash {
    color: #c778dd;
  }
  .text {
    color: white;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: normal;
  width: 537px;
  height: 227px;
  @media (max-width: 767px) {
    width: 95%;
    margin-bottom: 10%;
  }
`;

const SocialContainer = ({ children, href }) => {
  return <a href={href}>{children}</a>;
};

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 469px;
  height: 423px;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    height: 72%;
  }
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 712px;
  height: auto;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const ContactButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: 1px solid #c778dd;
  height: 37px;
  width: 128px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: rgba(199, 120, 221, 0.2);
  }
`;
const CurrentlyWorking = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid #abb2bf;
  justify-content: flex-start;
  text-align: left;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const Contact = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.div`
  width: inherit;
  height: 386px;
`;

function MainHome() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <MeContainer>
        <InfoContainer>
          <BigText>
            <span className="text">Olti is a </span>
            <span className="hash">Data Scientist </span>
            <span className="text">and </span>
            <span className="hash">Back-end Developer</span>
          </BigText>
          <p style={{ color: "#ABB2BF", textAlign: "left" }}>
            He crafts responsive machine learning solutions where technologies
            meet creativity
          </p>
          <Contact>
            <ContactButton href="#contact">Contact Me</ContactButton>
            <Socials>
              <SocialContainer
                href="https://github.com/OltiRocka/"
                target="_blank"
              >
                <Github />
              </SocialContainer>
              <SocialContainer
                href="https://www.linkedin.com/in/oltir"
                target="_blank"
              >
                <LinkedIn />
              </SocialContainer>
              <SocialContainer
                href="https://www.instagram.com/rocka.dev/"
                target="_blank"
              >
                <Instagram />
              </SocialContainer>
            </Socials>
          </Contact>
        </InfoContainer>

        <div style={{ width: "18px" }} />

        <ImageContainer>
          <Image>
            <BackgroundLogo
              style={{
                position: "absolute",
                zIndex: "0",
              }}
            />
            <img
              src={meImage}
              style={
                windowWidth >= 767
                  ? {
                      zIndex: "1",
                      position: "relative",
                      width: "auto",
                      height: "100%",
                    }
                  : {
                      zIndex: "1",
                      marginTop: "3.5rem",
                      position: "relative",
                      width: "auto",
                      height: "85%",
                    }
              }
              alt=""
            />
            <Dots
              style={
                windowWidth >= 767
                  ? {
                      position: "absolute",
                      zIndex: "3",
                      marginLeft: "5%",
                      marginTop: "-7%",
                    }
                  : {
                      position: "absolute",
                      zIndex: "3",
                      marginLeft: "20%",
                      marginTop: "-50%",
                    }
              }
            />
          </Image>

          <CurrentlyWorking>
            <div
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: "#C778DD",
                margin: "5px",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                color: "#ABB2BF",
              }}
            >
              Currently working on&nbsp;
            </span>
            <span
              style={{
                fontSize: "16px",
                color: "white",
              }}
            >
              Portfolio
            </span>
          </CurrentlyWorking>
        </ImageContainer>
      </MeContainer>
      <div style={{ height: "47px" }} />
      <QuoteContainer>
        <div
          style={{
            width: " calc(100% - 66px)",
            fontWeight: "bold",
            color: "white",
            textAlign: "left",
            fontSize: "24px",
            border: "1px solid #ABB2BF",
            padding: "32px",
          }}
        >
          <Quotes
            style={{
              position: "absolute",
              marginTop: "-48px",
              marginLeft: "-24px",
            }}
          />
          If our era is the next Industrial Revolution, as many claim, AI is
          surely one of its driving forces.
        </div>

        <div
          style={{
            alignSelf: "flex-end",
            width: "45%",
            color: "white",
            textAlign: "left",
            fontSize: "24px",
            border: "1px solid #ABB2BF",
            padding: "16px",
          }}
        >
          <Quotes
            style={{
              position: "absolute",
              marginTop: "-32px",
              marginLeft: "120px",
            }}
          />
          -Fei Fei Li
        </div>
      </QuoteContainer>
    </Container>
  );
}

export default MainHome;
