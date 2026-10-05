import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  {
    id: 'campo',
    title: 'SOMOS CAMPO',
    subtitle: 'Una tradición ganadera en Santander trabajando cada día para nutrir a nuestro país.',
    image: '/assets/hero/slide-campo-vacas.jpg',
    ctaLabel: 'CONOCE MÁS',
    ctaHref: '#sobre-nosotros'
  },
  {
    id: 'leche',
    title: 'PURA LECHE',
    subtitle: 'Captamos, procesamos y pulverizamos la mejor leche colombiana con los más altos estándares de calidad.',
    image: '/assets/hero/slide-leche-fresca.jpg',
    ctaLabel: 'CONOCE MÁS',
    ctaHref: '#marcas'
  },
  {
    id: 'gente',
    title: 'NUESTRA GENTE',
    subtitle: 'Más de 35 años construyendo región junto a las familias campesinas y trabajadoras de Santander.',
    image: '/assets/hero/slide-nuestra-gente.jpg',
    ctaLabel: 'CONOCE MÁS',
    ctaHref: '#historia'
  }
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  // Autoplay continuo de 6 segundos
  useEffect(() => {
    if (isPaused) return
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, 6000)

    return () => clearInterval(timerRef.current)
  }, [isPaused])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }

  return (
    <section
      className="relative w-full h-screen min-h-screen bg-slate-950 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Capas de Fotografías con Fundido Cruzado Ultra Suave (Cross-fade 1200ms) */}
      {SLIDES.map((slide, idx) => {
        const isCurrent = current === idx
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-[8000ms] ease-out hover:scale-105"
            />
            {/* Scrim cinematográfico suave sin oscurecer en exceso */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/25" />
          </div>
        )
      })}

      {/* Contenido Central: Minimalista, Limpio, Idéntico al Concepto de Referencia */}
      <div className="relative z-20 h-full max-w-5xl mx-auto px-6 flex flex-col justify-center items-center text-center text-white pt-12">
        {SLIDES.map((slide, idx) => {
          const isCurrent = current === idx
          return (
            <div
              key={slide.id}
              className={`transition-all duration-700 ease-out flex flex-col items-center ${
                isCurrent
                  ? 'opacity-100 translate-y-0 relative'
                  : 'opacity-0 translate-y-2 pointer-events-none absolute'
              }`}
            >
              {/* Título en Blanco Puro, Enorme y Contundente */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white drop-shadow-2xl uppercase mb-5">
                {slide.title}
              </h1>

              {/* Subtítulo Descriptivo Corto y Claro */}
              <p className="text-base sm:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-md mb-8">
                {slide.subtitle}
              </p>

              {/* Botón Único en Naranja Indulácteos */}
              <a
                href={slide.ctaHref}
                className="px-9 py-3.5 rounded-full bg-[#EA580C] hover:bg-[#c2410c] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-orange-950/20 hover:scale-105 active:scale-95"
              >
                {slide.ctaLabel}
              </a>
            </div>
          )
        })}
      </div>

      {/* Flechas de Navegación Lateral */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/25 hover:bg-black/50 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/25 hover:bg-black/50 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Slide siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicadores de Slide Inferiores (Puntos suaves) */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center items-center gap-3">
        {SLIDES.map((s, idx) => {
          const isActive = current === idx
          return (
            <button
              key={s.id}
              onClick={() => setCurrent(idx)}
              className="p-1 focus:outline-none"
              aria-label={`Ir al slide ${idx + 1}`}
            >
              <div
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  isActive ? 'w-8 bg-[#EA580C]' : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            </button>
          )
        })}
      </div>

      {/* Transición suave hacia el fondo blanco de la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
    </section>
  )
}
