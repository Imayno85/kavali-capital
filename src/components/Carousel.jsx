import { heroCarousel } from "../constants";
import { useState, useRef, useEffect, useCallback } from "react";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselContainerRef = useRef(null);

  const scrollToImage = useCallback((i) => {
    setCurrentImage(i);
    if (carouselContainerRef.current) {
      const carouselWidth = carouselContainerRef.current.clientWidth;
      carouselContainerRef.current.scroll({
        left: carouselWidth * i,
        behavior: "smooth",
      });
    }
  }, []);

  const totalImages = heroCarousel.length;

  const nextImage = useCallback(() => {
    let nextIndex = currentImage + 1;
    if (nextIndex >= totalImages) {
      nextIndex = 0;
    }
    scrollToImage(nextIndex);
  }, [currentImage, totalImages, scrollToImage]);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      nextImage();
    }, 5000);

    return () => {
      clearInterval(autoScroll);
    };
  }, [nextImage]);

  return (
    <div className="p-12 flex justify-center">
      <div className="relative w-full">
        <div
          className="carousel sm:rounded-[20px]" // Apply rounded corners for small and larger screens
          ref={carouselContainerRef}
          style={{
            display: "flex",
            overflowX: "hidden",
            scrollSnapType: "x mandatory",
            height: "400px",
            overflowY: "hidden",
          }}
        >
          {heroCarousel.map((img, i) => (
            <div
              className="w-full flex-shrink-0"
              key={img}
              style={{
                flex: "0 0 100%",
                scrollSnapAlign: "start",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                transition: "transform 0.5s ease-in-out", // Transition for smoother image change
              }}
            >
              <img
                className="rounded-[20px]"
                src={img}
                alt={`Image ${i}`}
                loading="lazy" // Lazy loading
                width="100%" // Specify width and height
                height="100%"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="dot-container absolute bottom-4 flex justify-center w-full">
                {heroCarousel.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
                      index === currentImage ? "bg-orange-300" : "bg-gray-300"
                    }`}
                    onClick={() => scrollToImage(index)}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
