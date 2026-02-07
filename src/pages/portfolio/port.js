import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./port.css";
import Navigation from "../../components/Navigation";
import { FiExternalLink } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";
import AnimatedPage from "../../components/AnimatedPage";

const projects = [
  {
    id: 1,
    title: "CRM Dashboard",
    image: "/assets/crm.png",
    tech: ["Next.js"],
    desc: "It’s designed to make tracking deals super easy from Discovery to Closed Won — giving sales teams a clear view of progress, deal value, and who’s responsible for each account.",
    link: "https://www.1159realty.com/",
    linkText: "Visit Website",
  },
  {
    id: 1,
    title: "Real Estate Website",
    image: "/assets/1159.png",
    tech: ["Next.js", "Mui emotions"],
    desc: "Built a mobile-first property platform using React and Tailwind. Features: dynamic filtering, pagination, lazy loading. Focus: performance, intuitive UX, clean UI.",
    link: "https://www.1159realty.com/",
    linkText: "Visit Website",
  },
  {
    id: 2,
    title: "Job Search Web App",
    image: "/assets/rana.png",
    tech: ["Next.js", "SSR"],
    desc: "Developed a searchable job board using Next.js with SSR. Features: search filters, job details modal, location sorting. Focus: speed, SEO, component reuse.",
    link: "https://rana-ochre.vercel.app",
    linkText: "Visit Website",
  },
  {
    id: 3,
    title: "Fashion Designer Portfolio",
    image: "/assets/image.png",
    tech: ["MUI", "Emotion"],
    desc: "Designed an elegant brand site using MUI and Emotion. Features: contact form, gallery, modern animations. Focus: minimalist UX, storytelling, responsive layout.",
    link: "https://morshclothiers.vercel.app/",
    linkText: "Visit Website",
  },
  {
    id: 4,
    title: "Startup Landing Pages",
    image: "/assets/bb.png",
    tech: ["React"],
    desc: "Delivered conversion-focused pages with React. Focus: strong CTAs, fast load times, responsive design. Used for demo projects and freelance showcases.",
    link: "https://example.com",
    linkText: "See Demo",
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
  const navigate = useNavigate();
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
        Here are some of the websites I've worked on
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
              </div>
            </div>

            <div className="projectInfo">
              <div
                className="projectTitleRow"
                onClick={() => toggleDetails(project.id)}
              >
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
                  aria-label="Toggle details"
                >
                  <HiChevronDown size={22} />
                </button>
              </div>

              <AnimatePresence>
                {showDetails === project.id && (
                  <motion.div
                    className="projectDetails"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p>{project.desc}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary projectLink"
                    >
                      {project.linkText}
                      <FiExternalLink size={14} />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedPage>
  );
};

export default Portfolio;
