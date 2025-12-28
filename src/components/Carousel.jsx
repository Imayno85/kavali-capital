import { heroCarousel } from "../constants";
import { useState, useRef, useEffect } from "react";
import { FiPause, FiPlay, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const carouselContainerRef = useRef(null);
  const totalImages = heroCarousel.length;

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

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);
  };

  // Auto-scroll effect with proper dependencies
  useEffect(() => {
    if (!isPlaying) return;

    const autoScroll = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % totalImages);
    }, 5000);

    return () => clearInterval(autoScroll);
  }, [isPlaying, totalImages]);

  // Scroll to image when currentImage changes
  useEffect(() => {
    scrollToImage(currentImage);
  }, [currentImage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="relative w-full"
      role="region"
      aria-label="Image carousel"
      aria-roledescription="carousel"
    >
      <div
        className="carousel rounded-[20px] overflow-hidden shadow-xl"
        ref={carouselContainerRef}
        style={{
          display: "flex",
          overflowX: "hidden",
          scrollSnapType: "x mandatory",
          height: "500px",
          width: "100%",
        }}
        aria-live="polite"
        aria-atomic="true"
      >
        {heroCarousel.map((img, i) => (
          <div
            className="w-full h-full flex-shrink-0"
            key={img}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${totalImages}`}
            style={{
              flex: "0 0 100%",
              scrollSnapAlign: "start",
              position: "relative",
              height: "100%",
            }}
          >
            <img
              src={img}
              alt={`Kavali Capital showcase image ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/80 text-white flex items-center justify-center hover:bg-primary transition-all duration-200 z-20 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/80 text-white flex items-center justify-center hover:bg-primary transition-all duration-200 z-20 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <FiChevronRight className="w-6 h-6" />
      </button>

      {/* Pause/Play Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 text-white flex items-center justify-center hover:bg-primary transition-all duration-200 z-20 backdrop-blur-sm"
        aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
      >
        {isPlaying ? (
          <FiPause className="w-5 h-5" />
        ) : (
          <FiPlay className="w-5 h-5 ml-0.5" />
        )}
      </button>

      {/* Progress Indicator */}
      <div className="absolute top-4 left-4 bg-primary/80 text-white px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm z-20">
        {currentImage + 1} / {totalImages}
      </div>

      {/* Carousel Dots */}
      <div
        className="absolute bottom-4 left-0 right-0 flex justify-center z-10 gap-2"
        role="tablist"
        aria-label="Carousel navigation"
      >
        {heroCarousel.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === currentImage}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentImage
                ? "bg-orange-gradient shadow-glow-orange scale-125"
                : "bg-surface-tertiary hover:bg-surface-secondary"
            }`}
            onClick={() => scrollToImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
