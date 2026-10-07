import { memo } from 'react'
import MagneticButton from './MagneticButton'
import TagRotativa from './TagRotativa'
import { whatsapp } from '../dados'

const FAIXA = ['Iniciante', 'Atleta', 'Disciplina', 'Acolhimento', 'Evolução', 'Senhor do Bonfim']

// Anilha desenhada em vetor, com luz de borda azul (chiaroscuro).
// Substituir por foto/vídeo real quando existir.
function Anilha() {
  const marcas = Array.from({ length: 48 }, (_, i) => i * (360 / 48))
  return (
    <svg className="anilha" viewBox="0 0 600 600" aria-hidden="true">
      <defs>
        <linearGradient id="luz-borda" x1="0.1" y1="0.05" x2="0.8" y2="0.95">
          <stop offset="0" stopColor="#3b78ff" stopOpacity="0.95" />
          <stop offset="0.45" stopColor="#0055FF" stopOpacity="0.25" />
          <stop offset="1" stopColor="#0055FF" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="corpo-anilha" cx="0.3" cy="0.25" r="0.9">
          <stop offset="0" stopColor="#1b2542" />
          <stop offset="0.5" stopColor="#0f1220" />
          <stop offset="1" stopColor="#08090d" />
        </radialGradient>
        <path id="curva-texto" d="M300 300 m-232 0 a232 232 0 1 1 464 0 a232 232 0 1 1 -464 0" />
      </defs>
      <circle cx="300" cy="300" r="292" fill="url(#corpo-anilha)" />
      <circle cx="300" cy="300" r="292" fill="none" stroke="url(#luz-borda)" strokeWidth="3" />
      <circle cx="300" cy="300" r="262" fill="none" stroke="rgba(245,241,232,0.10)" strokeWidth="1" />
      <circle cx="300" cy="300" r="204" fill="none" stroke="rgba(245,241,232,0.10)" strokeWidth="1" />
      {marcas.map((a) => (
        <line
          key={a}
          x1="300"
          y1="14"
          x2="300"
          y2={a % 30 === 0 ? 36 : 26}
          stroke="rgba(245,241,232,0.22)"
          strokeWidth={a % 30 === 0 ? 2 : 1}
          transform={`rotate(${a} 300 300)`}
        />
      ))}
      <text className="anilha-texto" fill="rgba(245,241,232,0.5)">
        <textPath href="#curva-texto" startOffset="0">
          VALE FITNESS ✦ FORJA SUA EVOLUÇÃO ✦ VALE FITNESS ✦ FORJA SUA EVOLUÇÃO ✦
        </textPath>
      </text>
      <circle cx="300" cy="300" r="120" fill="#0b0d16" stroke="rgba(245,241,232,0.14)" />
      <circle cx="300" cy="300" r="52" fill="#0A0A0A" stroke="url(#luz-borda)" strokeWidth="2" />
      <circle cx="300" cy="300" r="20" fill="#050505" />
    </svg>
  )
}

function Hero() {
  return (
    <section id="hero" className="hero" data-fx-fundo="#0A0A0A" data-fx-tinta="#F5F1E8">
      <div className="hero-fundo" aria-hidden="true">
        <div className="hero-luz" />
        <div className="hero-feixe" />
        <div className="hero-placa" data-fx-paralaxe="0.16">
          <Anilha />
        </div>
      </div>

      <div className="hero-tags" aria-hidden="true">
        <span data-fx-mouse="16" className="hero-tag hero-tag-a">
          <TagRotativa itens={['✦ ESTÚDIO PREMIUM', '✦ INICIANTE OU ATLETA']} />
        </span>
        <span data-fx-mouse="22" className="hero-tag hero-tag-b">
          <TagRotativa itens={['✦ ABRIMOS ÀS 05H', '✦ SENHOR DO BONFIM · BA']} intervalo={3800} />
        </span>
      </div>

      <h1 className="hero-titulo" data-fx="palavras" data-fx-duracao="900">
        FORJA SUA EVOLUÇÃO
      </h1>

      <div className="hero-base">
        <p className="hero-lead" data-fx="surgir" data-fx-atraso="700">
          Aqui você é bem-vindo. Comece de onde estiver, do primeiro treino ao nível de atleta.
        </p>
        <div data-fx="subir" data-fx-atraso="900">
          <MagneticButton href={whatsapp()} target="_blank" rel="noreferrer" className="btn-hero">
            Começar agora
          </MagneticButton>
        </div>
      </div>

      <div className="faixa" aria-hidden="true">
        <div className="faixa-trilha">
          {[0, 1].map((k) => (
            <div className="faixa-grupo" key={k}>
              {FAIXA.map((t) => (
                <span key={t + k}>
                  {t} <b>✦</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Hero)
