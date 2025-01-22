'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import 'locomotive-scroll/dist/locomotive-scroll.css'

const JufMervepage = () => {
  const containerRef = useRef(null)
  const locomotiveRef = useRef(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageOpacity, setImageOpacity] = useState(1)
  const images = [
    '/images/UpendoS1.png',
    '/images/UpendoS2.png',
    '/images/UpendoS3.png',
    '/images/UpendoS4.png',
    '/images/UpendoS5.png',
  ]

  useEffect(() => {
    // Dynamische import van Locomotive Scroll
    let LocomotiveScroll
    const initLocomotive = async () => {
      const module = await import('locomotive-scroll')
      LocomotiveScroll = module.default
      locomotiveRef.current = new LocomotiveScroll({
        el: containerRef.current,
        direction: 'horizontal',
        smooth: true,
        multiplier: 1.5,
        smartphone: { smooth: true, direction: 'horizontal' },
        tablet: { smooth: true, direction: 'horizontal' },
      })
    }

    initLocomotive()

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
    }, 300) // Duur van de overgang

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
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/sectie1bg.svg')",
            }}
          ></div>
          <div className="relative z-10 w-[90%] h-[55%] flex flex-col mx-auto">
            <div className="flex-1 flex items-center">
              <h1 className="text-[#F47519] font-formula1 text-[140px]">
                Project
              </h1>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <h1 className="text-[#FFFDE4] font-formula1 text-[80px] mr-10">
                Juf Merve
              </h1>
            </div>
            <div className="flex-1 flex items-center">
              <h1 className="text-[#9A9B9B] font-formula1 text-[90px]">
                January 2025
              </h1>
            </div>
          </div>
        </section>

        {/* section 2 */}
        <section
          className="w-screen h-full flex items-center justify-center bg-[#283127]  mt-10 p-0 relative"
          data-scroll-section
        >
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/sectie2bg.svg')",
            }}
          ></div>
          <div className="relative z-10 flex justify-center mt-4">
            <img src="/images/PPlogo.svg" className="w-[325px] h-auto" />
          </div>
          <div className="relative z-10 flex justify-center">
            <div className="w-[85%] flex">
              <div className=" w-[50%] flex items-center">
                <div className="w-[10%] h-full ">
                  <img src="/images/Group 20.svg" />
                </div>
                <div className="overflow-hidden whitespace-normal w-[90%] h-[80%] h-full flex items-center">
                  <p className="text=[15px] w-[100%]">
                    In the third semester of ICT & Media Design, we work in teams on two projects for the client 2Manydots. In this first project, we are developing a marketing news website aimed at marketing professionals (such as marketers, strategists, and copywriters) and entrepreneurs with an interest in marketing.
                    <br></br>
                    From 2Manydots, we received a detailed PDF containing specific information about the assignment, including the requirements and preferences they want to see reflected in the project. By following the steps of the Double Diamond method, we conducted research, created designs, developed prototypes, tested them with the target audience, and delivered the final product.
                  </p>
                </div>
              </div>
              <div className=" w-[40%] h-[100%] flex flex-col justify-around py-3 items-center ml-32">
                <div className="overflow-hidden whitespace-normal">
                  <p className="text=[15px] w-[100%] mt-3 ">
                    This project primarily emphasized design, as we were tasked with creating a brand identity for the website entirely from scratch. The client outlined key requirements, including developing a responsive web design and integrating a headless CMS. Additionally, they requested features such as social media integration, a dark mode, and advertisements.
                    For the development, we used Next.js as the framework, styled the website with Tailwind CSS, and implemented Storyblok as the headless CMS.
                  </p>
                </div>
                <div>
                  <a
                    href="https://trendfocusnextstoryblok1.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-full bg-[#F47519] text-[#283127] font-bold px-3 py-1 hover:bg-[#FFFDE4] transition-colors duration-300">
                      Live demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 3 */}
        <section
          className="w-screen h-full flex items-center justify-center bg-[#283127] mt-10 p-0 relative"
          data-scroll-section
        >
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/sectie3bg.svg')",
            }}
          ></div>
          <div className="relative z-10 flex justify-center flex-col items-center">
            <h2 className="text-[#FFFDE4] font-formula1 text-[40px] mb-5">Design</h2>
            <div className="w-[85%] flex justify-around">
              <img
                src="/images/PPimage1.png"
                className="w-auto h-[400px]"
                alt="Upendo Image 1"
              />
              <img
                src="/images/PPimage2.png"
                className="w-auto h-[400px]"
                alt="Upendo Image 2"
              />
              <img
                src="/images/PPimage3.png"
                className="w-auto h-[400px]"
                alt="Upendo Image 3"
              />
              <img
                src="/images/PPimage4.png"
                className="w-auto h-[400px]"
                alt="Upendo Image 4"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default JufMervepage
