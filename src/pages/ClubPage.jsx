import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'
import CTASection from '../components/CTASection'
import { INSTAGRAM_URL } from '../constants'
import personagem from '../logos/1logobranco.png'

export default function ClubPage() {
  return (
    <main>
      {/* ── Page hero ── */}
      <section className="page-hero">
        <img src={personagem} alt="" className="logo-deco logo-deco--page" aria-hidden="true" />
        <div className="container">
          <p className="page-hero__label">O Clube</p>
          <h1 className="page-hero__title">O clube por dentro</h1>
          <p className="page-hero__sub">
            Tudo que a corrida é, quando você tira a pressão da performance.
          </p>
        </div>
      </section>

      {/* ── Por que existimos ── */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Por que existimos</h2>
          <div className="section__body">
            <p>
              A gente acredita que a corrida é só a ferramenta. O verdadeiro valor
              está na comunidade construída antes, durante e depois dos treinos.
              Tem gente que vem pelo treino e fica pela galera &mdash; e tem gente que
              nem gostava tanto de correr até descobrir que tinha um motivo bom
              pra continuar.
            </p>
            <p>
              Não somos uma assessoria esportiva tradicional, e também não somos
              focados exclusivamente em performance. Nosso propósito é simples:
              criar um ambiente onde qualquer pessoa se sinta confortável pra
              começar ou continuar correndo.
            </p>
            <p>
              Nossa missão é transformar a corrida numa experiência social.
            </p>
          </div>
        </div>
      </section>

      {/* ── O que a gente não é ── */}
      <section className="section section--surface">
        <div className="container">
          <h2 className="section__title">O que a gente não é</h2>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Outros grupos comunicam</th>
                  <th className="th-accent">A Run4Fun comunica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pace</td>
                  <td className="td-accent">Pertencimento</td>
                </tr>
                <tr>
                  <td>Performance</td>
                  <td className="td-accent">Diversão</td>
                </tr>
                <tr>
                  <td>Planilhas</td>
                  <td className="td-accent">Encontros</td>
                </tr>
                <tr>
                  <td>Metas</td>
                  <td className="td-accent">Comunidade</td>
                </tr>
                <tr>
                  <td>Alta performance</td>
                  <td className="td-accent">Histórias e amizade</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="section__closing">
            Quem chega até a gente precisa sentir que não vai ser julgado pelo
            ritmo. Todo mundo corre junto.
          </p>
        </div>
      </section>

      {/* ── Quem encontra a gente ── */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Quem encontra a gente aqui</h2>
          <p className="section__body">Nosso povo é, principalmente:</p>
          <ul className="feature-list">
            <li>Gente começando a correr agora</li>
            <li>Corredores recreativos</li>
            <li>Quem já correu e quer voltar</li>
            <li>Quem está procurando novas amizades</li>
            <li>Quem busca uma rotina mais saudável</li>
            <li>Quem gosta do lado social da corrida tanto quanto da corrida em si</li>
          </ul>
          <p className="section__closing">
            A idade importa menos do que o estilo de vida. A gente quer gente
            aberta a conhecer gente nova.
          </p>
        </div>
      </section>

      {/* ── O que a gente faz ── */}
      <section className="section section--surface">
        <div className="container">
          <h2 className="section__title">O que a gente faz, na prática</h2>
          <p className="section__body">A comunidade se organiza em torno de:</p>
          <ul className="feature-list">
            <li>Treinos coletivos</li>
            <li>Eventos especiais</li>
            <li>Desafios entre o grupo</li>
            <li>Encontros pós-corrida</li>
            <li>Experiências com parceiros</li>
            <li>Viagens para provas</li>
            <li>Ações sociais</li>
            <li>Lançamentos de produtos</li>
          </ul>
          <p className="section__closing">A corrida é só uma parte da experiência.</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection title="Topa correr com a gente?">
        <div className="cta-single">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
          >
            <Instagram size={18} strokeWidth={2} />
            Seguir no Instagram
          </a>
          <Link to="/app" className="secondary-cta">
            Prefere começar treinando primeiro? Conheça o app &rarr;
          </Link>
        </div>
      </CTASection>
    </main>
  )
}
