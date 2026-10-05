import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag, Factory } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100'
            : 'bg-white/85 backdrop-blur-xs py-4 border-b border-slate-100/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* IZQUIERDA (Al lado izquierdo del logo): Esencia -> Historia -> Marcas */}
          <div className="hidden lg:flex items-center gap-7 flex-1 justify-start">
            <a
              href="/#sobre-nosotros"
              onClick={(e) => {
                e.preventDefault()
                if (window.location.pathname !== '/') {
                  window.history.pushState({}, '', '/#sobre-nosotros')
                  window.dispatchEvent(new PopStateEvent('popstate'))
                } else {
                  const target = document.getElementById('sobre-nosotros')
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' })
                  }
                }
              }}
              className="text-xs font-black text-slate-800 hover:text-[#EA580C] uppercase tracking-wider transition-colors py-1 cursor-pointer"
            >
              Nuestra Esencia
            </a>
            <a
              href="/#historia"
              onClick={(e) => {
                e.preventDefault()
                if (window.location.pathname !== '/') {
                  window.history.pushState({}, '', '/#historia')
                  window.dispatchEvent(new PopStateEvent('popstate'))
                } else {
                  const target = document.getElementById('historia')
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' })
                  }
                }
              }}
              className="text-xs font-black text-slate-800 hover:text-[#EA580C] uppercase tracking-wider transition-colors py-1 cursor-pointer"
            >
              Historia
            </a>
            <a
              href="/#marcas"
              onClick={(e) => {
                e.preventDefault()
                if (window.location.pathname !== '/') {
                  window.history.pushState({}, '', '/#marcas')
                  window.dispatchEvent(new PopStateEvent('popstate'))
                } else {
                  const target = document.getElementById('marcas')
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' })
                  }
                }
              }}
              className="text-xs font-black text-slate-800 hover:text-[#EA580C] uppercase tracking-wider transition-colors py-1 cursor-pointer"
            >
              Marcas
            </a>
          </div>

          {/* CENTRO: LOGO OFICIAL INDULÁCTEOS */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              if (window.location.pathname !== '/') {
                window.history.pushState({}, '', '/')
                window.dispatchEvent(new PopStateEvent('popstate'))
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
            className="flex items-center gap-2.5 shrink-0 justify-center group py-1"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EA580C] p-1 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/indulacteos/cropped-LOGO-INDULACTEOS-pequeno-1-180x180.png"
                alt="Logo Indulácteos"
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>
            <div className="text-left">
              <span className="block font-black text-base sm:text-lg leading-tight tracking-tight text-slate-900">
                INDULÁCTEOS
              </span>
              <span className="text-[9px] font-extrabold tracking-widest text-[#EA580C] uppercase block">
                De Colombia S.A.S.
              </span>
            </div>
          </a>

          {/* DERECHA (Productos con menú desplegable + botón de contacto) */}
          <div className="hidden lg:flex items-center gap-7 flex-1 justify-end">
            
            {/* Dropdown Productos con hover */}
            <div className="relative group py-2">
              <button
                type="button"
                className="text-xs font-black text-slate-800 group-hover:text-[#EA580C] uppercase tracking-wider transition-colors py-1 flex items-center gap-1 cursor-pointer"
              >
                <span>Productos</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-500 group-hover:text-[#EA580C]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Menú desplegable flotante al pasar el cursor */}
              <div className="absolute right-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50 min-w-[220px]">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden flex flex-col gap-1">
                  <a
                    href="/consumo"
                    onClick={(e) => {
                      e.preventDefault()
                      window.history.pushState({}, '', '/consumo')
                      window.dispatchEvent(new PopStateEvent('popstate'))
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-900 hover:text-[#EA580C] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 group-hover/item:text-[#EA580C] group-hover/item:bg-orange-50 transition-colors">
                      <ShoppingBag size={17} strokeWidth={2.2} />
                    </div>
                    <div>
                      <span className="block text-xs font-black tracking-wide uppercase">
                        Línea de Consumo
                      </span>
                      <span className="block text-[10px] text-slate-400 font-medium">
                        Hogar, retail & UHT
                      </span>
                    </div>
                  </a>

                  <a
                    href="/industrial"
                    onClick={(e) => {
                      e.preventDefault()
                      window.history.pushState({}, '', '/industrial')
                      window.dispatchEvent(new PopStateEvent('popstate'))
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-900 hover:text-[#EA580C] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 group-hover/item:text-[#EA580C] group-hover/item:bg-orange-50 transition-colors">
                      <Factory size={17} strokeWidth={2.2} />
                    </div>
                    <div>
                      <span className="block text-xs font-black tracking-wide uppercase">
                        Línea Industrial
                      </span>
                      <span className="block text-[10px] text-slate-400 font-medium">
                        Sacos 25 kg & maquila
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Botón de Contacto */}
            <a
              href="/contacto"
              onClick={(e) => {
                e.preventDefault()
                window.history.pushState({}, '', '/contacto')
                window.dispatchEvent(new PopStateEvent('popstate'))
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
              }}
              className="px-6 py-2.5 rounded-full bg-[#EA580C] hover:bg-[#c2410c] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
            >
              Contacto
            </a>
          </div>

          {/* Botón Toggle Menú Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors ml-auto"
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Menú Mobile Desplegable */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white pt-24 px-6 flex flex-col justify-between pb-8 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-2">
              <a
                href="/#sobre-nosotros"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileOpen(false)
                  if (window.location.pathname !== '/') {
                    window.history.pushState({}, '', '/#sobre-nosotros')
                    window.dispatchEvent(new PopStateEvent('popstate'))
                  } else {
                    const target = document.getElementById('sobre-nosotros')
                    if (target) target.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="py-3.5 text-lg font-black text-slate-900 border-b border-slate-100 block"
              >
                Nuestra Esencia
              </a>
              <a
                href="/#historia"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileOpen(false)
                  if (window.location.pathname !== '/') {
                    window.history.pushState({}, '', '/#historia')
                    window.dispatchEvent(new PopStateEvent('popstate'))
                  } else {
                    const target = document.getElementById('historia')
                    if (target) target.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="py-3.5 text-lg font-black text-slate-900 border-b border-slate-100 block"
              >
                Historia
              </a>
              <a
                href="/#marcas"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileOpen(false)
                  if (window.location.pathname !== '/') {
                    window.history.pushState({}, '', '/#marcas')
                    window.dispatchEvent(new PopStateEvent('popstate'))
                  } else {
                    const target = document.getElementById('marcas')
                    if (target) target.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="py-3.5 text-lg font-black text-slate-900 border-b border-slate-100 block"
              >
                Marcas
              </a>

              {/* Submenú Productos Mobile */}
              <div className="py-3 border-b border-slate-100">
                <span className="text-xs font-black uppercase tracking-wider text-slate-400 block mb-2">
                  Productos
                </span>
                <div className="flex flex-col gap-2 pl-3">
                  <a
                    href="/consumo"
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileOpen(false)
                      window.history.pushState({}, '', '/consumo')
                      window.dispatchEvent(new PopStateEvent('popstate'))
                    }}
                    className="py-2.5 px-3 rounded-xl hover:bg-slate-50 text-base font-bold text-slate-800 hover:text-[#EA580C] flex items-center gap-3 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900">
                      <ShoppingBag size={15} strokeWidth={2.2} />
                    </div>
                    <span>Línea de Consumo</span>
                  </a>
                  <a
                    href="/industrial"
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileOpen(false)
                      window.history.pushState({}, '', '/industrial')
                      window.dispatchEvent(new PopStateEvent('popstate'))
                    }}
                    className="py-2.5 px-3 rounded-xl hover:bg-slate-50 text-base font-bold text-slate-800 hover:text-[#EA580C] flex items-center gap-3 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900">
                      <Factory size={15} strokeWidth={2.2} />
                    </div>
                    <span>Línea Industrial</span>
                  </a>
                </div>
              </div>
            </nav>

            <div className="pt-6 border-t border-slate-100">
              <a
                href="/contacto"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileOpen(false)
                  window.history.pushState({}, '', '/contacto')
                  window.dispatchEvent(new PopStateEvent('popstate'))
                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
                }}
                className="w-full py-3.5 rounded-full bg-[#EA580C] text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center shadow-md cursor-pointer"
              >
                Contacto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
