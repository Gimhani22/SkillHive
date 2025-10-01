import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills-container">
      {/* Hero Section */}
      <section className="skills-hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Explore In-Demand Skills</h1>
          <p className="hero-subtitle">
            Upskill yourself with practical courses and stay ahead in your career
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="skills-categories-section">
        <div className="container">
          <h2 className="section-title">Skill Categories</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>Programming</h3>
              <p>Master coding languages like JavaScript, Python, and Java.</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🎨</div>
              <h3>Design</h3>
              <p>Enhance your creativity with UI/UX and graphic design skills.</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📊</div>
              <h3>Data Science</h3>
              <p>Analyze, visualize, and draw insights from data.</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🌐</div>
              <h3>Digital Marketing</h3>
              <p>Learn SEO, social media marketing, and online branding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="learning-paths-section">
        <div className="container">
          <h2 className="section-title">Popular Learning Paths</h2>
          <div className="paths-grid">
            <div className="path-card">
              <h3>Full-Stack Web Developer</h3>
              <p>Start from basics and become a professional web developer.</p>
              <button className="path-button">Explore Path</button>
            </div>
            <div className="path-card">
              <h3>UI/UX Designer</h3>
              <p>Learn design thinking, tools, and user experience principles.</p>
              <button className="path-button">Explore Path</button>
            </div>
            <div className="path-card">
              <h3>Data Analyst</h3>
              <p>Master Excel, SQL, and data visualization techniques.</p>
              <button className="path-button">Explore Path</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn With Us Section */}
      <section className="why-learn-section">
        <div className="container">
          <h2 className="section-title">Why Learn with SkillHive?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">⭐</div>
              <h3>Expert Instructors</h3>
              <p>Learn from industry leaders and certified professionals.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🧠</div>
              <h3>Hands-On Practice</h3>
              <p>Work on real projects and build your professional portfolio.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📅</div>
              <h3>Flexible Learning</h3>
              <p>Learn at your own pace with self-paced online courses.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🏆</div>
              <h3>Certifications</h3>
              <p>Earn certificates to showcase your skills to employers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="skills-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Start Learning a New Skill Today</h2>
            <p>
              Join thousands of learners and gain the skills you need to excel in your career.
            </p>
            <button className="cta-button">Browse All Courses</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
