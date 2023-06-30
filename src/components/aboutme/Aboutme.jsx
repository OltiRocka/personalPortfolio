import React, { useState } from "react";
import "./Aboutme.css";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `class Resume:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.skills = []
        self.experience = []

    def add_skill(self, skill):
        self.skills.append(skill)
    
    def add_experience(self, job):
        self.experience.append(job)

    def save_as_pdf(self):
        # Assume some library or method to convert text data into a PDF
        pdf_data = self.name + "\\n" + self.email
        for skill in self.skills:
            pdf_data += "\\n" + skill

        for job in self.experience:
            pdf_data += "\\n" + job

        with open(f"{self.name}_resume.pdf", "w") as file:
            file.write(pdf_data)

        print(f"Resume saved as {self.name}_resume.pdf")

my_resume = Resume("Olti Roka", "olti@roka.dev")
my_resume.add_skill("Data Science")
my_resume.add_skill("Data Analysis with Pandas")
my_resume.add_experience("Software Engineer at XYZ Corp.")
my_resume.save_as_pdf()
`;

function Aboutme() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    window.location.href =
      "https://drive.google.com/uc?id=1Fe1lzb1B7TtxLQLWuJpEDKpckix5O5m1&export=download";
  };
  return (
    <div className="about-me-container">
      <div className="py-container">
        <div className="code-container">
          <div className="text-container">
            <p className="text-sm">download_resume.py</p>
            {/* <a href="https://drive.google.com/uc?id=1Fe1lzb1B7TtxLQLWuJpEDKpckix5O5m1&export=download" className="download-cv">
                <img src="   https://cdn-icons-png.flaticon.com/512/5800/5800678.png " />
            </a> */}
            <button
              className={loading ? "load-button loading-start" : "load-button"}
              onClick={handleClick}
            >
              <span style={{ fontWeight: "bolder", fontSize: "30px" }}>»</span>
              <svg
                version="1.1"
                id="loader-1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="40px"
                height="40px"
                viewBox="0 0 50 50"
                style={{ enableBackground: "new 0 0 50 50" }}
                xmlSpace="preserve"
              >
                <path
                  fill="#000"
                  d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
                >
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </button>
          </div>
          <SyntaxHighlighter
            className="py-code"
            language="python"
            showLineNumbers={true}
            style={atomOneDark}
            customStyle={{
              padding: "15px",
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="about-me">
        <h1 className="about">About Me</h1>
        <h2 className="about-desc">
          Hi there! I'm Olti Roka. I'm a Data Scientist, a Machine Learning
          Engineer, and you guessed it - a math enthusiast. I love working with
          Python and Rust to solve complex problems.
          <br />
          <br />
          Engaging with new people and sharing ideas are valuable aspects of my
          day-to-day life. As we navigate the vast landscape of data and
          mathematics, I look forward to the opportunities this journey may
          bring.
          <br />
          <br />
          You can contact me below, and you can also find my resume attached at
          the code to the left.
        </h2>
        <a href="mailto:olti@roka.dev" className="contact">
          Contact Me
        </a>
      </div>
    </div>
  );
}
export default Aboutme;
