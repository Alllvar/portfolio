import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID     = process.env.REACT_APP_EMAILJS_USER_ID;

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
        .then(
            (result) => {
              console.log(result.text);
              setLoading(false);
              setSuccess(true);
              setTimeout(() => setSuccess(false), 3000);
            },
            (error) => {
              console.log(error.text);
              setLoading(false);
            }
        );

    e.target.reset();
  };

  return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        {success && (
            <div className="contact__success">
              Your message has been sent successfully!
            </div>
        )}
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>tkvbifua@gmail.com</h5>
              <a href="mailto:tkvbifua@gmail.com" target="_blank" rel="noreferrer">
                Send a message
              </a>
            </article>

            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Telegram</h4>
              <h5>Viktor Martyniuk</h5>
              <a href="https://t.me/villentis" target="_blank" rel="noreferrer">
                Send a message
              </a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
            />
            <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required
            ></textarea>
            <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
  );
};

export default Contact;