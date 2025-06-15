import React, { useState, useEffect } from "react";

export default function Training() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document body
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="training-page">
      <nav className="navbar">
        <div className="nav-content">
          <img src="/logo.png" alt="Datainamics Logo" className="nav-logo" />
          <div className="nav-right">
            <div className="nav-links">
              <a href="#home" className="nav-link">Home</a>
              <a href="#programs" className="nav-link">Programs</a>
              <a href="#approach" className="nav-link">Approach</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      <div className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">
            AI Engineering Training
            <span className="hero-highlight"> for the Real World</span>
          </h1>
          <p className="hero-subtitle">
            We don't just teach you how to use ChatGPT. We teach engineers how to build and integrate AI systems that change how they work—automating workflows, accelerating development, and creating new capabilities.
          </p>
          <div className="hero-badges">
            <span className="badge">Engineer-to-Engineer</span>
            <span className="badge">Hands-on Code</span>
            <span className="badge">Real Datasets</span>
            <span className="badge">Africa-first</span>
          </div>
        </div>

        <div className="training-principles">
          <h2 className="section-title">Our Training Philosophy</h2>
          <div className="principles-grid">
            {[
              {
                icon: "⚡",
                title: "Engineer-to-Engineer",
                desc: "Not high-level theory or surface tools. Real-life use cases, production-ready code, and systems thinking from engineers who've shipped AI products."
              },
              {
                icon: "🌍",
                title: "Africa-first, Globally-minded",
                desc: "Build for relevant domains like manufacturing, logistics, and energy that matter in emerging economies. Solutions that work here work everywhere."
              },
              {
                icon: "🔬",
                title: "Lab-style Immersion",
                desc: "Mini sprints, Jupyter notebooks, live APIs, real datasets. No PowerPoints. Just hands-on building with immediate feedback loops."
              },
              {
                icon: "🚀",
                title: "Production-focused",
                desc: "From prototype to deployment. Learn to build AI systems that actually work in production environments with real constraints."
              }
            ].map((principle, idx) => (
              <div key={idx} className="principle-card">
                <div className="card-icon">{principle.icon}</div>
                <h3 className="card-title">{principle.title}</h3>
                <p className="card-desc">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="training-programs" id="programs">
          <h2 className="section-title">Training Programs</h2>
          <div className="programs-grid">
            {[
              {
                level: "Foundation",
                title: "AI Systems for Engineers",
                duration: "3 days intensive",
                price: "From $1,200",
                highlights: [
                  "LLM APIs and prompt engineering",
                  "RAG systems with vector databases",
                  "AI workflow automation",
                  "Model fine-tuning basics"
                ],
                color: "#00AEEF"
              },
              {
                level: "Advanced",
                title: "Production AI Systems",
                duration: "5 days deep-dive",
                price: "From $2,500",
                highlights: [
                  "MLOps and model deployment",
                  "AI system architecture",
                  "Performance optimization",
                  "Domain-specific AI applications"
                ],
                color: "#4CAF50"
              },
              {
                level: "Specialized",
                title: "AI for African Contexts",
                duration: "2 days focused",
                price: "From $800",
                highlights: [
                  "Low-resource environment AI",
                  "Local language processing",
                  "Edge deployment strategies",
                  "Regulatory and ethical considerations"
                ],
                color: "#FF9800"
              }
            ].map((program, idx) => (
              <div key={idx} className="program-card">
                <div className="program-header">
                  <span className="program-level" style={{ color: program.color }}>
                    {program.level}
                  </span>
                  <span className="program-price">{program.price}</span>
                </div>
                <h3 className="program-title">{program.title}</h3>
                <p className="program-duration">{program.duration}</p>
                <ul className="program-highlights">
                  {program.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
                <button className="program-cta" style={{ borderColor: program.color, color: program.color }}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="training-approach" id="approach">
          <h2 className="section-title">How We Train</h2>
          <div className="approach-content">
            <div className="approach-main">
              <h3 className="approach-subtitle">Immersive, Practical, Real</h3>
              <p className="approach-desc">
                Every session combines theory with immediate practice. You'll work with real datasets from African industries—logistics networks, agricultural sensors, manufacturing processes—building AI systems that solve actual problems.
              </p>
              <div className="approach-features">
                <div className="feature">
                  <h4>Live Coding Sessions</h4>
                  <p>Build AI systems from scratch with expert guidance</p>
                </div>
                <div className="feature">
                  <h4>Real Industry Data</h4>
                  <p>Work with anonymized datasets from African businesses</p>
                </div>
                <div className="feature">
                  <h4>Production Deployment</h4>
                  <p>Deploy your AI systems to cloud platforms during training</p>
                </div>
              </div>
            </div>
            <div className="approach-stats">
              <div className="stat">
                <span className="stat-number">85%</span>
                <span className="stat-label">Hands-on Coding</span>
              </div>
              <div className="stat">
                <span className="stat-number">15%</span>
                <span className="stat-label">Theory & Context</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Real Datasets</span>
              </div>
            </div>
          </div>
        </div>

        <div className="training-domains">
          <h2 className="section-title">Focus Domains</h2>
          <div className="domains-grid">
            {[
              {
                title: "Manufacturing",
                desc: "Predictive maintenance, quality control, supply chain optimization",
                icon: "🏭",
                examples: ["Equipment failure prediction", "Visual quality inspection", "Production optimization"]
              },
              {
                title: "Logistics",
                desc: "Route optimization, demand forecasting, warehouse automation",
                icon: "🚛",
                examples: ["Last-mile delivery optimization", "Inventory management", "Fleet tracking systems"]
              },
              {
                title: "Energy",
                desc: "Grid optimization, renewable integration, demand management",
                icon: "⚡",
                examples: ["Solar output prediction", "Grid load balancing", "Energy consumption analysis"]
              },
              {
                title: "Agriculture",
                desc: "Crop monitoring, yield prediction, pest detection",
                icon: "🌾",
                examples: ["Satellite crop analysis", "Weather-based recommendations", "Market price prediction"]
              }
            ].map((domain, idx) => (
              <div key={idx} className="domain-card">
                <div className="domain-icon">{domain.icon}</div>
                <h3 className="domain-title">{domain.title}</h3>
                <p className="domain-desc">{domain.desc}</p>
                <div className="domain-examples">
                  <span className="examples-label">Use Cases:</span>
                  <ul>
                    {domain.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Build Real AI Systems?</h2>
            <p className="cta-desc">
              Join engineers who are already deploying AI in production across Africa and beyond.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary">Schedule Consultation</button>
              <button className="cta-secondary">Download Curriculum</button>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <img src="/logo.png" alt="Datainamics Logo" className="footer-logo" />
            <p className="footer-tagline">Applied AI Training • Morocco • Global Impact</p>
          </div>
          <div className="footer-links">
            <a href="#programs" className="footer-link">Programs</a>
            <a href="#approach" className="footer-link">Approach</a>
            <a href="#domains" className="footer-link">Domains</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} datainamics — Engineering AI for the Real World</p>
        </div>
      </footer>
    </div>
  );
}
