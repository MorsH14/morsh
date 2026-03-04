import { useState } from "react";
import { motion } from "framer-motion";
import "./port.css";
import Navigation from "../../components/Navigation";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";
import AnimatedPage from "../../components/AnimatedPage";

const projects = [
  {
    id: 6,
    title: "Leads Generation Platform",
    image: "/assets/l1.jpeg",
    tech: ["Next.js", "TypeScript", "Vercel"],
    desc: "A full-stack real estate lead management system built with Next.js and Supabase. The application captures and securely stores prospect inquiries in a PostgreSQL database, triggers instant email notifications for fast follow-ups, and delivers a clean, conversion-focused user experience designed to prevent lost leads.",
    link: "https://leads-gen-orpin.vercel.app",
    linkText: "Visit Website",
    repo: "https://github.com/MorsH14/leads-automation",
  },
  {
    id: 1,
    title: "CRM Dashboard",
    image: "/assets/crm.png",
    tech: ["Next.js", "React", "Server Components"],
    desc: "A full-featured CRM portal built with Next.js and React Server Components. The application tracks deals across pipeline stages from Discovery to Closed Won, enforces role-based access control with secure authentication, and delivers real-time value calculations designed to keep sales teams aligned and reduce time lost on manual status updates.",
    link: "https://v0-crm-frontend-build.vercel.app",
    linkText: "Visit Website",
    repo: "https://github.com/MorsH14/CRM-Frontend",
  },
  {
    id: 3,
    title: "Job Search Application",
    image: "/assets/rana.png",
    tech: ["Next.js", "React", "SSR"],
    desc: "A full-featured job discovery platform built with Next.js and server-side rendering. The application serves curated listings from major employers with multi-layered filtering by schedule and employment type, renders detailed job views with company branding and pay rates, and delivers a mobile-first interface designed to serve both job seekers and recruiters in a single product.",
    link: "https://rana-ochre.vercel.app",
    linkText: "Visit Website",
    repo: "https://github.com/MorsH14/rana-v3",
  },
  {
    id: 4,
    title: "Fashion Brand Website",
    image: "/assets/image.png",
    tech: ["React", "MUI", "Emotion"],
    desc: "A brand identity website built with React and Material UI. The application presents MorsH Clothiers' aesthetic through a minimalist layout, smooth page animations, and a refined typographic system — designed to communicate the label's visual identity and establish a polished, professional presence on the web.",
    link: "https://morshclothiers.vercel.app/",
    linkText: "Visit Website",
    repo: null,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

const Portfolio = () => {
  const [showDetails, setShowDetails] = useState(null);

  const toggleDetails = (index) => {
    setShowDetails(showDetails === index ? null : index);
  };

  return (
    <AnimatedPage className="portfolioSection">
      <Navigation />

      <motion.div
        className="section-header flex-center flex-column"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="heading-2">Projects</h1>
        <div className="hrLine"></div>
      </motion.div>

      <motion.p
        className="portfolio-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Production applications I've built for real businesses and users
      </motion.p>

      <div className="projectsGrid">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="projectCard"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="projectImageWrapper">
              <img
                src={project.image}
                alt={project.title}
                className="projectImage"
                loading="lazy"
              />
              <div className="projectImageOverlay">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  {project.linkText}
                  <FiExternalLink size={14} />
                </a>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    GitHub
                    <FiGithub size={14} />
                  </a>
                )}
              </div>
            </div>

            <div className="projectInfo">
              <div className="projectTitleRow">
                <div>
                  <h3 className="projectTitle">{project.title}</h3>
                  <div className="techTags">
                    {project.tech.map((t) => (
                      <span key={t} className="techTag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  className={`expandBtn ${showDetails === project.id ? "expanded" : ""}`}
                  onClick={() => toggleDetails(project.id)}
                  aria-label="Toggle details"
                >
                  <HiChevronDown size={22} />
                </button>
              </div>

              {showDetails === project.id && (
                <motion.div
                  className="projectDetails"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p>{project.desc}</p>
                  <div className="projectLinks">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary projectLink"
                    >
                      {project.linkText}
                      <FiExternalLink size={14} />
                    </a>
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary projectLink"
                      >
                        View on GitHub
                        <FiGithub size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedPage>
  );
};

export default Portfolio;
