"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from '../components/Footer';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState("Kies project");
  const router = useRouter(); // Gebruik de router voor navigatie

  const handlePolygonClick = (path) => {
    router.push(path); // Navigeer naar de opgegeven route
  };

  return (
    <div className="flex items-center justify-center h-screen relative">
      {/* Tekst in het midden van de pagina met transitie */}
      <div
        className="absolute top-[45%] left-45% transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-[#F47519] transition-all duration-500 ease-in-out opacity-100"
        style={{
          opacity: hoveredProject === "Kies project" ? 0.8 : 1,
          transform: hoveredProject === "Kies project" ? "scale(1)" : "scale(1.1)",
        }}
      >
        {hoveredProject}
      </div>

      {/* Container voor de polygonen */}
      <div
        className="relative w-[200px] h-[200px] mt-[400px] perspective-[1000px]"
        style={{ perspective: "1000px" }}
      >
        {/* Originele polygon */}
        <div
          className="absolute w-full h-full mask-polygon transition-transform duration-300 cursor-pointer"
          onMouseEnter={() => setHoveredProject("Upendo")}
          onMouseLeave={() => setHoveredProject("Choose project")}
          onClick={() => handlePolygonClick("/MyWorks/Upendo")} // Bijgewerkt pad
          style={{
            transform: "scale(1.4)",
            backgroundImage: "url('/images/Upendo.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitMaskImage: "url('/polygons/Polygon1.svg')",
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskImage: "url('/polygons/Polygon1.svg')",
            maskSize: "contain",
            maskRepeat: "no-repeat",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "scale(1.5) translateZ(20px)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = "scale(1.4) translateZ(0px)")
          }
        ></div>

        {/* Nieuwe polygon - Rechtsboven */}
        <div
          className="absolute w-full h-full mask-polygon transition-transform duration-300 cursor-pointer"
          onMouseEnter={() => setHoveredProject("TrendFocus")}
          onMouseLeave={() => setHoveredProject("Choose project")}
          onClick={() => handlePolygonClick("/MyWorks/TrendFocus")} // Bijgewerkt pad
          style={{
            transform: "translate(50%, -50%) rotate(-73deg) scale(1.4)",
            top: "-25%",
            right: "-75%",
            backgroundImage: "url('/images/Trendfocus.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitMaskImage: "url('/polygons/Polygon1.svg')",
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskImage: "url('/polygons/Polygon1.svg')",
            maskSize: "contain",
            maskRepeat: "no-repeat",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform =
              "translate(50%, -50%) rotate(-73deg) scale(1.5) translateZ(20px)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform =
              "translate(50%, -50%) rotate(-73deg) scale(1.4) translateZ(0px)")
          }
        ></div>

        {/* Nieuwe polygon - Linksboven */}
        <div
          className="absolute w-full h-full mask-polygon transition-transform duration-300 cursor-pointer"
          onMouseEnter={() => setHoveredProject("Trendfocus")}
          onMouseLeave={() => setHoveredProject("Choose project")}
          onClick={() => handlePolygonClick("/MyWorks/TrendFocus")} // Bijgewerkt pad
          style={{
            transform: "translate(-50%, -50%) rotate(73deg) scale(1.4)",
            top: "-25%",
            left: "-75%",
            backgroundImage: "url('/images/Trendfocus.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitMaskImage: "url('/polygons/Polygon1.svg')",
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskImage: "url('/polygons/Polygon1.svg')",
            maskSize: "contain",
            maskRepeat: "no-repeat",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform =
              "translate(-50%, -50%) rotate(73deg) scale(1.5) translateZ(20px)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform =
              "translate(-50%, -50%) rotate(73deg) scale(1.4) translateZ(0px)")
          }
        ></div>

        {/* Extra polygon - Boven rechtsboven */}
        <div
          className="absolute w-full h-full mask-polygon transition-transform duration-300 cursor-pointer"
          onMouseEnter={() => setHoveredProject("Coming Soon")}
          onMouseLeave={() => setHoveredProject("Choose project")}
          onClick={() => handlePolygonClick("/MyWorks/ExtraRechts")} // Bijgewerkt pad
          style={{
            transform: "translate(50%, -100%) rotate(220deg) scale(1.4)",
            top: "-100%",
            right: "-35%",
            backgroundImage: "url('/images/ComingSoon.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitMaskImage: "url('/polygons/Polygon1.svg')",
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskImage: "url('/polygons/Polygon1.svg')",
            maskSize: "contain",
            maskRepeat: "no-repeat",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform =
              "translate(50%, -100%) rotate(220deg) scale(1.5) translateZ(20px)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform =
              "translate(50%, -100%) rotate(220deg) scale(1.4) translateZ(0px)")
          }
        ></div>

        {/* Extra polygon - Boven linksboven */}
        <div
          className="absolute w-full h-full mask-polygon transition-transform duration-300 cursor-pointer"
          onMouseEnter={() => setHoveredProject("Upendo")}
          onMouseLeave={() => setHoveredProject("Choose project")}
          onClick={() => handlePolygonClick("/MyWorks/Upendo")} // Bijgewerkt pad
          style={{
            transform: "translate(-50%, -100%) rotate(-220deg) scale(1.4)",
            top: "-100%",
            left: "-35%",
            backgroundImage: "url('/images/Upendo.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitMaskImage: "url('/polygons/Polygon1.svg')",
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskImage: "url('/polygons/Polygon1.svg')",
            maskSize: "contain",
            maskRepeat: "no-repeat",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform =
              "translate(-50%, -100%) rotate(-220deg) scale(1.5) translateZ(20px)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform =
              "translate(-50%, -100%) rotate(-220deg) scale(1.4) translateZ(0px)")
          }
        ></div>
      </div>
    </div>
  );
}
