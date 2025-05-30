'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import 'locomotive-scroll/dist/locomotive-scroll.css'

const FitQuestpage = () => {
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
                FitQuest
              </h1>
            </div>
            <div className="flex-1 flex items-center">
              <h1 className="text-[#9A9B9B] font-formula1 text-[90px]">
                February 2025
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
            <img src="/images/FitQuestLogo.png" className="w-[125px] h-auto rounded-md" />
          </div>
          <div className="relative z-10 flex justify-center">
            <div className="w-[85%] flex">
              <div className=" w-[50%] flex items-center">
                <div className="w-[10%] h-full ">
                  <img src="/images/Group 20.svg" />
                </div>
                <div className="overflow-hidden whitespace-normal w-[90%] h-[80%] h-full flex items-center">
                  <p className="text=[15px] w-[100%]">
                  During this specialization semester, I worked on creating an app for the first time. Our project is called FitQuest, an accessible calisthenics app designed to motivate people to exercise every day. With daily reminders, users can choose when they want to start a short workout. The workout is an interval training consisting of 10 exercises, and each exercise is demonstrated through an animation so the user knows exactly how to perform it. <br></br> In addition, users can play their favorite songs from their own Spotify playlist, which is integrated into the app using the Spotify API
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
                src="/images/fq1.jpeg"
                className="w-auto h-[425px]"
                alt="Upendo Image 1"
              />
              <img
                src="/images/fq2.jpeg"
                className="w-auto h-[425px]"
                alt="Upendo Image 2"
              />
              <img
                src="/images/fq3.jpeg"
                className="w-auto h-[425px]"
                alt="Upendo Image 3"
              />
              <img
                src="/images/fq4.jpeg"
                className="w-auto h-[425px]"
                alt="Upendo Image 4"
              />
            </div>
          </div>
        </section>

        <section
          className="w-screen h-full flex items-center justify-center bg-[#283127] mt-10 p-0 relative"
          data-scroll-section
        >
         <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/sectie2bg.svg')",
            }}
          ></div>
          <div className="relative z-10 flex justify-center flex-col items-center">
            <h2 className="text-[#FFFDE4] font-formula1 text-[40px] mb-5">Design</h2>
            <div className="w-[85%] flex justify-around">
              <img
                src="/images/fq5.jpeg"
                className="w-auto h-[425px]"
                alt="Upendo Image 1"
              />
              <img
                src="/images/fq7.jpeg"
                className="w-auto h-[425px]"
                alt="Upendo Image 2"
              />
              <img
                src="/images/fq8.jpeg"
                className="w-auto h-[425px]"
                alt="Upendo Image 3"
              />
              <img
                src="/images/fq4.jpeg"
                className="w-auto h-[425px]"
                alt="Upendo Image 4"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default FitQuestpage
