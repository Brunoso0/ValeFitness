import { useCallback, useEffect, useState } from 'react'
import Loader from './componentes/Loader'
import Cursor from './componentes/Cursor'
import Nav from './componentes/Nav'
import BarraCarrega from './componentes/BarraCarrega'
import Hero from './componentes/Hero'
import Manifesto from './componentes/Manifesto'
import Programas from './componentes/Programas'
import Planos from './componentes/Planos'
import Treinadores from './componentes/Treinadores'
import Depoimentos from './componentes/Depoimentos'
import Rodape from './componentes/Rodape'

// O motor de rolagem (public/sites-incriveis.js) lê o DOM uma única vez,
// então só é carregado depois que a página inteira já foi renderizada.
function carregarMotor() {
  if (window.__motorFx) return
  window.__motorFx = true
  const s = document.createElement('script')
  s.src = `${import.meta.env.BASE_URL}sites-incriveis.js`
  document.body.appendChild(s)
}

export default function App() {
  const [pronto, setPronto] = useState(false)
  const aoTerminarLoader = useCallback(() => setPronto(true), [])

  useEffect(() => {
    if (pronto) carregarMotor()
  }, [pronto])

  return (
    <>
      <div className="ruido" aria-hidden="true" />
      <Cursor />
      <Loader onFim={aoTerminarLoader} />
      <Nav />
      <BarraCarrega />
      <main className="principal">
        <Hero />
        <Manifesto />
        <Programas />
        <Planos />
        <Treinadores />
        <Depoimentos />
      </main>
      <Rodape />
    </>
  )
}
