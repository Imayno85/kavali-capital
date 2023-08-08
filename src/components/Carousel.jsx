import { heroCarousel } from "../constants";
import { useState, useRef, useEffect } from "react";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselContainerRef = useRef(null);

  const scrollToImage = (i) => {
    setCurrentImage(i);
    if (carouselContainerRef.current) {
      const carouselWidth = carouselContainerRef.current.clientWidth;
      carouselContainerRef.current.scroll({
        left: carouselWidth * i,
        behavior: "smooth",
      });
    }
  };

  const totalImages = heroCarousel.length;

  const nextImage = () => {
    let nextIndex = currentImage + 1;
    if (nextIndex >= totalImages) {
      nextIndex = 0;
    }
    scrollToImage(nextIndex);
  };

  useEffect(() => {
    // Auto-scroll to the next image every 5 seconds
    const autoScroll = setInterval(() => {
      nextImage();
    }, 5000);

    return () => {
      clearInterval(autoScroll);
    };
  }, [currentImage, nextImage]); // Add nextImage to the dependency array

  return (
    <div className="p-12 flex justify-center">
      <div className="relative w-full">
        <div
          className="carousel"
          ref={carouselContainerRef}
          style={{
            display: "flex",
            overflowX: "hidden",
            scrollSnapType: "x mandatory",
            height: "400px", // Set a fixed height for the carousel container
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
              }}
            >
              <img
                className="rounded-[20px]"
                src={img}
                alt={`Image ${i}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Fill the container without stretching
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
