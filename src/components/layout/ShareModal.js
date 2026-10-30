import React, { useRef, useState } from 'react'
import { Check, Copy, Mail, Share2, X } from 'lucide-react'

export const ShareModal = () => {
    const dialogRef = useRef(null)
    const inputRef = useRef(null)
    const [shareUrl, setShareUrl] = useState('')
    const [copyStatus, setCopyStatus] = useState('')
    const encodedUrl = encodeURIComponent(shareUrl)

    const openModal = () => {
        setShareUrl(window.location.href)
        setCopyStatus('')
        dialogRef.current.showModal()
    }

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl)
            setCopyStatus('copied')
        } catch {
            inputRef.current.focus()
            inputRef.current.select()
            setCopyStatus('error')
        }
    }

    const closeOnBackdrop = (event) => {
        if (event.target !== dialogRef.current) return
        const bounds = dialogRef.current.getBoundingClientRect()
        if (event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom) {
            dialogRef.current.close()
        }
    }

    return (
        <>
            <button
                className="share-toggle"
                type="button"
                aria-label="Compartir esta página"
                title="Compartir esta página"
                aria-haspopup="dialog"
                onClick={openModal}
            >
                <Share2 size={22} aria-hidden="true" />
            </button>
            <dialog
                ref={dialogRef}
                className="share-modal"
                aria-labelledby="share-modal-title"
                onClick={closeOnBackdrop}
            >
                <div className="share-modal-heading">
                    <h2 id="share-modal-title">Compartir esta página</h2>
                    <button className="share-close" type="button" aria-label="Cerrar" title="Cerrar" onClick={() => dialogRef.current.close()}>
                        <X size={24} aria-hidden="true" />
                    </button>
                </div>
                <div className="share-link-row">
                    <input ref={inputRef} aria-label="Enlace para compartir" value={shareUrl} readOnly onFocus={(event) => event.target.select()} />
                    <button className="share-copy" type="button" onClick={copyLink}>
                        {copyStatus === 'copied' ? <Check size={20} aria-hidden="true" /> : <Copy size={20} aria-hidden="true" />}
                        {copyStatus === 'copied' ? 'Copiado' : 'Copiar'}
                    </button>
                </div>
                <div className="share-status" role="status">
                    {copyStatus === 'copied' && 'Enlace copiado.'}
                    {copyStatus === 'error' && 'No se ha podido copiar el enlace al portapapeles.'}
                </div>
                <div className="share-networks">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Compartir en Facebook" title="Compartir en Facebook">
                        <span className="share-facebook" aria-hidden="true">f</span>
                    </a>
                    <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Compartir en X" title="Compartir en X">
                        <span aria-hidden="true">X</span>
                    </a>
                    <a href={`mailto:?subject=${encodeURIComponent('Portfolio de Alejandro Amorós Talavera')}&body=${encodedUrl}`} aria-label="Compartir por correo" title="Compartir por correo">
                        <Mail size={24} aria-hidden="true" />
                    </a>
                </div>
            </dialog>
        </>
    )
}