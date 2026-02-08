import { useState } from "react";
import { motion } from "framer-motion";
import "./contact.css";
import Navigation from "../../components/Navigation";
import { Toaster, toast } from "sonner";
import { useForm } from "@formspree/react";
import AnimatedPage from "../../components/AnimatedPage";

// Validation functions
const validators = {
  name: (value) => {
    if (!value.trim()) return "Name is required";
    if (value.trim().length < 2) return "Name must be at least 2 characters";
    if (value.trim().length > 50) return "Name must be less than 50 characters";
    if (!/^[a-zA-Z\s'-]+$/.test(value)) return "Name contains invalid characters";
    return "";
  },

  email: (value) => {
    if (!value.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    if (value.length > 100) return "Email is too long";
    return "";
  },

  subject: (value) => {
    if (!value.trim()) return "Subject is required";
    if (value.trim().length < 3) return "Subject must be at least 3 characters";
    if (value.trim().length > 100) return "Subject must be less than 100 characters";
    return "";
  },

  message: (value) => {
    if (!value.trim()) return "Message is required";
    if (value.trim().length < 10) return "Message must be at least 10 characters";
    if (value.trim().length > 1000) return "Message must be less than 1000 characters";
    return "";
  }
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
    message: ""
  });
  const [touched, setTouched] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMsg((prev) => ({ ...prev, [name]: value }));

    // Real-time validation for touched fields
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

    // Validate all fields
    const newErrors = {
      name: validators.name(msg.name),
      email: validators.email(msg.email),
      subject: validators.subject(msg.subject),
      message: validators.message(msg.message)
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    // Check if any errors
    const hasErrors = Object.values(newErrors).some(error => error !== "");
    if (hasErrors) {
      toast.error("Please fix the errors before submitting");
      // Focus first error field
      const firstErrorField = Object.keys(newErrors).find(key => newErrors[key]);
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    await handleSubmit(e);

    if (state.succeeded) {
      setIsSuccess(true);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setMsg({ name: "", email: "", subject: "", message: "" });
      setTouched({});
      setErrors({});

      // Reset success state after animation
      setTimeout(() => setIsSuccess(false), 3000);
    } else if (state.errors && state.errors.length > 0) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <AnimatedPage className="contactSection">
      <Navigation />

      <motion.div
        className="section-header flex-center flex-column"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="heading-2">Contact Me</h1>
        <div className="hrLine"></div>
      </motion.div>

      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h3 className="contact-subtitle">Let's work together</h3>
        <p className="contact-desc">
          Have a project in mind or want to collaborate? Send me a message and
          I'll get back to you.
        </p>

        <Toaster position="top-center" richColors />

        <form
          onSubmit={customSubmit}
          className="contactForm"
          aria-label="Contact form"
        >
          <div className="form-row">
            <div className={`form-group ${errors.name && touched.name ? 'form-group-error' : ''}`}>
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
                aria-invalid={errors.name && touched.name ? "true" : "false"}
                aria-describedby={errors.name && touched.name ? "name-error" : undefined}
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

            <div className={`form-group ${errors.email && touched.email ? 'form-group-error' : ''}`}>
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
                aria-invalid={errors.email && touched.email ? "true" : "false"}
                aria-describedby={errors.email && touched.email ? "email-error" : undefined}
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
              {errors.email && touched.email && (
                <span id="email-error" className="form-error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          <div className={`form-group ${errors.subject && touched.subject ? 'form-group-error' : ''}`}>
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
              aria-invalid={errors.subject && touched.subject ? "true" : "false"}
              aria-describedby={errors.subject && touched.subject ? "subject-error" : undefined}
            />
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            {errors.subject && touched.subject && (
              <span id="subject-error" className="form-error" role="alert">
                {errors.subject}
              </span>
            )}
          </div>

          <div className={`form-group ${errors.message && touched.message ? 'form-group-error' : ''}`}>
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
              aria-invalid={errors.message && touched.message ? "true" : "false"}
              aria-describedby={errors.message && touched.message ? "message-error" : undefined}
            />
            <label htmlFor="message" className="form-label">
              Message
            </label>
            {errors.message && touched.message && (
              <span id="message-error" className="form-error" role="alert">
                {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary submit-btn"
            disabled={state.submitting}
            aria-live="polite"
            aria-busy={state.submitting}
          >
            {state.submitting && (
              <motion.div
                className="spinner"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            )}
            {state.submitting ? "Sending..." : "Send Message"}
          </button>

          {isSuccess && (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              role="status"
              aria-live="polite"
            >
              <svg className="success-icon" viewBox="0 0 24 24" fill="none">
                <motion.path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </svg>
              Message sent! I'll respond within 24 hours.
            </motion.div>
          )}
        </form>
      </motion.div>
    </AnimatedPage>
  );
};

export default Contact;
