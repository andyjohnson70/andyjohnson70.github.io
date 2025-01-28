import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="w-full flex flex-col items-center sm:items-start">
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
