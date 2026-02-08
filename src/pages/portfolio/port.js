import { useState } from "react";
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
    tech: ["Next.js", "React", "Server Components"],
    desc: "Built a sales pipeline dashboard for real estate teams to track deals from Discovery to Closed Won. Implemented drag-and-drop functionality, real-time deal value calculations, and role-based access. Improved sales team visibility and reduced time spent on status updates.",
    link: "https://www.1159realty.com/",
    linkText: "Visit Website",
  },
  {
    id: 2,
    title: "Real Estate Platform",
    image: "/assets/1159.png",
    tech: ["Next.js", "MUI", "Responsive Design"],
    desc: "Developed a property listing platform with advanced filtering, pagination, and lazy loading for optimal performance. Mobile-first approach with focus on Core Web Vitals. Integrated Google Maps API for location-based search. Handles hundreds of listings with smooth UX.",
    link: "https://www.1159realty.com/",
    linkText: "Visit Website",
  },
  {
    id: 3,
    title: "Job Search Application",
    image: "/assets/rana.png",
    tech: ["Next.js", "SSR", "SEO"],
    desc: "Built a searchable job board with server-side rendering for SEO. Implemented dynamic filters, job detail modals, and location-based sorting. Optimized for fast load times and search engine visibility. Focused on reusable component architecture.",
    link: "https://rana-ochre.vercel.app",
    linkText: "Visit Website",
  },
  {
    id: 4,
    title: "Fashion Designer Portfolio",
    image: "/assets/image.png",
    tech: ["React", "MUI", "Emotion"],
    desc: "Created an elegant portfolio site for a fashion designer with image gallery, contact form, and smooth animations. Emphasized visual storytelling with minimalist layout. Implemented responsive design that showcases work beautifully on all devices.",
    link: "https://morshclothiers.vercel.app/",
    linkText: "Visit Website",
  },
  {
    id: 5,
    title: "Startup Landing Pages",
    image: "/assets/bb.png",
    tech: ["React", "Tailwind CSS"],
    desc: "Designed and developed conversion-focused landing pages for early-stage startups. Strong CTAs, fast load times, and mobile-responsive layouts. Used for client projects and freelance work to help businesses establish online presence quickly.",
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
