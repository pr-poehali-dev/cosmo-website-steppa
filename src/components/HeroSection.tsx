import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const planetRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [typed, setTyped] = useState("");
  const fullText = "Исследуй бесконечность";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTyped(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--cosmos-dark)" }}
    >
      {/* Nebula blobs */}
      <div
        className="absolute animate-nebula"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
          top: "5%",
          left: "-10%",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute animate-nebula"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)",
          bottom: "10%",
          right: "-5%",
          filter: "blur(50px)",
          animationDelay: "5s",
        }}
      />

      {/* 3D Planet */}
      <div
        className="absolute"
        style={{
          right: "8%",
          top: "50%",
          transform: `translate(${mousePos.x * 0.5}px, calc(-50% + ${mousePos.y * 0.5}px))`,
          transition: "transform 0.1s ease",
        }}
      >
        <div
          className="animate-planet-glow animate-float"
          style={{
            width: 280,
            height: 280,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 35%, #1a4a6e 0%, #0d2540 40%, #050810 100%)",
            boxShadow:
              "inset -30px -20px 60px rgba(0,0,0,0.8), 0 0 60px 20px rgba(0,212,255,0.25)",
            overflow: "hidden",
            position: "relative",
          }}
          ref={planetRef}
        >
          {/* Ring */}
          <div
            style={{
              position: "absolute",
              width: "160%",
              height: "30px",
              border: "3px solid rgba(0,212,255,0.35)",
              borderRadius: "50%",
              top: "50%",
              left: "-30%",
              transform: "translateY(-50%) rotateX(75deg)",
              boxShadow: "0 0 20px rgba(0,212,255,0.3)",
            }}
          />
          {/* Atmosphere shimmer */}
          <div
            style={{
              position: "absolute",
              inset: -4,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 30% 30%, rgba(0,212,255,0.15), transparent 60%)",
              animation: "rotateSlow 30s linear infinite",
            }}
          />
        </div>

        {/* Orbiting moon */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 0,
            height: 0,
            animation: "orbit 8s linear infinite",
            "--orbit-r": "170px",
          } as React.CSSProperties}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 35%, #c8d0e0, #6a7280)",
              boxShadow: "0 0 10px rgba(200,208,224,0.6)",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 mb-4 animate-slide-up"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            <span style={{ color: "var(--cosmos-cyan)" }}>✦</span>
            АВТОР&nbsp;
            <span
              style={{
                color: "var(--cosmos-cyan)",
                textShadow: "0 0 12px rgba(0,212,255,0.7)",
                fontWeight: 600,
              }}
            >
              СТЁПА
            </span>
          </div>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-slide-up"
            style={{
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.3)",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "var(--cosmos-cyan)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: "var(--cosmos-cyan)",
                boxShadow: "0 0 8px var(--cosmos-cyan)",
                animation: "planet-glow 1.5s ease-in-out infinite",
              }}
            />
            LIVE · COSMIC EXPLORER v2.0
          </div>

          <h1
            className="font-bold mb-4 animate-slide-up"
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              lineHeight: 1.1,
              fontFamily: "'Cormorant Garamond', serif",
              animationDelay: "0.2s",
            }}
          >
            <span className="text-white">Cosmos</span>
            <br />
            <span className="neon-text animate-glitch">Unveiled</span>
          </h1>

          <p
            className="text-lg mb-2 animate-slide-up"
            style={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              animationDelay: "0.4s",
              minHeight: "1.5em",
            }}
          >
            {typed}
            <span
              style={{
                display: "inline-block",
                width: 2,
                height: "1em",
                background: "var(--cosmos-cyan)",
                marginLeft: 2,
                animation: "twinkle 0.8s ease-in-out infinite",
                verticalAlign: "middle",
              }}
            />
          </p>

          <p
            className="text-base mb-10 animate-slide-up"
            style={{
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7,
              animationDelay: "0.5s",
              maxWidth: 480,
            }}
          >
            Путешествуй сквозь галактики, изучай великие миссии и открывай
            тайны вселенной вместе с нами.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={() => scrollToSection("missions")}
              className="group relative px-8 py-3 font-semibold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, var(--cosmos-cyan), var(--cosmos-purple))",
                color: "#050810",
                fontFamily: "'IBM Plex Mono', monospace",
                clipPath:
                  "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Icon name="Rocket" size={16} />
                Миссии
              </span>
            </button>

            <button
              onClick={() => scrollToSection("gallery")}
              className="px-8 py-3 font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white/10"
              style={{
                border: "1px solid rgba(0,212,255,0.4)",
                color: "var(--cosmos-cyan)",
                fontFamily: "'IBM Plex Mono', monospace",
                clipPath:
                  "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
              }}
            >
              <span className="flex items-center gap-2">
                <Icon name="Images" size={16} />
                Галерея
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(255,255,255,0.3)" }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background:
              "linear-gradient(to bottom, var(--cosmos-cyan), transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;