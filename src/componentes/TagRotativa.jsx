import { useEffect, useState } from 'react'
import { reduzMovimento } from '../util'

// Tag que troca de texto em ciclo
export default function TagRotativa({ itens, intervalo = 3200, className = '' }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (reduzMovimento()) return
    const t = setInterval(() => setI((v) => (v + 1) % itens.length), intervalo)
    return () => clearInterval(t)
  }, [itens.length, intervalo])

  return (
    <span className={`tag ${className}`}>
      <span key={i} className="tag-texto">
        {itens[i]}
      </span>
    </span>
  )
}
