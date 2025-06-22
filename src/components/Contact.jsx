import React from 'react';
import "./contact.css"

export default function Contact() {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form action="https://formsubmit.co/youremail@example.com" method="POST">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}
