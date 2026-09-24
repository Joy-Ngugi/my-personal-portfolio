import { Toaster } from "react-hot-toast";
import "./styles/styles.css";
import TechOrbit from "./components/TechOrbit";
import AmbientBackground from "./components/AmbientBackground";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <AmbientBackground />
      <TechOrbit/>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#171717",
            color: "#faf8f4",
            fontSize: "0.9rem",
            borderRadius: "10px",
          },
        }}
      />
    </>
  );
}

export default App;