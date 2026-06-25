export default function CTASection({ title, children }) {
  return (
    <section className="cta-section">
      <div className="container">
        {title && <h2 className="cta-section__title">{title}</h2>}
        <div className="cta-section__content">
          {children}
        </div>
      </div>
    </section>
  )
}
