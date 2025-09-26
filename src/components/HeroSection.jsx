import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden hero-mobile-adjust"
    >
      {/* Spline 3D Background - Fully Interactive */}
      <div className="absolute inset-0 spline-container optimize-3d">
        <iframe
          src='https://my.spline.design/interactiveworkspace-wBHq0rB9MkHatAChlxWhxcJU/'
          frameBorder='0'
          className="iframe-3d-load w-full h-full"
          title="3D Interactive Workspace"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ pointerEvents: 'auto' }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-end px-4 pb-16 sm:pb-20 md:pb-24 lg:pb-28 pointer-events-none">

        {/* Localized fade overlay only behind text */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />

        {/* Text container with pointer events enabled for buttons - now full width */}
        <div className="relative w-full mx-auto pointer-events-auto">
          {/* Enhanced backdrop blur container */}
          <div className="hero-text-backdrop rounded-4xl p-4 sm:p-6 md:p-8 lg:p-10 border border-white/20 shadow-2xl mx-2 sm:mx-4 bg-background/30 backdrop-blur-md relative">
            {/* Rounded left indicator - positioned exactly at left 10px, top 10px, bottom 10px */}
            <div className="absolute left-[15px] top-[20px] bottom-[20px] w-[10px] bg-primary rounded-full"></div>

            {/* Content container with left padding to account for indicator */}
            <div className="pl-8 sm:pl-10 md:pl-12 space-y-4 sm:space-y-6">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-glow-enhanced text-left">
                <span className="opacity-0 animate-fade-in block sm:inline"> Hi, I'm</span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1 block sm:inline">
                  {" "}
                  Ritesh
                </span>
                <span className="text-gradient ml-0 sm:ml-2 opacity-0 animate-fade-in-delay-2 block sm:inline">
                  {" "}
                  Kanwar
                </span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3 leading-relaxed text-left">
                I craft stellar web and mobile experiences with modern technologies.
                Specializing in front-end and android development, I build interfaces that are
                both beautiful and functional.
              </p>

              <div className="pt-2 sm:pt-4 opacity-0 animate-fade-in-delay-4 text-left">
                <a href="#projects" className="cosmic-button text-xs sm:text-sm md:text-base">
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20 pointer-events-none">
        <span className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2 opacity-80 hidden sm:block"> Scroll </span>
        <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary" />
      </div>
    </section>
  );
};
// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4"
//     >
//       <div className="container max-w-4xl mx-auto text-center z-10">
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//             <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
//             <span className="text-primary opacity-0 animate-fade-in-delay-1">
//               {" "}
//               Ritesh
//             </span>
//             <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
//               {" "}
//               Kanwar
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
//             I craft stellar web and mobile experiences with modern technologies.
//             Specializing in front-end and android development, I build interfaces that are
//             both beautiful and functional.
//           </p>

//           <div className="pt-4 opacity-0 animate-fade-in-delay-4">
//             <a href="#projects" className="cosmic-button">
//               View My Work
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
//         <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </div>
//     </section>
//   );
// };
