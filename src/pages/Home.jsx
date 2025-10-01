import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Master New Skills with SkillHive</h1>
            <p className="hero-subtitle">
              Join thousands of learners worldwide and unlock your potential
              with our comprehensive, industry-leading courses taught by expert
              instructors.
            </p>
            <div className="hero-buttons">
              <button className="hero-btn-primary">Start Learning Today</button>
              <button className="hero-btn-secondary">Explore Courses</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose SkillHive?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🎓</span>
              <h3>Expert Instructors</h3>
              <p>
                Learn from industry professionals with years of real-world
                experience and proven expertise in their fields.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📱</span>
              <h3>Learn Anywhere</h3>
              <p>
                Access your courses on any device, anytime. Our platform is
                optimized for desktop, tablet, and mobile learning.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🏆</span>
              <h3>Certificates</h3>
              <p>
                Earn industry-recognized certificates upon completion to
                showcase your new skills to employers and clients.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">👥</span>
              <h3>Community Support</h3>
              <p>
                Join our vibrant community of learners, share knowledge, and get
                help when you need it most.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⚡</span>
              <h3>Self-Paced Learning</h3>
              <p>
                Study at your own speed with lifetime access to course materials
                and regular content updates.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💼</span>
              <h3>Career Growth</h3>
              <p>
                Advance your career with in-demand skills that employers are
                actively seeking in today's job market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="popular-courses-section">
        <div className="container">
          <h2 className="section-title">Popular Courses</h2>
          <div className="courses-grid">
            <div className="course-card">
              <div className="course-image">💻</div>
              <div className="course-content">
                <div className="course-category">Programming</div>
                <h3 className="course-title">Full Stack Web Development</h3>
                <p className="course-description">
                  Master modern web development with React, Node.js, and
                  MongoDB. Build real-world projects from scratch.
                </p>
                <div className="course-meta">
                  <span className="course-students">2,341 students</span>
                  <span className="course-rating">⭐ 4.8 (324 reviews)</span>
                </div>
              </div>
            </div>

            <div className="course-card">
              <div className="course-image">🎨</div>
              <div className="course-content">
                <div className="course-category">Design</div>
                <h3 className="course-title">UI/UX Design Masterclass</h3>
                <p className="course-description">
                  Learn design thinking, user research, prototyping, and create
                  stunning user interfaces that convert.
                </p>
                <div className="course-meta">
                  <span className="course-students">1,876 students</span>
                  <span className="course-rating">⭐ 4.9 (267 reviews)</span>
                </div>
              </div>
            </div>

            <div className="course-card">
              <div className="course-image">📊</div>
              <div className="course-content">
                <div className="course-category">Data Science</div>
                <h3 className="course-title">Python for Data Analysis</h3>
                <p className="course-description">
                  Analyze data like a pro with Python, Pandas, NumPy, and create
                  compelling visualizations.
                </p>
                <div className="course-meta">
                  <span className="course-students">3,124 students</span>
                  <span className="course-rating">⭐ 4.7 (412 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">50,000+</span>
              <span className="stat-label">Active Students</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1,200+</span>
              <span className="stat-label">Courses Available</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Expert Instructors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Students Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "SkillHive transformed my career completely. The courses are
                well-structured, and the instructors are incredibly
                knowledgeable. I landed my dream job within 3 months!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <div className="author-info">
                  <h4>Sarah Martinez</h4>
                  <p>Software Developer at Google</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-quote">
                "The flexibility of learning at my own pace while having access
                to such high-quality content is amazing. I've upskilled in
                multiple areas and feel more confident than ever."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">DK</div>
                <div className="author-info">
                  <h4>David Kim</h4>
                  <p>UX Designer at Microsoft</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-quote">
                "As a busy professional, I needed flexible learning options.
                SkillHive delivered exactly that with excellent mobile support
                and offline capabilities."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">AL</div>
                <div className="author-info">
                  <h4>Amy Liu</h4>
                  <p>Product Manager at Amazon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Learning Journey?</h2>
            <p>
              Join over 50,000 students who have already transformed their
              careers with SkillHive. Start today and take the first step
              towards your future.
            </p>
            <button className="cta-button">Get Started for Free</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
