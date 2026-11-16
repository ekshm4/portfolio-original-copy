import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="nav-left">
          <h1 className="nav-logo">SEK</h1>
          <div className="nav-names">
            <p>Shima Ebenezer</p>
            <p>Kabare.</p>
          </div>
        </div>
        <div className="nav-center">
          <p>available for Talk.</p>
          <p>Shimaebinezer@gmail.com</p>
          <p>+250791387381.</p>
        </div>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          <ul className="nav-list-left">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a>.</li>
            <li><a href="#mission" onClick={() => setMenuOpen(false)}>Mission</a>.</li>
            <li><a href="#philosophy" onClick={() => setMenuOpen(false)}>Philosophy</a>.</li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>.</li>
          </ul>
          <ul className="nav-list-right">
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>.</li>
            <li><a href="#cv" onClick={() => setMenuOpen(false)}>CV</a>.</li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>.</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
