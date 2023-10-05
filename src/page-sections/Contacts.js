import React from "react";
import { styled } from "styled-components";
import EmailForm from "../components/EmailForm";

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
  margin-top: 112px;
  font-family: "Fira Code", monospace;
  flex-direction: column;
  margin-bottom: 120px;
  margin-top: 60px;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 1024px;
  height: auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const DescText = styled.p`
  height: auto;
  width: 40%;
  color: #abb2bf;
  text-align: left;
  display: flex;
  align-items: center;
  padding-bottom: 50px;
  @media (max-width: 768px) {
    width: 80%;
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
export default function Contacts() {
  return (
    <section id="contact">
      <Container>
        <Handler>
          <span style={{ color: "#C778DD", fontSize: "32px" }}>#</span>
          <span style={{ color: "white", fontSize: "32px" }}>contacts</span>
          <Line />
        </Handler>
        <Content>
          <DescText>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me.
          </DescText>
          <EmailForm />
        </Content>
      </Container>
    </section>
  );
}
