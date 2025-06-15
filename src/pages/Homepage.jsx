import React, { useState, useEffect } from "react";

export default function Homepage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setIsDarkMode(saved === 'dark');
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="nav-content">
          <img src="/logo.png" alt="Datainamics Logo" className="nav-logo" />  
          <div className="nav-right">
            <div className="nav-links">
              <a href="#training" className="nav-link training-nav-link">
                <span className="nav-icon">🎓</span> Training
              </a>
              <a href="#about" className="nav-link">About</a>
              <a href="#research" className="nav-link">Research</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
            <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle theme">
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      <div className="main-content">
        {/* Hero */}
        <h1 className="hero-title">
          Applied AI Research Lab <span className="hero-highlight">Building the Future</span>
        </h1>
        <p className="hero-subtitle">
          datainamics is an Applied AI Research Lab based in Morocco, with a global outlook and an Africa-first mindset.
        </p>
        <p className="hero-mission">
          Our mission: bridge cutting-edge AI research to deployable, domain-grounded solutions.
        </p>
        <div className="hero-actions">
          <a href="#training" className="cta-button primary">Explore AI Training Programs</a>
          <a href="#research" className="cta-button secondary">View Our Research</a>
        </div>

        {/* Go-to-Training Button */}
        <div className="go-training-wrapper">
          <a href="#training" className="cta-button primary">
            Go to Training
          </a>
        </div>

        {/* Training Preview */}
        <div className="training-preview">
          {/* ...existing code for preview... */}
        </div>

        {/* Principles, Focus Areas, Values, Footer CTA, Footer */}
        {/* ...existing code remains... */}
      </div>
    </div>
  );
}
