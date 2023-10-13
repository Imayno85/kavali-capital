import React from "react";
import styles from "./style";
import {
  Supplies,
  Services,
  Business,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  ArrowUpButton,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <div
          id="hero"
          className={`${styles.heading3} text-center mt-2  text-orange-gradient `}
        >
          Our Values
        </div>
        <Stats />
        <div
          id="business"
          className={`${styles.heading3} text-center mt-2 text-orange-gradient`}
        >
          About Us
        </div>
        <Business />
        <div
          id="supplies"
          className={`${styles.heading3} text-center mt-2 text-orange-gradient`}
        >
          Our Supplies
        </div>
        <Supplies />
        <div
          id="services"
          className={`${styles.heading3} text-center mt-2 text-orange-gradient`}
        >
          Our Services
        </div>
        <Services />
        <div className={`${styles.heading3} text-center text-orange-gradient`}>
          The Team
        </div>
        <Testimonials />
        <div
          id="clients"
          className={`${styles.heading3} text-center text-orange-gradient`}
        >
          Our Clients
        </div>
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>

    {/* Apply positioning and z-index to the ArrowUpButton component */}
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "9999",
      }}
    >
      <ArrowUpButton />
    </div>
  </div>
);

export default App;
