// Dados REAIS (fonte: perfil da Vale Fitness no Google Maps, informado pelo dono)
export const CONTATO = {
  nome: 'Vale Fitness',
  telefone: '(74) 98137-9339',
  telefoneLink: 'tel:+5574981379339',
  enderecoLinhas: [
    'Av. Antônio Carlos Magalhães, 665',
    'Santos Dumont · Senhor do Bonfim – BA',
    'CEP 48970-000',
  ],
  mapa:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Vale Fitness, Av. Antônio Carlos Magalhães, 665, Senhor do Bonfim, BA'),
}

export const whatsapp = (mensagem = 'Olá! Quero conhecer a Vale Fitness.') =>
  `https://wa.me/5574981379339?text=${encodeURIComponent(mensagem)}`

export const HORARIOS = [
  { dia: 'Segunda a sexta', horas: '05:00 – 22:00' },
  { dia: 'Sábado', horas: '08:00 – 15:00' },
  { dia: 'Domingo', horas: '08:00 – 13:00' },
]

export const AVALIACAO = { nota: 4.7, total: 35, fonte: 'Google Maps' }

// Textos de apoio escritos para a página (confirmar com o dono)
export const PROGRAMAS = [
  {
    id: 'musculacao',
    classe: 'b1',
    icone: 'haltere',
    titulo: 'Musculação Avançada',
    texto: 'Força, técnica e progressão de carga para quem leva o treino a sério.',
    tom: 'azul',
  },
  {
    id: 'hiit',
    classe: 'b2',
    icone: 'raio',
    titulo: 'High Intensity Cardio',
    texto: 'Ritmo alto, intervalos curtos e suor de verdade.',
    tom: 'amarelo',
  },
  {
    id: 'yoga',
    classe: 'b3',
    icone: 'yoga',
    titulo: 'Yoga & Mobility',
    texto: 'Amplitude, respiração e recuperação para treinar por mais tempo.',
    tom: 'azul',
  },
  {
    id: 'lab',
    classe: 'b4',
    icone: 'lab',
    titulo: 'Performance Lab',
    texto: 'O espaço de quem quer chegar ao nível de atleta: foco, método e meta.',
    tom: 'amarelo',
  },
]

// PLACEHOLDERS — nomes, valores e benefícios ainda não informados
export const PLANOS = [
  { id: 'base', nome: 'Plano Base', destaque: false },
  { id: 'elite', nome: 'Plano Elite', destaque: true },
  { id: 'pro', nome: 'Plano Pro', destaque: false },
]

// PLACEHOLDERS — treinadores ainda não informados
export const TREINADORES = [
  { id: 't1', papel: 'Especialidade do treinador' },
  { id: 't2', papel: 'Especialidade do treinador' },
  { id: 't3', papel: 'Especialidade do treinador' },
  { id: 't4', papel: 'Especialidade do treinador' },
]

// PLACEHOLDERS — depoimentos reais ainda não informados
export const DEPOIMENTOS = [
  { id: 'd1', texto: 'Aqui entra o depoimento real de um aluno iniciante.', autor: 'Nome do aluno' },
  { id: 'd2', texto: 'Aqui entra o relato de quem treina para competir.', autor: 'Nome do aluno' },
  { id: 'd3', texto: 'Aqui entra a história de quem voltou a treinar.', autor: 'Nome do aluno' },
]
