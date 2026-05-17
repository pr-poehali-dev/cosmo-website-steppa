import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const photos = [
  {
    src: "https://cdn.poehali.dev/projects/67678c90-b9fd-4014-a829-b255b93dadd6/files/f189e45f-46f2-413c-ad7b-38626c195371.jpg",
    title: "Туманность",
    category: "Глубокий космос",
    desc: "Газопылевые облака — место рождения новых звёзд",
    size: "large",
  },
  {
    src: "https://cdn.poehali.dev/projects/67678c90-b9fd-4014-a829-b255b93dadd6/files/d8fe0bd7-3139-41cf-8823-2fe597d9afd3.jpg",
    title: "Запуск ракеты",
    category: "Миссии",
    desc: "Человечество вырывается за пределы Земли",
    size: "medium",
  },
  {
    src: "https://cdn.poehali.dev/projects/67678c90-b9fd-4014-a829-b255b93dadd6/files/ec81650c-9591-4ef2-ab98-7b928ba42e88.jpg",
    title: "Земля из орбиты",
    category: "Наша планета",
    desc: "Голубой шар — единственный известный дом жизни",
    size: "medium",
  },
  {
    src: "https://cdn.poehali.dev/projects/67678c90-b9fd-4014-a829-b255b93dadd6/files/7d94cc11-6d49-4d37-831a-8ed8bcdf6262.jpg",
    title: "Астронавт в открытом космосе",
    category: "Люди в космосе",
    desc: "Выход за пределы станции — настоящее испытание",
    size: "large",
  },
  {
    src: "https://cdn.poehali.dev/projects/67678c90-b9fd-4014-a829-b255b93dadd6/files/789247ac-0f2f-4a61-b99b-033fc37a42b4.jpg",
    title: "Поверхность Марса",
    category: "Марс",
    desc: "Красная планета хранит секреты древней жизни",
    size: "medium",
  },
  {
    src: "https://cdn.poehali.dev/projects/67678c90-b9fd-4014-a829-b255b93dadd6/files/a694fb04-5c8c-416b-8cd3-79f67f743e26.jpg",
    title: "Космическая станция",
    category: "МКС",
    desc: "Международный аванпост на орбите Земли",
    size: "medium",
  },
];

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<(typeof photos)[0] | null>(null);
  const [filter, setFilter] = useState("Все");

  const categories = ["Все", ...Array.from(new Set(photos.map((p) => p.category)))];
  const filtered =
    filter === "Все" ? photos : photos.filter((p) => p.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--cosmos-mid)" }}
    >
      <hr className="cosmic-hr mb-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className="reveal inline-block mb-4 px-3 py-1 text-xs tracking-widest uppercase"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              color: "var(--cosmos-cyan)",
              border: "1px solid rgba(0,212,255,0.3)",
            }}
          >
            // gallery
          </div>
          <h2
            className="reveal font-bold text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Галерея{" "}
            <span className="neon-text">Космоса</span>
          </h2>
          <p
            className="reveal mt-4"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Нажми на фото, чтобы рассмотреть подробнее
          </p>
        </div>

        {/* Filters */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                background:
                  filter === cat ? "var(--cosmos-cyan)" : "transparent",
                color:
                  filter === cat ? "var(--cosmos-dark)" : "rgba(255,255,255,0.5)",
                border: `1px solid ${filter === cat ? "var(--cosmos-cyan)" : "rgba(255,255,255,0.15)"}`,
                borderRadius: 4,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-like grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((photo, i) => (
            <div
              key={i}
              className="reveal gallery-item rounded-xl overflow-hidden break-inside-avoid cursor-pointer"
              style={{
                border: "1px solid rgba(0,212,255,0.1)",
                marginBottom: "1rem",
              }}
              onClick={() => setLightbox(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full object-cover"
                style={{
                  height: photo.size === "large" ? 340 : 220,
                }}
              />
              <div className="overlay">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div
                    className="text-xs mb-1"
                    style={{
                      color: "var(--cosmos-cyan)",
                      fontFamily: "'IBM Plex Mono', monospace",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {photo.category}
                  </div>
                  <div
                    className="font-bold text-white"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}
                  >
                    {photo.title}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(0,212,255,0.2)",
                      border: "1px solid rgba(0,212,255,0.4)",
                    }}
                  >
                    <Icon name="ZoomIn" size={14} style={{ color: "var(--cosmos-cyan)" }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(5,8,16,0.95)", backdropFilter: "blur(20px)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              onClick={() => setLightbox(null)}
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem" }}
            >
              ESC <Icon name="X" size={16} />
            </button>

            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(0,212,255,0.2)" }}
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full object-cover"
                style={{ maxHeight: "70vh" }}
              />
              <div
                className="p-6"
                style={{ background: "var(--cosmos-mid)" }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div
                      className="text-xs mb-1"
                      style={{
                        color: "var(--cosmos-cyan)",
                        fontFamily: "'IBM Plex Mono', monospace",
                        letterSpacing: "0.15em",
                      }}
                    >
                      {lightbox.category}
                    </div>
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {lightbox.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.55)" }}>
                      {lightbox.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
