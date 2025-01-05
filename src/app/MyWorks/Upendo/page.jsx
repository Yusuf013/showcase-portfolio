'use client'

import { useEffect, useRef, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

const UpendoPage = () => {
  const containerRef = useRef(null)
  const locomotiveRef = useRef(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageOpacity, setImageOpacity] = useState(1)
  const images = [
    '/images/Trendfocus.svg',
    '/images/Upendo.png',
    '/images/Trendfocus.svg',
    '/images/Upendo.png'
  ]

  useEffect(() => {
    // Initialiseer Locomotive Scroll
    locomotiveRef.current = new LocomotiveScroll({
      el: containerRef.current,
      direction: 'horizontal',
      smooth: true,
      multiplier: 1.5,
      smartphone: { smooth: true, direction: 'horizontal' },
      tablet: { smooth: true, direction: 'horizontal' }
    })

    const handleWheel = (event) => {
      const instance = locomotiveRef.current?.scroll?.instance

      if (!instance) {
        console.warn('Locomotive Scroll instance not initialized.')
        return
      }

      const scrollX = instance.scroll?.x || 0
      const containerWidth = containerRef.current?.scrollWidth || 0
      const viewportWidth = window.innerWidth

      const isAtEnd = scrollX + viewportWidth >= containerWidth - 1

      if (isAtEnd) {
        const section3Element = document.querySelector('[data-scroll-id="section3"]')
        if (!section3Element) {
          console.warn('Section3 element not found.')
          return
        }

        const section3Rect = section3Element.getBoundingClientRect()
        const isInView = section3Rect.left < window.innerWidth && section3Rect.right > 0

        if (isInView) {
          if (event.deltaY > 0) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
          } else if (event.deltaY < 0) {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
          }
        }
      }
    }

    containerRef.current?.addEventListener('wheel', handleWheel)

    return () => {
      locomotiveRef.current?.destroy()
      containerRef.current?.removeEventListener('wheel', handleWheel)
    }
  }, [images.length])

  // Blur effect
  useEffect(() => {
    setImageOpacity(0) // Start met fade-out en blur
    const timeout = setTimeout(() => {
      setImageOpacity(1) // Fade-in en verwijder blur
    }, 500) // Duur van de overgang

    return () => clearTimeout(timeout)
  }, [currentImageIndex])

  return (
    <main className="h-screen w-screen overflow-hidden bg-[#283127]">
      <div
        ref={containerRef}
        className="flex h-full w-full overflow-hidden"
        data-scroll-container
      >

{/* section 1 */}

<section
  className="w-screen h-full flex-shrink-0 flex flex-col items-center justify-start bg-[#283127] mt-10 p-0 relative"
  data-scroll-section
>
  {/* SVG Background */}
  <div
    className="absolute inset-0 bg-no-repeat bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/sectie1bg.svg')",
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 w-[90%] h-[55%] flex flex-col mx-auto">
    <div className="flex-1 flex items-center">
      <h1 className="text-[#F47519] font-formula1 text-[140px]">Project</h1>
    </div>
    <div className="flex-1 flex items-center justify-end">
      <h1 className="text-[#FFFDE4] font-formula1 text-[80px] mr-10">Upendo</h1>
    </div>
    <div className="flex-1 flex items-center">
      <h1 className="text-[#9A9B9B] font-formula1 text-[90px]">November 2024</h1>
    </div>
  </div>
</section>

{/* section 2 */}

<section
  className="w-screen h-full flex items-center justify-center bg-[#283127]  mt-10 p-0 relative"
  data-scroll-section
>
  {/* SVG Background */}
  <div
    className="absolute inset-0 bg-no-repeat bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/sectie2bg.svg')",
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 flex justify-center mt-7">
    <h1
      className="text-4xl font-bold text-[#FFFDE4] p-5  text-[22px]"
      data-scroll
      data-scroll-speed="2"
    >
      About the project
    </h1>
  </div>

  <div className="relative z-10 flex justify-center">
    <div className="w-[80%] flex">
      <div className="bg-purple-500 w-[50%] flex items-center">
        <div>
          <img src="/images/Group 20.svg" />
        </div>
        <div>
          <p className="text=[15px]">sucuk</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-[50%]">
        <img
          src="/images/Risorsa 6u.svg"
          alt="Description"
          className="w-auto h-auto max-w-none"
        />
      </div>
    </div>
  </div>
</section>

{/* section 3 */}

<section
  className="w-screen h-full flex-shrink-0 flex items-center justify-center bg-[#283127] mt-10 p-0 relative"
  data-scroll-section
  data-scroll-id="section3"
>
  {/* SVG Background */}
  <div
    className="absolute inset-0 bg-no-repeat bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/sectie3bg.svg')",
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 absolute w-full h-full flex items-center justify-center">
    <div className="w-[75%] h-[55%] bg-gray-200 overflow-hidden flex items-center justify-center mb-64">
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-[1000ms] ease-in-out"
        style={{
          opacity: imageOpacity,
          filter: imageOpacity === 1 ? "blur(0px)" : "blur(10px)", // Voeg blur toe
        }}
      />
    </div>
  </div>
</section>

      </div>
    </main>
  );
}

export default UpendoPage
