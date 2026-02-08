import { motion } from "framer-motion";
import "./resume.css";
import Navigation from "../../components/Navigation";
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
    title: "1159realty.Nig.Ltd",
    location: "Ilorin, Nigeria",
    role: "Front End Developer",
    period: "08/2024 - Current",
    desc: "Developed and documented reusable UI components in Next.js, reducing development time by 30% on future projects. Integrated RESTful APIs to enhance application functionality and performance. Collaborated with back-end developers and participated in daily standups to deliver features on schedule.",
  },
  {
    title: "Codedbus",
    location: "Ilorin, Nigeria",
    role: "Website Developer",
    period: "09/2024 - Current",
    desc: "Designed responsive website layouts using Next.js, MUI, and modern libraries. Collaborated with team members to enhance user experience and site functionality. Implemented website updates and maintenance for optimal performance.",
  },
  {
    title: "Rana",
    location: "Ilorin, Nigeria",
    role: "Front End Web Developer",
    period: "10/2023 - 04/2024",
    desc: "Implemented responsive web designs for mobile devices using HTML5, CSS3, JavaScript, jQuery, and Bootstrap. Collaborated with UX designers to enhance user experience and interface design. Conducted cross-browser testing and maintained code quality through Git version control.",
  },
];

const skills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "React", level: 90 },
  { name: "Next.js", level: 80 },
  { name: "Testing (Jest/RTL)", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "Express", level: 70 },
  { name: "MySQL", level: 65 },
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

          <motion.p
            className="skills-intro"
            variants={sectionVariants}
          >
            My core expertise is frontend development with the React ecosystem.
            Backend skills support full-stack ownership when projects require it.
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
