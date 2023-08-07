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
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <Stats />
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <Business />
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <Supplies />
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <Services />
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <Testimonials />
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Clients />
        <CTA />
        <Footer />
      </div>
      <ArrowUpButton />
    </div>
  </div>
);

export default App;
