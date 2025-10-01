import React from 'react'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      {/* Hero Section */}
      <section className="privacy-hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Privacy Policy</h1>
          <p className="hero-subtitle">
            Your privacy matters to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="privacy-section">
        <div className="container">
          <h2 className="section-title">1. Introduction</h2>
          <p>
            At <strong>SkillHive</strong>, we respect your privacy and are committed to protecting your
            personal information. This Privacy Policy explains how we collect, use, and safeguard the
            data you provide to us when using our platform.
          </p>
        </div>
      </section>

      {/* Information Collection */}
      <section className="privacy-section">
        <div className="container">
          <h2 className="section-title">2. Information We Collect</h2>
          <ul className="privacy-list">
            <li><strong>Personal Information:</strong> Name, email address, and contact details.</li>
            <li><strong>Account Information:</strong> Username, password, and preferences.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent.</li>
            <li><strong>Cookies:</strong> We use cookies to improve your browsing experience.</li>
          </ul>
        </div>
      </section>

      {/* Usage of Information */}
      <section className="privacy-section">
        <div className="container">
          <h2 className="section-title">3. How We Use Your Information</h2>
          <ul className="privacy-list">
            <li>To provide and personalize our services.</li>
            <li>To communicate important updates, newsletters, and promotional offers.</li>
            <li>To improve platform functionality and user experience.</li>
            <li>To comply with legal obligations and prevent fraudulent activities.</li>
          </ul>
        </div>
      </section>

      {/* Data Protection */}
      <section className="privacy-section">
        <div className="container">
          <h2 className="section-title">4. Data Protection & Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal data from unauthorized 
            access, alteration, disclosure, or destruction. However, no online platform is 100% secure, 
            so we encourage you to use strong passwords and be cautious when sharing personal information.
          </p>
        </div>
      </section>

      {/* Cookies Section */}
      <section className="privacy-section">
        <div className="container">
          <h2 className="section-title">5. Cookies Policy</h2>
          <p>
            Cookies are small text files stored on your device. We use cookies to enhance site performance, 
            remember your preferences, and analyze site traffic. You can control or disable cookies through 
            your browser settings, but some features may not function properly if you do so.
          </p>
        </div>
      </section>

      {/* User Rights Section */}
      <section className="privacy-section">
        <div className="container">
          <h2 className="section-title">6. Your Rights</h2>
          <ul className="privacy-list">
            <li>Access and review your personal data.</li>
            <li>Request corrections or deletion of your information.</li>
            <li>Opt out of marketing communications at any time.</li>
            <li>Withdraw consent where processing is based on consent.</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="privacy-contact-section">
        <div className="container">
          <h2 className="section-title">7. Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy or data practices, 
            please contact us at:
          </p>
          <p className="contact-info">
            📧 <strong>Email:</strong> support@skillhive.com<br />
            🌐 <strong>Website:</strong> www.skillhive.com
          </p>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy