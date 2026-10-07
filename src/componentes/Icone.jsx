const CAMINHOS = {
  haltere: 'M6 7v10M3 9.5v5M18 7v10M21 9.5v5M6 12h12',
  raio: 'M13 2 4 14h7l-1 8 9-12h-7l1-8z',
  yoga: 'M12 3.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5zM4 11c3 1 5 1 8 1s5 0 8-1M12 12v4m0 0-4 4m4-4 4 4',
  lab: 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3M7.5 15h9',
  whatsapp:
    'M20 11.5a8 8 0 0 1-11.9 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5zM9 9c.3 2 2.2 4 4.5 5l1.3-1.2-1.8-1-.7.7c-.8-.4-1.5-1.1-1.9-1.9l.7-.7-1-1.8L9 9z',
  telefone:
    'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
  pin: 'M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  instagram:
    'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17.5 6.5h.01',
  seta: 'M7 17 17 7M8 7h9v9',
  anterior: 'M15 5l-7 7 7 7',
  proximo: 'M9 5l7 7-7 7',
}

export default function Icone({ nome, tamanho = 24, className = '', ...resto }) {
  return (
    <svg
      className={`icone ${className}`}
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...resto}
    >
      <path d={CAMINHOS[nome]} />
    </svg>
  )
}

export function Estrela({ tamanho = 18 }) {
  return (
    <svg width={tamanho} height={tamanho} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" />
    </svg>
  )
}
