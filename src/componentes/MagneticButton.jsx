import { useEffect, useRef } from 'react'
import { reduzMovimento, temPonteiro } from '../util'

// Botão que é puxado pelo ponteiro e cresce ao ser aproximado
export default function MagneticButton({ href, children, className = '', puxar = 0.32, crescer = 0.1, ...resto }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!temPonteiro() || reduzMovimento()) return
    const el = ref.current
    let x = 0, y = 0, s = 1
    let alvoX = 0, alvoY = 0, alvoS = 1
    let quadro = 0

    const animar = () => {
      x += (alvoX - x) * 0.18
      y += (alvoY - y) * 0.18
      s += (alvoS - s) * 0.18
      el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${s.toFixed(3)})`
      const parado = Math.abs(alvoX - x) < 0.1 && Math.abs(alvoY - y) < 0.1 && Math.abs(alvoS - s) < 0.001
      quadro = parado ? 0 : requestAnimationFrame(animar)
    }
    const acordar = () => {
      if (!quadro) quadro = requestAnimationFrame(animar)
    }
    const mover = (e) => {
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      const raio = Math.max(r.width, r.height) * 0.85
      const dist = Math.hypot(dx, dy)
      if (dist < raio) {
        const f = 1 - dist / raio
        alvoX = dx * puxar
        alvoY = dy * puxar
        alvoS = 1 + crescer * (0.4 + f)
      } else {
        alvoX = alvoY = 0
        alvoS = 1
      }
      acordar()
    }
    window.addEventListener('pointermove', mover, { passive: true })
    return () => {
      window.removeEventListener('pointermove', mover)
      cancelAnimationFrame(quadro)
    }
  }, [puxar, crescer])

  return (
    <a ref={ref} href={href} className={`btn-magnetico ${className}`} {...resto}>
      <span>{children}</span>
    </a>
  )
}
