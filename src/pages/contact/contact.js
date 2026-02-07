import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./contact.css";
import Navigation from "../../components/Navigation";
import { Toaster, toast } from "sonner";
import { useForm, ValidationError } from "@formspree/react";
import AnimatedPage from "../../components/AnimatedPage";

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

    await handleSubmit(e);
    if (!state.submitting && state.succeeded) {
      toast.success("Message sent successfully!");
      setMsg({ name: "", email: "", subject: "", message: "" });
    } else if (state.errors && state.errors.length > 0) {
      toast.error("Failed to send message");
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
            <div className="form-group">
              <input
                type="text"
                id="name"
                className="form-input"
                name="name"
                placeholder=" "
                value={msg.name}
                onChange={handleChange}
                required
                aria-required="true"
              />
              <label htmlFor="name" className="form-label">
                Name
              </label>
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                className="form-input"
                name="email"
                placeholder=" "
                value={msg.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              id="subject"
              className="form-input"
              name="subject"
              placeholder=" "
              value={msg.subject}
              onChange={handleChange}
              required
              aria-required="true"
            />
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
          </div>

          <div className="form-group">
            <textarea
              id="message"
              className="form-input form-textarea"
              name="message"
              placeholder=" "
              value={msg.message}
              onChange={handleChange}
              required
              aria-required="true"
            />
            <label htmlFor="message" className="form-label">
              Message
            </label>
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
    </AnimatedPage>
  );
};

export default Contact;
