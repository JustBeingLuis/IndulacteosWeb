import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MilkProgress() {
  const containerRef = useRef(null)
  const liquidRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Drive the milk level from 5% to 92% based on total page scroll
      gsap.to(liquidRef.current, {
        height: '92%',
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
          onUpdate: (self) => setProgress(Math.round(self.progress * 100)),
        },
      })
    })

    return () => ctx.revert()
  }, [])

  // Only show after user scrolls a bit, hidden on mobile
  const visible = progress > 2

  return (
    <div
      ref={containerRef}
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-700 hidden lg:block ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
    >
      {/* Glass container */}
      <div className="relative w-[42px] h-[100px] group">
        {/* Glass body — transparent with subtle border */}
        <div className="absolute inset-0 rounded-b-xl border-2 border-brand-200/60 border-t-0 bg-white/30 backdrop-blur-sm overflow-hidden shadow-lg shadow-brand-500/5">
          {/* Glass rim */}
          <div className="absolute -top-[1px] left-0 right-0 h-[3px] bg-brand-300/40 rounded-full" />

          {/* Milk liquid — this height is animated by GSAP */}
          <div
            ref={liquidRef}
            className="absolute bottom-0 left-0 right-0 bg-white transition-none"
            style={{ height: '5%' }}
          >
            {/* Animated wave on top of liquid */}
            <div className="absolute -top-[6px] left-0 w-[200%] h-[12px]" style={{ animation: 'wave-drift 2.5s linear infinite' }}>
              <svg viewBox="0 0 600 30" preserveAspectRatio="none" className="w-full h-full">
                <path
                  d="M0,15 C75,5 150,25 225,15 C300,5 375,25 450,15 C525,5 600,25 600,15 L600,30 L0,30 Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* Subtle cream shadow at liquid surface */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-brand-50/50 to-transparent" />
          </div>
        </div>

        {/* Droplets when pouring (only at certain scroll ranges) */}
        {progress > 5 && progress < 95 && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-3 bg-white/80 rounded-full animate-pulse" />
        )}
      </div>

      {/* Percentage label */}
      <div className="mt-2 text-center">
        <span className="text-[10px] font-extrabold text-brand-500 tabular-nums">
          {progress}%
        </span>
      </div>
    </div>
  )
}
