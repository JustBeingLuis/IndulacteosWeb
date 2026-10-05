import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { industrialProducts, groupByCategoria } from '../data/products'

function navigate(path) {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo(0, 0)
}

// Variantes de animación para las tarjetas industriales
const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

// Tarjeta industrial — cards grandes, énfasis en formato y volumen
function ProductCard({ product, index }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={() => navigate(`/industrial/${product.id}`)}
      className="group bg-white hover:bg-slate-50/50 border border-slate-200/90 hover:border-orange-500/40 rounded-2xl p-6 sm:p-7 flex flex-col items-center gap-5 cursor-pointer shadow-xs hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
    >
      {/* Contenedor de la Imagen */}
      <div className="relative w-full flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100/60 rounded-2xl p-6 h-60 border border-slate-100 group-hover:border-orange-100 transition-colors overflow-hidden">
        {/* Placeholder skeleton mientras carga */}
        {!loaded && (
          <div className="absolute inset-0 bg-slate-100/80 animate-pulse flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-slate-200/60" />
          </div>
        )}
        <img
          src={product.imagen}
          alt={product.nombre}
          loading="eager"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`max-h-48 max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-all duration-300 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          onError={(e) => {
            setLoaded(true)
            e.target.src =
              'https://placehold.co/300x300/F8FAFC/64748B?text=Producto'
          }}
        />
      </div>

      {/* Info */}
      <div className="w-full flex flex-col items-center text-center">
        <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-snug group-hover:text-[#EA580C] transition-colors">
          {product.nombre}
        </h3>
      </div>
    </motion.div>
  )
}

export default function IndustrialPage() {
  const grouped = groupByCategoria(industrialProducts)

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-[#EA580C] selection:text-white">
      <Header />

      <main className="flex-1 pt-32 pb-24 px-6 sm:px-10 max-w-7xl mx-auto w-full">
        {/* Hero de sección con animación de entrada */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center sm:text-left"
        >
          {/* Breadcrumb */}
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
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
            <span className="text-[#EA580C]">Línea Industrial</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Línea <span className="text-[#EA580C]">Industrial</span>
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed">
            Insumos lácteos en grandes formatos para panaderías, industrias de alimentos, repostería y maquilas con los más altos estándares de rendimiento y calidad.
          </p>
        </motion.div>

        {/* Categorías */}
        {Object.entries(grouped).map(([categoria, productos], catIdx) => (
          <section key={categoria} className="mb-16">
            {/* Encabezado y separador de categoría */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="flex items-center gap-4 mb-8"
            >
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight whitespace-nowrap">
                {categoria}
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-400/40 via-slate-200 to-transparent" />
            </motion.div>

            {/* Grid — 3 columnas para industrial */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productos.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
