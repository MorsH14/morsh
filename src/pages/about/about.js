import { motion } from "framer-motion";
import "./about.css";
import Navigation from "../../components/Navigation";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiWebflow } from "react-icons/si";
import AnimatedPage from "../../components/AnimatedPage";

const services = [
  {
    Icon: ImHtmlFive2,
    title: "Frontend Development",
    desc: "Building production-ready React and Next.js applications with focus on performance, SEO, and user experience. Specialized in component architecture and state management.",
  },
  {
    Icon: DiJavascript,
    title: "UI/UX Implementation",
    desc: "Translating designs into pixel-perfect, accessible interfaces. Expert in CSS-in-JS, Tailwind, and MUI with attention to responsive behavior and interaction design.",
  },
  {
    Icon: FaReact,
    title: "Performance Optimization",
    desc: "Improving Core Web Vitals, reducing bundle sizes, implementing code splitting and lazy loading. Making fast sites that convert better.",
  },
  {
    Icon: SiWebflow,
    title: "Full-Stack Development",
    desc: "End-to-end ownership when needed. Building REST APIs, handling authentication, and database design with Node.js, Express, and MySQL.",
  },
  {
    Icon: FaNodeJs,
    title: "API Integration",
    desc: "Connecting frontends to REST and GraphQL APIs. Implementing proper error handling, loading states, and data caching for better UX.",
  },
  {
    Icon: SiMysql,
    title: "Testing & Quality",
    desc: "Writing unit and integration tests with Jest and React Testing Library. Ensuring code reliability and catching bugs before production.",
  },
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

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const About = () => {
  return (
    <AnimatedPage className="aboutSection">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <motion.div
        className="section-header flex-center flex-column"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h1 className="heading-2">About Me</h1>
        <div className="hrLine"></div>
      </motion.div>

      {/* Profile Section */}
      <div className="aboutImgContainer">
        <motion.div
          className="aboutImgSec"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />

        <div className="textSection">
          <motion.div
            className="aboutText"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h3>Frontend Engineer with Full-Stack Capabilities</h3>
            <p>
              I'm Olamide Alade, a Frontend Engineer based in Nigeria with 3+
              years of production experience building scalable, SEO-optimized
              web applications. I've delivered projects across real estate
              platforms, job search tools, and e-commerce sites that handle real
              users and drive business outcomes.
            </p>
            <p>
              My expertise centers on the React ecosystem — React, Next.js,
              TypeScript — with a strong foundation in responsive design,
              performance optimization, and accessibility. I also work
              comfortably on the backend with Node.js, Express, and MySQL when
              full-stack ownership is needed.
            </p>
            <p>
              I write clean, maintainable code and believe great interfaces
              balance user needs with business goals. Let's build something that
              works.
            </p>
          </motion.div>

          <motion.a
            href="/assets/Olamide_Alade_Resume.docx"
            className="btn btn-primary"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Download CV
          </motion.a>

          <motion.div
            className="iconFlex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {socialLinks.map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                variants={sectionVariants}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services */}
      <motion.div
        className="services-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <h1 className="heading-2 section-title">My Services</h1>

        <div className="servicesGrid">
          {services.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={i}
              className="serviceCard card"
              variants={sectionVariants}
            >
              <Icon className="serviceIcon" size={40} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certification */}
      <motion.div
        className="cert-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h1 className="heading-2 section-title">Certification</h1>
        <div className="cert-image-wrapper">
          <img
            src="assets/certificate_fiti.jpg"
            alt="FITI Certificate"
            loading="lazy"
            width={300}
          />
        </div>
      </motion.div>
    </AnimatedPage>
  );
};

export default About;
