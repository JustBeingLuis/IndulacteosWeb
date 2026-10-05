import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { findProductById } from '../data/products'

// Helper de navegación SPA
function navigate(path) {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo(0, 0)
}

// Contenedor con efecto 3D Tilt
function Interactive3DImage({ src, alt }) {
  const ref = useRef(null)

  // Coordenadas relativas del puntero respecto al centro del contenedor (-0.5 a 0.5)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Resortes suaves para física realista
  const mouseX = useSpring(x, { stiffness: 250, damping: 25 })
  const mouseY = useSpring(y, { stiffness: 250, damping: 25 })

  // Transformaciones de rotación en grados
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [18, -18])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-18, 18])

  // Desplazamiento sutil de profundidad para la sombra y la imagen
  const translateZ = useTransform(mouseX, [-0.5, 0.5], [20, 20])
  const shadowX = useTransform(mouseX, [-0.5, 0.5], [25, -25])
  const shadowY = useTransform(mouseY, [-0.5, 0.5], [25, -25])

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5
    x.set(offsetX)
    y.set(offsetY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center bg-gradient-to-b from-slate-50/80 to-slate-100/50 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-inner min-h-[380px] sm:min-h-[440px] cursor-grab active:cursor-grabbing select-none"
      style={{ perspective: 1100 }}
    >
      {/* Resplandor ambiental de fondo que reacciona a la luz */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-40 bg-gradient-to-tr from-orange-500/10 via-transparent to-sky-400/10"
      />

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative flex items-center justify-center w-full h-full"
      >
        <motion.img
          key={src}
          src={src}
          alt={alt}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            transform: 'translateZ(40px)',
          }}
          className="max-h-80 sm:max-h-96 w-auto object-contain filter drop-shadow-2xl pointer-events-none transition-transform"
          onError={(e) => {
            e.target.src =
              'https://placehold.co/400x400/F1F5F9/475569?text=Sin+imagen'
          }}
        />
      </motion.div>
    </div>
  )
}

export default function ProductDetailPage({ productId, lineaPath, lineaLabel }) {
  const product = findProductById(productId)
  const [selectedIdx, setSelectedIdx] = useState(0)

  // Precarga instantánea en memoria de todas las imágenes de presentaciones
  useEffect(() => {
    if (!product?.presentaciones) return
    product.presentaciones.forEach((p) => {
      if (p.imagen) {
        const img = new Image()
        img.src = p.imagen
      }
    })
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-28">
          <p className="text-slate-500 text-lg font-medium">Producto no encontrado.</p>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    )
  }

  const selectedPresentation = product.presentaciones[selectedIdx]

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-[#EA580C] selection:text-white">
      <Header />

      <main className="flex-1 pt-32 pb-24 px-6 sm:px-10 max-w-6xl mx-auto w-full">
        {/* Breadcrumb + Volver */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-10">
          <button
            onClick={() => navigate(lineaPath)}
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#EA580C] transition-colors group w-fit cursor-pointer"
          >
            <ArrowLeft
              size={17}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Volver a {lineaLabel}
          </button>
          <span className="hidden sm:block text-slate-300">·</span>
          <nav className="text-xs text-slate-400 font-medium">
            <span
              className="hover:text-[#EA580C] cursor-pointer transition-colors"
              onClick={() => navigate('/')}
            >
              Inicio
            </span>
            <span className="mx-2">/</span>
            <span
              className="hover:text-[#EA580C] cursor-pointer transition-colors"
              onClick={() => navigate(lineaPath)}
            >
              {lineaLabel}
            </span>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-semibold">{product.nombre}</span>
          </nav>
        </div>

        {/* Layout principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Columna Izquierda: Imagen 3D Interactiva */}
          <div className="lg:col-span-6">
            <Interactive3DImage
              src={selectedPresentation.imagen}
              alt={`${product.nombre} - ${selectedPresentation.peso}`}
            />
          </div>

          {/* Columna Derecha: Información y Presentaciones */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {product.nombre}
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {product.descripcion}
              </p>
            </div>

            {/* Selector de Presentaciones */}
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                Presentaciones disponibles
              </span>
              <div className="flex flex-wrap gap-2.5">
                {product.presentaciones.map((p, i) => (
                  <button
                    key={p.peso}
                    onClick={() => setSelectedIdx(i)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-bold border transition-all duration-200 cursor-pointer ${
                      i === selectedIdx
                        ? 'bg-[#EA580C] border-[#EA580C] text-white shadow-md shadow-orange-500/25 scale-105'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-orange-400 hover:text-[#EA580C] hover:bg-orange-50/50'
                    }`}
                  >
                    {p.peso}
                  </button>
                ))}
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
