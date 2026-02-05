import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./resume.css";
import { IoArrowBack } from "react-icons/io5";
import AnimatedPage from "../../components/AnimatedPage";

const education = [
  {
    title: "Computer Science",
    institution: "Ladoke Akintola University",
    period: "2018 - 2022",
    desc: "Enrolled as a computer science student where I gained foundational knowledge of systems and software development.",
  },
  {
    title: "SSCE",
    institution: "BMHS",
    period: "2016 - 2018",
    desc: "Graduated from Baptist Model High School, based in Nigeria, Kwara State.",
  },
];

const experience = [
  {
    title: "1159realty",
    role: "Tech Associate",
    period: "08/2025",
    desc: "Engineered production-ready web applications, translating complex requirements into maintainable codebases while enforcing modern development standards, cross-browser compatibility, and performance best practices.",
  },
  {
    title: "CodedBus Information Technology Limited",
    role: "Website Developer",
    period: "07/2025",
    desc: "Development of responsive web platforms, architecting scalable UI components and optimizing performance to deliver fast, accessible, and high-quality user experiences aligned with business goals.",
  },
  {
    title: "Femtech IT Training",
    role: "Junior Developer",
    period: "10/2024 - Current",
    desc: "Contributed to full-stack application development using React.js, Node.js, and MySQL, designing modular frontend architecture and integrating backend services to support scalable and reliable systems.",
  },
];

const skills = [
  // Core Frontend
  { name: "HTML", level: 95 },
  { name: "CSS / Responsive Design", level: 90 },
  { name: "JavaScript (ES6+)", level: 85 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },

  // Backend & Fullstack
  { name: "Node.js", level: 75 },
  { name: "Express.js", level: 70 },
  { name: "REST API Design", level: 75 },
  { name: "MySQL / Database Design", level: 70 },

  // Scalable Engineering Skills
  { name: "Component Architecture", level: 80 },
  { name: "Performance Optimization", level: 75 },
  { name: "State Management", level: 70 },
  { name: "API Integration", level: 85 },
  { name: "Authentication & Security Basics", level: 65 },

  // Professional Dev Skills
  { name: "Git & Version Control", level: 85 },
  { name: "Debugging & Problem Solving", level: 85 },
  { name: "Code Refactoring", level: 75 },
  { name: "Deployment & Hosting", level: 70 },
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
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const Resume = () => {
  const navigate = useNavigate();

  return (
    <AnimatedPage className="resumeSection">
      {/* <button
        className="backBtn"
        onClick={() => navigate(-1)}
        aria-label="Go back"
      >
        <IoArrowBack size={22} />
        <span>Back</span>
      </button> */}

      <motion.div
        className="section-header flex-center flex-column"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="heading-2">Experience</h1>
        <div className="hrLine"></div>
      </motion.div>

      <div className="resume-content">
        {/* Experience & Education Grid */}
        <div className="resume-grid">
          {/* Experience */}
          <motion.div
            className="resume-column"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h2 className="resume-column-title">Experience</h2>
            {experience.map((item, i) => (
              <motion.div
                key={i}
                className="timeline-item card"
                variants={sectionVariants}
              >
                <div className="timeline-dot"></div>
                <h4>{item.title}</h4>
                <span className="timeline-meta">
                  {item.role} / {item.period}
                </span>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            className="resume-column"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h2 className="resume-column-title">Education</h2>
            {education.map((item, i) => (
              <motion.div
                key={i}
                className="timeline-item card"
                variants={sectionVariants}
              >
                <div className="timeline-dot"></div>
                <h4>{item.title}</h4>
                <span className="timeline-meta">
                  {item.institution} / {item.period}
                </span>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          className="skills-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h2 className="heading-2 section-title">Skills</h2>

          <div className="skills-grid">
            {skills.map(({ name, level }, i) => (
              <motion.div
                key={name}
                className="skill-item"
                variants={sectionVariants}
              >
                <div className="skill-header">
                  <span className="skill-name">{name}</span>
                  <span className="skill-percent">{level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                      delay: i * 0.05,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Resume;
