import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./contact.css";
import Navigation from "../../components/Navigation";
import { Toaster, toast } from "sonner";
import { useForm } from "@formspree/react";
import AnimatedPage from "../../components/AnimatedPage";
import { FiMail, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

// Validation functions
const validators = {
  name: (value) => {
    if (!value.trim()) return "Name is required";
    if (value.trim().length < 2) return "Name must be at least 2 characters";
    if (value.trim().length > 50) return "Name must be less than 50 characters";
    return "";
  },
  email: (value) => {
    if (!value.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Please enter a valid email address";
    return "";
  },
  subject: (value) => {
    if (!value.trim()) return "Subject is required";
    if (value.trim().length < 3) return "Subject must be at least 3 characters";
    return "";
  },
  message: (value) => {
    if (!value.trim()) return "Message is required";
    if (value.trim().length < 10)
      return "Message must be at least 10 characters";
    return "";
  },
};

const contactInfo = [
  {
    Icon: FiMail,
    label: "Email",
    value: "midemorsh@gmail.com",
    href: "mailto:midemorsh@gmail.com",
  },
  {
    Icon: FiMapPin,
    label: "Location",
    value: "Ilorin, Nigeria",
  },
];

const socialLinks = [
  { href: "https://x.com/midemorsh", Icon: FaTwitter, label: "Twitter" },
  {
    href: "https://www.linkedin.com/in/alade-olamide-a86304360",
    Icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/MorsH14", Icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.instagram.com/_midemorsh/",
    Icon: FaInstagram,
    label: "Instagram",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const Contact = () => {
  const [state, handleSubmit] = useForm("xanjvppd");
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [touched, setTouched] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Watch for Formspree state changes (fixes async state issue)
  useEffect(() => {
    if (hasSubmitted && state.succeeded) {
      setIsSuccess(true);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setMsg({ name: "", email: "", subject: "", message: "" });
      setTouched({});
      setErrors({});
      setHasSubmitted(false);

      setTimeout(() => setIsSuccess(false), 5000);
    }

    if (hasSubmitted && state.errors && state.errors.length > 0) {
      toast.error("Failed to send message. Please try again.");
      setHasSubmitted(false);
    }
  }, [state.succeeded, state.errors, hasSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMsg((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validators[name](value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validators[name](value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const customSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: validators.name(msg.name),
      email: validators.email(msg.email),
      subject: validators.subject(msg.subject),
      message: validators.message(msg.message),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (hasErrors) {
      toast.error("Please fix the errors before submitting");
      const firstErrorField = Object.keys(newErrors).find(
        (key) => newErrors[key],
      );
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    setHasSubmitted(true);
    await handleSubmit(e);
  };

  return (
    <AnimatedPage className="contactSection">
      <Navigation />
      <Toaster position="top-right" richColors />

      <motion.div
        className="section-header flex-center flex-column"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="heading-2">Get In Touch</h1>
        <div className="hrLine"></div>
        <p className="contact-hero-desc">
          Have a project in mind or want to work together? I'd love to hear from
          you. Fill out the form or reach out directly.
        </p>
      </motion.div>

      <div className="contact-layout">
        {/* Left Panel - Contact Info */}
        <motion.div
          className="contact-info-panel"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ delay: 0.15 }}
        >
          <div className="contact-info-cards">
            {contactInfo.map(({ Icon, label, value, href }) => (
              <div key={label} className="contact-info-card">
                <div className="contact-info-icon">
                  <Icon size={20} />
                </div>
                <div>
                  <span className="contact-info-label">{label}</span>
                  {href ? (
                    <a href={href} className="contact-info-value contact-link">
                      {value}
                    </a>
                  ) : (
                    <span className="contact-info-value">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-availability">
            <span className="availability-dot"></span>
            Available for freelance & full-time opportunities
          </div>

          <div className="contact-socials">
            <span className="contact-socials-label">Find me on</span>
            <div className="contact-socials-row">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Panel - Form */}
        <motion.div
          className="contact-form-panel"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                className="success-state"
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="success-icon-wrapper">
                  <FiCheckCircle size={48} />
                </div>
                <h3>Message Sent!</h3>
                <p>
                  Thanks for reaching out. I'll review your message and get back
                  to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={customSubmit}
                className="contactForm"
                aria-label="Contact form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="form-row">
                  <div
                    className={`form-group ${errors.name && touched.name ? "form-group-error" : ""}`}
                  >
                    <input
                      type="text"
                      id="name"
                      className="form-input"
                      name="name"
                      placeholder=" "
                      value={msg.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      aria-required="true"
                      aria-invalid={
                        errors.name && touched.name ? "true" : "false"
                      }
                      aria-describedby={
                        errors.name && touched.name ? "name-error" : undefined
                      }
                    />
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    {errors.name && touched.name && (
                      <span id="name-error" className="form-error" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div
                    className={`form-group ${errors.email && touched.email ? "form-group-error" : ""}`}
                  >
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      name="email"
                      placeholder=" "
                      value={msg.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      aria-required="true"
                      aria-invalid={
                        errors.email && touched.email ? "true" : "false"
                      }
                      aria-describedby={
                        errors.email && touched.email
                          ? "email-error"
                          : undefined
                      }
                    />
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    {errors.email && touched.email && (
                      <span
                        id="email-error"
                        className="form-error"
                        role="alert"
                      >
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={`form-group ${errors.subject && touched.subject ? "form-group-error" : ""}`}
                >
                  <input
                    type="text"
                    id="subject"
                    className="form-input"
                    name="subject"
                    placeholder=" "
                    value={msg.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-required="true"
                    aria-invalid={
                      errors.subject && touched.subject ? "true" : "false"
                    }
                    aria-describedby={
                      errors.subject && touched.subject
                        ? "subject-error"
                        : undefined
                    }
                  />
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  {errors.subject && touched.subject && (
                    <span
                      id="subject-error"
                      className="form-error"
                      role="alert"
                    >
                      {errors.subject}
                    </span>
                  )}
                </div>

                <div
                  className={`form-group ${errors.message && touched.message ? "form-group-error" : ""}`}
                >
                  <textarea
                    id="message"
                    className="form-input form-textarea"
                    name="message"
                    placeholder=" "
                    value={msg.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-required="true"
                    aria-invalid={
                      errors.message && touched.message ? "true" : "false"
                    }
                    aria-describedby={
                      errors.message && touched.message
                        ? "message-error"
                        : undefined
                    }
                  />
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  {errors.message && touched.message && (
                    <span
                      id="message-error"
                      className="form-error"
                      role="alert"
                    >
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={state.submitting}
                  aria-busy={state.submitting}
                >
                  {state.submitting ? (
                    <>
                      <motion.div
                        className="spinner"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend size={16} />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
