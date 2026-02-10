import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import CursorFollower from "@/components/CursorFollower";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden noise-overlay">
      <CursorFollower />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <div className="section-divider max-w-4xl mx-auto" />
      <Skills />
      <div className="section-divider max-w-4xl mx-auto" />
      <Projects />
      <div className="section-divider max-w-4xl mx-auto" />
      <Experience />
      <div className="section-divider max-w-4xl mx-auto" />
      <Contact />
    </div>
  );
};

export default Index;
