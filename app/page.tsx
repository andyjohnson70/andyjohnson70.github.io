import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="w-full flex flex-col items-center sm:items-start">
        <Landing />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
