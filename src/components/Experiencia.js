import React from 'react'
import { useSearchParams } from 'react-router-dom'

const experiences = [
  {
    period: '2026 — ACTUALIDAD',
    company: 'Prime IT',
    role: 'Desarrollador de Software · Frontend',
    description: 'Análisis técnico, desarrollo de nuevas funcionalidades y soporte al equipo en la resolución de bugs críticos. Actualización de Angular y análisis del impacto en pruebas de regresión.',
    technologies: ['Angular', 'TypeScript', 'Jasmine & Karma', 'Vitest', 'HTML', 'CSS/SASS'],
  },
  {
    period: '2022 — 2026',
    company: 'Capgemini',
    role: 'Desarrollador de Software',
    description: 'Participación en la toma de requisitos y análisis técnico, nuevos desarrollos, resolución de incidencias, revisión de merge requests y supervisión de despliegues y calidad en Sonar.',
    roles: [
      {
        period: '2022 — 2023',
        title: 'Líder técnico frontend · Proyecto internacional (Francia)',
        technologies: ['Angular', 'AngularJS', 'TypeScript', 'Jasmine & Karma', 'HTML', 'CSS/SASS'],
      },
      {
        period: '2023 — 2026',
        title: 'Líder técnico frontend · Proyecto SGAD',
        technologies: ['Angular', 'TypeScript', 'Jasmine & Karma', 'HTML', 'CSS/SASS'],
      },
    ],
  },
  {
    period: '2016 — 2022',
    company: 'NTT DATA',
    role: 'Desarrollador de Software',
    description: 'Desarrollo fullstack de aplicaciones web multiplataforma, soporte técnico y resolución de incidencias.',
    technologies: ['Java / Spring', 'JavaScript', 'jQuery Mobile', 'Cordova', 'Angular', 'TypeScript','Ionic', 'Capacitor', 'SQL'],
  },
]

const technologies = [...new Set(experiences.flatMap((experience) => [
  ...(experience.technologies || []),
  ...(experience.roles || []).flatMap((role) => role.technologies),
]))].sort((first, second) => first.localeCompare(second))

export const Experiencia = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedTechnology = searchParams.get('tech') || ''

  const updateTechnology = (technology) => {
    const nextParams = new URLSearchParams(searchParams)
    if (technology) nextParams.set('tech', technology)
    else nextParams.delete('tech')
    setSearchParams(nextParams, { replace: true })
  }

  const filteredExperiences = experiences.filter((experience) => {
    if (!selectedTechnology) return true
    return [
      ...(experience.technologies || []),
      ...(experience.roles || []).flatMap((role) => role.technologies),
    ].includes(selectedTechnology)
  })

  return (
    <section className="page-section resume-section">
      <p className="eyebrow"><span className="status-light" /> Trayectoria / 01</p>
      <h1>Experiencia <span>profesional</span></h1>
      <div className="filter-toolbar experience-filters">
        <label className="filter-field">
          <span>Filtrar por tecnología</span>
          <select value={selectedTechnology} onChange={(event) => updateTechnology(event.target.value)}>
            <option value="">Todas las tecnologías</option>
            {technologies.map((technology) => <option key={technology} value={technology}>{technology}</option>)}
          </select>
        </label>
        <p className="filter-count" role="status">{filteredExperiences.length} {filteredExperiences.length === 1 ? 'experiencia' : 'experiencias'}</p>
      </div>
      <div className="experience-timeline">
        {filteredExperiences.length > 0
          ? filteredExperiences.map((experience) => (
            <article className="experience-item" key={experience.company}>
              <div className="experience-heading">
                <div>
                  <p className="experience-period">{experience.period}</p>
                  <h2>{experience.company}</h2>
                </div>
                <span className="experience-role">{experience.role}</span>
              </div>
              <div className="experience-details">
                <p>{experience.description}</p>
                {experience.technologies && (
                  <div className="tag-list" aria-label="Tecnologías">
                    {experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                )}
                {experience.roles?.map((role) => (
                  <div className="role-block" key={role.period}>
                    <h3>{role.period} <span>{role.title}</span></h3>
                    <div className="tag-list">
                      {role.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))
          : <p className="filter-empty">No hay experiencias asociadas a esta tecnología.</p>}
      </div>
    </section>
  )
}