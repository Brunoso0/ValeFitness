import { memo } from 'react'

// PICO da página: cena fixa longa, uma frase por vez
function Manifesto() {
  return (
    <section
      id="manifesto"
      className="manifesto"
      data-fx-fixa
      data-fx-altura="5"
      data-fx-etapas="4"
      data-fx-fundo="#05070F"
      data-fx-tinta="#F5F1E8"
      aria-label="Manifesto"
    >
      <div className="fx-palco manifesto-palco">
        <span className="manifesto-eco" data-fx-x="0,-1100" aria-hidden="true">
          DISCIPLINA
        </span>
        <span className="manifesto-moldura" data-fx-escala="0.8,1" data-fx-opacidade="0.15,1" data-fx-faixa="0,0.3" aria-hidden="true">
          <small className="canto canto-a">VALE FITNESS</small>
          <small className="canto canto-b">SENHOR DO BONFIM — BA</small>
        </span>

        <div className="manifesto-frases">
          <p className="fx-etapa f1">
            Não é sobre <s>estética</s>.
          </p>
          <p className="fx-etapa f2">
            É sobre <em>arquitetura corporal</em> e <mark>disciplina implacável.</mark>
          </p>
          <p className="fx-etapa f3">
            Quem chega pela primeira vez. Quem chega para competir. <em>A mesma porta.</em>
          </p>
          <p className="fx-etapa f4">
            Comece de onde estiver. <mark>Evolua de verdade.</mark>
          </p>
        </div>

        <ul className="manifesto-passos" aria-hidden="true">
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </section>
  )
}

export default memo(Manifesto)
