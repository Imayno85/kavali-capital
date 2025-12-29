import { lazy, Suspense } from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  ArrowUpButton,
} from "./components";

// Lazy load heavy components for better initial load performance
const Stats = lazy(() => import("./components/Stats"));
const PdfView = lazy(() => import("./components/PdfView"));
const Business = lazy(() => import("./components/Business"));
const Supplies = lazy(() => import("./components/Supplies"));
const Services = lazy(() => import("./components/Services"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Clients = lazy(() => import("./components/Clients"));
const Partners = lazy(() => import("./components/Partners"));
const CTA = lazy(() => import("./components/CTA"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  // Apply positioning and z-index to the ArrowUpButton component
  const arrowButtonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "9999",
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-primary/90 backdrop-blur-lg border-b border-dimWhite/10">
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      {/* Hero section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* Main content sections */}
      <div id="main-content" className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center"><div className="animate-pulse text-dimWhite">Loading...</div></div>}>
            {/* Our Values */}
            <div
              id="hero"
              className={`${styles.heading3} text-center mt-4  text-orange-gradient`}
            >
              OUR VALUES
            </div>
            <Stats />
            {/* Our Code oD Conduct */}
            <div
              id="hero"
              className={`${styles.heading3} text-center mt-4  text-orange-gradient`}
            >
              OUR CODE OF CONDUCT
            </div>
            <PdfView />

            {/* About Us */}
            <div
              id="business"
              className={`${styles.heading3} text-center mt-4 text-orange-gradient`}
            >
              ABOUT US
            </div>
            <Business />

            {/* Our Supplies */}
            <div
              id="supplies"
              className={`${styles.heading3} text-center mt-4 text-orange-gradient`}
            >
              OUR SUPPLIES
            </div>
            <Supplies />

            {/* Our Services */}
            <div
              id="services"
              className={`${styles.heading3} text-center mt-4 text-orange-gradient`}
            >
              OUR SERVICES
            </div>
            <Services />

            {/* The Team */}
            <div
              className={`${styles.heading3} text-center text-orange-gradient mt-4`}
            >
              THE TEAM
            </div>
            <Testimonials />

            {/* Our Clients */}
            <div
              id="clients"
              className={`${styles.heading3} text-center text-orange-gradient mt-4`}
            >
              OUR CLIENTS
            </div>
            <Clients />
            <div
              id="partners"
              className={`${styles.heading3} text-center text-orange-gradient mt-4`}
            >
              OUR PARTNERS
            </div>
            <Partners />

            {/* Call to Action */}
            <CTA />

            {/* Footer */}
            <Footer />
          </Suspense>
        </div>
      </div>

      {/* ArrowUpButton */}
      <div style={arrowButtonStyle}>
        <ArrowUpButton />
      </div>
    </div>
  );
};

export default App;
