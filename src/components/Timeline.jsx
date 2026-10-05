import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Building, Award, Factory, Sparkles, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'

const TIMELINE_EVENTS = [
  {
    year: '1989',
    badge: 'Fundación & Origen',
    title: 'Nacimiento en Bucaramanga',
    leader: 'Maryluz Mayorga',
    description: 'Nace como empresa empacadora y comercializadora de leche en polvo entera bajo el liderazgo visionario de Maryluz Mayorga, ubicándose estratégicamente en la ciudad de Bucaramanga para abastecer a Santander y el oriente colombiano.',
    detail: 'Primeros acopios en hatos ganaderos de la región y comercialización en tiendas de barrio.',
    image: '/assets/indulacteos/img_indula_1.png',
    icon: Sparkles,
    color: '#EA580C'
  },
  {
    year: '2012',
    badge: 'Evolución Societaria',
    title: 'Constitución como INDUCOLAC S.A.S.',
    leader: 'Expansión Comercial',
    description: 'Se convierte formalmente en persona jurídica bajo la razón social INDUCOLAC S.A.S., permitiendo la apertura de canales mayoristas y la incursión con solidez en el mercado interdepartamental.',
    detail: 'Ampliación sustancial del portafolio de servicios y alianzas con centros de distribución.',
    image: '/assets/indulacteos/logo-pagina-web.jpg',
    icon: Building,
    color: '#0284C7'
  },
  {
    year: '2015',
    badge: 'Consolidación de Marca',
    title: 'INDULÁCTEOS DE COLOMBIA S.A.S.',
    leader: 'Marcas Propias Emblemáticas',
    description: 'La compañía se transforma en INDULACTEOS DE COLOMBIA S.A.S., implementando sistemas avanzados de gestión de calidad, estandarización técnica de materias primas y el posicionamiento de sus marcas insignia: Induleche, Llano Grande y Cream Mery.',
    detail: 'Obtención de certificaciones y garantía de confianza para amas de casa e industriales.',
    image: '/assets/indulacteos/logo-llano-grande-768x593.png',
    icon: Award,
    color: '#16A34A'
  },
  {
    year: '2017',
    badge: 'Salto Tecnológico B2B',
    title: 'Apertura de la División Industrial',
    leader: 'Sacos 25 Kg & Maquila',
    description: 'Lanzamiento del portafolio industrial con sacos de 25 kg y servicio integral de maquila para marcas de terceros. Se implementan tecnologías de secado y envasado de alta barrera, impulsando el desarrollo rural sostenible y el bienestar de los ganaderos.',
    detail: 'Ingreso directo como proveedor de las principales panificadoras y galleteras del país.',
    image: '/assets/indulacteos/Linea-industrial-q1uwlqgy2djpujz8hhirgjydzpgj38p1eyp879g41c.jpg',
    icon: Factory,
    color: '#D97706'
  },
  {
    year: '2026',
    badge: 'Era Actual & Futuro',
    title: 'Transformación Integral & Liderazgo',
    leader: 'Modernización Tecnológica',
    description: 'Consolidación del ecosistema digital, optimización operativa de planta, expansión de canales de distribución B2B y fortalecimiento del catálogo de nutrición familiar para Colombia y mercados vecinos.',
    detail: 'Adopción de estándares internacionales de inocuidad y plataforma de atención comercial directa.',
    image: '/assets/indulacteos/BANNER-2-1024x369.png',
    icon: Calendar,
    color: '#EA580C'
  }
]

export default function Timeline() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const currentEvent = TIMELINE_EVENTS[selectedIndex]

  return (
    <section id="historia" className="py-14 sm:py-16 lg:py-20 bg-white relative overflow-hidden scroll-mt-20 min-h-screen flex flex-col justify-center">
      <div className="w-full px-6 sm:px-12 lg:px-16 relative z-10 flex flex-col justify-center">
        
        {/* Cabecera balanceada a todo el ancho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 sm:mb-8"
        >
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Más de Tres Décadas Construyendo{' '}
              <span className="text-[#EA580C]">Futuro Lácteo</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Un recorrido constante de evolución técnica, desde una pionera empacadora en Santander hasta una industria procesadora con presencia nacional.
            </p>
          </div>

          {/* Navegación por flechas */}
          <div className="flex items-center gap-3 self-start lg:self-end shrink-0">
            <button
              onClick={() => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : TIMELINE_EVENTS.length - 1))}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 hover:border-slate-900 flex items-center justify-center text-slate-800 transition-colors shadow-xs"
              aria-label="Hito anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setSelectedIndex((prev) => (prev < TIMELINE_EVENTS.length - 1 ? prev + 1 : 0))}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#EA580C] hover:bg-[#c2410c] flex items-center justify-center text-white transition-colors shadow-md shadow-orange-500/20"
              aria-label="Siguiente hito"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Barra Cronológica de Años (100% VISIBLES, SÓLIDOS Y CLAROS) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6"
        >
          {TIMELINE_EVENTS.map((event, idx) => {
            const isSelected = selectedIndex === idx
            return (
              <button
                key={event.year}
                onClick={() => setSelectedIndex(idx)}
                className={`p-3 sm:p-3.5 rounded-xl text-left transition-all duration-300 border relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#EA580C] text-white border-[#EA580C] shadow-lg shadow-orange-950/20 -translate-y-0.5'
                    : 'bg-white hover:bg-slate-50 text-[#0F172A] border-slate-200 hover:border-[#EA580C]'
                }`}
              >
                {/* AÑO SÓLIDO Y TOTALMENTE LEGIBLE */}
                <div className="flex items-baseline justify-between mb-0.5">
                  <span className={`text-xl sm:text-2xl font-black tracking-tight ${
                    isSelected ? 'text-white' : 'text-[#0F172A]'
                  }`}>
                    {event.year}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-slate-300'}`} />
                </div>
                <span className={`text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider block truncate ${
                  isSelected ? 'text-white/90' : 'text-slate-500'
                }`}>
                  {event.badge}
                </span>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white" />
                )}
              </button>
            )
          })}
        </motion.div>

        {/* Tarjeta de Detalle del Hito Seleccionado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 border border-slate-200 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
        >
          
          {/* Columna de Imagen Representativa del Hito (Izquierda) */}
          <div className="lg:col-span-6 order-2 lg:order-1 h-full flex flex-col">
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-gradient-to-b from-slate-50 to-slate-100/70 p-4 sm:p-6 flex flex-col items-center justify-center min-h-[340px] sm:min-h-[390px] lg:min-h-[420px] w-full">
              <img
                src={currentEvent.image}
                alt={currentEvent.title}
                className="max-h-[300px] sm:max-h-[340px] lg:max-h-[370px] w-auto max-w-full object-contain filter drop-shadow-md rounded-xl transition-all duration-300"
              />
              <div className="pt-4 text-center">
                <span className="text-xs font-semibold text-slate-500">
                  Archivo Institucional Indulácteos · Hito {currentEvent.year}
                </span>
              </div>
            </div>
          </div>

          {/* Columna de Texto Limpia (Derecha) */}
          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2 pl-0 lg:pl-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#EA580C] tracking-tight">
                {currentEvent.year}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight">
              {currentEvent.title}
            </h3>

            <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed">
              {currentEvent.description}
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
