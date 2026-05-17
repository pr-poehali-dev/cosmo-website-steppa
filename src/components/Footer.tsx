import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{
        background: "var(--cosmos-dark)",
        borderTop: "1px solid rgba(0,212,255,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: "radial-gradient(circle, var(--cosmos-cyan), var(--cosmos-purple))",
              boxShadow: "0 0 16px rgba(0,212,255,0.5)",
            }}
          >
            <Icon name="Orbit" size={16} className="text-white" />
          </div>
          <div>
            <div
              className="font-bold tracking-widest text-sm"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: "var(--cosmos-cyan)",
              }}
            >
              COSMOS UNVEILED
            </div>
            <div
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Exploring the infinite
            </div>
          </div>
        </div>

        <div
          className="text-xs text-center"
          style={{
            color: "rgba(255,255,255,0.25)",
            fontFamily: "'IBM Plex Mono', monospace",
            letterSpacing: "0.1em",
          }}
        >
          © 2026 COSMOS UNVEILED · Все права защищены
        </div>

        <div className="flex items-center gap-2">
          {[
            { icon: "Star", label: "Следи за звёздами" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.2)",
              }}
            >
              <Icon name={icon as "Star"} size={14} style={{ color: "var(--cosmos-cyan)" }} />
              <span
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-8 mx-auto text-center px-6 pb-2"
        style={{ maxWidth: 600 }}
      >
        <div
          className="px-6 py-4 rounded-2xl"
          style={{
            background: "rgba(0,212,255,0.06)",
            border: "1px solid rgba(0,212,255,0.15)",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            А если нравится моё творчество —{" "}
            <span style={{ color: "var(--cosmos-cyan)" }}>
              подпишись на мой канал в MAX
            </span>
            , где я публикую свои постройки в{" "}
            <span style={{ color: "var(--cosmos-cyan)" }}>SFS</span> ✦
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;