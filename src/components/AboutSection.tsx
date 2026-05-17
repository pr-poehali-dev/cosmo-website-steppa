import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const facts = [
  {
    icon: "Sun",
    value: "13.8",
    unit: "млрд лет",
    label: "Возраст Вселенной",
    color: "var(--cosmos-gold)",
  },
  {
    icon: "Star",
    value: "2×10²⁴",
    unit: "звёзд",
    label: "В наблюдаемой вселенной",
    color: "var(--cosmos-cyan)",
  },
  {
    icon: "Telescope",
    value: "93",
    unit: "млрд св.лет",
    label: "Диаметр вселенной",
    color: "var(--cosmos-purple)",
    iconColor: "white",
  },
  {
    icon: "Atom",
    value: "300 000",
    unit: "км/с",
    label: "Скорость света",
    color: "var(--cosmos-cyan)",
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--cosmos-mid)" }}
    >
      <hr className="cosmic-hr mb-0" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div
            className="reveal inline-block mb-4 px-3 py-1 text-xs tracking-widest uppercase"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              color: "var(--cosmos-cyan)",
              border: "1px solid rgba(0,212,255,0.3)",
            }}
          >
            // about
          </div>
          <h2
            className="reveal font-bold text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            О{" "}
            <span className="neon-text">Космосе</span>
          </h2>
          <p
            className="reveal mt-4 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}
          >
            Космос — это бесконечное пространство за пределами атмосферы Земли.
            Он полон загадок, которые человечество разгадывает на протяжении
            тысячелетий. Каждое открытие переворачивает наше понимание реальности.
          </p>
        </div>

        {/* Facts grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {facts.map((fact, i) => (
            <div
              key={i}
              className="reveal glass glass-hover rounded-2xl p-6 text-center mission-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  background: `${fact.color}22`,
                  border: `1px solid ${fact.color}44`,
                }}
              >
                <Icon
                  name={fact.icon as "Sun"}
                  size={22}
                  style={{ color: fact.color }}
                />
              </div>
              <div
                className="font-bold mb-1"
                style={{
                  fontSize: "1.5rem",
                  color: fact.color,
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {fact.value}
              </div>
              <div
                className="text-xs mb-2"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {fact.unit}
              </div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                {fact.label}
              </div>
            </div>
          ))}
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3
              className="reveal font-bold text-white mb-6"
              style={{
                fontSize: "1.8rem",
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Рождение звёзд и{" "}
              <span style={{ color: "var(--cosmos-cyan)" }}>галактик</span>
            </h3>
            {[
              {
                title: "Туманности",
                text: "Гигантские облака газа и пыли — колыбели новых звёзд. В туманности Орион прямо сейчас формируются сотни звёздных систем.",
              },
              {
                title: "Чёрные дыры",
                text: "Объекты с гравитацией настолько мощной, что даже свет не может вырваться. В центре каждой галактики скрывается сверхмассивная чёрная дыра.",
              },
              {
                title: "Тёмная материя",
                text: "27% вселенной составляет тёмная материя — невидимая субстанция, удерживающая галактики от разлёта.",
              },
            ].map((item, i) => (
              <div key={i} className="reveal flex gap-4 mb-6">
                <div
                  className="flex-shrink-0 w-1 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, var(--cosmos-cyan), var(--cosmos-purple))",
                  }}
                />
                <div>
                  <div
                    className="font-semibold mb-1"
                    style={{ color: "var(--cosmos-cyan)", fontSize: "0.85rem", fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {item.title}
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal relative">
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                border: "1px solid rgba(0,212,255,0.2)",
                boxShadow: "0 0 80px rgba(0,212,255,0.1)",
              }}
            >
              <img
                src="https://cdn.poehali.dev/projects/67678c90-b9fd-4014-a829-b255b93dadd6/files/f189e45f-46f2-413c-ad7b-38626c195371.jpg"
                alt="Космическая туманность"
                className="w-full h-80 object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right, var(--cosmos-mid) 0%, transparent 30%, transparent 70%, var(--cosmos-mid) 100%)",
                }}
              />
            </div>
            {/* Decorative corner */}
            <div
              className="absolute -top-3 -right-3 w-12 h-12"
              style={{
                borderTop: "2px solid var(--cosmos-cyan)",
                borderRight: "2px solid var(--cosmos-cyan)",
              }}
            />
            <div
              className="absolute -bottom-3 -left-3 w-12 h-12"
              style={{
                borderBottom: "2px solid var(--cosmos-purple)",
                borderLeft: "2px solid var(--cosmos-purple)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
