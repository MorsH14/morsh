import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./Navbar.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Projects" },
  { to: "/resume", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  const closeNav = useCallback(() => setShowNav(false), []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showNav ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showNav]);

  // Close nav on route change
  useEffect(() => {
    setShowNav(false);
  }, [location]);

  return (
    <nav className="global-nav">
      <Link to="/" className="navName">
        <span style={{ color: "white" }}>MorsH</span>DEV
      </Link>

      <div className="listWrapper">
        {/* Backdrop overlay */}
        <div
          className={`nav-overlay ${showNav ? "active" : ""}`}
          onClick={closeNav}
        />
        <ul className={`navContainer ${showNav ? "navMedia" : ""}`}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="nav-link" onClick={closeNav}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="menuToggle"
        onClick={() => setShowNav(!showNav)}
        aria-label={showNav ? "Close menu" : "Open menu"}
      >
        {showNav ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
      </button>
    </nav>
  );
};

export default Navbar;
