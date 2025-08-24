import "./App.css";
import Profile from "./components/Home.jsx";
import GitHubSection from "./components/GithubCalendargraph.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <div className="container max-w-4xl mx-auto p-4">
      <div className="shadow-2xl h-full p-10 rounded-2xl border-t-1 border-neutral-200">
        <Profile />
        <GitHubSection />
        <AboutMe />
        <Projects />
        <Experience />
        <Skills />
      </div>
    </div>
  );
}

export default App;
