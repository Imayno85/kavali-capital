import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ArrowUpButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Show button after scrolling 20% of the page
      setIsVisible(progress > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-orange-gradient text-white shadow-xl hover:shadow-glow-orange transition-all duration-normal ease-out-expo z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      {/* Circular Progress Ring */}
      <svg className="absolute inset-0 w-12 h-12 -rotate-90">
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="3"
        />
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="#00f6ff"
          strokeWidth="3"
          strokeDasharray={`${2 * Math.PI * 20}`}
          strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
          strokeLinecap="round"
          className="transition-all duration-150"
          style={{ filter: 'drop-shadow(0 0 4px rgba(0, 246, 255, 0.5))' }}
        />
      </svg>

      {/* Arrow Icon */}
      <div className="relative w-full h-full flex items-center justify-center">
        <FiArrowUp className="w-5 h-5" />
      </div>
    </button>
  );
};

export default ArrowUpButton;
