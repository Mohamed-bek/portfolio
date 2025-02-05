import React, { useState, useEffect, useRef } from "react";

const GalleryProjects = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const galleryRef = useRef(null);
  const topRowPositionRef = useRef(0);
  const bottomRowPositionRef = useRef(0);

  // Example image arrays - replace with your actual image arrays
  const topRowImages = [
    "images/Gallery/g1.png",
    "images/Gallery/g2.png",
    "images/Gallery/g4.png",
    "images/Gallery/g6.png",
    "images/Gallery/g8.png",
    "images/Gallery/g10.png",
    "images/Gallery/g12.png",
    "images/Gallery/g14.png",
  ];

  const bottomRowImages = [
    "images/Gallery/g3.png",
    "images/Gallery/g5.png",
    "images/Gallery/g7.png",
    "images/Gallery/g9.png",
    "images/Gallery/g11.png",
    "images/Gallery/g13.png",
    "images/Gallery/g15.png",
    "images/Gallery/g16.png",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isInView) return; // Only process scroll when gallery is in view

      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollDelta = currentScrollTop - lastScrollTop;

      if (currentScrollTop !== lastScrollTop) {
        const moveAmount = scrollDelta * 0.5;

        topRowPositionRef.current += moveAmount;
        bottomRowPositionRef.current -= moveAmount;

        const containerWidth = window.innerWidth;
        const rowWidth = (300 + 16) * topRowImages.length;

        if (Math.abs(topRowPositionRef.current) > rowWidth) {
          topRowPositionRef.current = 0;
        }
        if (Math.abs(bottomRowPositionRef.current) > rowWidth) {
          bottomRowPositionRef.current = 0;
        }
      }
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop, isInView]);

  return (
    <div
      ref={galleryRef}
      className="w-full overflow-hidden min-h-dvh flex justify-center items-center"
    >
      <div className="container">
        <div className="relative mb-4 flex justify-end">
          <div
            className="flex gap-4"
            style={{
              transform: `translateX(${topRowPositionRef.current * 2}px)`,
              transition: "transform 3s linear",
            }}
          >
            {[...topRowImages].map((src, index) => (
              <div key={index} className="flex-none w-[500px] h-[320px]">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="relative flex justify-start">
          <div
            className="flex gap-4"
            style={{
              transform: `translateX(${bottomRowPositionRef.current * 2}px)`,
              transition: "transform 3s linear",
            }}
          >
            {[...bottomRowImages].map((src, index) => (
              <div key={index} className="flex-none w-[500px] h-[320px]">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryProjects;
