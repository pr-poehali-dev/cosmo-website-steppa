import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "hero", label: "Главная" },
    { id: "about", label: "О Космосе" },
    { id: "missions", label: "Миссии" },
    { id: "gallery", label: "Галерея" },
  ];

  const handleClick = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(5, 8, 16, 0.9)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleClick("hero")}
          className="flex items-center gap-2 group"
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: "radial-gradient(circle, var(--cosmos-cyan), var(--cosmos-purple))",
              boxShadow: "0 0 16px rgba(0,212,255,0.6)",
            }}
          >
            <Icon name="Orbit" size={16} className="text-white" />
          </div>
          <span
            className="font-bold tracking-widest text-sm uppercase"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              color: "var(--cosmos-cyan)",
            }}
          >
            COSMOS
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`nav-link ${activeSection === link.id ? "active" : ""}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(5,8,16,0.97)" }}
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`nav-link text-left ${activeSection === link.id ? "active" : ""}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
