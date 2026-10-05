import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, PhoneCall, CheckCheck } from 'lucide-react'

const QUICK_INQUIRIES = [
  'Hola, quiero cotizar Leche en Polvo Induleche para distribución.',
  'Buenas tardes, solicito información sobre Sacos Industriales de 25 kg.',
  'Hola, me interesa el servicio de maquila y marcas propias.',
  'Deseo información sobre el Alimento Lácteo Llano Grande.'
]

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState('')

  const handleSendMessage = (msg) => {
    const textToSend = msg || selectedMessage || 'Hola Indulácteos, solicito información de sus productos.'
    const phone = '573183082359'
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(textToSend)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mb-4 w-[340px] sm:w-[380px] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
          >
            {/* Header del chat de WhatsApp */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-5 text-white relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-white p-1 shadow-md">
                      <img
                        src="/assets/indulacteos/cropped-LOGO-INDULACTEOS-pequeno-1-180x180.png"
                        alt="Indulácteos"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base leading-tight">Indulácteos Asesoría</h4>
                    <p className="text-[12px] text-emerald-100 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping"></span>
                      En línea · Bucaramanga
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white"
                  aria-label="Cerrar chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-emerald-100/90 mt-3 leading-relaxed">
                ¿Buscas cotizar leche en polvo para tu negocio, sacos de 25 kg o distribución mayorista? Habla con nuestro equipo comercial directo en Santander.
              </p>
            </div>

            {/* Cuerpo del chat */}
            <div className="p-4 bg-slate-50 space-y-3 max-h-[300px] overflow-y-auto">
              {/* Burbuja de bienvenida */}
              <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 text-sm text-slate-700">
                <p className="font-semibold text-slate-900 text-xs text-emerald-700 uppercase tracking-wider mb-1">
                  Atención Comercial Oficial
                </p>
                <p>
                  ¡Hola! Bienvenido a Indulácteos de Colombia. ¿En qué podemos asesorarte hoy? Selecciona una opción o escribe tu mensaje:
                </p>
                <div className="flex justify-end items-center gap-1 mt-1 text-[10px] text-slate-400">
                  <span>Ahora</span>
                  <CheckCheck className="w-3 h-3 text-emerald-600" />
                </div>
              </div>

              {/* Botones de consulta rápida */}
              <div className="space-y-1.5 pt-1">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
                  Consultas Frecuentes
                </p>
                {QUICK_INQUIRIES.map((inq, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(inq)}
                    className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200/80 hover:border-emerald-300 text-xs text-slate-700 hover:text-emerald-900 transition-all font-medium flex items-center justify-between group shadow-2xs"
                  >
                    <span className="line-clamp-1">{inq}</span>
                    <Send className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-600 transition-colors shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>

            {/* Input personalizado */}
            <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
              <input
                type="text"
                placeholder="Escribe tu consulta..."
                value={selectedMessage}
                onChange={(e) => setSelectedMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(selectedMessage)}
                className="flex-1 bg-slate-100 text-sm px-4 py-2.5 rounded-full outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800 placeholder-slate-400"
              />
              <button
                onClick={() => handleSendMessage(selectedMessage)}
                className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-all shadow-md shadow-emerald-600/30 hover:scale-105 shrink-0"
                aria-label="Enviar por WhatsApp"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante principal de WhatsApp */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 border-2 border-white"
        aria-label="Abrir chat de WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        
        {/* Ícono de WhatsApp */}
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>

        <span className="font-extrabold text-sm tracking-wide hidden sm:inline-block">
          Cotizar por WhatsApp
        </span>
      </motion.button>
    </div>
  )
}
