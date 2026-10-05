import { useEffect, useState } from 'react'

/**
 * SplashScreen – Indulácteos
 *
 * Secuencia:
 *  0.00s  → Pantalla naranja #EA580C
 *  0.05s  → 3 capas de leche suben desde abajo oscilando de lado a lado
 *           (como llenar un vaso: sube + se mueve)
 *  1.60s  → Pantalla completamente blanca → logo aparece
 *  2.50s  → Fade-out rápido
 *  2.90s  → Componente desmontado
 */
export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('waves') // 'waves' | 'logo' | 'exit' | 'done'

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('logo'), 1650)
    const t2 = setTimeout(() => setPhase('exit'), 2500)
    const t3 = setTimeout(() => { setPhase('done'); onDone?.() }, 2900)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onDone])

  if (phase === 'done') return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        overflow: 'hidden',
        backgroundColor: '#EA580C',
        opacity: phase === 'exit' ? 0 : 1,
        transition: phase === 'exit' ? 'opacity 0.38s ease-in' : 'none',
        pointerEvents: phase === 'exit' ? 'none' : 'all',
      }}
    >
      <MilkFill />
      {(phase === 'logo' || phase === 'exit') && <LogoReveal />}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────
   MilkFill
   Tres capas blancas que:
     1. Suben desde abajo  (animation: waveRise — one-shot)
     2. Oscilan de lado a lado dentro del contenedor
        (animation: waveSway — infinite alternate)
   El SVG mide el 200% del ancho: animarlo de translateX(0)→(-50%)
   y de vuelta crea el loop perfecto sin cortes.
───────────────────────────────────────────────────────────────────── */
function MilkFill() {
  /**
   * Cada capa define:
   *  riseDelay / riseDur : cuándo y cómo sube el contenedor
   *  swayDur             : velocidad de oscilación lateral (cuanto menor = más rápido)
   *  swayDir             : 'alternate' o 'alternate-reverse' → capas opuestas dan efecto fluido
   *  color               : opacidad progresiva; la última capa es blanco puro
   *  waveKey             : forma SVG elegida
   *  z                   : z-index (la capa más opaca queda al frente)
   */
  const layers = [
    {
      riseDelay: '0.08s', riseDur: '1.45s',
      swayDur: '0.70s',   swayDir: 'alternate',
      color: 'rgba(255,255,255,0.50)',
      waveKey: 'gentle',  z: 1,
    },
    {
      riseDelay: '0.00s', riseDur: '1.35s',
      swayDur: '0.85s',   swayDir: 'alternate-reverse',
      color: 'rgba(255,255,255,0.78)',
      waveKey: 'medium',  z: 2,
    },
    {
      riseDelay: '0.18s', riseDur: '1.55s',
      swayDur: '0.60s',   swayDir: 'alternate',
      color: '#FFFFFF',
      waveKey: 'strong',  z: 3,
    },
  ]

  /*
   * Paths SVG — viewBox "0 0 2880 100" (2 × 1440 ancho para tiling)
   * El path DEBE terminar en el mismo valor Y que empieza para que el
   * loop `translateX(0 → -50%)` sea completamente invisible.
   *
   * Fórmula senoidal continua: cada 1440px es un ciclo completo.
   */
  const wavePaths = {
    // Ola suave: amplitud pequeña (~30px)
    gentle:
      'M0,55 C360,25 720,85 1080,55 C1440,25 1800,85 2160,55 C2520,25 2880,55 2880,55 L2880,100 L0,100 Z',
    // Ola media: amplitud mayor (~40px)
    medium:
      'M0,50 C320,10 640,90 960,50 C1280,10 1600,90 1920,50 C2240,10 2560,90 2880,50 L2880,100 L0,100 Z',
    // Ola fuerte: amplitud máxima (~45px), más espumeante
    strong:
      'M0,52 C288,8  576,96 864,52 C1152,8  1440,96 1728,52 C2016,8  2304,96 2592,52 L2880,52 L2880,100 L0,100 Z',
  }

  return (
    <>
      {layers.map((layer, i) => (
        /*
         * CONTENEDOR DE CAPA – sube verticalmente (one-shot)
         * height: 115vh para que la cresta nunca deje un hueco naranja
         * arranca translateY(100%) → translateY(0%)
         */
        <div
          key={i}
          style={{
            position: 'absolute',
            left: 0, right: 0, bottom: 0,
            height: '115vh',
            zIndex: layer.z,
            willChange: 'transform',
            animation: `waveRise ${layer.riseDur} ${layer.riseDelay} cubic-bezier(0.30, 0, 0.15, 1.00) forwards`,
          }}
        >
          {/*
           * ONDA QUE OSCILA – se mueve de lado a lado dentro del contenedor
           * width: 200% + translateX(0 ↔ -50%) = loop seamless sin cortes
           */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '200%',
              height: '80px',
              willChange: 'transform',
              animation: `waveSway ${layer.swayDur} ease-in-out infinite ${layer.swayDir}`,
            }}
          >
            <svg
              viewBox="0 0 2880 100"
              preserveAspectRatio="none"
              style={{ width: '100%', height: '100%', display: 'block' }}
              aria-hidden="true"
            >
              <path d={wavePaths[layer.waveKey]} fill={layer.color} />
            </svg>
          </div>

          {/* Cuerpo sólido debajo de la cresta – rellena el espacio para no dejar huecos */}
          <div
            style={{
              position: 'absolute',
              top: '60px',
              left: 0, right: 0, bottom: 0,
              backgroundColor: layer.color,
            }}
          />
        </div>
      ))}
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────────
   LogoReveal – aparece sobre el fondo blanco con spring bounce
───────────────────────────────────────────────────────────────────── */
function LogoReveal() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        animation: 'logoReveal 0.42s cubic-bezier(0.34, 1.56, 0.64, 1) both',
      }}
    >
      {/* Ícono cuadrado naranja con logo blanco */}
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: '26px',
          backgroundColor: '#EA580C',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 12px 40px rgba(234,88,12,0.30)',
        }}
      >
        <img
          src="/assets/indulacteos/cropped-LOGO-INDULACTEOS-pequeno-1-180x180.png"
          alt="Logo Indulácteos"
          style={{
            width: 64, height: 64,
            objectFit: 'contain',
            filter: 'brightness(0) invert(1)',
          }}
        />
      </div>

      {/* Nombre debajo del ícono */}
      <div style={{ textAlign: 'center' }}>
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 900,
          fontSize: '1.65rem',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          margin: 0,
          color: '#0F172A',
        }}>
          INDULÁCTEOS
        </p>
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: '0.58rem',
          letterSpacing: '0.22em',
          margin: '5px 0 0',
          textTransform: 'uppercase',
          color: '#EA580C',
        }}>
          De Colombia S.A.S.
        </p>
      </div>
    </div>
  )
}
