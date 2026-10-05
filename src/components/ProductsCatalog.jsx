import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Package, Shield, Sparkles, Filter, CheckCircle2, ArrowRight, MessageCircle, FileText, ChevronRight, Info } from 'lucide-react'

const CATEGORIES = [
  { id: 'all', label: 'Todo el Portafolio' },
  { id: 'consumo', label: 'Consumo Hogar' },
  { id: 'industrial', label: 'Línea Industrial (25kg)' },
  { id: 'maquila', label: 'Marcas Propias & Maquila' },
]

const PRODUCTS = [
  {
    id: 'induleche-polvo-entera',
    category: 'consumo',
    brand: 'Induleche',
    name: 'Leche en Polvo Entera',
    tagline: '100% Leche pura fortificada con Vitaminas A y D3',
    description: 'Nuestra fórmula tradicional santandereana. Elaborada a partir de leche cruda seleccionada en fincas de Santander y la región. Alto aporte de calcio natural, proteínas de alto valor biológico y óptima disolución.',
    image: '/assets/indulacteos/Imagen1-qo0lpzi8e423g26yoqyjt4h7iyqw4cjtmbm2z5sc4w.jpg',
    presentations: ['25 g (Doypack)', '125 g', '380 g', '800 g (32 Porciones)', '900 g', '1.000 g'],
    highlights: ['Fortificada con Vitaminas A, D3 y Hierro', 'Rinde hasta 32 vasos por bolsa de 800g', 'Registro Sanitario INVIMA vigente', 'Calidad certificada ICONTEC'],
    specs: {
      grasa: '26% - 28%',
      proteina: '≥ 24.5%',
      humedad: '≤ 3.5%',
      vidaUtil: '12 meses en lugar fresco y seco'
    }
  },
  {
    id: 'saco-industrial-25kg',
    category: 'industrial',
    brand: 'Induleche Industrial',
    name: 'Leche en Polvo Entera 25 Kg',
    tagline: 'Rendimiento y estandarización para la gran industria',
    description: 'Sacos de alta barrera con válvula y liner de polietileno grado alimentario. El insumo predilecto por las principales panificadoras, fábricas de galletas, confitería y lácteos reconstituidos en Colombia.',
    image: '/assets/indulacteos/Linea-industrial-q1uwlqgy2djpujz8hhirgjydzpgj38p1eyp879g41c.jpg',
    presentations: ['Saco multicapa 25 Kg neto', 'Estiba de 1.000 Kg (40 sacos)', 'Despachos en camión completo a nivel nacional'],
    highlights: ['Excelente dispersabilidad en masas y cremas', 'Sabor lácteo natural limpio sin notas residuales', 'Ficha técnica bromatológica por lote', 'Trazabilidad completa desde el acopio'],
    specs: {
      grasa: '26.0% mín.',
      proteina: '24.0% mín.',
      solubilidad: 'Índice de insolubilidad < 0.5 mL',
      embalaje: 'Saco papel kraft 3 capas + bolsa polietileno'
    }
  },
  {
    id: 'llano-grande-polvo',
    category: 'consumo',
    brand: 'Llano Grande',
    name: 'Alimento Lácteo en Polvo',
    tagline: 'Economía, rendimiento y sabor para toda la familia',
    description: 'Fórmula láctea balanceada a base de leche entera, suero de leche seleccionado, grasa vegetal y minerales. Pensada para multiplicar el rendimiento en desayunos, jugos, avenas y repostería casera con un excelente balance costo-beneficio.',
    image: '/assets/indulacteos/BANNER-2-1024x369.png',
    presentations: ['380 g', '800 g', '1.000 g (Rinde 3 Litros)'],
    highlights: ['Enriquecido con vitaminas y minerales', 'Excelente textura en preparaciones calientes y frías', 'Líder en tiendas y canal tradicional', 'Presentación con abre-fácil'],
    specs: {
      rendimiento: '3 Litros por bolsa de 1.000g',
      fortificacion: 'Vitaminas A y D3 + Zinc',
      origen: 'Bucaramanga, Santander'
    }
  },
  {
    id: 'induleche-uht-liquida',
    category: 'consumo',
    brand: 'Induleche',
    name: 'Leche Entera UHT 900 mL',
    tagline: 'Pureza líquida de larga vida en Tetra Pak',
    description: 'Leche entera sometida a tratamiento térmico Ultra High Temperature (UHT) y envasado aséptico. Conserva íntegramente las vitaminas, minerales y el inconfundible sabor del campo sin necesidad de conservantes artificiales.',
    image: '/assets/indulacteos/BANNER-2-1024x369.png',
    presentations: ['Tetra Pak 400 mL', 'Tetra Pak 900 mL', 'Caja corrugada máster x12 unidades'],
    highlights: ['No requiere refrigeración antes de abrir', 'Envase con barrera a la luz y al oxígeno', 'Procesada con tecnología de última generación', '100% Leche colombiana'],
    specs: {
      temperatura: 'Conservar en ambiente seco',
      grasa: '3.0% mín.',
      caducidad: '180 días en empaque sellado'
    }
  },
  {
    id: 'saco-industrial-llano-grande',
    category: 'industrial',
    brand: 'Llano Grande B2B',
    name: 'Alimento Lácteo Industrial 25 Kg',
    tagline: 'Optimización de formulaciones para panadería masiva',
    description: 'Mezcla láctea pulverizada desarrollada para optimizar costos de formulación en panificación suave, bizcochería, galletas industriales, postres y coberturas sin sacrificar palatabilidad ni dorado de corteza.',
    image: '/assets/indulacteos/Linea-industrial-q1uwlqgy2djpujz8hhirgjydzpgj38p1eyp879g41c.jpg',
    presentations: ['Saco 25 Kg papel kraft'],
    highlights: ['Mayor tolerancia al amasado y horneado', 'Aporta excelente miga y conservación de humedad', 'Homogeneidad garantizada en cada bulto', 'Soporte técnico para formulaciones industriales'],
    specs: {
      aplicacion: 'Panificación, repostería, bases dulces',
      peso: '25.00 Kg netos'
    }
  },
  {
    id: 'maquila-marcas-propias',
    category: 'maquila',
    brand: 'Indulácteos Co-Packing',
    name: 'Maquila & Marcas Propias',
    tagline: 'Desarrollamos y envasamos tu propia marca de leche',
    description: 'Ponemos a tu disposición más de 35 años de experiencia técnica en pulverización, pasteurización, control bromatológico y empaque de derivados lácteos. Asesoramos a cadenas de supermercados, mayoristas e inversionistas en la creación de sus líneas con registro INVIMA.',
    image: '/assets/indulacteos/img_indula_1.png',
    presentations: ['Formatos desde 25g hasta sacos de 25kg', 'Bolsas coextruidas tricapa, doypack o granel'],
    highlights: ['Laboratorio interno de control de calidad', 'Planta certificada y con capacidad instalada escalable', 'Acompañamiento en registro regulatorio INVIMA', 'Logística y despacho nacional consolidado'],
    specs: {
      servicio: 'Full service: formulación + packaging + acopio',
      sede: 'Planta Ricaurte, Bucaramanga'
    }
  }
]

export default function ProductsCatalog() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory)

  const handleQuoteWhatsApp = (productName) => {
    const text = `Hola Indulácteos, quiero cotizar y recibir la ficha técnica de: ${productName}.`
    const url = `https://wa.me/573183082359?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="productos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabecera Editorial de Sección */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-950 font-bold text-xs uppercase tracking-wider">
              <Package className="w-3.5 h-3.5 text-orange-600" />
              <span>Portafolio Comercial Oficial</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.08]">
              Nuestros Productos Lácteos &{' '}
              <span className="text-[#EA580C]">Líneas Industriales</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Desde presentaciones de mesa para el hogar colombiano hasta sacos de 25 kg para la gran industria panificadora y galletera nacional.
            </p>
          </div>

          {/* Banner Panorama oficial embebido */}
          <div className="hidden lg:block max-w-sm rounded-2xl overflow-hidden border border-orange-200/60 shadow-lg bg-white p-2">
            <img
              src="/assets/indulacteos/BANNER-2-768x276.png"
              alt="Familia de productos Indulácteos"
              className="w-full h-auto rounded-xl object-cover hover:scale-105 transition-transform duration-500"
            />
            <p className="text-[11px] text-center font-bold text-slate-500 mt-2">
              Líneas Induleche & Llano Grande en Santander
            </p>
          </div>
        </div>

        {/* Barra de Filtros por Categoría */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 p-1.5 bg-slate-50/80 rounded-2xl border border-slate-200/80 max-w-fit">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#EA580C] text-white shadow-md shadow-orange-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <motion.div
              key={prod.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="group bg-white rounded-3xl border border-slate-200/70 hover:border-orange-300 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Contenedor de Imagen de Producto Real */}
                <div className="relative h-64 bg-gradient-to-b from-orange-50/60 via-white to-white p-6 flex items-center justify-center overflow-hidden border-b border-slate-100">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-800 shadow-xs">
                      {prod.brand}
                    </span>
                  </div>

                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-md"
                  />
                  
                  {/* Sello de Garantía */}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-700 flex items-center gap-1 border border-emerald-100">
                    <Shield className="w-3 h-3 text-emerald-600" />
                    <span>Inocuidad Certificada</span>
                  </div>
                </div>

                {/* Contenido descriptivo */}
                <div className="p-7 space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-[#EA580C] transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs font-bold text-orange-600 mt-1">
                      {prod.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {prod.description}
                  </p>

                  {/* Presentaciones Rápidas */}
                  <div className="pt-2">
                    <span className="block text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2">
                      Presentaciones disponibles:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prod.presentations.slice(0, 3).map((pres, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold"
                        >
                          {pres}
                        </span>
                      ))}
                      {prod.presentations.length > 3 && (
                        <span className="px-2 py-1 rounded-lg bg-orange-50 text-orange-700 text-xs font-bold">
                          +{prod.presentations.length - 3} más
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Botonera de Acción */}
              <div className="p-7 pt-0 flex items-center gap-3 border-t border-slate-50 mt-4">
                <button
                  onClick={() => setSelectedProduct(prod)}
                  className="flex-1 py-3 px-4 rounded-xl border border-slate-200 hover:border-slate-400 text-slate-800 text-xs font-bold transition-all hover:bg-slate-50 flex items-center justify-center gap-1.5"
                >
                  <Info className="w-4 h-4 text-slate-500" />
                  <span>Ver Ficha Técnica</span>
                </button>

                <button
                  onClick={() => handleQuoteWhatsApp(prod.name)}
                  className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-[#EA580C] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
                  title="Cotizar de inmediato por WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Cotizar</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner CTA B2B al pie del catálogo - Color suave y ameno */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#FFF8F0] border-2 border-orange-200/90 shadow-sm relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-orange-200/30 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-3 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#EA580C] font-black text-[11px] uppercase tracking-wider border border-orange-200 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
              <span>Canal Institucional & Distribuidores</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 leading-tight">
              ¿Requieres suministro a gran escala o maquila de tu marca propia?
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Atendemos requerimientos de panificadoras, distribuidores mayoristas e industrias en todo el territorio colombiano con entregas programadas y estiba asegurada.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-4 items-center justify-center">
            <button
              onClick={() => handleQuoteWhatsApp('Solicitud de Suministro Mayorista / Maquila')}
              className="px-8 py-4 rounded-full bg-[#EA580C] hover:bg-[#c2410c] text-white font-extrabold text-sm transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Contactar a Dirección Comercial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Modal Interactivo de Ficha Técnica Detallada */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10 border border-slate-100"
            >
              {/* Encabezado modal */}
              <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest block">
                    Ficha Técnica Oficial · {selectedProduct.brand}
                  </span>
                  <h3 className="text-2xl font-black">{selectedProduct.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Contenido modal */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                  <div className="bg-orange-50/50 rounded-2xl p-4 flex items-center justify-center border border-orange-100 h-48">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="max-h-full max-w-full object-contain drop-shadow-md"
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-3">
                    <h4 className="font-extrabold text-slate-900 text-lg">Descripción del Producto</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 max-w-fit">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Cumple norma técnica colombiana NTC y registro INVIMA</span>
                    </div>
                  </div>
                </div>

                {/* Especificaciones técnicas */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <FileText className="w-4 h-4 text-orange-600" />
                    Especificaciones Físico-Químicas & Almacenamiento
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {Object.entries(selectedProduct.specs).map(([key, val]) => (
                      <div key={key} className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                        <span className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                          {key}
                        </span>
                        <span className="text-xs font-black text-slate-800 mt-0.5 block">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Puntos destacados */}
                <div className="space-y-2">
                  <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">
                    Ventajas y Características Principales
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {selectedProduct.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg">
                        <span className="text-orange-500 font-bold">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pie de modal con botón de cotización directa */}
              <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-500 hidden sm:inline-block">
                  Atención directa con ingenieros de alimentos y asesores comerciales.
                </span>
                <button
                  onClick={() => handleQuoteWhatsApp(selectedProduct.name)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Cotizar este producto por WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
