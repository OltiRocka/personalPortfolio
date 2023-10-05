import "../App.css";
import AboutMe from "../page-sections/AboutMe";
import Contacts from "../page-sections/Contacts";
import Footer from "../page-sections/Footer";
import Home from "../page-sections/Home";
import Projects from "../page-sections/Projects";
import Skills from "../page-sections/Skills";

function HomePage() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#282C33",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Home style={{ height: "100vh", innerWidth: "100vw" }} />
      <Projects style={{ innerWidth: "100vw" }} />
      <Skills style={{ innerWidth: "100vw" }} />
      <AboutMe style={{ innerWidth: "100vw" }} />
      <Contacts style={{ innerWidth: "100vw" }} />
      <Footer style={{ innerWidth: "100vw" }} />
    </div>
  );
}

export default HomePage;
