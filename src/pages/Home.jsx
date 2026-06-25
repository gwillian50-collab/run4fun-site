import { Link } from 'react-router-dom'
import { Instagram, ArrowRight } from 'lucide-react'
import CTASection from '../components/CTASection'
import { INSTAGRAM_URL, APP_URL } from '../constants'
import personagem from '../logos/1logobranco.png'

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero">
        <img src={personagem} alt="" className="logo-deco logo-deco--hero" aria-hidden="true" />
        <div className="container">
          <h1 className="hero__headline">
            A corrida é só<br />
            <span className="hero__headline-accent">a desculpa.</span>
          </h1>
          <p className="hero__sub">
            O resto &mdash; as amizades, as conversas, as risadas depois do treino &mdash;
            é o que a gente realmente está construindo.
          </p>
          <div className="hero__cta">
            <a href="#quem-somos" className="btn btn-accent">
              Conhecer o Run4Fun &darr;
            </a>
          </div>
        </div>
      </section>

      {/* ── Quem somos ── */}
      <section id="quem-somos" className="section">
        <div className="container">
          <h2 className="section__title">Quatro amigos. Uma ideia simples.</h2>
          <div className="section__body">
            <p>
              A Run4Fun nasceu de quatro amigos que perceberam uma coisa: corrida é
              uma desculpa incrível pra aproximar gente.
            </p>
            <p>
              Não somos uma assessoria esportiva. Não vivemos de planilha, pace ou
              meta de PR. A gente não liga se você corre rápido &mdash; liga que você
              apareça.
            </p>
            <p>
              Aqui, ninguém é julgado pelo ritmo. Todo mundo corre junto.
            </p>
          </div>
          <blockquote className="quem-somos__quote">
            <p>
              &ldquo;O desempenho importa. Mas nunca vai importar mais que as pessoas.&rdquo;
            </p>
          </blockquote>
          <Link to="/club" className="accent-link">
            Conhecer melhor o clube &rarr;
          </Link>
        </div>
      </section>

      {/* ── Como funciona ── */}
      <section className="section section--surface">
        <div className="container">
          <h2 className="section__title">Mais do que treino</h2>
          <p className="section__body">
            A corrida é só uma parte da experiência. O resto é:
          </p>
          <ul className="como-funciona__list">
            <li className="como-funciona__item">Treinos coletivos</li>
            <li className="como-funciona__item">Eventos especiais</li>
            <li className="como-funciona__item">Desafios entre o grupo</li>
            <li className="como-funciona__item">Encontros pós-corrida</li>
            <li className="como-funciona__item">Viagens pra provas</li>
            <li className="como-funciona__item">Ações sociais e parcerias</li>
          </ul>
          <p className="section__body">
            Se você procura gente nova pra conhecer, uma rotina mais saudável,
            ou só uma desculpa boa pra sair de casa &mdash; você já tem onde chegar.
          </p>
        </div>
      </section>

      {/* ── O app (teaser) ── */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Pra te ajudar entre um encontro e outro</h2>
          <div className="section__body">
            <p>
              Quando você não está correndo com a gente, o app Run4Fun Coach monta
              um plano de treino no seu ritmo &mdash; literalmente. Sem cobrança, sem
              comparação, sem julgamento.
            </p>
            <p>
              É uma ferramenta, não um chefe. Você usa quando faz sentido pra você.
            </p>
          </div>
          <Link to="/app" className="accent-link">
            Ver como o app funciona &rarr;
          </Link>
        </div>
      </section>

      {/* ── CTA final (dupla) ── */}
      <CTASection
        title="Quer fazer parte?"
        deco={
          <img
            src={personagem}
            alt=""
            className="logo-deco logo-deco--cta"
            aria-hidden="true"
          />
        }
      >
        <div className="cta-grid">
          <div className="cta-card">
            <h3 className="cta-card__title">Ver a comunidade de verdade</h3>
            <p className="cta-card__body">
              Acompanhe os encontros, eventos e a energia do grupo no dia a dia.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              <Instagram size={18} strokeWidth={2} />
              Seguir no Instagram
            </a>
          </div>
          <div className="cta-card">
            <h3 className="cta-card__title">Começar a treinar</h3>
            <p className="cta-card__body">
              Baixe o app e monte seu plano, no seu ritmo.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <ArrowRight size={18} strokeWidth={2} />
              Abrir o app
            </a>
          </div>
        </div>
      </CTASection>
    </main>
  )
}
