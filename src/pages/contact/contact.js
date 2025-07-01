import { useState } from "react";
import "./contact.css";
import { ImCancelCircle } from "react-icons/im";
import { Toaster, toast } from "sonner";
import { useForm, ValidationError } from "@formspree/react";

const Contact = ({ setContact }) => {
  const [state, handleSubmit] = useForm("xanjvppd");
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const hideModal = () => setContact(false);

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
    <div className="contactSection">
      <div className="existX" onClick={hideModal}>
        <ImCancelCircle size={25} color="gray" />
      </div>

      <div className="aboutContainer flex-center flex-column gap-10">
        <div>
          <h1>Contact Me</h1>
        </div>
        <div className="hrLine"></div>
      </div>

      <div className="flex-center flex-column">
        <h3 className="messagemeText">Message Me</h3>
        <Toaster position="top-left" richColors />

        <form onSubmit={customSubmit}>
          <div className="messageTextName">
            <input
              type="text"
              className="inputText1"
              name="name"
              placeholder="Name"
              value={msg.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              className="inputText1"
              name="email"
              placeholder="Email"
              value={msg.email}
              onChange={handleChange}
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <input
              type="text"
              className="inputText"
              name="subject"
              placeholder="Subject"
              value={msg.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <textarea
              className="inputTextarea"
              name="message"
              placeholder="Message"
              value={msg.message}
              onChange={handleChange}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="flex-center">
            <input
              type="submit"
              className="submitBtn"
              value={state.submitting ? "Sending..." : "Send Message"}
              disabled={state.submitting}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
