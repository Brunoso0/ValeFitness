import { memo } from 'react'
import Icone from './Icone'
import { PROGRAMAS } from '../dados'

const PARALAXE = { b1: 0.02, b2: 0.035, b3: 0.03, b4: 0.02 }

// o brilho amarelo acompanha o ponteiro dentro do cartão
function seguirPonteiro(e) {
  const card = e.target.closest?.('.card')
  if (!card) return
  const r = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${e.clientX - r.left}px`)
  card.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function Programas() {
  return (
    <section id="programas" className="programas" data-fx-fundo="#0A0A0A" data-fx-tinta="#F5F1E8">
      <header className="secao-cabeca">
        <p className="rotulo" data-fx="surgir">
          Programas
        </p>
        <h2 className="titulo-secao" data-fx="subir">
          Um treino para cada fase da sua evolução.
        </h2>
      </header>

      <div className="bento" onPointerMove={seguirPonteiro}>
        {PROGRAMAS.map((p, i) => (
          <div key={p.id} className={`bento-item ${p.classe}`} data-fx-paralaxe={PARALAXE[p.classe]}>
            <article className={`card tom-${p.tom}`} data-fx="subir" data-fx-atraso={i * 120} data-cursor>
              <div className="card-arte" aria-hidden="true">
                <Icone nome={p.icone} tamanho={260} className="card-arte-icone" />
              </div>
              <span className="ph ph-canto">Foto · placeholder</span>
              <div className="card-corpo">
                <span className="card-icone">
                  <Icone nome={p.icone} tamanho={26} />
                </span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default memo(Programas)
