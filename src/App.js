import "./App.css";
import Tokenomics from "./Components/Tokenomics/Tokenomics";
import Hero from "./Components/Head/Hero";
import Partners from "./Components/Partners/Partners";
import ProjectEcosytem from "./Components/ProjectEcosytem/ProjectEcosytem";
import PandaMaxRoadmap from "./Components/Roadmap/PandaMaxRoadmap";
import PandaTeam from "./Components/PandaTeam/PandaTeam";
import Community from "./Components/Community/Community";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Partners />
      <ProjectEcosytem />
      <Tokenomics />
      <PandaMaxRoadmap />
      <PandaTeam />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
