import { memo } from 'react'
import { PLANOS, whatsapp } from '../dados'

function Planos() {
  return (
    <section id="planos" className="planos" data-fx-fundo="#121212" data-fx-tinta="#F5F1E8">
      <header className="secao-cabeca planos-cabeca">
        <div>
          <p className="rotulo" data-fx="surgir">
            Planos
          </p>
          <h2 className="titulo-secao" data-fx="subir">
            Escolha como quer começar.
          </h2>
        </div>
        <p className="nota-ph" data-fx="surgir" data-fx-atraso="200">
          <span className="ph">Placeholder</span> Nomes, valores e benefícios abaixo são ilustrativos e serão
          substituídos pelos reais.
        </p>
      </header>

      <div className="planos-grade">
        {PLANOS.map((plano, i) => (
          <div key={plano.id} className="plano-casca" data-fx={plano.destaque ? 'crescer' : 'subir'} data-fx-atraso={i * 140}>
            <article className={`plano${plano.destaque ? ' plano-destaque' : ''}`} style={{ '--atraso': `${i * 0.9}s` }}>
              {plano.destaque && <span className="plano-tag">✦ Elite · Popular</span>}
              <h3 className="plano-nome">{plano.nome}</h3>
              <p className="plano-preco" aria-label="Valor a definir">
                <small>R$</small> 000<small>/mês</small>
              </p>
              <ul className="plano-lista">
                <li>Benefício a definir</li>
                <li>Benefício a definir</li>
                <li>Benefício a definir</li>
              </ul>
              <a
                className="btn btn-plano"
                href={whatsapp(`Olá! Tenho interesse no ${plano.nome} da Vale Fitness.`)}
                target="_blank"
                rel="noreferrer"
              >
                Quero este plano
              </a>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default memo(Planos)
