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
        <Stats />
        <Business />
        <Supplies />
        <Services />
        <Testimonials />
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
