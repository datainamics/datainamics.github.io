import React from "react";

export default function Homepage() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="nav-content">
          <img src="/logo.png" alt="Datainamics Logo" className="nav-logo" />
          <div className="nav-links">
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Principles</a>
            <a href="#" className="nav-link">Contact</a>
          </div>Ò
        </div>
      </nav>

      <div className="main-content">
        <h1 className="hero-title">
          Applied AI Systems for the Real World
        </h1>
        <p className="hero-subtitle">
          datainamics is an applied AI research lab building intelligent systems that bridge science and deployment — grounded in purpose, engineered for production.
        </p>

        <div className="principles-grid">
          {[
            {
              title: "Research that Deploys",
              desc: "We go beyond papers. Our systems are meant to run in the wild — embedded in tools, platforms, and processes where robustness matters. Every model is built with execution and iteration in mind.",
            },
            {
              title: "Trust by Design",
              desc: "We architect for reliability from the start. Traceability, resilience, alignment with human intent — trust isn't an afterthought. It's embedded into every system we ship.",
            },
            {
              title: "Africa First. Globally Relevant.",
              desc: "We focus on high-friction, underrepresented problems in African contexts — education, agriculture, logistics. Solutions we build here often generalize globally.",
            },
          ].map((card, idx) => (
            <div key={idx} className="principle-card">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} datainamics. — Applied AI Lab</p>
      </footer>
    </div>
  );
}
