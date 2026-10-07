// Capturas extras (estados assentados e hover) — apoio da verificação
import { chromium } from 'playwright-core'
import { mkdir } from 'node:fs/promises'

const url = process.argv[2] || 'http://localhost:4600'
const saida = process.argv[3] || 'verificacao/extra'
await mkdir(saida, { recursive: true })

const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const nav = await chromium.launch({ executablePath: chrome, headless: true })

async function sessao(nome, w, h, passos) {
  const ctx = await nav.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })
  const p = await ctx.newPage()
  p.on('pageerror', (e) => console.log('ERRO', nome, e.message))
  await p.goto(url, { waitUntil: 'networkidle' })
  await p.waitForTimeout(4500) // loader + animações do hero
  await passos(p, nome)
  await ctx.close()
}

const ir = async (p, y, espera = 1200) => {
  await p.evaluate((v) => window.scrollTo(0, v), y)
  await p.waitForTimeout(espera)
}

await sessao('desktop', 1440, 900, async (p, n) => {
  await p.screenshot({ path: `${saida}/${n}-hero.png` })
  // programas com hover
  const y = await p.evaluate(() => document.getElementById('programas').getBoundingClientRect().top + scrollY)
  await ir(p, y + 150)
  await p.mouse.move(400, 600)
  await p.waitForTimeout(900)
  await p.screenshot({ path: `${saida}/${n}-programas-hover.png` })
  // planos com hover no plano base
  const yp = await p.evaluate(() => document.getElementById('planos').getBoundingClientRect().top + scrollY)
  await ir(p, yp + 250)
  await p.mouse.move(280, 600)
  await p.waitForTimeout(900)
  await p.screenshot({ path: `${saida}/${n}-planos-hover.png` })
  // treinadores com hover
  const yt = await p.evaluate(() => document.getElementById('treinadores').getBoundingClientRect().top + scrollY)
  await ir(p, yt + 500)
  await p.mouse.move(700, 500)
  await p.waitForTimeout(1000)
  await p.screenshot({ path: `${saida}/${n}-treinadores-hover.png` })
  // fim
  await ir(p, 999999, 1500)
  await p.screenshot({ path: `${saida}/${n}-fim.png` })
})

await sessao('celular', 390, 844, async (p, n) => {
  await p.screenshot({ path: `${saida}/${n}-hero.png` })
})

await nav.close()
