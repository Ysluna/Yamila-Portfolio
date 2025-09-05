import "./App.css";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
/*import Home from "./components/Home";*/

export default function App() {
  return (
    <main>
      <Navbar />
      
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
