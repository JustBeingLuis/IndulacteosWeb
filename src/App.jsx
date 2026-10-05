import { useEffect, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductsCatalog from './components/ProductsCatalog'
import Brands from './components/Brands'
import Story from './components/Story'
import Timeline from './components/Timeline'
import Values from './components/Values'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import SplashScreen from './components/SplashScreen'
import ConsumoPage from './pages/ConsumoPage'
import IndustrialPage from './pages/IndustrialPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ContactoPage from './pages/ContactoPage'

import { consumoProducts, industrialProducts } from './data/products'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const [splashDone, setSplashDone] = useState(
    () => window.location.pathname !== '/'
  )

  // Precargar imágenes de catálogo y marcas en segundo plano para evitar demoras visuales
  useEffect(() => {
    const preload = () => {
      const allImages = [
        '/assets/brands/brand-induleche-wide.jpg',
        '/assets/brands/brand-llanogrande-wide.jpg',
        '/assets/indulacteos/logo-pagina-web.jpg',
        '/assets/indulacteos/logo-llano-grande-768x593.png',
        ...consumoProducts.map((p) => p.imagen),
        ...industrialProducts.map((p) => p.imagen),
      ]
      allImages.forEach((src) => {
        if (src) {
          const img = new Image()
          img.src = src
        }
      })
    }

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(preload)
    } else {
      setTimeout(preload, 800)
    }
  }, [])

  // Escuchar cambios de ruta sin recargar
  useEffect(() => {
    const onPop = () => {
      setCurrentPath(window.location.pathname)
      // Si ya estábamos navegando dentro de la app o venimos con ancla, no disparar el splash
      setSplashDone(true)

      if (window.location.hash) {
        const id = window.location.hash.replace('#', '')
        setTimeout(() => {
          const el = document.getElementById(id)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        }, 150)
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const handleSplashDone = useCallback(() => {
    setSplashDone(true)
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  // 1. Evitar restauración automática de scroll del navegador
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    // Forzar scroll al inicio si no hay hash
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }
  }, [])

  // 2. Al completar la pantalla de carga (splash), posicionar en ancla o arriba del todo
  useEffect(() => {
    if (!splashDone) return

    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [splashDone])

  // ── Rutas dedicadas ────────────────────────────────────────────────────────
  if (currentPath === '/consumo') {
    return <ConsumoPage />
  }

  if (currentPath.startsWith('/consumo/')) {
    const productId = currentPath.replace('/consumo/', '').split('?')[0]
    return (
      <ProductDetailPage
        productId={productId}
        lineaPath="/consumo"
        lineaLabel="Línea de Consumo"
      />
    )
  }

  if (currentPath === '/industrial') {
    return <IndustrialPage />
  }

  if (currentPath.startsWith('/industrial/')) {
    const productId = currentPath.replace('/industrial/', '').split('?')[0]
    return (
      <ProductDetailPage
        productId={productId}
        lineaPath="/industrial"
        lineaLabel="Línea Industrial"
      />
    )
  }

  if (currentPath === '/contacto') {
    return <ContactoPage />
  }

  return (
    <>
      {/* Pantalla de bienvenida animada (solo en primera carga de Home) */}
      {!splashDone && <SplashScreen onDone={handleSplashDone} />}

      {/* Contenido principal – empieza a renderizarse pero queda oculto
          detrás del splash hasta que éste hace fade-out */}
      <div
        className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EA580C] selection:text-white"
        style={{
          opacity: splashDone ? 1 : 0,
          transition: splashDone ? 'opacity 0.4s ease-out' : 'none',
        }}
      >
        <Header />
        <main>
          <Hero />
          <Story />
          <Timeline />
          <Brands />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}
