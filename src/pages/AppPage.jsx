import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CTASection from '../components/CTASection'
import PlaceholderScreenshot from '../components/PlaceholderScreenshot'
import { APP_URL } from '../constants'
import personagem from '../logos/1logobranco.png'

export default function AppPage() {
  return (
    <main>
      {/* ── Page hero ── */}
      <section className="page-hero">
        <img src={personagem} alt="" className="logo-deco logo-deco--page" aria-hidden="true" />
        <div className="container">
          <p className="page-hero__label">O App</p>
          <h1 className="page-hero__title">Seu treino, no seu ritmo</h1>
          <p className="page-hero__sub">
            Um app pra te apoiar entre um encontro e outro &mdash; sem cobrança, sem
            comparação.
          </p>
        </div>
      </section>

      {/* ── O que ele faz ── */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">O que ele faz</h2>
          <div className="section__body">
            <p>
              O Run4Fun Coach monta um plano de corrida personalizado pra você,
              com base no seu condicionamento atual e no seu objetivo &mdash; seja
              completar seus primeiros 5km ou se preparar pra uma maratona.
            </p>
            <p>
              Por trás, existe uma metodologia séria (a mesma usada por treinadores
              de corrida no mundo todo). Na prática, isso significa: o plano se
              ajusta a você, e não o contrário.
            </p>
          </div>
        </div>
      </section>

      {/* ── Como funciona ── */}
      <section className="section section--surface">
        <div className="container">
          <h2 className="section__title">Como funciona, passo a passo</h2>
          <div className="steps">
            {/* Passo 1 */}
            <div className="step">
              <div className="step__content">
                <div className="step__header">
                  <span className="step__badge">1</span>
                  <p className="step__number">Passo 1</p>
                </div>
                <h3 className="step__title">Conta pra ele onde você está</h3>
                <p className="step__body">
                  Sua experiência, sua disponibilidade de dias, e (se tiver) um
                  resultado recente de prova.
                </p>
              </div>
              <div className="step__screenshot">
                <PlaceholderScreenshot label="Tela de onboarding" />
              </div>
            </div>

            {/* Passo 2 */}
            <div className="step step--reverse">
              <div className="step__content">
                <div className="step__header">
                  <span className="step__badge">2</span>
                  <p className="step__number">Passo 2</p>
                </div>
                <h3 className="step__title">Ele monta o plano</h3>
                <p className="step__body">
                  Semana a semana, treino a treino, adaptado ao seu objetivo e à sua
                  rotina.
                </p>
              </div>
              <div className="step__screenshot">
                <PlaceholderScreenshot label="Tela de plano gerado/resumo" />
              </div>
            </div>

            {/* Passo 3 */}
            <div className="step">
              <div className="step__content">
                <div className="step__header">
                  <span className="step__badge">3</span>
                  <p className="step__number">Passo 3</p>
                </div>
                <h3 className="step__title">Você treina no seu ritmo</h3>
                <p className="step__body">
                  Marque o que fez, ajuste o que não rolou. Sem culpa, sem pressão.
                </p>
              </div>
              <div className="step__screenshot">
                <PlaceholderScreenshot label="Tela principal de plano/check-in" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pra quem é ── */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Pra quem é</h2>
          <p className="section__body">
            Pra quem já corre e quer um norte. Pra quem está voltando depois de
            um tempo parado. Pra quem nunca correu sério e quer um empurrão
            organizado &mdash; sem virar refém de planilha.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection title="Bora começar?">
        <div className="cta-single">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
          >
            <ArrowRight size={18} strokeWidth={2} />
            Abrir o app
          </a>
          <Link to="/club" className="secondary-cta">
            Prefere conhecer a comunidade primeiro? Saiba mais sobre o clube &rarr;
          </Link>
        </div>
      </CTASection>
    </main>
  )
}
