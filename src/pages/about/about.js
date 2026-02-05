import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./about.css";
import { IoArrowBack } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { HiOutlineCode, HiOutlineLightningBolt, HiOutlineDeviceMobile } from "react-icons/hi";
import { FiLayers, FiServer } from "react-icons/fi";
import Marquee from "react-fast-marquee";
import AnimatedPage from "../../components/AnimatedPage";

const services = [
  {
    Icon: FaReact,
    title: "Frontend Architecture",
    desc: "Designing and building scalable frontend systems with React and Next.js — component libraries, state management patterns, and code-split architectures that keep large apps maintainable.",
  },
  {
    Icon: FiLayers,
    title: "UI/UX Engineering",
    desc: "Translating complex designs into pixel-perfect, accessible interfaces. Deep focus on interaction design, micro-animations, and creating experiences that feel intuitive at every breakpoint.",
  },
  {
    Icon: HiOutlineDeviceMobile,
    title: "Responsive & Mobile-First",
    desc: "Engineering fluid layouts and adaptive experiences across every device. Progressive enhancement, touch optimization, and performance budgets tailored for mobile networks.",
  },
  {
    Icon: FiServer,
    title: "Full-Stack Development",
    desc: "End-to-end development with Node.js, Express, and MySQL. RESTful APIs, authentication flows, server-side rendering, and database schema design built for production workloads.",
  },
  {
    Icon: SiTypescript,
    title: "TypeScript & Code Quality",
    desc: "Strongly typed codebases with TypeScript, enforced linting, and structured code reviews. Writing code that's not just functional, but readable, testable, and easy to onboard into.",
  },
  {
    Icon: HiOutlineLightningBolt,
    title: "Performance Optimization",
    desc: "Auditing and eliminating bottlenecks — lazy loading, bundle analysis, image optimization, caching strategies, and Core Web Vitals tuning to ship fast experiences.",
  },
  {
    Icon: TbBrandNextjs,
    title: "Next.js & SSR/SSG",
    desc: "Leveraging Next.js for server-side rendering, static generation, and ISR. SEO-optimized builds with dynamic routing, API routes, and seamless deployment pipelines.",
  },
  {
    Icon: HiOutlineCode,
    title: "Technical Consulting",
    desc: "Advising teams on architecture decisions, tech stack selection, and development workflows. Code audits, migration strategies, and mentoring junior developers to level up.",
  },
];

const testimonials = [
  {
    name: "Mary Herson",
    location: "United States",
    img: "/assets/r1.jpeg",
    text: "Alade's technical skills are solid, and he delivered a well-coded website. However, his communication could use some improvement. There were times when it was difficult to get timely updates on the project's progress.",
  },
  {
    name: "David H.",
    location: "United States",
    img: "/assets/r2.jpeg",
    text: "Olamide exceeded our expectations with her web development skills. She created a sleek, modern site that performs exceptionally well. Her innovative approach and proactive problem-solving were impressive.",
  },
  {
    name: "Fred Scott",
    location: "New York",
    img: "/assets/r3.jpeg",
    text: "Alade is a talented developer with a knack for creating responsive and engaging websites. He was easy to work with and communicated well throughout the project.",
  },
  {
    name: "Adebisi Susan",
    location: "Nigeria",
    img: "/assets/r4.jpeg",
    text: "Olamide did a great job on our e-commerce platform. The new features he implemented increased our sales and improved user experience. We are very satisfied with the outcome.",
  },
  {
    name: "Kate Gat.",
    location: "South Africa",
    img: "/assets/r5.jpeg",
    text: "Olamide did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes. Highly recommended.",
  },
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
  const navigate = useNavigate();

  return (
    <AnimatedPage className="aboutSection">
      {/* Back Button */}
      {/* <button
        className="backBtn"
        onClick={() => navigate(-1)}
        aria-label="Go back"
      >
        <IoArrowBack size={22} />
        <span>Back</span>
      </button> */}

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
            <h3>
              Frontend Engineer building scalable, high-performance web
              applications.
            </h3>
            <p>
              I build fast, scalable web apps that don’t just work, they feel
              good to use. Frontend Engineer crafting clean React & Next.js
              experiences with performance, SEO, and great UI at the core. And a
              slightly more playful alt: Turning ideas into smooth,
              high-performance web experiences. Frontend Engineer obsessed with
              React, Next.js, and making the web feel effortless.
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

      {/* Testimonials */}
      <div className="testimonialSection">
        <h1 className="heading-2 section-title">Testimonials</h1>

        <Marquee pauseOnHover speed={40} gradient={false}>
          <div className="testimonialTrack">
            {testimonials.map(({ name, location, img, text }, i) => (
              <div key={i} className="testimonialCard card-glass">
                <div className="testimonialHeader">
                  <div className="testimonialAuthor">
                    <img
                      src={img}
                      alt={name}
                      className="testImg"
                      loading="lazy"
                    />
                    <div>
                      <h5>{name}</h5>
                      <span>{location}</span>
                    </div>
                  </div>
                </div>
                <p className="testimonialText">{text}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </AnimatedPage>
  );
};

export default About;
