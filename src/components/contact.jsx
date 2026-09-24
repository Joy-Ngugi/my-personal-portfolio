import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import "../styles/styles.css";
import useReveal from "../hooks/useReveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { ref, visible } = useReveal();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ax4ymcp",
        "template_n52tzhd",
        formData,
        "w_Fpo_e8F4T1fR7ls"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send:", error);
          toast.error("Error sending message.");
        }
      );
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`section contact-section reveal ${visible ? "is-visible" : ""}`}
    >
      <div className="contact-left">
        <span className="eyebrow">Contact</span>
        <h2 className="contact-title">Let's work together.</h2>
        <p className="contact-text">
          Have a project in mind, or just want to say hello? Send me a message
          and I'll get back to you soon.
        </p>

        <div className="contact-info">
          <div className="contact-info-item">
            <span className="contact-info-label">Email</span>
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ngugijoy51@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  ngugijoy51@gmail.com
</a>
          </div>
          <div className="contact-info-item">
            <span className="contact-info-label">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/joy-ngugi-72b9432a0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              joy-ngugi →
            </a>
          </div>
          <div className="contact-info-item">
            <span className="contact-info-label">GitHub</span>
            <a
              href="https://github.com/Joy-Ngugi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Joy-Ngugi →
            </a>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;