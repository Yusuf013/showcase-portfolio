'use client'

import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

const UpendoPage = () => {
  const containerRef = useRef(null)
  const locomotiveRef = useRef(null)

  useEffect(() => {
    locomotiveRef.current = new LocomotiveScroll({
      el: containerRef.current,
      direction: 'horizontal',
      smooth: true,
      multiplier: 1.5,
      smartphone: { smooth: true, direction: 'horizontal' },
      tablet: { smooth: true, direction: 'horizontal' }
    })

    return () => locomotiveRef.current?.destroy()
  }, [])

  return (
    <main className="h-screen w-screen overflow-hidden bg-[#283127]">
      <div ref={containerRef} className="flex h-full w-full overflow-hidden" data-scroll-container>
        <section className="w-screen h-full flex-shrink-0 flex items-center justify-center bg-[#283127] m-0 p-0" data-scroll-section>
          <h1 className="text-4xl font-bold text-blue-900 p-5" data-scroll data-scroll-speed="2">Section 1</h1>
        </section>

        <section className="w-screen h-full flex-shrink-0 flex items-center justify-center bg-[#283127] m-0 p-0" data-scroll-section>
          <h1 className="text-4xl font-bold text-green-900 p-5" data-scroll data-scroll-speed="2">Section 2</h1>
        </section>

        <section className="w-screen h-full flex-shrink-0 flex items-center justify-center bg-[#283127] m-0 p-0" data-scroll-section>
          <h1 className="text-4xl font-bold text-red-900 p-5" data-scroll data-scroll-speed="2">Section 3</h1>
        </section>
      </div>
    </main>
  )
}

export default UpendoPage
