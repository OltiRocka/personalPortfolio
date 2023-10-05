import React from "react";
import { styled } from "styled-components";
import Navigation from "../components/Navigation";
import SocialHanger from "../components/SocialHanger";
import Footer from '../page-sections/Footer'
import ProjectFormat from "../components/ProjectContainer";
import VeshDesh from '../files/VeshDesh.png';
import HuggingFace from '../files/Hugging Face.png'
import Llama2 from '../files/Llama2.png'
import InstagramBot from '../files/InstaBot.png'
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Fira Code", monospace;
  justify-content: space-between;
  overflow-x: hidden;
  margin-bottom:50px;
  @media (max-width:768px){
    flex-direction:column;
    align-items:center;
    width:100%;

  }
`;
const HomeContainer = styled.div`
  display: flex;
  width:1024px;
  flex-direction: column;
  margin-bottom:50px;
  @media (max-width:768px){

    width:100%;

  }
`;
const DescContainer = styled.div`
  width:100%;
  height:auto;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  @media (max-width:768px){
    width:90%;
  }

`;
const MainProjectContainer = styled.div`
  width:100%;
  height:auto;
  display:flex;
  flex-direction:column;
  margin-top:68px;
  margin-bottom:13px;
`;

const ProjectGrid = styled.div`
  width:100%;
  height:auto;
  display:grid;
  gap:40px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width:768px){
    grid-template-columns: repeat(2, 1fr);
    gap:0px;
}

`;


const ProjectPage = () => {

    return (
        <dev>
            <MainContainer>
                <SocialHanger />
                <HomeContainer>
                    <Navigation links={true} />
                    <div style={{ height: "62px" }}></div>
                    <DescContainer>
                        <h2 style={{
                            color: "white",
                            fontSize: '32px',
                            textAlign: 'left',
                            marginBottom: '10px'
                        }}>
                            <span style={{ color: '#c778dd' }}>/</span>
                            projects
                        </h2>
                        <p style={{ marginTop: '0', fontSize: '16px', color: '#abb2bf', textAlign: 'left' }}>List of my projects</p>
                    </DescContainer>
                    <MainProjectContainer>
                        <DescContainer>
                            <h2 style={{
                                color: "white",
                                fontSize: '32px',
                                textAlign: 'left',
                                marginBottom: '10px'
                            }}>
                                <span style={{ color: '#c778dd' }}>#</span>
                                complete-apps
                            </h2>
                        </DescContainer>
                        <ProjectGrid>
                            <ProjectFormat
                                src={VeshDesh}
                                tech="Python, Rails, Node.js"
                                desc="Automatic Shipping, Stock Managment, other Internal Tools."
                                title="VeshDesh"
                                url="https://veshdesh.com"
                                url_where="Website"
                            />
                            <ProjectFormat
                                src={HuggingFace}
                                tech="Python, PyTorch, Diffusers"
                                desc="Generative AI, with OpenPose, Canny and Face-Keeping."
                                title="Diffusers Model"
                                url="https://github.com/OltiRocka/image-gen-diffusers"
                                url_where="GitHub"
                            />
                            <ProjectFormat
                                src={Llama2}
                                tech="Python, LangChain, VectorDB"
                                desc="Using LLaMa 2 to ask about uploaded files."
                                title="LLaMa 2 PDF LLM"
                                url="https://github.com/OltiRocka"
                                url_where="GitHub"
                            />
                        </ProjectGrid>
                    </MainProjectContainer>
                    <MainProjectContainer>
                        <DescContainer>
                            <h2 style={{
                                color: "white",
                                fontSize: '32px',
                                textAlign: 'left',
                                marginBottom: '10px'
                            }}>
                                <span style={{ color: '#c778dd' }}>#</span>
                                small-projects
                            </h2>
                        </DescContainer>
                    </MainProjectContainer>
                    <ProjectGrid>
                        <ProjectFormat
                            src={InstagramBot}
                            tech="Python, AWS Lambda"
                            desc="Automated Posting on Instagram, with AWS Lambda Cron Jobs"
                            title="Instagram Bot"
                            url="https://github.com/OltiRocka/instabot"
                            url_where="GitHub"
                        />
                    </ProjectGrid>
                </HomeContainer>
                <SocialHanger fake={true} />
            </MainContainer>
            <Footer />
        </dev>
    );
};

export default ProjectPage;