import { ShieldCheck, Scale, Handshake, Target, HeartHandshake, Zap, CheckCircle } from 'lucide-react'

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Responsabilidad',
    tagline: 'Compromiso Consciente',
    text: 'Los colaboradores de Indulácteos se caracterizan por tomar decisiones libres y conscientes, asumiendo positivamente las consecuencias de sus actos y garantizando el cumplimiento de los planes y objetivos de inocuidad.',
    color: '#EA580C',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    icon: Scale,
    title: 'Ética',
    tagline: 'Integridad Absoluta',
    text: 'Pilar indivisible de nuestra cultura organizacional. Forja el carácter y la posición transparente de la compañía frente a consumidores, ganaderos, proveedores y entes regulatorios.',
    color: '#059669',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200'
  },
  {
    icon: Handshake,
    title: 'Lealtad',
    tagline: 'Fidelidad y Rectitud',
    text: 'Practicamos las leyes de la fidelidad, honor y profundo sentido de pertenencia con Santander y Colombia, reflejándose en el cuidado de cada lote producido y en relaciones duraderas con nuestros clientes.',
    color: '#0284C7',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200'
  },
  {
    icon: Target,
    title: 'Disciplina',
    tagline: 'Rigor Operativo',
    text: 'Fomenta el orden, la perseverancia y el autocontrol en cada etapa del proceso de pulverización y envasado aséptico, asegurando la coordinación armónica y los estándares bromatológicos exigidos.',
    color: '#D97706',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200'
  },
  {
    icon: HeartHandshake,
    title: 'Tolerancia',
    tagline: 'Respeto e Inclusión',
    text: 'Respeto incondicional por las ideas, creencias y costumbres de los demás. Construimos un ambiente laboral inclusivo, armónico y colaborativo para todos los colaboradores de la planta.',
    color: '#7C3AED',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    icon: Zap,
    title: 'Actitud de Servicio',
    tagline: 'Energía & Dinamismo',
    text: 'Disposición constructiva para brindar soluciones ágiles a nuestros distribuidores e industriales, atendiendo cada solicitud con calidez humana y respuesta técnica oportuna.',
    color: '#E11D48',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200'
  }
]

export default function Values() {
  return (
    <section id="valores" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-950 font-bold text-xs uppercase tracking-wider">
            <CheckCircle className="w-3.5 h-3.5 text-orange-600" />
            <span>Cultura & Principios Organizacionales</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.08]">
            Los 6 Valores que Orientan Nuestro{' '}
            <span className="text-[#EA580C]">Trabajo Diario</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Superando los esquemas genéricos: cada principio define una conducta medible en la planta, el laboratorio y el relacionamiento con el consumidor colombiano.
          </p>
        </div>

        {/* Grid de 6 Tarjetas SÓLIDAS, 100% VISIBLES (Sin transparencias que las oculten) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {VALUES.map((val) => {
            const Icon = val.icon
            return (
              <div
                key={val.title}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Ícono de Color Específico */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${val.bgColor} flex items-center justify-center border ${val.borderColor} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-7 h-7" style={{ color: val.color }} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                      Oficial
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1">
                    {val.title}
                  </h3>
                  
                  <span className="text-xs font-bold block mb-4" style={{ color: val.color }}>
                    {val.tagline}
                  </span>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {val.text}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: val.color }} />
                  <span className="text-xs font-extrabold text-slate-700">
                    Estándar Indulácteos
                  </span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
