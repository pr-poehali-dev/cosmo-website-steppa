import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const missions = [
  {
    id: "apollo",
    code: "APL-11",
    name: "Аполлон 11",
    year: "1969",
    status: "SUCCESS",
    description:
      "Первая пилотируемая миссия с высадкой на Луну. Нил Армстронг и Базз Олдрин стали первыми людьми, ступившими на поверхность другого небесного тела.",
    image:
      "https://cdn.poehali.dev/projects/67678c90-b9fd-4014-a829-b255b93dadd6/files/d8fe0bd7-3139-41cf-8823-2fe597d9afd3.jpg",
    stats: [
      { label: "Дистанция", value: "384 400 км" },
      { label: "Длительность", value: "8 дней" },
      { label: "Экипаж", value: "3 чел." },
    ],
    color: "var(--cosmos-gold)",
    icon: "Moon",
  },
  {
    id: "iss",
    code: "ISS-01",
    name: "МКС",
    year: "1998",
    status: "ACTIVE",
    description:
      "Международная космическая станция — совместный проект 15 стран. Крупнейшая рукотворная конструкция в космосе, непрерывно обитаемая с 2000 года.",
    image:
      "https://cdn.poehali.dev/projects/67678c90-b9fd-4014-a829-b255b93dadd6/files/a694fb04-5c8c-416b-8cd3-79f67f743e26.jpg",
    stats: [
      { label: "Высота орбиты", value: "408 км" },
      { label: "Скорость", value: "7.66 км/с" },
      { label: "Экипаж", value: "7 чел." },
    ],
    color: "var(--cosmos-cyan)",
    icon: "Satellite",
  },
  {
    id: "mars",
    code: "PRV-21",
    name: "Perseverance",
    year: "2021",
    status: "ACTIVE",
    description:
      "Марсоход NASA нового поколения. Собирает образцы грунта, ищет следы древней жизни и тестирует технологии для будущих пилотируемых полётов на Марс.",
    image:
      "https://cdn.poehali.dev/projects/67678c90-b9fd-4014-a829-b255b93dadd6/files/789247ac-0f2f-4a61-b99b-033fc37a42b4.jpg",
    stats: [
      { label: "Расстояние до Марса", value: "225 млн км" },
      { label: "Пройдено", value: "15+ км" },
      { label: "Образцов", value: "23 шт." },
    ],
    color: "#ef4444",
    icon: "Globe",
  },
  {
    id: "jwst",
    code: "JWT-22",
    name: "Телескоп Джеймса Уэбба",
    year: "2022",
    status: "ACTIVE",
    description:
      "Самый мощный космический телескоп в истории человечества. Видит в инфракрасном диапазоне и позволяет наблюдать галактики, сформировавшиеся вскоре после Большого взрыва.",
    image:
      "https://cdn.poehali.dev/projects/67678c90-b9fd-4014-a829-b255b93dadd6/files/f189e45f-46f2-413c-ad7b-38626c195371.jpg",
    stats: [
      { label: "Зеркало", value: "6.5 м" },
      { label: "Орбита L2", value: "1.5 млн км" },
      { label: "Срок службы", value: "20+ лет" },
    ],
    color: "var(--cosmos-purple)",
    icon: "Telescope",
  },
];

const statusColors: Record<string, string> = {
  SUCCESS: "#22c55e",
  ACTIVE: "var(--cosmos-cyan)",
  FAILED: "#ef4444",
};

const MissionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(missions[0]);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 15;
    setCardTilt({ x, y });
  };

  return (
    <section
      id="missions"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--cosmos-dark)" }}
    >
      {/* Glow */}
      <div
        className="absolute"
        style={{
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${selected.color}15, transparent 70%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          transition: "background 0.6s ease",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="reveal inline-block mb-4 px-3 py-1 text-xs tracking-widest uppercase"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              color: "var(--cosmos-cyan)",
              border: "1px solid rgba(0,212,255,0.3)",
            }}
          >
            // missions
          </div>
          <h2
            className="reveal font-bold text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Великие{" "}
            <span className="neon-text">Миссии</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Mission list */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {missions.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelected(m)}
                className="reveal glass glass-hover rounded-xl p-4 text-left group transition-all duration-300"
                style={{
                  border:
                    selected.id === m.id
                      ? `1px solid ${m.color}66`
                      : "1px solid rgba(255,255,255,0.06)",
                  background:
                    selected.id === m.id
                      ? `${m.color}11`
                      : "rgba(13,21,37,0.5)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${m.color}22`,
                      border: `1px solid ${m.color}44`,
                    }}
                  >
                    <Icon
                      name={m.icon as "Moon"}
                      size={18}
                      style={{ color: m.color }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="font-semibold text-white text-sm truncate"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {m.name}
                      </span>
                      <span
                        className="text-xs flex-shrink-0 px-2 py-0.5 rounded-full"
                        style={{
                          background: `${statusColors[m.status]}22`,
                          color: statusColors[m.status],
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: "0.6rem",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {m.status}
                      </span>
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{
                        color: "rgba(255,255,255,0.35)",
                        fontFamily: "'IBM Plex Mono', monospace",
                      }}
                    >
                      {m.code} · {m.year}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Mission detail card */}
          <div
            className="reveal lg:col-span-3 glass rounded-2xl overflow-hidden mission-card"
            style={{
              border: `1px solid ${selected.color}33`,
              transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
              transition: "transform 0.15s ease, border 0.4s ease",
            }}
            onMouseMove={handleCardMove}
            onMouseLeave={() => setCardTilt({ x: 0, y: 0 })}
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover transition-all duration-700"
                style={{ filter: "brightness(0.7) saturate(1.2)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, rgba(5,8,16,1) 0%, rgba(5,8,16,0.3) 60%, transparent 100%)`,
                }}
              />
              <div className="absolute bottom-4 left-6">
                <div
                  className="text-xs mb-1"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: selected.color,
                    letterSpacing: "0.2em",
                  }}
                >
                  MISSION {selected.code}
                </div>
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {selected.name}
                </h3>
              </div>
              <div className="absolute top-4 right-4">
                <span
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    background: `${statusColors[selected.status]}22`,
                    border: `1px solid ${statusColors[selected.status]}55`,
                    color: statusColors[selected.status],
                    fontFamily: "'IBM Plex Mono', monospace",
                    letterSpacing: "0.1em",
                  }}
                >
                  ● {selected.status}
                </span>
              </div>
            </div>

            <div className="p-6">
              <p
                className="mb-6"
                style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}
              >
                {selected.description}
              </p>

              <div className="grid grid-cols-3 gap-4">
                {selected.stats.map((s, i) => (
                  <div
                    key={i}
                    className="text-center p-3 rounded-xl"
                    style={{
                      background: `${selected.color}0d`,
                      border: `1px solid ${selected.color}22`,
                    }}
                  >
                    <div
                      className="font-bold text-sm mb-1"
                      style={{
                        color: selected.color,
                        fontFamily: "'IBM Plex Mono', monospace",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionsSection;
