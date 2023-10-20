import styles from "./style";
import {
  Supplies,
  Services,
  Business,
  Clients,
  CTA,
  Footer,
  Navbar,
  Partners,
  Stats,
  Testimonials,
  Hero,
  ArrowUpButton,
} from "./components";

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
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Hero section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* Main content sections */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* Our Values */}
          <div
            id="hero"
            className={`${styles.heading3} text-center mt-4  text-orange-gradient`}
          >
            OUR VALUES
          </div>
          <Stats />

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
