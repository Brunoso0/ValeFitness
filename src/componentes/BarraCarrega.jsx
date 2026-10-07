import { useEffect, useState } from 'react'

// Movimento-assinatura: uma barra olímpica que recebe uma anilha a cada cena
const CENAS = ['manifesto', 'programas', 'planos', 'treinadores', 'depoimentos']
const PLACAS = [1, 2, 3, 4, 5]

function Grupo({ ordem, passo }) {
  return (
    <div className="barra-grupo">
      {ordem.map((n) => (
        <i key={n} className={`placa${passo >= n ? ' on' : ''}`} data-p={n} />
      ))}
    </div>
  )
}

export default function BarraCarrega() {
  const [passo, setPasso] = useState(0)

  useEffect(() => {
    let agendado = false
    const calcular = () => {
      agendado = false
      const linha = window.innerHeight * 0.55
      let n = 0
      CENAS.forEach((id, i) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < linha) n = i + 1
      })
      const fim = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 6
      const principal = document.querySelector('.principal')
      const rodapeVisivel = principal && principal.getBoundingClientRect().bottom < window.innerHeight * 0.85
      if (fim || rodapeVisivel) n = 6
      setPasso(n)
    }
    const aoRolar = () => {
      if (!agendado) {
        agendado = true
        requestAnimationFrame(calcular)
      }
    }
    calcular()
    window.addEventListener('scroll', aoRolar, { passive: true })
    window.addEventListener('resize', aoRolar)
    return () => {
      window.removeEventListener('scroll', aoRolar)
      window.removeEventListener('resize', aoRolar)
    }
  }, [])

  return (
    <div className={`barra${passo >= 6 ? ' completa' : ''}`} aria-hidden="true">
      <i className="colar" />
      <Grupo ordem={[...PLACAS].reverse()} passo={passo} />
      <i className="barra-eixo" />
      <Grupo ordem={PLACAS} passo={passo} />
      <i className="colar" />
    </div>
  )
}
