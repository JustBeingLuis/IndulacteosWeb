import { motion } from 'framer-motion'
import { Target, Compass, Factory, ArrowRight } from 'lucide-react'

const PILLARS = [
  {
    id: 'mision',
    pilarNum: 'Pilar 1',
    title: 'Misión Corporativa',
    subtitle: 'Nutrición, Bienestar & Campo',
    shortDesc: 'Captación y procesamiento de leche cruda para elaborar leche y fórmulas lácteas de alta calidad, impulsando el bienestar de las familias y el desarrollo campesino de Santander.',
    image: '/assets/indulacteos/BANNER-2-1024x369.png',
    icon: Target
  },
  {
    id: 'vision',
    pilarNum: 'Pilar 2',
    title: 'Visión Estratégica',
    subtitle: 'Liderazgo Nacional Lácteo',
    shortDesc: 'Ser referentes en Colombia en pulverización y nuevos derivados lácteos sostenibles, generando valor para ganaderos, aliados mayoristas y hogares colombianos.',
    image: '/assets/indulacteos/Imagen1-qo0lpzi8e423g26yoqyjt4h7iyqw4cjtmbm2z5sc4w.jpg',
    icon: Compass
  },
  {
    id: 'capacidad',
    pilarNum: 'Pilar 3',
    title: 'Capacidad Industrial',
    subtitle: 'Tecnología en Bucaramanga',
    shortDesc: 'Planta automatizada en el Barrio Ricaurte con secado por atomización (spray drying) y envasado aséptico para retail y sacos industriales de 25 kg.',
    image: '/assets/indulacteos/Linea-industrial-q1uwlqgy2djpujz8hhirgjydzpgj38p1eyp879g41c.jpg',
    icon: Factory
  }
]

export default function Story() {
  return (
    <section id="sobre-nosotros" className="w-full bg-white relative overflow-hidden select-none scroll-mt-20 pt-16 pb-24">
      
      {/* CABECERA LIMPIA: TÍTULO "Nuestra Esencia" (Esencia en naranja) + BREVE DESCRIPCIÓN */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full px-6 sm:px-12 lg:px-16 pb-12"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight">
          Nuestra <span className="text-[#EA580C]">Esencia</span>
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal mt-3 max-w-2xl leading-relaxed">
          Los tres pilares fundamentales que guían a Indulácteos de Colombia en cada jornada de captación, procesamiento y distribución a nivel país.
        </p>
      </motion.div>

      {/* CONTENEDOR A TODO EL ANCHO: 3 BANDERAS VERTICALES CONTINUAS */}
      <div className="w-full px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-x border-slate-300 divide-y md:divide-y-0 md:divide-x divide-slate-300 bg-white shadow-xs">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.22, // Animación secuencial de izquierda a derecha
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group relative flex flex-col justify-between min-h-[580px] lg:min-h-[640px] cursor-pointer bg-white transition-colors duration-300"
              >
                {/* CAPA DE HOVER: AL PASAR EL CURSOR SE PONE NARANJA CON OPACIDAD DEL 10% */}
                <div className="absolute inset-0 bg-[#EA580C]/0 group-hover:bg-[#EA580C]/10 transition-colors duration-400 z-20 pointer-events-none" />

                {/* ----------------------------------------------------
                    1. PARTE SUPERIOR DE LA BANDERA: PILAR X + TÍTULO
                   ---------------------------------------------------- */}
                <div className="pt-8 pb-6 px-6 sm:px-8 bg-white relative z-10 flex items-start justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-[#EA580C] block mb-1">
                      {pillar.pilarNum}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-bold text-slate-500 mt-1">
                      {pillar.subtitle}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#EA580C] shrink-0 group-hover:bg-[#EA580C] group-hover:text-white group-hover:border-[#EA580C] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* ----------------------------------------------------
                    CORTE ONDULADO / ZIGZAG DECORATIVO (DIVISOR ESTILO BANDERA)
                   ---------------------------------------------------- */}
                <div className="relative w-full h-6 overflow-hidden z-15 -my-1 text-white">
                  <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-full fill-current stroke-slate-300 stroke-[2]"
                  >
                    <path d="M0,0 L0,70 Q100,10 200,70 T400,70 T600,70 T800,70 T1000,70 T1200,70 L1200,0 Z" />
                  </svg>
                </div>

                {/* ----------------------------------------------------
                    2. FOTO REPRESENTATIVA DE LA BANDERA
                   ---------------------------------------------------- */}
                <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden bg-slate-100 z-10">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>

                {/* ----------------------------------------------------
                    3. BREVE DESCRIPCIÓN EN LA PARTE INFERIOR
                   ---------------------------------------------------- */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white z-10">
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                    {pillar.shortDesc}
                  </p>

                  <div className="pt-6 flex items-center gap-2 text-xs font-black text-[#EA580C] group-hover:translate-x-2 transition-transform duration-300">
                    <span className="uppercase tracking-wider">Conocer más</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Remate inferior de la bandera (franja sutil) */}
                <div className="h-1.5 w-full bg-slate-100 group-hover:bg-[#EA580C] transition-colors duration-400" />

              </motion.div>
            )
          })}
        </div>
      </div>

    </section>
  )
}
