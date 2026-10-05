import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const BRANDS = [
  {
    id: 'induleche',
    name: 'Induleche',
    shortDesc: 'Nuestra marca estrella de leche en polvo entera y fórmulas fortificadas con vitaminas A, D3 y hierro. Sinónimo de confianza en la mesa de las familias colombianas desde 1989.',
    colorTheme: '#EA580C', // Naranja Indulácteos
    colorBg: 'bg-[#EA580C]',
    logo: '/assets/indulacteos/logo-pagina-web.jpg',
    widePhoto: '/assets/brands/brand-induleche-wide.jpg'
  },
  {
    id: 'llano-grande',
    name: 'Llano Grande',
    shortDesc: 'Fórmula láctea balanceada con suero seleccionado y enriquecida para multiplicar el rendimiento en desayunos, avenas, jugos y preparaciones caseras con el mejor balance costo-beneficio.',
    colorTheme: '#15803D', // Verde Pradera
    colorBg: 'bg-[#15803D]',
    logo: '/assets/indulacteos/logo-llano-grande-768x593.png',
    widePhoto: '/assets/brands/brand-llanogrande-wide.jpg'
  }
]

export default function Brands() {
  const [index, setIndex] = useState(0)
  const [rotation, setRotation] = useState(0)

  // Precarga inmediata de las imágenes de ambas marcas para que estén en memoria/caché
  useEffect(() => {
    BRANDS.forEach(b => {
      const imgLogo = new Image()
      imgLogo.src = b.logo
      const imgPhoto = new Image()
      imgPhoto.src = b.widePhoto
    })
  }, [])

  const activeBrand = BRANDS[index]

  const handleNext = () => {
    const nextIdx = (index + 1) % BRANDS.length
    // Girar 180° hacia abajo con cada alternancia
    setRotation(prev => prev + 180)
    setIndex(nextIdx)
  }

  return (
    <section
      id="marcas"
      className="w-full bg-white relative overflow-hidden select-none scroll-mt-20 min-h-[92vh] flex flex-col justify-between pt-14 pb-12 lg:pb-0"
    >
      
      {/* Título de sección amplio y nítido */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full px-6 sm:px-12 lg:px-16 pt-2 pb-6"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight">
          Nuestras <span className="text-[#EA580C]">Marcas</span> Líderes
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal mt-3 max-w-2xl leading-relaxed">
          Tradición, nutrición y rendimiento para los hogares y la industria de Colombia a través de nuestros sellos insignia.
        </p>
      </motion.div>

      {/* CONTENEDOR FLEX PRINCIPAL: OCUPA LA ALTURA COMPLETA DE PANTALLA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex-1 flex flex-col lg:flex-row items-stretch min-h-[600px] lg:min-h-[660px] relative"
      >
        
        {/* =========================================================================
            1. DISCO / RUEDA EN EL BORDE IZQUIERDO (MÁS GRANDE: 520px)
            - Centro colocado exactamente sobre el borde izquierdo del viewport.
            - La mitad visible (+X) muestra 100% NARANJA cuando está en Induleche.
            - Al girar 180° hacia abajo, la mitad visible pasa a ser 100% VERDE para Llano Grande.
           ========================================================================= */}
        <div className="w-full lg:w-[280px] xl:w-[310px] shrink-0 flex items-center justify-start relative overflow-visible py-8 lg:py-0">
          {/* El centro del círculo queda en X = 0 (borde de pantalla) */}
          <div className="relative -left-44 sm:-left-56 lg:-left-[260px] flex items-center justify-center">
            
            {/* Anillo exterior que rota 180° */}
            <motion.div
              animate={{ rotate: rotation }}
              transition={{
                duration: 0.95,
                ease: [0.4, 0.0, 0.2, 1]
              }}
              onClick={handleNext}
              className="w-88 h-88 sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] rounded-full cursor-pointer relative shadow-2xl flex items-center justify-center p-2.5 border-4 border-slate-100 bg-white"
              title="Girar para alternar marca"
            >
              {/* SVG circular con mitades alineadas:
                  - Semicírculo Derecho (0° a 180° relativo a -90deg): NARANJA (#EA580C)
                  - Semicírculo Izquierdo (180° a 360° relativo a -90deg): VERDE (#15803D)
                  Con -rotate-90, el semicírculo naranja se sitúa exactamente en la mitad derecha visible.
              */}
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {/* Mitad Derecha Visible en reposo: NARANJA INDULECHE */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#EA580C"
                  strokeWidth="16"
                  strokeDasharray="125.66 125.66"
                  strokeDashoffset="0"
                />
                {/* Mitad Opuesta que entra al rotar 180°: VERDE LLANO GRANDE */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#15803D"
                  strokeWidth="16"
                  strokeDasharray="125.66 125.66"
                  strokeDashoffset="125.66"
                />
              </svg>
            </motion.div>

            {/* Centro blanco estático: alineamos el contenido hacia el borde derecho visible para que se lea 100% despejado */}
            <div
              onClick={handleNext}
              className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-white flex flex-col items-end justify-center pr-3 sm:pr-4 lg:pr-6 shadow-inner border border-slate-200 cursor-pointer pointer-events-auto"
            >
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="flex flex-col items-center text-[#0F172A] w-28 sm:w-32 lg:w-36 text-center"
              >
                <ArrowDown className="w-8 h-8 lg:w-9 lg:h-9 text-[#0F172A]" />
                <span className="text-xs lg:text-sm font-black uppercase tracking-widest mt-1.5">
                  Gira
                </span>
                <span className="text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-wider">
                  para cambiar
                </span>
              </motion.div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            2. CONTENIDO CENTRAL: LOGO MAXIMIZADO + BREVE DESCRIPCIÓN
           ========================================================================= */}
        <div className="flex-1 grid grid-cols-1 items-center px-6 sm:px-12 lg:px-12 xl:px-16 py-8 lg:py-10 z-10 relative">
          <AnimatePresence initial={false}>
            <motion.div
              key={activeBrand.id + '-info'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="col-start-1 row-start-1 space-y-7 max-w-xl w-full"
            >
              {/* LOGO MAXIMIZADO APROVECHANDO EL ESPACIO VERTICAL Y HORIZONTAL */}
              <div className={`h-56 sm:h-64 lg:h-72 flex items-center ${activeBrand.id === 'llano-grande' ? 'justify-center' : 'justify-start'}`}>
                <img
                  src={activeBrand.logo}
                  alt={`Logo ${activeBrand.name}`}
                  className={`max-h-full w-auto max-w-[420px] sm:max-w-[520px] object-contain drop-shadow-none ${activeBrand.id === 'llano-grande' ? 'object-center' : 'object-left'}`}
                />
              </div>

              {/* BREVE DESCRIPCIÓN */}
              <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed font-normal">
                {activeBrand.shortDesc}
              </p>

              {/* BOTÓN DE CAMBIO */}
              <div className="pt-2">
                <button
                  onClick={handleNext}
                  className={`px-8 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white transition-all shadow-sm hover:opacity-90 active:scale-95 cursor-pointer ${activeBrand.colorBg}`}
                >
                  Ver {index === 0 ? 'Llano Grande' : 'Induleche'} →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =========================================================================
            3. FOTO DERECHA TOTALMENTE PEGADA AL BORDE DERECHO (ALTO COMPLETO)
            Ambas imágenes se mantienen montadas en el DOM para evitar re-solicitudes o flash de 'alt'
           ========================================================================= */}
        <div className="w-full lg:w-[48%] xl:w-[50%] lg:min-w-[480px] h-96 sm:h-[480px] lg:h-auto min-h-[600px] lg:min-h-full overflow-hidden shrink-0 ml-auto relative bg-slate-50">
          {BRANDS.map((b, bIdx) => {
            const isActive = bIdx === index
            return (
              <div
                key={b.id + '-photo-wrapper'}
                aria-hidden={!isActive}
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={b.widePhoto}
                  alt={isActive ? `Fotografía de ${b.name}` : ''}
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  className="w-full h-full object-cover object-right block"
                />
              </div>
            )
          })}

          {/* Suavizado sutil en el borde izquierdo de la imagen */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-20" />
          {/* Suavizado superior en móvil */}
          <div className="lg:hidden absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
        </div>

      </motion.div>

    </section>
  )
}
