import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.css";
import {
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaTwitter,
} from "react-icons/fa6";
import { TbBrandMysql, TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { SiExpress, SiMui, SiTypescript } from "react-icons/si";
import ParticleCanvas from "../../components/ParticleCanvas";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Projects" },
  { to: "/resume", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

const techIcons = [
  { Icon: FaHtml5, label: "HTML5" },
  { Icon: FaCss3Alt, label: "CSS3" },
  { Icon: IoLogoJavascript, label: "JavaScript" },
  { Icon: FaReact, label: "React" },
  { Icon: SiMui, label: "MUI" },
  { Icon: FaNodeJs, label: "Node.js" },
  { Icon: TbBrandNextjs, label: "Next.js" },
  { Icon: TbBrandMysql, label: "MySQL" },
  { Icon: IoLogoNodejs, label: "Node" },
  { Icon: SiExpress, label: "Express" },
  { Icon: SiTypescript, label: "TypeScript" },
];

const socialLinks = [
  { href: "https://x.com/midemorsh", Icon: FaTwitter, label: "Twitter" },
  {
    href: "https://www.linkedin.com/in/olamide-alade-a86304360",
    Icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/_midemorsh/",
    Icon: FaInstagram,
    label: "Instagram",
  },
  { href: "https://github.com/MorsH14", Icon: FaGithub, label: "GitHub" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const Homepage = () => {
  return (
    <motion.div
      className="homeBodyContainer"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="homeMainContainer">
        <ParticleCanvas />
        <div className="top-spacer" style={{ height: '80px' }} /> {/* Spacer to balance Hero centered */}

        {/* Hero Content */}
        <div className="centerWrapper flex-center flex-column">
          <motion.h1 variants={itemVariants} className="hero-title">
            Olamide Alade
          </motion.h1>

          <motion.div className="homeText" variants={itemVariants}>
            <p>
              I am a <span className="text-gradient">Software Developer</span>
            </p>
          </motion.div>

          <motion.div className="iconWrapper" variants={containerVariants}>
            {techIcons.map(({ Icon, label }) => (
              <motion.div
                key={label}
                className="tech-icon-wrapper"
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.1 }}
                title={label}
              >
                <Icon size={36} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div className="homeFooterSec flex-center" variants={itemVariants}>
          <div className="socialIcons">
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Homepage;
