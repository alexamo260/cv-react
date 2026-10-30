import React from 'react'
import { useTheme } from '../../context/ThemeContext'

export const Footer = () => {
  const { theme, toggleTheme } = useTheme()

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
      <div className="footer-date">
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
          title={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
          onClick={toggleTheme}
        >
          <span aria-hidden="true">{theme === 'light' ? '☾' : '☼'}</span>
        </button>
      </div>
    </footer>
  )
}
