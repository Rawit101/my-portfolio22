import React from 'react'
import Link from 'next/link'

interface ProjectCardProps {
    slug: string
    title: string
    description: string
    tags: string[]
    link: string
    image?: string
    icon: string
    isViewMore?: boolean
}

export default function ProjectCard({ slug, title, description, tags, link, image, icon, isViewMore }: ProjectCardProps) {
    const cardContent = (
        <>
            <div className="project-card-image">
                {image ? (
                    <img src={image} alt={title} />
                ) : (
                    <div className="project-card-placeholder">
                        <span className="project-icon">{icon}</span>
                    </div>
                )}
                <div className="project-card-overlay">
                    <span className="project-link">
                        {isViewMore ? 'See All Repos' : 'View Project'}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="project-card-content">
                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="project-tag">{tag}</span>
                    ))}
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </>
    )

    if (isViewMore) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-card is-view-more" style={{ textDecoration: 'none', color: 'inherit' }}>
                {cardContent}
            </a>
        )
    }

    return (
        <Link href={`/projects/${slug}`} className="project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            {cardContent}
        </Link>
    )
}
