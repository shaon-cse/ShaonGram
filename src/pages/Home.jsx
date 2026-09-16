import { Link } from 'react-router-dom'
import SprocketStrip from '../components/SprocketStrip.jsx'

export default function Home() {
  return (
    <>
      <section className="hero">
        <SprocketStrip />
        <div className="hero-inner">
          <p className="hero-eyebrow">A quiet corner for film curiosity</p>
          <h1>
            Find the film
            <br />
            you didn't know
            <br />
            you were looking for.
          </h1>
          <p className="hero-copy">
            Reel pulls from a living catalogue of thousands of shows — search by
            title, skim the ratings, and open a full synopsis before you commit
            an evening to it.
          </p>
          <Link to="/movies" className="btn-primary large">
            Explore now
          </Link>
        </div>
        <SprocketStrip />
      </section>

      <section className="feature-row">
        <div className="feature">
          <span className="feature-index">Search</span>
          <p>Type a title and the catalogue narrows itself in real time.</p>
        </div>
        <div className="feature">
          <span className="feature-index">Browse</span>
          <p>No query? Scroll the full library, newest listings included.</p>
        </div>
        <div className="feature">
          <span className="feature-index">Details</span>
          <p>Open any card for a proper synopsis, genre, network and runtime.</p>
        </div>
      </section>
    </>
  )
}
