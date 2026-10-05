import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ShieldCheck, MessageCircle, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#0F172A] text-white relative overflow-hidden border-t-4 border-[#EA580C]">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 py-20 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Columna Marca & Identidad */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EA580C] p-2 flex items-center justify-center shadow-lg">
                <img
                  src="/assets/indulacteos/cropped-LOGO-INDULACTEOS-pequeno-1-180x180.png"
                  alt="Indulácteos"
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <div>
                <span className="block font-black text-xl text-white tracking-tight leading-tight">
                  INDULÁCTEOS
                </span>
                <span className="text-[10px] font-extrabold tracking-widest text-[#EA580C] uppercase block">
                  De Colombia S.A.S.
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Más de 35 años procesando y pulverizando la mejor leche de Colombia. Comprometidos con el desarrollo rural de Santander, la nutrición de millones de familias y el suministro confiable a la industria alimentaria.
            </p>

            {/* Redes Sociales Oficiales */}
            <div className="pt-2 flex flex-col gap-3">
              <span className="text-xs font-black tracking-widest uppercase text-[#EA580C]">
                Síguenos en Redes Sociales
              </span>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/induleche/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 hover:border-[#EA580C] hover:bg-[#EA580C]/10 flex items-center justify-center text-slate-300 hover:text-[#EA580C] transition-all duration-200 group shadow-xs"
                  aria-label="Instagram Induleche"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/Indulacteosdecolombia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 hover:border-[#EA580C] hover:bg-[#EA580C]/10 flex items-center justify-center text-slate-300 hover:text-[#EA580C] transition-all duration-200 group shadow-xs"
                  aria-label="Facebook Indulácteos"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@induleche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 hover:border-[#EA580C] hover:bg-[#EA580C]/10 flex items-center justify-center text-slate-300 hover:text-[#EA580C] transition-all duration-200 group shadow-xs"
                  aria-label="TikTok Induleche"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Columna Enlaces de Portafolio */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black tracking-widest uppercase text-[#EA580C]">
              Líneas de Producto
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a
                  href="/consumo/leche-polvo-entera-induleche"
                  onClick={(e) => {
                    e.preventDefault()
                    window.history.pushState({}, '', '/consumo/leche-polvo-entera-induleche')
                    window.dispatchEvent(new PopStateEvent('popstate'))
                  }}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#EA580C]">›</span> Leche en Polvo Entera Induleche
                </a>
              </li>
              <li>
                <a
                  href="/consumo/leche-uht-tetra-900ml"
                  onClick={(e) => {
                    e.preventDefault()
                    window.history.pushState({}, '', '/consumo/leche-uht-tetra-900ml')
                    window.dispatchEvent(new PopStateEvent('popstate'))
                  }}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#EA580C]">›</span> Leche UHT Tetra Pak 900 mL
                </a>
              </li>
              <li>
                <a
                  href="/consumo/alimento-lacteo-llano-grande"
                  onClick={(e) => {
                    e.preventDefault()
                    window.history.pushState({}, '', '/consumo/alimento-lacteo-llano-grande')
                    window.dispatchEvent(new PopStateEvent('popstate'))
                  }}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#EA580C]">›</span> Alimento Lácteo Llano Grande
                </a>
              </li>
              <li>
                <a
                  href="/industrial"
                  onClick={(e) => {
                    e.preventDefault()
                    window.history.pushState({}, '', '/industrial')
                    window.dispatchEvent(new PopStateEvent('popstate'))
                  }}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#EA580C]">›</span> Sacos Industriales 25 Kg
                </a>
              </li>
              <li>
                <a
                  href="/industrial"
                  onClick={(e) => {
                    e.preventDefault()
                    window.history.pushState({}, '', '/industrial')
                    window.dispatchEvent(new PopStateEvent('popstate'))
                  }}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#EA580C]">›</span> Maquila & Marcas Propias
                </a>
              </li>
            </ul>
          </div>

          {/* Columna Contacto Directo */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black tracking-widest uppercase text-[#EA580C]">
              Atención Comercial & Planta
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span>
                  Carrera 17B1 No. 57 - 23, Barrio Ricaurte<br />
                  Bucaramanga, Santander, Colombia
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span>PBX: +57 (607) 681 1390 · +57 318 308 2359</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a href="mailto:comunicaciones@indulacteos.com" className="hover:text-[#EA580C] transition-colors">
                  comunicaciones@indulacteos.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span>Lunes a Viernes: 7:00 am - 4:20 pm</span>
              </div>

              <div className="pt-2">
                <a
                  href="/contacto"
                  onClick={(e) => {
                    e.preventDefault()
                    window.history.pushState({}, '', '/contacto')
                    window.dispatchEvent(new PopStateEvent('popstate'))
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EA580C] hover:text-white transition-colors"
                >
                  <span>Formulario Oficial & Sedes Satelitales ›</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="pt-12 mt-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Indulácteos de Colombia S.A.S. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#linea-etica" className="hover:text-slate-300 transition-colors">Línea Ética</a>
            <a href="#politicas" className="hover:text-slate-300 transition-colors">Tratamiento de Datos</a>
            <span>Bucaramanga · Colombia</span>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
