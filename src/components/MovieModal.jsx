import { useEffect, useRef } from 'react'

function stripTags(html) {
  if (!html) return 'No summary available.'
  return html.replace(/<[^>]+>/g, '')
}

export default function MovieModal({ show, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    dialogRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!show) return null

  const backdrop = show.image?.original || show.image?.medium
  const year = show.premiered ? show.premiered.slice(0, 4) : '—'
  const rating = show.rating?.average ?? '—'

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card"
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={`${show.name} details`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {backdrop && (
          <div className="modal-backdrop-image" style={{ backgroundImage: `url(${backdrop})` }} />
        )}

        <div className="modal-content">
          <h2>{show.name}</h2>
          <p className="modal-meta">
            <span>⭐ Rating: {rating}</span>
            <span aria-hidden="true">|</span>
            <span>📅 Release: {year}</span>
          </p>

          {show.genres?.length > 0 && (
            <p className="modal-tags">
              {show.genres.map((g) => (
                <span key={g} className="tag">{g}</span>
              ))}
            </p>
          )}

          <h4>Overview</h4>
          <p className="modal-summary">{stripTags(show.summary)}</p>

          <dl className="modal-facts">
            {show.network?.name && (
              <div><dt>Network</dt><dd>{show.network.name}</dd></div>
            )}
            {show.language && <div><dt>Language</dt><dd>{show.language}</dd></div>}
            {show.status && <div><dt>Status</dt><dd>{show.status}</dd></div>}
            {show.runtime && <div><dt>Runtime</dt><dd>{show.runtime} min</dd></div>}
          </dl>

          <button className="btn-primary" onClick={onClose}>❌ Close</button>
        </div>
      </div>
    </div>
  )
}
