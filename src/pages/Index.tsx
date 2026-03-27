import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import SystemsShowcase from "@/components/SystemsShowcase";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import VisualPortfolio from "@/components/VisualPortfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <CaseStudies />
      <SystemsShowcase />
      <Projects />
      <Experience />
      <Skills />
      <VisualPortfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
