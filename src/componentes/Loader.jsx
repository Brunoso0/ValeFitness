import { useEffect, useState } from 'react'
import { BASE, reduzMovimento } from '../util'

export default function Loader({ onFim }) {
  const [p, setP] = useState(0)
  const [saindo, setSaindo] = useState(false)
  const [fora, setFora] = useState(false)

  useEffect(() => {
    const reduz = reduzMovimento()
    const duracao = reduz ? 250 : 1200
    const raiz = document.documentElement
    const inicio = performance.now()
    let quadro
    let timer
    raiz.style.overflow = 'hidden'

    const passo = (t) => {
      const x = Math.min(1, Math.max(0, (t - inicio) / duracao))
      setP(Math.round((1 - Math.pow(1 - x, 3)) * 100))
      if (x < 1) {
        quadro = requestAnimationFrame(passo)
        return
      }
      document.fonts.ready.then(() => {
        setSaindo(true)
        timer = setTimeout(
          () => {
            raiz.style.overflow = ''
            setFora(true)
            onFim()
          },
          reduz ? 0 : 800,
        )
      })
    }
    quadro = requestAnimationFrame(passo)
    return () => {
      cancelAnimationFrame(quadro)
      clearTimeout(timer)
    }
  }, [onFim])

  if (fora) return null
  return (
    <div className={`loader${saindo ? ' saindo' : ''}`} role="status" aria-label="Carregando Vale Fitness">
      <div className="loader-centro">
        <img className="loader-logo" src={`${BASE}logo-escuro.png`} alt="Vale Fitness" />
        <div className="loader-num" aria-hidden="true">
          {String(p).padStart(3, '0')}
        </div>
        <div className="loader-barra" aria-hidden="true">
          <i style={{ transform: `scaleX(${p / 100})` }} />
        </div>
      </div>
    </div>
  )
}
