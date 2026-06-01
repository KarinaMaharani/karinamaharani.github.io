const highlights = [
  "Brand storytelling and digital presence",
  "Creative project management",
  "Content planning for campaigns and launches",
];

const projects = [
  {
    title: "Personal Branding",
    description:
      "A polished online presence focused on clear storytelling, visual consistency, and memorable first impressions.",
  },
  {
    title: "Selected Work",
    description:
      "A curated section to spotlight recent projects, collaborations, and deliverables with concise context.",
  },
  {
    title: "Community & Collaboration",
    description:
      "An overview of partnerships, teamwork, and the kind of creative opportunities Karina is open to next.",
  },
];

const timeline = [
  {
    heading: "Profile",
    detail:
      "Karina Maharani is building a thoughtful digital portfolio that blends professionalism, warmth, and clarity.",
  },
  {
    heading: "Focus Areas",
    detail:
      "Portfolio strategy, creative communication, project showcases, and relationship-driven work.",
  },
  {
    heading: "Now",
    detail:
      "Open to collaborations, portfolio reviews, and opportunities that value creativity with a structured approach.",
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/KarinaMaharani" },
  { label: "Carrd", href: "https://karina-maharani.carrd.co/" },
  { label: "Projects", href: "#projects" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <nav className="top-nav" aria-label="Section navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="hero-card">
          <p className="eyebrow">PORTFOLIO</p>
          <h1>Karina Maharani</h1>
          <p className="lead">
            Building a refined digital home for personal branding, selected
            work, and meaningful collaborations.
          </p>

          <div className="cta-row">
            <a className="primary-link" href="#projects">
              View selected work
            </a>
            <a className="secondary-link" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-aside">
          <div className="portrait" aria-hidden="true">
            KM
          </div>
          <p>
            A static Next.js portfolio page designed to feel elegant,
            approachable, and ready to grow with future work.
          </p>
        </div>
      </section>

      <section id="about" className="content-card">
        <p className="section-label">About</p>
        <div className="split-grid">
          <div>
            <h2>A concise introduction with room to expand.</h2>
            <p>
              This landing page is structured like a modern portfolio: a clear
              personal introduction, a snapshot of strengths, selected work
              areas, and direct contact pathways.
            </p>
          </div>
          <ul className="tag-list" aria-label="Highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="projects" className="content-card">
        <p className="section-label">Selected Sections</p>
        <h2>Built to mirror the essentials of a strong portfolio page.</h2>
        <div className="card-grid">
          {projects.map((project) => (
            <article key={project.title} className="info-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="journey" className="content-card">
        <p className="section-label">Journey</p>
        <div className="timeline">
          {timeline.map((item) => (
            <article key={item.heading} className="timeline-item">
              <h3>{item.heading}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="content-card contact-card">
        <div>
          <p className="section-label">Contact</p>
          <h2>Let&apos;s create something thoughtful together.</h2>
        </div>
        <ul className="contact-list">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
