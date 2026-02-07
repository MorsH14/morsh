import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./Navigation.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavClick = () => {
    setShowNav(false);
  };

  return (
    <motion.nav className="navigation" variants={itemVariants}>
      <Link to="/" className="navName" onClick={handleNavClick}>
        MorsH
      </Link>

      <div className="listWrapper">
        <ul className={`navContainer ${showNav ? "navMedia" : ""}`}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="nav-link" onClick={handleNavClick}>
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
    </motion.nav>
  );
};

export default Navigation;
