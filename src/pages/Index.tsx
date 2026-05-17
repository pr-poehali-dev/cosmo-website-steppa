import { useState, useEffect } from "react";
import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionsSection from "@/components/MissionsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const sections = ["hero", "about", "missions", "gallery"];

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "var(--cosmos-dark)", minHeight: "100vh" }}>
      <StarField />
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      <HeroSection />
      <AboutSection />
      <MissionsSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
