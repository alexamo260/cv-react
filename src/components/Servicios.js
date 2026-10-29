import React from 'react'
import { useSearchParams } from 'react-router-dom'

const skillGroups = [
  {
    title: 'Lenguajes y tecnologías web',
    columns: 2,
    skills: [
      { name: 'JavaScript', level: 5 },
      { name: 'TypeScript', level: 5 },
      { name: 'HTML', level: 5 },
      { name: 'CSS / SASS', level: 5 },
      { name: 'Angular', level: 5 },
      { name: 'AngularJS', level: 4 },
      { name: 'React', level: 2 },
      { name: 'Redux', level: 3 },
      { name: 'jQuery / jQuery Mobile', level: 3 },
      { name: 'Bootstrap', level: 5 },
      { name: 'Node.js', level: 3 },
      { name: 'NestJS', level: 2 },
      { name: 'Java', level: 2 },
      { name: 'Spring', level: 2 },
      { name: 'Spring Boot', level: 2 },
    ],
  },
  {
    title: 'Desarrollo móvil e híbrido',
    skills: [
      { name: 'Cordova', level: 3 },
      { name: 'Ionic', level: 3 },
    ],
  },
  {
    title: 'Calidad y testing',
    skills: [
      { name: 'Jasmine & Karma', level: 5 },
      { name: 'Vitest', level: 4 },
      { name: 'JUnit', level: 2 },
    ],
  },
  {
    title: 'Entorno de desarrollo y diseño',
    skills: [
      { name: 'Visual Studio Code', level: 5 },
      { name: 'Copilot', level: 3 },
      { name: 'Eclipse', level: 4 },
      { name: 'IntelliJ', level: 3 },
      { name: 'Figma', level: 4 },
    ],
  },
  {
    title: 'Gestión de proyectos ágil',
    skills: [
      { name: 'JIRA', level: 5 },
      { name: 'Scrum / Agile', level: 5 },
    ],
  },
  {
    title: 'Calidad y entrega continua',
    skills: [
      { name: 'Sonar', level: 4 },
      { name: 'ESLint', level: 4 },
      { name: 'Jenkins', level: 4 },
      { name: 'CloudBees', level: 3 },
    ],
  },
  {
    title: 'Bases de datos',
    skills: [
      { name: 'Oracle', level: 3 },
      { name: 'MySQL', level: 3 },
    ],
  },
  {
    title: 'Sistemas operativos',
    skills: [
      { name: 'Windows', level: 5 },
      { name: 'Android', level: 4 },
      { name: 'Linux', level: 2 },
    ],
  },
]

const levelNames = {
  2: 'Intermedio',
  3: 'Avanzado',
  4: 'Profesional',
  5: 'Experto',
}

const SkillGroup = ({ title, skills, columns = 1 }) => (
  <section className={`skill-group${columns > 1 ? ' skill-group-wide' : ''}`}>
    <h2>{title}</h2>
    <ul className="skill-list">
      {skills.map((skill) => (
        <li className={`skill-item${skill.level === 5 ? ' skill-item-expert' : ''}`} key={skill.name}>
          <span className="skill-name">{skill.name}</span>
          <span className="skill-meter" aria-hidden="true"><span style={{ width: `${skill.level * 20}%` }} /></span>
          <span className="skill-rating">{skill.level} <small>{levelNames[skill.level]}</small></span>
          {skill.note && <span className="skill-note">v{skill.note}</span>}
        </li>
      ))}
    </ul>
  </section>
)

export const Servicios = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchTerm = searchParams.get('q') || ''
  const selectedCategory = searchParams.get('category') || ''

  const updateFilter = (key, value) => {
    const nextParams = new URLSearchParams(searchParams)
    if (value) nextParams.set(key, value)
    else nextParams.delete(key)
    setSearchParams(nextParams, { replace: true })
  }

  const filteredGroups = skillGroups
    .filter((group) => !selectedCategory || group.title === selectedCategory)
    .map((group) => ({
      ...group,
      skills: group.skills.filter((skill) => skill.name.toLowerCase().includes(searchTerm.toLowerCase())),
    }))
    .filter((group) => group.skills.length > 0)
  const resultCount = filteredGroups.reduce((total, group) => total + group.skills.length, 0)

  return (
    <section className="page-section resume-section">
      <p className="eyebrow"><span className="status-light" /> Competencias profesionales / 02</p>
      <h1>Herramientas para <span>construir</span></h1>
      <p className="page-description">Niveles de competencia</p>
      <div className="filter-toolbar skill-filters">
        <label className="filter-field">
          <span>Buscar competencia</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => updateFilter('q', event.target.value)}
            placeholder="Ej. Angular, testing..."
          />
        </label>
        <label className="filter-field">
          <span>Área</span>
          <select value={selectedCategory} onChange={(event) => updateFilter('category', event.target.value)}>
            <option value="">Todas las áreas</option>
            {skillGroups.map((group) => <option key={group.title} value={group.title}>{group.title}</option>)}
          </select>
        </label>
        <p className="filter-count" role="status">{resultCount} {resultCount === 1 ? 'competencia' : 'competencias'}</p>
      </div>
      <div className="skill-groups">
        {filteredGroups.length > 0
          ? filteredGroups.map((group) => <SkillGroup key={group.title} {...group} />)
          : <p className="filter-empty">No hay competencias que coincidan con la búsqueda.</p>}
      </div>
    </section>
  )
}
