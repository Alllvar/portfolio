import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { SiTelegram } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
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
                () => {
                    setLoading(false);
                    setSuccess(true);
                    setTimeout(() => setSuccess(false), 3000);
                },
                (error) => {
                    console.error(error.text);
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
                    {/* Email */}
                    <article className="contact__option">
                        <a
                            href="mailto:tkvbifua@gmail.com"
                            className="contact__option-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <MdOutlineEmail className="contact__option-icon"/>
                            <h4>Email</h4>
                            <h5>tkvbifua@gmail.com</h5>
                            <span className="contact__option-action">Send a message</span>
                        </a>
                    </article>

                    {/* Telegram */}
                    <article className="contact__option">
                        <a
                            href="https://t.me/villentis"
                            className="contact__option-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <SiTelegram className="contact__option-icon"/>
                            <h4>Telegram</h4>
                            <h5>@villentis</h5>
                            <span className="contact__option-action">Send a message</span>
                        </a>
                    </article>

                    {/* LinkedIn */}
                    <article className="contact__option">
                        <a
                            href="https://www.linkedin.com/in/viktor-martyniuk-b56998214/"
                            className="contact__option-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin className="contact__option-icon"/>
                            <h4>LinkedIn</h4>
                            <h5>Viktor Martyniuk</h5>
                            <span className="contact__option-action">View profile</span>
                        </a>
                    </article>

                    {/* GitHub */}
                    <article className="contact__option">
                        <a
                            href="https://github.com/alllvar"
                            className="contact__option-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub className="contact__option-icon"/>
                            <h4>GitHub</h4>
                            <h5>alllvar</h5>
                            <span className="contact__option-action">View repos</span>
                        </a>
                    </article>
                </div>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="contact__form"
                >
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
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;