import React, { useEffect, useRef } from 'react'
import { Routes, Route, BrowserRouter, Navigate, useLocation } from 'react-router-dom'
import { Footer } from '../layout/Footer'
import { HeaderNav } from '../layout/HeaderNav'
import { Inicio } from '../Inicio'
import { Experiencia } from '../Experiencia'
import { Servicios } from '../Servicios'
import { Contacto } from '../Contacto'
import { Curriculum } from '../Curriculum'

const ContenidoRutas = () => {
  const location = useLocation()
  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, left: 0 })
  }, [location.pathname])

  return (
    <>
      <HeaderNav />
      <main className="route-content" ref={contentRef}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export const Rutas = () => (
  <BrowserRouter>
    <ContenidoRutas />
  </BrowserRouter>
)
