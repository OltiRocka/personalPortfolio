import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as RokaLogo } from "../files/Logo.svg";
import { Link } from "react-router-dom";

const HeaderLink = styled.a`
  font-size: 16px;
  display: inline-block;
  text-decoration: none;
  font-weight: bold;

  .hash {
    color: #c778dd;
  }

  .text {
    color: #abb2bf;
    transition: color 0.2s ease-in-out;
  }

  &:hover {
    .text {
      color: white;
    }
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 1000;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 1024px;
  height: 61px;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 767px) {
    width: 100vw;
    margin-left: 10%;
  }
`;
const ListContainer = styled.div`
  > *:not(:last-child) {
    margin-right: 32px;
  }

  display: flex;
  flex-direction: row;
  align-self: flex-end;
  flex: 0 0 auto;
  margin-left: auto;
  @media (max-width: 767px) {
    display: none;
  }
`;

const LogoContainer = styled(Link)`
  width: 100px;
  height: 40px;
  color: white;
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  align-self: flex-end;
  align-items: center;
  text-decoration: none;
  justify-content: flex-start;
  opacity: ${(props) => (props.isAtTop ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;
const StyledH2 = ({ children, href, onClick }) => {
  return (
    <HeaderLink href={href} onClick={onClick}>
      <span className="hash">#</span>
      <span className="text">{children}</span>
    </HeaderLink>
  );
};

function Navigation({ links }) {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY <= 0;
      setIsAtTop(atTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <NavBar>
        <LogoContainer to="/" isAtTop={isAtTop}>
          <RokaLogo
            style={{
              marginRight: "8px",
              height: "16px",
              width: "16px",
            }}
          />
          <h2 style={{ fontSize: "16px" }}>Roka</h2>
        </LogoContainer>
        <ListContainer style={links ? { visibility: "hidden" } : {}}>
          <StyledH2 href="#">home</StyledH2>
          <StyledH2 href="#projects">projects</StyledH2>
          <StyledH2 href="#skills">skills</StyledH2>
          <StyledH2 href="#aboutme">about-me</StyledH2>
          <StyledH2 href="#contact">contacts</StyledH2>
        </ListContainer>
      </NavBar>
    </Container>
  );
}

export default Navigation;
