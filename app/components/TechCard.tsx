import React from 'react'

type TechName =
    | 'TypeScript' | 'JavaScript' | 'Flutter' | 'Golang' | 'Python'
    | 'NEXT.JS' | 'React' | 'SQL' | 'PostgreSQL' | 'Spark'
    | 'AWS' | 'Docker' | 'Airflow' | 'dbt' | 'Redshift' | 'GCP' | 'Kubernetes' | 'Node.js' | 'Three.js' | 'GraphQL'

interface TechCardProps {
    name: TechName
}

const techData: Record<TechName, { color: string, iconId: string }> = {
    'TypeScript': { color: '#3178C6', iconId: 'ts' },
    'JavaScript': { color: '#F7DF1E', iconId: 'js' },
    'React': { color: '#61DAFB', iconId: 'react' },
    'NEXT.JS': { color: '#ffffff', iconId: 'nextjs' },
    'Flutter': { color: '#02569B', iconId: 'flutter' },
    'Golang': { color: '#00ADD8', iconId: 'go' },
    'Python': { color: '#3776AB', iconId: 'py' },
    'SQL': { color: '#4479A1', iconId: 'mysql' },
    'PostgreSQL': { color: '#336791', iconId: 'postgres' },
    'Spark': { color: '#E25A1C', iconId: 'spark' },
    'AWS': { color: '#FF9900', iconId: 'aws' },
    'Docker': { color: '#2496ED', iconId: 'docker' },
    'Airflow': { color: '#017CEE', iconId: 'airflow' },
    'dbt': { color: '#FF6B4D', iconId: 'dbt' },
    'Redshift': { color: '#8C4FFF', iconId: 'redshift' },
    'GCP': { color: '#4285F4', iconId: 'gcp' },
    'Kubernetes': { color: '#326CE5', iconId: 'kubernetes' },
    'Node.js': { color: '#339933', iconId: 'nodejs' },
    'Three.js': { color: '#ffffff', iconId: 'threejs' },
    'GraphQL': { color: '#E10098', iconId: 'graphql' }
}

export default function TechCard({ name }: TechCardProps) {
    const data = techData[name]
    if (!data) return null

    // Using skillicons.dev for high quality logos
    const iconUrl = `https://skillicons.dev/icons?i=${data.iconId}`

    return (
        <div className="tech-card">
            <div className="tech-card-icon-wrapper" style={{ '--accent-color': data.color } as React.CSSProperties}>
                <div className="tech-card-glow" />
                <div className="tech-card-icon">
                    <img src={iconUrl} alt={name} loading="lazy" />
                </div>
            </div>
            <span className="tech-card-name">{name}</span>
        </div>
    )
}
