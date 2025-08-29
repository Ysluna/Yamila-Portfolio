import "./App.css";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";



export default function App() {
  return (
    <main>
      <Navbar />
      <AboutMe />
      <Projects />
    </main>
  );
}
