import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ShareModal } from './ShareModal'

export const HeaderNav = () => {
    const [isMenuMobile, setIsMenuMobile] = useState(false)

  return (
    <header className="header">
        <div className="header-top">
            <NavLink to="/" className="brand" aria-label="Alejandro Amorós Talavera, inicio">
                <img className="brand-mark" src="/aat-logo.svg" alt="" />
                <span className="brand-copy">
                    <strong>Alejandro Amorós Talavera</strong>
                    <small>WEB DEVELOPER <span>-</span> PORTFOLIO</small>
                </span>
            </NavLink>
            <ShareModal />
            <button
                className="mobile-menu-toggle"
                type="button"
                aria-label={isMenuMobile ? 'Cerrar menú' : 'Abrir menú'}
                aria-controls="primary-navigation"
                aria-expanded={isMenuMobile}
                onClick={() => setIsMenuMobile((isOpen) => !isOpen)}
            >
            <span />
            <span />
            <span />
            </button>
        </div>
        <nav id="primary-navigation" className={isMenuMobile ? 'is-open' : ''} aria-label="Navegación principal">
            <ul>
                <li>
                    <NavLink to="/" end onClick={() => setIsMenuMobile(false)}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/experiencia" onClick={() => setIsMenuMobile(false)}>Experiencia</NavLink>
                </li>
                <li>
                    <NavLink to="/servicios" onClick={() => setIsMenuMobile(false)}>Competencias</NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum" onClick={() => setIsMenuMobile(false)}>Formación</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" onClick={() => setIsMenuMobile(false)}>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
