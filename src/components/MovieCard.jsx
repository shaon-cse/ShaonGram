const FALLBACK_POSTER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450"><rect width="100%" height="100%" fill="#221c1f"/><text x="50%" y="50%" fill="#8a7f77" font-family="sans-serif" font-size="18" text-anchor="middle">No Image</text></svg>`
  )

export default function MovieCard({ show, onSelect }) {
  const poster = show.image?.medium || FALLBACK_POSTER
  const year = show.premiered ? show.premiered.slice(0, 4) : '—'
  const rating = show.rating?.average ?? null

  return (
    <article className="movie-card">
      <div className="poster-wrap">
        <img src={poster} alt={`${show.name} poster`} loading="lazy" />
        <span className="ticket-notch" aria-hidden="true" />
      </div>
      <div className="card-body">
        <h3>{show.name}</h3>
        <p className="card-meta">
          <span>{rating ? `⭐ ${rating}` : '⭐ —'}</span>
          <span aria-hidden="true">•</span>
          <span>📅 {year}</span>
        </p>
        <button className="btn-outline" onClick={() => onSelect(show)}>
          See details
        </button>
      </div>
    </article>
  )
}
