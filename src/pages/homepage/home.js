import React from "react";
import { motion } from "framer-motion";
import "./home.css";
import Navigation from "../../components/Navigation";
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
import { SiExpress, SiMui, SiTypescript } from "react-icons/si";

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
    href: "https://www.linkedin.com/in/alade-olamide-a86304360?",
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
        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="centerWrapper flex-center flex-column">
          <motion.h1 variants={itemVariants} className="hero-title">
            Olamide Alade
          </motion.h1>

          <motion.div className="homeText" variants={itemVariants}>
            <p>
              <span className="text-gradient">Frontend Engineer</span> building production applications with React
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
        <motion.div className="homeFooterSec" variants={itemVariants}>
          <div className="engContainer">
            <p>ENG</p>
          </div>

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
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Homepage;
