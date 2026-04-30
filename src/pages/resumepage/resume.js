import { motion } from "framer-motion";
import "./resume.css";
import Navigation from "../../components/Navigation";
import AnimatedPage from "../../components/AnimatedPage";

const education = [
  {
    title: "Bachelor of Science — Computer Science",
    institution: "Ladoke Akintola University",
    period: "Oyo State, Nigeria",
    desc: "Studied computer science with a focus on systems and software development, building the foundation for a professional engineering career.",
  },
];

const experience = [
  {
    title: "1159realty.Nig.Ltd",
    location: "Ilorin, Nigeria",
    role: "Front End Developer",
    period: "08/2025 - Present",
    bullets: [
      "Led reusable UI component architecture in Next.js, reducing feature development time by 30%",
      "Integrated multiple RESTful APIs to support dynamic property listings and real-time data updates",
      "Optimized frontend performance through efficient state management and rendering strategies",
      "Collaborated with backend engineers to define API contracts and improve data flow reliability",
      "Participated in agile workflows including sprint planning, reviews, and technical discussions",
    ],
  },
  {
    title: "Codedbus",
    location: "Ilorin, Nigeria",
    role: "Website Developer",
    period: "09/2024 - Present",
    bullets: [
      "Designed and deployed responsive web applications using Next.js and modern UI libraries",
      "Improved UX by refining layouts, accessibility, and interaction patterns",
      "Maintained and updated production websites, ensuring stability and performance optimization",
      "Worked cross-functionally to translate business requirements into technical implementations",
    ],
  },
  {
    title: "Rana",
    location: "Ilorin, Nigeria",
    role: "Front End Web Developer",
    period: "10/2023 - 04/2024",
    bullets: [
      "Built responsive interfaces using HTML, CSS, JavaScript, and Bootstrap",
      "Collaborated with designers to implement user-friendly UI/UX improvements",
      "Conducted cross-browser testing and debugging to ensure consistent performance",
      "Maintained clean, version-controlled codebases using Git",
    ],
  },
  {
    title: "Femteh IT",
    location: "Ilorin, Nigeria",
    role: "Software Development Intern",
    period: "11/2022 - 05/2023",
    bullets: [
      "Supported development and testing of web applications",
      "Assisted in debugging and improving application performance",
      "Researched and evaluated emerging technologies for potential integration",
      "Participated in agile team meetings and requirement discussions",
    ],
  },
];

const skills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript (ES6+)", level: 92 },
  { name: "TypeScript", level: 82 },
  { name: "React", level: 92 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Node.js / Express", level: 75 },
  { name: "MongoDB", level: 72 },
  { name: "REST APIs / JWT Auth", level: 88 },
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
  return (
    <AnimatedPage className="resumeSection">
      <Navigation />

      <motion.div
        className="section-header flex-center flex-column"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="heading-2">Resume</h1>
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
                <h4>{item.title}{item.location && ` | ${item.location}`}</h4>
                <span className="timeline-meta">
                  {item.role} · {item.period}
                </span>
                <ul className="timeline-bullets">
                  {item.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
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
                  {item.institution} · {item.period}
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

          <motion.p
            className="skills-intro"
            variants={sectionVariants}
          >
            Specialized in the React / Next.js ecosystem with production-grade
            full-stack experience using Node.js, Express, and MongoDB.
          </motion.p>

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
