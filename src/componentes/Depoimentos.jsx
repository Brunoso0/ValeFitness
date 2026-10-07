import { memo, useEffect, useRef, useState } from 'react'
import Icone, { Estrela } from './Icone'
import { AVALIACAO, DEPOIMENTOS } from '../dados'
import { reduzMovimento } from '../util'

const ESTRELAS = [0, 1, 2, 3, 4]

// Nota real do Google Maps (isolada: o motor reescreve os números)
const Avaliacao = memo(function Avaliacao() {
  return (
    <p className="avaliacao" data-fx="surgir" data-fx-atraso="150">
      <span className="estrelas" aria-hidden="true">
        {ESTRELAS.map((i) => (
          <Estrela key={i} />
        ))}
      </span>
      <span>
        <strong data-fx="contar" data-fx-fim={AVALIACAO.nota} data-fx-decimais="1" data-fx-duracao="1800">
          0
        </strong>{' '}
        no {AVALIACAO.fonte} ·{' '}
        <strong data-fx="contar" data-fx-fim={AVALIACAO.total} data-fx-duracao="1800">
          0
        </strong>{' '}
        avaliações
      </span>
    </p>
  )
})

function Carrossel() {
  const [atual, setAtual] = useState(0)
  const [pausado, setPausado] = useState(false)
  const toque = useRef(null)
  const total = DEPOIMENTOS.length
  const reduz = reduzMovimento()

  useEffect(() => {
    if (pausado || reduzMovimento()) return
    const t = setInterval(() => setAtual((v) => (v + 1) % total), 7000)
    return () => clearInterval(t)
  }, [pausado, total, atual])

  const ir = (n) => setAtual((n + total) % total)

  return (
    <div
      className="carrossel"
      onPointerEnter={() => setPausado(true)}
      onPointerLeave={() => setPausado(false)}
      onPointerDown={(e) => (toque.current = e.clientX)}
      onPointerUp={(e) => {
        if (toque.current === null) return
        const d = e.clientX - toque.current
        if (Math.abs(d) > 60) ir(atual + (d < 0 ? 1 : -1))
        toque.current = null
      }}
      role="group"
      aria-roledescription="carrossel"
      aria-label="Depoimentos"
    >
      <div className="slides">
        {DEPOIMENTOS.map((d, i) => (
          <figure key={d.id} className={`slide${i === atual ? ' ativo' : ''}`} aria-hidden={!reduz && i !== atual}>
            <span className="estrelas estrelas-slide" aria-hidden="true">
              {ESTRELAS.map((k) => (
                <Estrela key={k} tamanho={22} />
              ))}
            </span>
            <blockquote>“{d.texto}”</blockquote>
            <figcaption>
              <span className="ph">Placeholder</span> {d.autor}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="carrossel-controles">
        <button type="button" onClick={() => ir(atual - 1)} aria-label="Depoimento anterior">
          <Icone nome="anterior" />
        </button>
        <div className="pontos" role="tablist">
          {DEPOIMENTOS.map((d, i) => (
            <button
              key={d.id}
              type="button"
              role="tab"
              aria-selected={i === atual}
              aria-label={`Depoimento ${i + 1}`}
              className={i === atual ? 'on' : ''}
              onClick={() => ir(i)}
            />
          ))}
        </div>
        <button type="button" onClick={() => ir(atual + 1)} aria-label="Próximo depoimento">
          <Icone nome="proximo" />
        </button>
      </div>
    </div>
  )
}

function Depoimentos() {
  return (
    <section id="depoimentos" className="depoimentos" data-fx-fundo="#0A1330" data-fx-tinta="#F5F1E8">
      <header className="depo-cabeca">
        <p className="rotulo" data-fx="surgir">
          Quem treina aqui
        </p>
        <Avaliacao />
      </header>
      <Carrossel />
    </section>
  )
}

export default memo(Depoimentos)
