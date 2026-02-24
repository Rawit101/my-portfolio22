'use client'

import { projects } from '../../data/projects'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const project = projects.find(p => p.slug === slug)

    if (!project) return notFound()

    // If it's the "more projects" card, redirect to GitHub
    if (project.isViewMore) {
        if (typeof window !== 'undefined') {
            window.location.href = project.link
        }
        return null
    }

    return (
        <>
            {/* Back Navigation */}
            <div className="project-detail-nav">
                <Link href="/#projects" className="back-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                    </svg>
                    Back to Projects
                </Link>
            </div>

            {/* Hero */}
            <section className="project-detail-hero">
                <div className="project-detail-hero-inner">
                    <div className="project-detail-tags">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="project-detail-tag">{tag}</span>
                        ))}
                    </div>
                    <h1 className="project-detail-title">
                        <span className="project-detail-icon">{project.icon}</span>
                        {project.title}
                    </h1>
                    <p className="project-detail-desc">{project.description}</p>
                    {project.link && project.link !== '#' && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-detail-cta">
                            View Live
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </a>
                    )}
                </div>

                {/* Project Image */}
                {project.image && (
                    <div className="project-detail-image-wrapper">
                        <div className="project-detail-image-glow" />
                        <img src={project.image} alt={project.title} className="project-detail-image" />
                    </div>
                )}
            </section>

            {/* Content */}
            <section className="project-detail-content">
                <div className="project-detail-content-inner">
                    {/* About */}
                    <div className="project-detail-section">
                        <div className="project-detail-section-label">
                            <span className="line" />
                            ABOUT THIS PROJECT
                        </div>
                        <div className="project-detail-about">
                            {project.longDescription.split('\n\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>

                    {/* Gallery */}
                    {project.gallery && project.gallery.length > 0 && (
                        <div className="project-detail-section">
                            <div className="project-detail-section-label">
                                <span className="line" />
                                Overview of Project
                            </div>
                            <div className="project-detail-gallery">
                                {project.gallery.map((img, i) => (
                                    <div key={i} className="project-detail-gallery-item">
                                        <img src={img} alt={`${project.title} screenshot ${i + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="project-detail-grid">
                        {/* Features */}
                        {project.features && (
                            <div className="project-detail-section">
                                <h3 className="project-detail-section-title">
                                    <span className="section-icon">✨</span>
                                    Key Features
                                </h3>
                                <ul className="project-detail-features">
                                    {project.features.map((f, i) => (
                                        <li key={i}>
                                            <span className="feature-check">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tech Stack */}
                        {project.techDetails && (
                            <div className="project-detail-section">
                                <h3 className="project-detail-section-title">
                                    <span className="section-icon">⚙️</span>
                                    Tech Stack
                                </h3>
                                <p className="project-detail-tech">{project.techDetails}</p>
                                <div className="project-detail-tech-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tech-pill">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="project-detail-footer">
                <div className="project-detail-footer-inner">
                    <h3>Interested in this project?</h3>
                    <p>Feel free to reach out or check my other work.</p>
                    <div className="project-detail-footer-btns">
                        <Link href="/#contact" className="btn-primary">
                            Contact Me
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                        <Link href="/#projects" className="btn-secondary">
                            See More Projects
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
