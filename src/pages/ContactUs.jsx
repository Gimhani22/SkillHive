import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Contact SkillHive</h1>
                    <p className="hero-subtitle">
                        We’d love to hear from you! Reach out with any questions, feedback, or partnership ideas.
                    </p>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="contact-info-section">
                <div className="container">
                    <h2 className="section-title">Get in Touch</h2>
                    <div className="contact-grid">
                        <div className="contact-card">
                            <div className="contact-icon">📧</div>
                            <h3>Email Us</h3>
                            <p>support@skillhive.com</p>
                        </div>
                        <div className="contact-card">
                            <div className="contact-icon">📞</div>
                            <h3>Call Us</h3>
                            <p>+1 (800) 123-4567</p>
                        </div>
                        <div className="contact-card">
                            <div className="contact-icon">📍</div>
                            <h3>Visit Us</h3>
                            <p>123 Learning Lane, Knowledge City, 56789</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section">
                <div className="container">
                    <h2 className="section-title">Send Us a Message</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" placeholder="Type your message here..." required />
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="social-section">
                <div className="container">
                    <h2 className="section-title">Connect With Us</h2>
                    <div className="social-links">
                        <a href="https://facebook.com/skillhive" target="_blank" rel="noopener noreferrer">🌐 Facebook</a>
                        <a href="https://twitter.com/skillhive" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
                        <a href="https://linkedin.com/company/skillhive" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
                        <a href="https://instagram.com/skillhive" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>We’re Here to Help</h2>
                        <p>Whether you have questions about our courses, partnership opportunities, or support, our team is ready to assist you.</p>
                        <button className="cta-button">Get Support</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
