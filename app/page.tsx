'use client'

import TechCard from './components/TechCard'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'


export default function Home() {
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar" id="navbar">
        <div className="navbar-inner">
          <a href="#" className="logo">
            <div className="logo-icon">S</div>
            Sorawit Ardpru
          </a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-right">
            <div className="social-icons">
              <a href="#" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>


            </div>
            <a href="#" className="btn-resume">
              Rawit101
            </a>
          </div>
          <button className="mobile-menu-btn" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section" id="home">
        <div className="bg-glow-top"></div>
        <div className="hero-content">

          <h1 className="hero-title">
            Hi, I&apos;m Sorawit
            <span className="gradient-text">Data Engineer</span>
          </h1>
          <p className="hero-description">
            I am currently practicing to become a Data Engineer, focusing on building efficient data pipelines and turning raw data into powerful, actionable insights.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#about" className="btn-secondary">Contact Me</a>
          </div>

        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="about-section" id="about">
        <div className="bg-glow-bottom"></div>
        <div className="about-inner">
          <div className="about-image-wrapper">
            <div className="about-image-container">
              <img
                src="/profile.png"
              />
              <div className="about-image-label">
                <div className="label-row">
                  <span className="camera-icon">📷</span>
                  <span>Nakhon Ratchasima, Thailand</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-content">
            <div className="section-label">
              <span className="line"></span>
              ABOUT ME
            </div>
            <h2 className="about-title">
              Engineering with <br />
              <em>Purpose</em> &amp; Precision.
            </h2>
            <p className="about-text">
              I am a Computer Science student at <strong>Rajamangala University of Technology Isan</strong> (RMUTI), currently in my 3rd year of study.
            </p>
            <p className="about-text">
              I am currently honing my skills as a Data Engineer in Nakhon Ratchasima, Thailand. I am dedicated to learning how to build robust architectures and scalable pipelines, focusing on data integrity and performance at scale.
            </p>
            <p className="about-text">
              I am passionate about learning ETL/ELT workflows and exploring cloud technologies to manage large-scale data, driven by the belief that well-governed data is the heart of great decision-making.
            </p>

          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section className="skills-section" id="skills">
        <div className="skills-inner">
          <div className="section-header">
            <div className="section-label">
              <span className="line"></span>
              TECHNICAL SKILLS
            </div>
            <h2 className="section-title">My Expertise</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-card-icon-wrapper">
                <div className="skill-card-glow" />
                <div className="skill-card-icon">⚙️</div>
              </div>
              <h3>Data Pipelines & ETL</h3>
              <p>Developing efficient ETL/ELT pipelines using Python, SQL, and Airflow.</p>
            </div>
            <div className="skill-card">
              <div className="skill-card-icon-wrapper">
                <div className="skill-card-glow" />
                <div className="skill-card-icon">🗄️</div>
              </div>
              <h3>Data Warehousing</h3>
              <p>Designing scalable schemas and optimizing analytical databases.</p>
            </div>
            <div className="skill-card">
              <div className="skill-card-icon-wrapper">
                <div className="skill-card-glow" />
                <div className="skill-card-icon">🌥️</div>
              </div>
              <h3>Cloud Architecture</h3>
              <p>Architecting data solutions on AWS, leveraging S3, Glue, and Redshift.</p>
            </div>
            <div className="skill-card">
              <div className="skill-card-icon-wrapper">
                <div className="skill-card-glow" />
                <div className="skill-card-icon">📊</div>
              </div>
              <h3>Data Modeling</h3>
              <p>Transforming complex datasets into structured models for analytics.</p>
            </div>
          </div>

          <div className="tech-stack-container">
            <div className="tech-group">
              <h4>Languages & Core Tools</h4>
              <div className="tech-badges">
                <TechCard name="TypeScript" />
                <TechCard name="JavaScript" />
                <TechCard name="Flutter" />
                <TechCard name="Golang" />
                <TechCard name="Python" />
                <TechCard name="NEXT.JS" />
                <TechCard name="React" />
                <TechCard name="SQL" />
                <TechCard name="PostgreSQL" />

                <TechCard name="Node.js" />
                <TechCard name="Three.js" />
                <TechCard name="GraphQL" />


              </div>
            </div>

            <div className="tech-group">
              <h4>Cloud & Orchestration</h4>
              <div className="tech-badges">
                <TechCard name="AWS" />
                <TechCard name="Docker" />
                <TechCard name="GCP" />
                <TechCard name="Kubernetes" />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section className="projects-section" id="projects">
        <div className="projects-inner">
          <div className="section-header">
            <div className="section-label">
              <span className="line"></span>
              LATEST WORKS
            </div>
            <h2 className="section-title">Projects Showcase</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
      {/* ===== CONTACT SECTION ===== */}
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <h2 className="contact-title">
            Contact <span className="highlight">Me.</span>
          </h2>

          <div className="contact-grid">
            <div className="contact-info">
              <p className="contact-text">
                Interested in working together or just want to chat? Feel free to reach out!
              </p>

              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">sorawitardpru@gamil.com</span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">GitHub</span>
                    <span className="contact-value">github.com/Rawit101</span>
                  </div>
                </div>



                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">0xx-xxx-xxxx</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="Hello there..."></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p>© 2024 Sorawit.Dev • Built with passion &amp; precision.</p>
      </footer>
    </>
  )
}
