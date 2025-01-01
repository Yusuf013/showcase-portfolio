export default function Projects() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        {/* Container voor de polygonen */}
        <div className="relative w-[200px] h-[200px] mt-[325px]">
          {/* Originele polygon */}
          <div
            className="absolute w-full h-full mask-polygon"
            style={{
              transform: " scale(1.4)",
              backgroundImage: "url('/images/mcdonald.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitMaskImage: "url('/polygons/Polygon1.svg')",
              WebkitMaskSize: "contain", // Mask schaal aanpassen
              WebkitMaskRepeat: "no-repeat",
              maskImage: "url('/polygons/Polygon1.svg')",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              overflow: "visible", // Mask niet afsnijden
            }}
          ></div>

          {/* Nieuwe polygon - Rechtsboven, 55 graden gedraaid */}
          <div
            className="absolute w-full h-full mask-polygon"
            style={{
              transform: "translate(50%, -50%) rotate(-73deg) scale(1.4)",
              top: "-10%",
              right: "-40%",
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
          ></div>

          {/* Nieuwe polygon - Linksboven, -55 graden gedraaid */}
          <div
            className="absolute w-full h-full mask-polygon"
            style={{
              transform: "translate(-50%, -50%) rotate(73deg) scale(1.4)",
              top: "-10%",
              left: "-40%",
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
          ></div>

          {/* Extra polygon - Boven rechtsboven */}
          <div
            className="absolute w-full h-full mask-polygon"
            style={{
              transform: "translate(50%, -100%) rotate(220deg) scale(1.4)",
              top: "-65%",
              right: "-10%",
              backgroundImage: "url('/images/mcdonald.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitMaskImage: "url('/polygons/Polygon1.svg')",
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskImage: "url('/polygons/Polygon1.svg')",
              maskSize: "contain",
              maskRepeat: "no-repeat",
            }}
          ></div>

          {/* Extra polygon - Boven linksboven */}
          <div
            className="absolute w-full h-full mask-polygon"
            style={{
              transform: "translate(-50%, -100%) rotate(-220deg) scale(1.4)",
              top: "-65%",
              left: "-10%",
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
          ></div>
        </div>
      </div>
    </div>
  );
}
