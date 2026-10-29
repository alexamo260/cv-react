import React from 'react'

export const Curriculum = () => {
	return (
		<section className="page-section resume-section">
			<p className="eyebrow"><span className="status-light" /> Formación / 03</p>
			<h1>Una base para <span>seguir creciendo</span></h1>
			<p className="page-description">Formación, certificaciones e idiomas de mi recorrido profesional.</p>
			<a
				className="button-primary dc-download"
				href={`${process.env.PUBLIC_URL}/Dosier%20de%20Competencias%20Alejandro%20Amor%C3%B3s%20Talavera.pdf`}
				download="Dosier de Competencias Alejandro Amorós Talavera.pdf"
			>
				Descargar Dossier Competencias <span className="hero-arrow" aria-hidden="true">&#x1F4C4;</span>
			</a>

			<div className="curriculum-grid">
				<section className="curriculum-block">
					<h2>Formación académica</h2>
					<ol className="education-list">
						<li><span>2014 — 2016</span><div><h3>Desarrollo de Aplicaciones Web</h3><p>Grado Superior de Formación Profesional, bilingüe · IES José Planés, Murcia</p></div></li>
						<li><span>2010 — 2013</span><div><h3>Administración de Sistemas Informáticos en Red</h3><p>Grado Superior de Formación Profesional · IES Aljada, Murcia</p></div></li>
						<li><span>2007 — 2010</span><div><h3>Bachillerato</h3><p>IES Saavedra Fajardo, Murcia</p></div></li>
					</ol>
				</section>

				<section className="curriculum-block">
					<h2>Certificaciones</h2>
					<ul className="certification-list">
						<li><span>2026</span><a href="https://www.coursera.org/account/accomplishments/verify/65VEWY4NEASJ" target="_blank" rel="noopener noreferrer">Advanced React by Meta</a></li>
						<li><span>2025</span>Connected Manager · Harvard ManageMentor, en colaboración con Capgemini University</li>
						<li><span>2024</span><a href="https://www.credly.com/badges/c6f06773-e8f4-46d5-aedf-30b87544075b/linked_in_profile" target="_blank" rel="noopener noreferrer">Certified SAFe® 6 Practitioner</a></li>
						<li><span>2023</span><a href="https://www.credly.com/badges/7237fe5d-5ac8-475a-a6e5-47b817da55c3/linked_in_profile" target="_blank" rel="noopener noreferrer">AWS Certified Cloud Practitioner</a></li>
					</ul>
				</section>

				<section className="curriculum-block language-block">
					<h2>Idiomas</h2>
					<div className="language-table" role="table" aria-label="Nivel de idiomas">
						<div className="language-row language-head" role="row"><span role="columnheader">Idioma</span><span role="columnheader">Comprensión</span><span role="columnheader">Hablado</span><span role="columnheader">Escrito</span></div>
						<div className="language-row" role="row"><strong role="cell">Inglés</strong><span role="cell">B2</span><span role="cell">B2</span><span role="cell">B2</span></div>
						<div className="language-row" role="row"><strong role="cell">Francés</strong><span role="cell">A2</span><span role="cell">A1</span><span role="cell">A1</span></div>
					</div>
				</section>

			</div>
		</section>
	)
}
