import React from "react";
import { styled } from "styled-components";
import Navigation from "../components/Navigation";
import SocialHanger from "../components/SocialHanger";
import MainHome from "../components/MainHome";

const MainContainer = styled.div`
  display: flex;
  font-family: "Fira Code", monospace;
  justify-content: space-between;
  overflow-x: hidden;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function Home({ refs }) {
  return (
    <MainContainer>
      <SocialHanger />
      <HomeContainer>
        <Navigation refs={refs} />
        <div style={{ height: "62px" }}></div>
        <MainHome refs={refs} />
      </HomeContainer>
      <SocialHanger fake={true} />
    </MainContainer>
  );
}
