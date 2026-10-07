import { useEffect, useRef } from 'react'
import MagneticButton from './MagneticButton'
import Icone from './Icone'
import { CONTATO, HORARIOS, whatsapp } from '../dados'

// Footer reveal: o rodapé fica fixo atrás do conteúdo e é descoberto no fim da rolagem
export default function Rodape() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    let agendado = false
    const calcular = () => {
      agendado = false
      const principal = document.querySelector('.principal')
      if (!principal) return
      const fixo = getComputedStyle(el).position === 'fixed'
      const h = el.offsetHeight || 1
      const p = fixo
        ? Math.min(1, Math.max(0, (window.innerHeight - principal.getBoundingClientRect().bottom) / h))
        : 1
      el.style.setProperty('--rev', p.toFixed(3))
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
    <footer id="contato" className="rodape" ref={ref}>
      <div className="rodape-linha" aria-hidden="true" />
      <div className="rodape-miolo">
        <p className="rotulo rodape-rotulo">Última volta</p>
        <h2 className="rodape-titulo">
          Pronto para cruzar a <em>linha de chegada?</em>
        </h2>
        <MagneticButton href={whatsapp()} target="_blank" rel="noreferrer" className="btn-gigante" puxar={0.12} crescer={0.04}>
          Começar agora
        </MagneticButton>
      </div>

      <div className="rodape-info">
        <div>
          <h3 className="rotulo">Horários</h3>
          <dl className="horarios">
            {HORARIOS.map((h) => (
              <div key={h.dia}>
                <dt>{h.dia}</dt>
                <dd>{h.horas}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h3 className="rotulo">Onde estamos</h3>
          <address>
            {CONTATO.enderecoLinhas.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </address>
          <a className="link-sublinhado" href={CONTATO.mapa} target="_blank" rel="noreferrer">
            Ver no mapa
          </a>
        </div>
        <div>
          <h3 className="rotulo">Fale com a gente</h3>
          <a className="rodape-contato" href={whatsapp()} target="_blank" rel="noreferrer">
            {CONTATO.telefone}
          </a>
          <ul className="redes">
            <li>
              <a href={whatsapp()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <Icone nome="whatsapp" />
              </a>
            </li>
            <li>
              <a href={CONTATO.telefoneLink} aria-label={`Ligar para ${CONTATO.telefone}`}>
                <Icone nome="telefone" />
              </a>
            </li>
            <li>
              <a href={CONTATO.mapa} target="_blank" rel="noreferrer" aria-label="Localização no mapa">
                <Icone nome="pin" />
              </a>
            </li>
            <li>
              <span className="rede-pendente" title="Instagram: perfil ainda não informado" aria-label="Instagram (perfil a informar)">
                <Icone nome="instagram" />
              </span>
            </li>
          </ul>
        </div>
      </div>

      <p className="rodape-base">
        <span>© 2026 Vale Fitness</span>
        <span>Senhor do Bonfim · Bahia</span>
      </p>
    </footer>
  )
}
