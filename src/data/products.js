// Catálogo de productos Indulácteos
// Imágenes alojadas localmente en /assets/products/ para máxima estabilidad y velocidad

export const consumoProducts = [
  // ─── Categoría 1: Leches en Polvo & Alimentos Lácteos ───────────────────────
  {
    id: 'leche-polvo-entera-induleche',
    nombre: 'Leche en Polvo Entera Induleche',
    marca: 'Induleche',
    categoria: 'Leches en Polvo & Alimentos Lácteos',
    descripcion:
      'Leche en polvo entera Induleche, enriquecida con Vitaminas A y D3. Ideal para el consumo diario de toda la familia. Elaborada con la más alta calidad de leche colombiana, garantizando sabor y nutrición en cada preparación.',
    imagen: '/assets/products/leche_entera_polvo.png',
    presentaciones: [
      { peso: '125g', imagen: '/assets/products/leche_entera_polvo.png' },
      { peso: '200g', imagen: '/assets/products/leche_entera_polvo.png' },
      { peso: '360g', imagen: '/assets/products/leche_entera_polvo.png' },
      { peso: '380g', imagen: '/assets/products/leche_entera_polvo.png' },
      { peso: '500g', imagen: '/assets/products/leche_entera_polvo.png' },
      { peso: '800g', imagen: '/assets/products/leche_entera_polvo.png' },
      { peso: '900g', imagen: '/assets/products/leche_entera_polvo.png' },
      { peso: '1000g', imagen: '/assets/products/leche_entera_polvo.png' },
    ],
  },
  {
    id: 'alimento-lacteo-induleche',
    nombre: 'Alimento Lácteo Induleche',
    marca: 'Induleche',
    categoria: 'Leches en Polvo & Alimentos Lácteos',
    descripcion:
      'Alimento lácteo en polvo Induleche, enriquecido con Vitaminas A y D3. Excelente alternativa nutritiva para el consumo familiar, con el sabor característico de la leche colombiana.',
    imagen: '/assets/products/alimento_lacteo_polvo.png',
    presentaciones: [
      { peso: '125g', imagen: '/assets/products/alimento_lacteo_polvo.png' },
      { peso: '380g', imagen: '/assets/products/alimento_lacteo_polvo.png' },
      { peso: '800g', imagen: '/assets/products/alimento_lacteo_polvo.png' },
      { peso: '900g', imagen: '/assets/products/alimento_lacteo_polvo.png' },
      { peso: '1200g', imagen: '/assets/products/alimento_lacteo_polvo.png' },
    ],
  },
  {
    id: 'alimento-lacteo-induleche-azucarado',
    nombre: 'Alimento Lácteo Induleche Azucarado',
    marca: 'Induleche',
    categoria: 'Leches en Polvo & Alimentos Lácteos',
    descripcion:
      'Alimento lácteo en polvo azucarado Induleche, con un sabor suavemente dulce que lo hace perfecto para preparar bebidas lácteas y mezclas especiales. Ideal para el desayuno de toda la familia.',
    imagen: '/assets/products/alimento_lacteo_azucarado.png',
    presentaciones: [
      { peso: '380g', imagen: '/assets/products/alimento_lacteo_azucarado.png' },
      { peso: '900g', imagen: '/assets/products/alimento_lacteo_azucarado.png' },
    ],
  },
  {
    id: 'leche-polvo-instantanea-doypack',
    nombre: 'Leche en Polvo Entera Instantánea Doypack',
    marca: 'Induleche',
    categoria: 'Leches en Polvo & Alimentos Lácteos',
    descripcion:
      'Leche en polvo entera instantánea presentación Doypack, pensada para la conveniencia del consumidor moderno. Fácil de preparar, ideal para llevar a cualquier parte y disfrutar en cualquier momento.',
    imagen: '/assets/products/leche_instantanea_25g.jpeg',
    presentaciones: [
      { peso: '25g', imagen: '/assets/products/leche_instantanea_25g.jpeg' },
    ],
  },
  {
    id: 'alimento-lacteo-llano-grande',
    nombre: 'Alimento Lácteo Llano Grande',
    marca: 'Llano Grande',
    categoria: 'Leches en Polvo & Alimentos Lácteos',
    descripcion:
      'Alimento lácteo en polvo de la marca Llano Grande, elaborado con leche de la región llanera colombiana. Sabor auténtico y nutritivo, disponible en diversas presentaciones para toda la familia.',
    imagen: '/assets/products/alimento_llano_grande.png',
    presentaciones: [
      { peso: '125g', imagen: '/assets/products/alimento_llano_grande.png' },
      { peso: '250g', imagen: '/assets/products/alimento_llano_grande.png' },
      { peso: '380g', imagen: '/assets/products/alimento_llano_grande.png' },
      { peso: '500g', imagen: '/assets/products/alimento_llano_grande.png' },
      { peso: '900g', imagen: '/assets/products/alimento_llano_grande.png' },
    ],
  },

  // ─── Categoría 2: Leches Líquidas UHT / Larga Vida ──────────────────────────
  {
    id: 'leche-uht-bolsa-900ml',
    nombre: 'Leche Entera UHT Induleche (Bolsa)',
    marca: 'Induleche',
    categoria: 'Leches Líquidas UHT / Larga Vida',
    descripcion:
      'Leche entera UHT Induleche en presentación bolsa. Procesada bajo tecnología Ultra High Temperature para garantizar larga vida sin conservantes, manteniendo todos los nutrientes de la leche fresca colombiana.',
    imagen: '/assets/products/leche_uht_entera_bolsa.webp',
    presentaciones: [
      { peso: '900ml', imagen: '/assets/products/leche_uht_entera_bolsa.webp' },
      { peso: '900ml x6', imagen: '/assets/products/leche_uht_entera_sixpack.jpg' },
    ],
  },
  {
    id: 'leche-uht-tetra-900ml',
    nombre: 'Leche Entera UHT Tetra Pak',
    marca: 'Induleche',
    categoria: 'Leches Líquidas UHT / Larga Vida',
    descripcion:
      'Leche entera UHT Induleche en envase Tetra Pak. Presentación práctica y hermética que conserva el sabor y la calidad de la leche colombiana por más tiempo, sin necesidad de refrigeración hasta su apertura.',
    imagen: '/assets/products/leche_uht_entera_tetra.webp',
    presentaciones: [
      { peso: '900ml', imagen: '/assets/products/leche_uht_entera_tetra.webp' },
    ],
  },
  {
    id: 'leche-deslactosada-uht-bolsa',
    nombre: 'Leche Deslactosada Semi UHT (Bolsa)',
    marca: 'Induleche',
    categoria: 'Leches Líquidas UHT / Larga Vida',
    descripcion:
      'Leche deslactosada semidescremada UHT Induleche en bolsa. Diseñada para personas con intolerancia a la lactosa, sin sacrificar el sabor ni los valores nutricionales de la leche colombiana.',
    imagen: '/assets/products/leche_uht_deslactosada_bolsa.webp',
    presentaciones: [
      { peso: '900ml', imagen: '/assets/products/leche_uht_deslactosada_bolsa.webp' },
      { peso: '900ml x6', imagen: '/assets/products/leche_uht_deslactosada_sixpack.jpg' },
    ],
  },
  {
    id: 'leche-deslactosada-uht-tetra',
    nombre: 'Leche Deslactosada Semi UHT Tetra Pak',
    marca: 'Induleche',
    categoria: 'Leches Líquidas UHT / Larga Vida',
    descripcion:
      'Leche deslactosada semidescremada UHT Induleche en Tetra Pak. La opción ideal para quienes buscan una leche sin lactosa de alta calidad, en el práctico y resistente envase Tetra Pak.',
    imagen: '/assets/products/leche_uht_deslactosada_tetra.webp',
    presentaciones: [
      { peso: '900ml', imagen: '/assets/products/leche_uht_deslactosada_tetra.webp' },
    ],
  },
  {
    id: 'leche-uat-semidescremada',
    nombre: 'Leche UAT UHT Semidescremada Larga Vida',
    marca: 'Induleche',
    categoria: 'Leches Líquidas UHT / Larga Vida',
    descripcion:
      'Leche UAT semidescremada de larga vida Induleche. Con menor contenido de grasa y el mismo sabor auténtico, ideal para quienes cuidan su alimentación sin renunciar a los beneficios de la leche colombiana.',
    imagen: '/assets/products/leche_uat_900ml.png',
    presentaciones: [
      { peso: '400ml', imagen: '/assets/products/leche_uat_900ml.png' },
      { peso: '900ml', imagen: '/assets/products/leche_uat_900ml.png' },
    ],
  },
]

export const industrialProducts = [
  {
    id: 'alimento-lacteo-polvo-induleche-industrial',
    nombre: 'Alimento Lácteo en Polvo Induleche',
    marca: 'Induleche',
    categoria: 'Sacos Industriales',
    descripcion:
      'Alimento lácteo en polvo Induleche para uso industrial. Formulado para la industria alimentaria, panaderías, pastelerías y empresas que requieren grandes volúmenes. Garantiza consistencia, calidad y rendimiento en cada lote.',
    imagen: '/assets/products/industrial_alimento_induleche.png',
    presentaciones: [
      { peso: '5 kg', imagen: '/assets/products/industrial_alimento_induleche.png' },
      { peso: '25 kg', imagen: '/assets/products/industrial_alimento_induleche.png' },
    ],
  },
  {
    id: 'alimento-lacteo-polvo-llano-grande-industrial',
    nombre: 'Alimento Lácteo en Polvo Llano Grande',
    marca: 'Llano Grande',
    categoria: 'Sacos Industriales',
    descripcion:
      'Alimento lácteo en polvo Llano Grande para uso industrial. La calidad de los llanos colombianos al servicio de la industria alimentaria. Ideal para empresas que buscan un insumo lácteo de alto rendimiento y sabor auténtico.',
    imagen: '/assets/products/industrial_alimento_llano.png',
    presentaciones: [
      { peso: '5 kg', imagen: '/assets/products/industrial_alimento_llano.png' },
      { peso: '25 kg', imagen: '/assets/products/industrial_alimento_llano.png' },
    ],
  },
  {
    id: 'leche-polvo-entera-industrial',
    nombre: 'Leche en Polvo Entera Industrial',
    marca: 'Induleche',
    categoria: 'Sacos Industriales',
    descripcion:
      'Leche en polvo entera Induleche para uso industrial en sacos de gran formato. Materia prima confiable para la industria de alimentos, confitería, panadería y procesamiento de lácteos, con los más altos estándares de calidad.',
    imagen: '/assets/products/industrial_leche_entera.png',
    presentaciones: [
      { peso: '5 kg', imagen: '/assets/products/industrial_leche_entera.png' },
      { peso: '25 kg', imagen: '/assets/products/industrial_leche_entera.png' },
    ],
  },
]

// Helper para buscar producto por id en cualquier línea
export function findProductById(id) {
  return (
    consumoProducts.find((p) => p.id === id) ||
    industrialProducts.find((p) => p.id === id) ||
    null
  )
}

// Helper para agrupar por categoría
export function groupByCategoria(products) {
  return products.reduce((acc, p) => {
    if (!acc[p.categoria]) acc[p.categoria] = []
    acc[p.categoria].push(p)
    return acc
  }, {})
}
