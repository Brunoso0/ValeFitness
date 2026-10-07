import { useEffect, useState } from 'react'
import { BASE, irPara } from '../util'
import { whatsapp } from '../dados'

const LINKS = [
  ['manifesto', 'Manifesto'],
  ['programas', 'Programas'],
  ['planos', 'Planos'],
  ['treinadores', 'Treinadores'],
  ['contato', 'Contato'],
]

export default function Nav() {
  const [escondido, setEscondido] = useState(false)
  const [fundo, setFundo] = useState(false)

  useEffect(() => {
    let ultimo = window.scrollY
    const aoRolar = () => {
      const y = window.scrollY
      setFundo(y > 40)
      if (y > ultimo + 6 && y > 200) setEscondido(true)
      else if (y < ultimo - 6) setEscondido(false)
      ultimo = y
    }
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <header className={`nav${escondido ? ' escondido' : ''}${fundo ? ' fundo' : ''}`}>
      <a
        className="nav-logo"
        href="#"
        aria-label="Vale Fitness, voltar ao início"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        <img src={`${BASE}logo-escuro.png`} alt="Vale Fitness" />
      </a>
      <nav className="nav-links" aria-label="Principal">
        {LINKS.map(([id, nome]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault()
              irPara(id)
            }}
          >
            {nome}
          </a>
        ))}
      </nav>
      <a className="btn btn-amarelo nav-cta" href={whatsapp()} target="_blank" rel="noreferrer">
        Matricule-se
      </a>
    </header>
  )
}
