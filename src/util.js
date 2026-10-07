export const BASE = import.meta.env.BASE_URL

export const reduzMovimento = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const temPonteiro = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

// Leva a página até uma seção (ou ao fim, para o contato)
export function irPara(id) {
  const comportamento = reduzMovimento() ? 'auto' : 'smooth'
  if (id === 'contato') {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: comportamento })
    return
  }
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: comportamento })
}
