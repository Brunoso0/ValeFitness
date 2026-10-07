import { memo } from 'react'
import { TREINADORES } from '../dados'

// Silhueta de busto: marcador de foto até existirem as fotos reais
function Busto() {
  return (
    <svg className="coach-busto" viewBox="0 0 200 260" aria-hidden="true">
      <circle cx="100" cy="86" r="42" />
      <path d="M12 260c0-62 40-98 88-98s88 36 88 98z" />
    </svg>
  )
}

function Treinadores() {
  return (
    <section
      id="treinadores"
      className="treinadores"
      data-fx-fixa
      data-fx-altura="4"
      data-fx-fundo="#0A0A0A"
      data-fx-tinta="#F5F1E8"
    >
      <div className="fx-palco">
        <div className="trilho" data-fx="trilho">
          <div className="coach-intro">
            <p className="rotulo">Treinadores</p>
            <h2 className="titulo-serif">
              Quem vai <em>guiar</em> o seu treino.
            </h2>
            <p className="nota-ph">
              <span className="ph">Placeholder</span> Nomes, especialidades e fotos serão preenchidos com a equipe real.
            </p>
          </div>

          {TREINADORES.map((t, i) => (
            <article key={t.id} className={`coach coach-${(i % 2) + 1}`} data-cursor>
              <div className="coach-foto">
                <Busto />
                <span className="ph ph-canto">Foto P&amp;B · placeholder</span>
              </div>
              <div className="coach-legenda">
                <span className="coach-linha" aria-hidden="true" />
                <div className="coach-mascara">
                  <h3 className="coach-nome">Nome do treinador</h3>
                </div>
                <p className="coach-papel">{t.papel}</p>
              </div>
            </article>
          ))}
          <span className="trilho-fim" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export default memo(Treinadores)
