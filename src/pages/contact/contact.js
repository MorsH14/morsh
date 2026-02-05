import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./contact.css";
import { IoArrowBack } from "react-icons/io5";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaTwitter, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Toaster, toast } from "sonner";
import { useForm, ValidationError } from "@formspree/react";
import AnimatedPage from "../../components/AnimatedPage";

const contactInfo = [
  {
    Icon: HiOutlineMail,
    label: "Email",
    value: "midemorsh@gmail.com",
    href: "mailto:midemorsh@gmail.com",
  },
  {
    Icon: HiOutlineLocationMarker,
    label: "Location",
    value: "Lagos, Nigeria",
  },
];

const socialLinks = [
  { href: "https://x.com/midemorsh", Icon: FaTwitter, label: "Twitter" },
  {
    href: "https://www.linkedin.com/in/olamide-alade-a86304360",
    Icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/MorsH14", Icon: FaGithub, label: "GitHub" },
];

const Contact = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xanjvppd");
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMsg((prev) => ({ ...prev, [name]: value }));
  };

  const customSubmit = async (e) => {
    e.preventDefault();

    const isEmpty = Object.values(msg).some((val) => val.trim() === "");
    if (isEmpty) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await handleSubmit(e);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!");
      setMsg({ name: "", email: "", subject: "", message: "" });
    }
    if (state.errors && state.errors.length > 0) {
      toast.error("Failed to send message. Please check the form.");
    }
  }, [state.succeeded, state.errors]);

  return (
    <AnimatedPage className="contactSection">
      <button
        className="backBtn"
        onClick={() => navigate(-1)}
        aria-label="Go back"
      >
        <IoArrowBack size={22} />
        <span>Back</span>
      </button>

      <Toaster position="top-center" richColors />

      <div className="contact-wrapper">
        {/* Left — Info Side */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="contact-tag">Get in Touch</span>
          <h1 className="contact-heading">
            Let's build something <span className="text-gradient">great</span>{" "}
            together.
          </h1>
          <p className="contact-desc">
            Have a project idea, a question, or just want to say hello? I'm
            always open to new opportunities and collaborations.
          </p>

          <div className="contact-details">
            {contactInfo.map(({ Icon, label, value, href }) => (
              <div key={label} className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Icon size={20} />
                </div>
                <div>
                  <span className="contact-detail-label">{label}</span>
                  {href ? (
                    <a href={href} className="contact-detail-value">
                      {value}
                    </a>
                  ) : (
                    <span className="contact-detail-value">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-socials">
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                className="contact-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — Form Side */}
        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <form
            onSubmit={customSubmit}
            className="contactForm"
            aria-label="Contact form"
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  name="name"
                  placeholder="Your name"
                  value={msg.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  name="email"
                  placeholder="you@example.com"
                  value={msg.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                className="form-input"
                name="subject"
                placeholder="What's this about?"
                value={msg.subject}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                className="form-input form-textarea"
                name="message"
                placeholder="Tell me about your project..."
                value={msg.message}
                onChange={handleChange}
                required
                aria-required="true"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
