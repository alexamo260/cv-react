import React from 'react'

export const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-identity">
        <p><span className="footer-mark">AAT</span> / Alejandro Amorós Talavera &copy;</p>
        <button
          className="footer-linkedin"
          type="button"
          aria-label="Abrir perfil en LinkedIn"
          title="Abrir perfil en LinkedIn"
          onClick={() => window.open('https://www.linkedin.com/in/alejandro-amor%C3%B3s-talavera-a56277113/', '_blank', 'noopener,noreferrer')}
        >
          <span aria-hidden="true">in</span>
        </button>
      </div>
      <p>{currentYear}</p>
    </footer>
  )
}
