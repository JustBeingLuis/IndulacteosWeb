import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Building2, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ShoppingCart, 
  Truck, 
  Briefcase, 
  AlertCircle,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Building
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

// Definición de las dos sedes reales de Indulácteos
const SEDES = [
  {
    id: 'bucaramanga',
    nombre: 'Sede Principal & Planta Bucaramanga',
    subtitulo: 'Centro de Acopio, Operaciones & Planta Ricaurte',
    direccion: 'Carrera 17B1 No. 57 - 23, Barrio Ricaurte',
    ciudad: 'Bucaramanga, Santander, Colombia',
    telefonos: ['+57 (607) 681 1390', '+57 318 308 2359'],
    email: 'comunicaciones@indulacteos.com',
    horario: 'Lunes a Viernes: 7:00 a.m. – 4:20 p.m.',
    tipo: 'Planta de Pulverización & Oficinas Corporativas',
    embedUrl: 'https://maps.google.com/maps?q=indulacteos&t=m&z=17&output=embed&iwloc=near',
    mapsDirectUrl: 'https://www.google.com/maps/search/?api=1&query=Indulacteos+Bucaramanga+Barrio+Ricaurte'
  },
  {
    id: 'sabana',
    nombre: 'Sede Sabana de Torres',
    subtitulo: 'Planta Procesadora & Captación Ganadera',
    direccion: 'Sector Industrial Ganadero, Vía Principal',
    ciudad: 'Sabana de Torres, Santander, Colombia',
    telefonos: ['+57 (607) 681 1390', '+57 318 308 2359'],
    email: 'gestion.humana@indulacteos.com',
    horario: 'Lunes a Viernes: 6:30 a.m. – 4:00 p.m.',
    tipo: 'Planta Procesadora y Punto de Acopio de Leche Cruda',
    embedUrl: 'https://maps.google.com/maps?q=planta%20procesadora%20-%20indulacteos&t=m&z=15&output=embed&iwloc=near',
    mapsDirectUrl: 'https://www.google.com/maps/search/?api=1&query=planta+procesadora+indulacteos+sabana+de+torres'
  }
]

// Tipos de trámite o contacto unificados en un solo formulario
const CONTACT_TYPES = [
  {
    id: 'compras',
    label: 'Compras & Ventas',
    desc: 'Cotizaciones mayoristas, distribuidores y retail',
    icon: ShoppingCart,
    tag: 'Comercial'
  },
  {
    id: 'proveedor',
    label: 'Quiero ser Proveedor',
    desc: 'Insumos, ganadería, empaques y transporte',
    icon: Truck,
    tag: 'Compras & Acopio'
  },
  {
    id: 'empleo',
    label: 'Trabaje con Nosotros',
    desc: 'Oportunidades laborales y hojas de vida',
    icon: Briefcase,
    tag: 'Gestión Humana'
  },
  {
    id: 'pqr',
    label: 'Peticiones, Quejas o Reclamos (PQR)',
    desc: 'Sugerencias, calidad de producto o servicio',
    icon: AlertCircle,
    tag: 'Servicio al Cliente'
  },
  {
    id: 'general',
    label: 'Información General',
    desc: 'Otras consultas institucionales o corporativas',
    icon: HelpCircle,
    tag: 'Administración'
  }
]

export default function ContactoPage() {
  const [activeSede, setActiveSede] = useState('bucaramanga')
  const [selectedType, setSelectedType] = useState('compras')

  // Asegurar siempre posición en la cima de la página al entrar a Contacto
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  // Estado del formulario unificado
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    documento: '',
    empresa: '',
    email: '',
    telefono: '',
    ciudad: '',
    direccion: '',
    dependencia: 'Comercial',
    motivoPqr: 'Calidad del producto',
    mensaje: '',
    autorizoDatos: true
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const selectedSedeData = SEDES.find((s) => s.id === activeSede) || SEDES[0]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.autorizoDatos) {
      alert('Debe aceptar la autorización de tratamiento de datos personales para continuar.')
      return
    }

    setIsSubmitting(true)

    // Simulación de envío estándar y confiable
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 900)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#EA580C] selection:text-white">
      <Header />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 sm:pb-24">
        {/* Cabecera de la Página */}
        <section className="bg-white border-b border-slate-200/80 pt-8 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              <a 
                href="/" 
                onClick={(e) => {
                  e.preventDefault()
                  window.history.pushState({}, '', '/')
                  window.dispatchEvent(new PopStateEvent('popstate'))
                }}
                className="hover:text-[#EA580C] transition-colors"
              >
                Inicio
              </a>
              <ChevronRight size={14} />
              <span className="text-[#EA580C]">Atención & Contacto</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Canal Oficial de <span className="text-[#EA580C]">Contacto</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
                Centralizamos todas las solicitudes comerciales, de proveeduría, gestión de talento y peticiones en una sola plataforma ágil. Seleccione el motivo de su comunicación o consulte la ubicación de nuestras sedes operativas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sección Principal en Grid: Formulario Estandarizado (Izq) + Sedes y Mapa Interactivo (Der) */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mt-8 sm:mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* COLUMNA IZQUIERDA (7 cols): Formulario Unificado */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10"
            >
              <div className="mb-8">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#EA580C] bg-orange-50 px-3 py-1 rounded-full inline-block mb-3">
                  Formulario Único
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  ¿Cómo podemos ayudarte hoy?
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Elija el tipo de trámite para dirigir su requerimiento al área responsable correspondiente.
                </p>
              </div>

              {/* Selector de tipo de trámite (Tabs visuales compactos) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
                {CONTACT_TYPES.map((type) => {
                  const Icon = type.icon
                  const isSelected = selectedType === type.id
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        setSelectedType(type.id)
                        // Ajustar dependencia automática según tipo
                        let dep = 'Comercial'
                        if (type.id === 'proveedor') dep = 'Compras y Acopio'
                        if (type.id === 'empleo') dep = 'Gestión Humana'
                        if (type.id === 'pqr') dep = 'Servicio al Cliente'
                        if (type.id === 'general') dep = 'Administración'
                        setFormData((prev) => ({ ...prev, dependencia: dep }))
                      }}
                      className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? 'border-[#EA580C] bg-orange-50/70 shadow-xs ring-1 ring-[#EA580C]/30'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#EA580C] text-white' : 'bg-slate-100 text-slate-700'}`}>
                          <Icon size={16} />
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-[#EA580C]' : 'text-slate-400'}`}>
                          {type.tag}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-slate-900 leading-tight block">
                        {type.label}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Estado enviado con éxito */}
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center"
                >
                  <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">
                    ¡Mensaje recibido con éxito!
                  </h3>
                  <p className="text-emerald-700 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                    Hemos registrado su solicitud en el área de <strong>{formData.dependencia}</strong>. Un asesor de Indulácteos de Colombia se pondrá en contacto al correo o teléfono suministrado en el menor tiempo hábil posible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        nombre: '',
                        apellido: '',
                        documento: '',
                        empresa: '',
                        email: '',
                        telefono: '',
                        ciudad: '',
                        direccion: '',
                        dependencia: 'Comercial',
                        motivoPqr: 'Calidad del producto',
                        mensaje: '',
                        autorizoDatos: true
                      })
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Enviar otra solicitud
                  </button>
                </motion.div>
              ) : (
                /* FORMULARIO ESTANDARIZADO */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Fila 1: Nombres y Apellidos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Nombres <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Carlos Eduardo"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/40 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Apellidos <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="apellido"
                        required
                        value={formData.apellido}
                        onChange={handleChange}
                        placeholder="Ej. Gómez Suárez"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/40 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Fila 2: Correo y Teléfono */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Correo Electrónico <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ejemplo@correo.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/40 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Celular / Teléfono <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Ej. +57 318 123 4567"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/40 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Fila 3 condicional: Empresa / NIT para Proveedores o Compras */}
                  {(selectedType === 'compras' || selectedType === 'proveedor') && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Nombre de Empresa / Razón Social
                        </label>
                        <input
                          type="text"
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          placeholder="Ej. Distribuciones del Oriente"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/40 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          NIT o Cédula
                        </label>
                        <input
                          type="text"
                          name="documento"
                          value={formData.documento}
                          onChange={handleChange}
                          placeholder="Ej. 900.123.456-7"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/40 focus:bg-white"
                        />
                      </div>
                    </div>
                  )}

                  {/* Fila condicional: PQR (Motivo específico) */}
                  {selectedType === 'pqr' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Cédula o NIT <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="documento"
                          required
                          value={formData.documento}
                          onChange={handleChange}
                          placeholder="Número de documento de identidad"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/40 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Motivo PQR <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="motivoPqr"
                          value={formData.motivoPqr}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/40 focus:bg-white"
                        >
                          <option value="Calidad del producto">Calidad del producto</option>
                          <option value="Servicio al Cliente">Servicio al Cliente</option>
                          <option value="Entrega o Logística">Entrega o Logística</option>
                          <option value="Otro">Otro motivo</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Fila 4: Ciudad y Dirección */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Ciudad / Municipio <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="ciudad"
                        required
                        value={formData.ciudad}
                        onChange={handleChange}
                        placeholder="Ej. Bucaramanga, Santander"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/40 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Dependencia a contactar
                      </label>
                      <select
                        name="dependencia"
                        value={formData.dependencia}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/40 focus:bg-white"
                      >
                        <option value="Comercial">Comercial & Ventas</option>
                        <option value="Compras y Acopio">Compras & Acopio Ganadero</option>
                        <option value="Gestión Humana">Gestión Humana & Empleo</option>
                        <option value="Servicio al Cliente">Servicio al Cliente & Calidad</option>
                        <option value="Administración">Administración & PBX</option>
                        <option value="Producción y Logística">Producción y Logística</option>
                      </select>
                    </div>
                  </div>

                  {/* Campo de Mensaje / Detalle */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mensaje o Descripción <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="mensaje"
                      rows={4}
                      required
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder={
                        selectedType === 'empleo'
                          ? 'Cuéntenos sobre su perfil profesional, cargo de interés y trayectoria...'
                          : selectedType === 'pqr'
                          ? 'Por favor detalle el lote, fecha o situación para brindarle pronta atención...'
                          : 'Describa su solicitud, requerimiento o volumen estimado...'
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/40 focus:bg-white resize-y"
                    />
                  </div>

                  {/* Adjunto opcional para Trabaje con nosotros o PQR */}
                  {(selectedType === 'empleo' || selectedType === 'pqr') && (
                    <div className="p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50/60">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {selectedType === 'empleo' ? 'Adjuntar Hoja de Vida (PDF o Word)' : 'Adjuntar Evidencia o Fotografía (Opcional)'}
                      </label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                        className="text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#EA580C] file:text-white hover:file:bg-[#c2410c] cursor-pointer"
                      />
                    </div>
                  )}

                  {/* Checkbox de tratamiento de datos personales */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 text-xs text-slate-600 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="autorizoDatos"
                        checked={formData.autorizoDatos}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 rounded text-[#EA580C] border-slate-300 focus:ring-[#EA580C]"
                      />
                      <span>
                        Autorizo a <strong>INDULÁCTEOS DE COLOMBIA S.A.S.</strong> para el tratamiento y almacenamiento de mis datos personales de acuerdo con la Ley 1581 de 2012 y su política de privacidad, con el fin exclusivo de gestionar esta solicitud.
                      </span>
                    </label>
                  </div>

                  {/* Botón de Envío */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl bg-[#EA580C] hover:bg-[#c2410c] active:scale-[0.99] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Enviando mensaje...</span>
                      ) : (
                        <>
                          <span>Enviar Solicitud</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* COLUMNA DERECHA (5 cols): Sedes, Información y Mapa Integrado */}
            <div className="lg:col-span-5 space-y-6">

              {/* Tarjeta de Selección de Sedes */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <Building2 className="text-[#EA580C]" size={20} />
                    Nuestras Sedes Físicas
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    2 Ubicaciones
                  </span>
                </div>

                {/* Tabs para alternar entre Sede Bucaramanga y Sede Sabana de Torres */}
                <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-2xl mb-6">
                  {SEDES.map((sede) => {
                    const isSelected = activeSede === sede.id
                    return (
                      <button
                        key={sede.id}
                        type="button"
                        onClick={() => setActiveSede(sede.id)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                          isSelected
                            ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        {sede.id === 'bucaramanga' ? 'Bucaramanga' : 'Sabana de Torres'}
                      </button>
                    )
                  })}
                </div>

                {/* Detalle de la Sede Activa */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedSedeData.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#EA580C] block">
                        {selectedSedeData.tipo}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 mt-0.5">
                        {selectedSedeData.nombre}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {selectedSedeData.subtitulo}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2 text-xs text-slate-600 border-t border-slate-100">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-[#EA580C] shrink-0 mt-0.5" size={16} />
                        <div>
                          <span className="font-bold text-slate-800 block">Dirección:</span>
                          <span>{selectedSedeData.direccion}</span>
                          <span className="block text-slate-400">{selectedSedeData.ciudad}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="text-[#EA580C] shrink-0 mt-0.5" size={16} />
                        <div>
                          <span className="font-bold text-slate-800 block">Líneas de Atención:</span>
                          {selectedSedeData.telefonos.map((tel, i) => (
                            <span key={i} className="block">{tel}</span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Mail className="text-[#EA580C] shrink-0 mt-0.5" size={16} />
                        <div>
                          <span className="font-bold text-slate-800 block">Correo Electrónico:</span>
                          <a 
                            href={`mailto:${selectedSedeData.email}`}
                            className="text-[#EA580C] hover:underline"
                          >
                            {selectedSedeData.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="text-[#EA580C] shrink-0 mt-0.5" size={16} />
                        <div>
                          <span className="font-bold text-slate-800 block">Horario de Operación:</span>
                          <span>{selectedSedeData.horario}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href={selectedSedeData.mapsDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EA580C] hover:text-[#c2410c] hover:underline"
                      >
                        <span>Abrir en Google Maps</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* MAPA GOOGLE EMBED INTEGRADO */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
                <div className="px-6 py-3.5 bg-slate-900 text-white flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold">Vista Satelital / Mapa</span>
                  </div>
                  <span className="text-slate-400">
                    {selectedSedeData.id === 'bucaramanga' ? 'Bucaramanga' : 'Sabana de Torres'}
                  </span>
                </div>
                <div className="w-full h-72 sm:h-80 relative bg-slate-100">
                  <iframe
                    key={selectedSedeData.id}
                    src={selectedSedeData.embedUrl}
                    title={`Mapa de ${selectedSedeData.nombre}`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Mini banner de garantía de respuesta */}
              <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-200/60 rounded-2xl p-5 flex items-start gap-3.5">
                <ShieldCheck className="text-[#EA580C] shrink-0 mt-0.5" size={20} />
                <div className="text-xs text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-bold block mb-0.5">
                    Compromiso de Respuesta Rápida
                  </strong>
                  Todas las comunicaciones remitidas a través de este portal oficial cuentan con trazabilidad interna y respuesta formal en menos de 24 a 48 horas hábiles.
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
