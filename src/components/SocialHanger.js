import React from "react";
import { ReactComponent as Github } from "../files/Github.svg";
import { ReactComponent as LinkedIn } from "../files/Linkedin.svg";
import { ReactComponent as Instagram } from "../files/Instagram.svg";
import styled from "styled-components";

const Hanger = styled.div`
  width: 0px;
  height: 191px;
  border: 1px solid #abb2bf;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-items: center;
  @media (max-width: 767px) {
    margin-left: 5px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

const ImageContainer = ({ children, href }) => {
  return <a href={href}>{children}</a>;
};

function SocialHanger({ fake }) {
  return (
    <Container
      style={
        fake
          ? {
              marginRight: "20px",
              marginLeft: "0px",
              visibility: "hidden",
            }
          : {}
      }
    >
      <Hanger />
      <ImageContainer href="https://github.com/OltiRocka/" target="_blank">
        <Github />
      </ImageContainer>
      <ImageContainer href="https://www.linkedin.com/in/oltir" target="_blank">
        <LinkedIn />
      </ImageContainer>
      <ImageContainer
        href="https://www.instagram.com/rocka.dev/"
        target="_blank"
      >
        <Instagram />
      </ImageContainer>
    </Container>
  );
}

export default SocialHanger;
