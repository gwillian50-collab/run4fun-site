export default function CTASection({ title, children, deco }) {
  return (
    <section className="cta-section">
      {deco ?? null}
      <div className="container">
        {title && <h2 className="cta-section__title">{title}</h2>}
        <div className="cta-section__content">
          {children}
        </div>
      </div>
    </section>
  )
}
