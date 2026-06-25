export default function PlaceholderScreenshot({ label }) {
  return (
    <div className="placeholder-screenshot">
      <span className="placeholder-screenshot__main">Screenshot em breve</span>
      {label && (
        <span className="placeholder-screenshot__label">{label}</span>
      )}
    </div>
  )
}
