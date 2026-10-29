import React from 'react'
import { NavLink } from 'react-router-dom'

export const Inicio = () => {
  const yearsOfExperience = new Date().getFullYear() - 2016
  const experienceUnit = yearsOfExperience === 1 ? 'año' : 'años'

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="hero-heading">
            <p className="eyebrow"><span className="status-light" /> Senior frontend </p>
            <h1>
              Desarrollo web
              <span className="hero-title-accent">Experiencias digitales</span>
            </h1>
          </div>
          <p className="hero-description">
            Soy <strong>Alejandro Amorós Talavera</strong>, desarrollador de software senior, con amplia experiencia en el desarrollo de aplicaciones web y un sólido dominio del ecosistema tecnológico, siendo Angular mi principal tecnología de especialización y referencia.
          </p>
          <div className="hero-actions">
            <NavLink className="button-primary" to="/experiencia">Ver experiencia <span className="hero-arrow">&#x2197;</span></NavLink>
            <NavLink className="button-secondary" to="/servicios">Competencias <span className="hero-arrow">&#x2197;</span></NavLink>
          </div>
          <div className="hero-stack" aria-label="Tecnologías principales">
            <span>ANGULAR</span>
            <span>TYPESCRIPT</span>
            <span>JASMINE - KARMA - VITEST</span>
            <span>SCRUM - AGILE</span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-orbit" />
          <div className="hero-logo-frame">
            <img className="hero-logo" src="/aat-logo.svg" alt="" />
          </div>
          <span className="hero-coordinate">37°59' N &nbsp; 1°08' W</span>
        </div>
        <span className="hero-coordinate-mobile">37°59' N &nbsp; 1°08' W</span>
      </section>
      <section className="capability-strip" aria-label="Resumen profesional">
        <article className="capability-item">
          <span className="capability-index">01 / TRAYECTORIA</span>
          <h2>{yearsOfExperience} {experienceUnit} de experiencia</h2>
        </article>
        <article className="capability-item">
          <span className="capability-index">02 / ESPECIALIDAD</span>
          <h2>Frontend con Angular</h2>
        </article>
        <article className="capability-item">
          <span className="capability-index">03 / RESPONSABILIDAD</span>
          <h2>Liderazgo técnico frontend</h2>
        </article>
      </section>
      <section className="approach-section">
        <div>
          <p className="eyebrow"><span className="status-light" /> Filosofía de trabajo</p>
          <h2>Proactividad<br /><span>Trabajo en equipo</span><br /></h2><h2>Capacidad de adaptación<br /></h2>
        </div>
        <div className="approach-copy">
          <p>
            Me considero una persona flexible, proactiva y con gran capacidad de adaptación ante nuevos retos.
          </p>
          <p>
            He participado en proyectos de diferentes ámbitos y con distintos niveles de complejidad, lo que me ha permitido ampliar mi experiencia y consolidar mi especialización en tecnologías orientadas al desarrollo Frontend, así como en la integración de herramientas, librerías y plugins destinados a optimizar procesos, mejorar la eficiencia y favorecer la evolución continua de las aplicaciones.
          </p>
          <div className="approach-tags"><span>APRENDIZAJE CONTINUO</span><span>COLABORACIÓN</span><span>FLEXIBILIDAD</span></div>
        </div>
      </section>
    </>
  )
}
