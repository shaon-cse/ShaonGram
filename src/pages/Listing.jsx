import { useEffect, useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar.jsx'
import MovieCard from '../components/MovieCard.jsx'
import MovieModal from '../components/MovieModal.jsx'

const API_BASE = 'https://api.tvmaze.com'

export default function Listing() {
  const [allShows, setAllShows] = useState([])
  const [searchResults, setSearchResults] = useState(null) // null = not searching
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selected, setSelected] = useState(null)

  // initial load: all shows
  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetch(`${API_BASE}/shows`)
      .then((res) => {
        if (!res.ok) throw new Error('Could not load shows.')
        return res.json()
      })
      .then((data) => {
        if (!cancelled) setAllShows(data)
      })
      .catch((err) => !cancelled && setError(err.message))
      .finally(() => !cancelled && setLoading(false))
    return () => {
      cancelled = true
    }
  }, [])

  // debounced search
  useEffect(() => {
    const q = query.trim()
    if (!q) {
      setSearchResults(null)
      return
    }
    const handle = setTimeout(() => {
      setLoading(true)
      fetch(`${API_BASE}/search/shows?q=${encodeURIComponent(q)}`)
        .then((res) => {
          if (!res.ok) throw new Error('Search failed.')
          return res.json()
        })
        .then((data) => setSearchResults(data.map((r) => r.show)))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
    }, 350)
    return () => clearTimeout(handle)
  }, [query])

  const shows = useMemo(() => searchResults ?? allShows, [searchResults, allShows])

  return (
    <section className="listing">
      <div className="listing-header">
        <h1>Browse shows</h1>
        <SearchBar value={query} onChange={setQuery} />
      </div>

      {error && <p className="empty-state">Something went wrong: {error}</p>}

      {!error && loading && <p className="empty-state">Loading titles…</p>}

      {!error && !loading && shows.length === 0 && (
        <p className="empty-state">No shows match "{query}". Try another title.</p>
      )}

      {!error && !loading && shows.length > 0 && (
        <div className="movie-grid">
          {shows.map((show) => (
            <MovieCard key={show.id} show={show} onSelect={setSelected} />
          ))}
        </div>
      )}

      {selected && <MovieModal show={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
