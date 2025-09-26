import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isHeroSection, setIsHeroSection] = useState(true);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    const handleScroll = () => {
      // Reduce star opacity in hero section to not conflict with Spline
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      setIsHeroSection(scrollY < heroHeight * 0.8);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 12000 // Slightly reduced for better performance
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2.5 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.3, // Reduced base opacity
        animationDuration: Math.random() * 6 + 3,
        layer: Math.random() > 0.7 ? 'front' : 'back' // Some stars in front, most in back
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 3; // Reduced from 4
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1.5 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 20 + 5, // Longer delay between meteors
        animationDuration: Math.random() * 4 + 4,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Background stars (behind Spline) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isHeroSection ? 'opacity-30' : 'opacity-100'
        }`}
        style={{ zIndex: 1 }}
      >
        {stars
          .filter(star => star.layer === 'back')
          .map((star) => (
            <div
              key={`back-${star.id}`}
              className="star animate-pulse-subtle"
              style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity * (isHeroSection ? 0.3 : 1),
                animationDuration: star.animationDuration + "s",
              }}
            />
          ))}
      </div>

      {/* Foreground stars (in front of Spline, but subtle) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isHeroSection ? 'opacity-20' : 'opacity-60'
        }`}
        style={{ zIndex: 15 }}
      >
        {stars
          .filter(star => star.layer === 'front')
          .map((star) => (
            <div
              key={`front-${star.id}`}
              className="star animate-pulse-subtle"
              style={{
                width: star.size * 0.7 + "px",
                height: star.size * 0.7 + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity * 0.6,
                animationDuration: star.animationDuration + "s",
                boxShadow: `0 0 ${star.size * 3}px ${star.size}px rgba(255, 255, 255, 0.2)`
              }}
            />
          ))}
      </div>

      {/* Meteors (reduced in hero section) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isHeroSection ? 'opacity-40' : 'opacity-100'
        }`}
        style={{ zIndex: 20 }}
      >
        {meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="meteor animate-meteor"
            style={{
              width: meteor.size * 40 + "px",
              height: meteor.size * 1.5 + "px",
              left: meteor.x + "%",
              top: meteor.y + "%",
              animationDelay: meteor.delay + "s",
              animationDuration: meteor.animationDuration + "s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

// import { useEffect, useState } from "react";

// // id, size, x, y, opacity, animationDuration
// // id, size, x, y, delay, animationDuration

// export const StarBackground = () => {
//   const [stars, setStars] = useState([]);
//   const [meteors, setMeteors] = useState([]);

//   useEffect(() => {
//     generateStars();
//     generateMeteors();

//     const handleResize = () => {
//       generateStars();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const generateStars = () => {
//     const numberOfStars = Math.floor(
//       (window.innerWidth * window.innerHeight) / 10000
//     );

//     const newStars = [];

//     for (let i = 0; i < numberOfStars; i++) {
//       newStars.push({
//         id: i,
//         size: Math.random() * 3 + 1,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         opacity: Math.random() * 0.5 + 0.5,
//         animationDuration: Math.random() * 4 + 2,
//       });
//     }

//     setStars(newStars);
//   };

//   const generateMeteors = () => {
//     const numberOfMeteors = 4;
//     const newMeteors = [];

//     for (let i = 0; i < numberOfMeteors; i++) {
//       newMeteors.push({
//         id: i,
//         size: Math.random() * 2 + 1,
//         x: Math.random() * 100,
//         y: Math.random() * 20,
//         delay: Math.random() * 15,
//         animationDuration: Math.random() * 3 + 3,
//       });
//     }

//     setMeteors(newMeteors);
//   };

//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//       {stars.map((star) => (
//         <div
//           key={star.id}
//           className="star animate-pulse-subtle"
//           style={{
//             width: star.size + "px",
//             height: star.size + "px",
//             left: star.x + "%",
//             top: star.y + "%",
//             opacity: star.opacity,
//             animationDuration: star.animationDuration + "s",
//           }}
//         />
//       ))}

//       {meteors.map((meteor) => (
//         <div
//           key={meteor.id}
//           className="meteor animate-meteor"
//           style={{
//             width: meteor.size * 50 + "px",
//             height: meteor.size * 2 + "px",
//             left: meteor.x + "%",
//             top: meteor.y + "%",
//             animationDelay: meteor.delay,
//             animationDuration: meteor.animationDuration + "s",
//           }}
//         />
//       ))}
//     </div>
//   );
// };
