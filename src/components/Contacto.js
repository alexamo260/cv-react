import React, { useEffect, useRef, useState } from 'react'

const emptyForm = {
  name: '',
  email: '',
  message: '',
}

export const Contacto = () => {
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('')
  const toastRef = useRef(null)

  useEffect(() => {
    if (!submitted) return undefined

    toastRef.current?.closest('.route-content')?.scrollTo({ top: 0, behavior: 'smooth' })
    const timeoutId = window.setTimeout(() => setSubmitted(false), 6000)
    return () => window.clearTimeout(timeoutId)
  }, [submitted])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmittedName(form.name.trim())
    setForm(emptyForm)
    setSubmitted(true)
  }

  return (
    <section className="page-section contact-page">
      <p className="eyebrow"><span className="status-light" /> Canal abierto / 04</p>
      <h1>¿Tienes una idea <span>en mente?</span></h1>
      <p className="page-description">Estoy abierto a conversar sobre proyectos web, colaboraciones y nuevas ideas.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="contact-field">
          Nombre
          <input
            autoComplete="name"
            name="name"
            onChange={handleChange}
            required
            value={form.name}
          />
        </label>
        <label className="contact-field">
          Correo electrónico
          <input
            autoComplete="email"
            name="email"
            onChange={handleChange}
            required
            type="email"
            value={form.email}
          />
        </label>
        <label className="contact-field">
          Mensaje
          <textarea
            name="message"
            onChange={handleChange}
            required
            rows="5"
            value={form.message}
          />
        </label>
        <button className="button-primary contact-submit" type="submit">
          Enviar mensaje <span className="hero-envelop" aria-hidden="true">&#x1F4E8;</span>
        </button>
      </form>
      {submitted && (
        <div className="toast-message" ref={toastRef} role="status" aria-live="polite">
          <span className="toast-icon" aria-hidden="true">✓</span>
          <p>¡Mensaje recibido! <strong>{submittedName}</strong>, me pondré en contacto contigo enseguida.</p>
          <button type="button" className="toast-close" aria-label="Cerrar notificación" onClick={() => setSubmitted(false)}>×</button>
        </div>
      )}
    </section>
  )
}
