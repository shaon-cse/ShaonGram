export default function SprocketStrip({ count = 14 }) {
  return (
    <div className="sprocket-strip" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="sprocket-hole" />
      ))}
    </div>
  )
}
