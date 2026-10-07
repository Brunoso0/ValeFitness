import { useEffect, useRef } from 'react'
import { temPonteiro } from '../util'

const ALVOS = 'a, button, [data-cursor], input, textarea, label'

// Ponto azul que segue o ponteiro e se expande sobre elementos interativos
export default function Cursor() {
  const ref = useRef(null)

  useEffect(() => {
    if (!temPonteiro()) return
    const el = ref.current
    const raiz = document.documentElement
    raiz.classList.add('tem-cursor')
    let x = -100, y = -100, cx = -100, cy = -100, quadro

    const mover = (e) => {
      x = e.clientX
      y = e.clientY
      el.classList.add('visivel')
      el.classList.toggle('grande', Boolean(e.target.closest?.(ALVOS)))
    }
    const sair = () => el.classList.remove('visivel')
    const laco = () => {
      cx += (x - cx) * 0.24
      cy += (y - cy) * 0.24
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`
      quadro = requestAnimationFrame(laco)
    }
    window.addEventListener('pointermove', mover, { passive: true })
    document.addEventListener('pointerleave', sair)
    quadro = requestAnimationFrame(laco)
    return () => {
      raiz.classList.remove('tem-cursor')
      window.removeEventListener('pointermove', mover)
      document.removeEventListener('pointerleave', sair)
      cancelAnimationFrame(quadro)
    }
  }, [])

  return (
    <div className="cursor" ref={ref} aria-hidden="true">
      <span />
    </div>
  )
}
