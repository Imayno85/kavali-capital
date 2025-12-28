import styles from "../style";
import GetStarted from "./GetStarted";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    // Hero section
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingX} overflow-hidden`}
    >
      {/* Left section */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col md:pr-8 pr-0 animate-fadeIn`}
      >
        {/* Subtitle badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-surface-secondary to-surface-tertiary border border-dimWhite/10 mb-6 hover:border-dimWhite/20 transition-colors duration-300">
          <div className="w-2 h-2 rounded-full bg-orange-gradient animate-pulse"></div>
          <span className="font-raleway font-medium text-dimWhite text-sm tracking-wide">
            Excellence in Every Detail
          </span>
        </div>

        {/* Title */}
        <div className="flex flex-row justify-between items-start w-full mb-6">
          <h1 className={`font-poppins font-bold text-[48px] xs:text-[56px] md:text-[64px] lg:text-[72px] text-white leading-[1.1] tracking-tight flex-1`}>
            QUALITY<br className="sm:block hidden" />
            <span className="text-gradient inline-block animate-gradientShift">VALUE</span><br className="sm:block hidden" />
            <span>CONVENIENCE</span>
          </h1>
          {/* Get Started button */}
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        {/* Description */}
        <p className={`${styles.bodyLarge} max-w-[540px] text-dimWhite/90 leading-relaxed`}>
          Experience the perfect blend of quality, value and convenience with
          our exceptional products and services, elevating your satisfaction to
          new heights.
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap gap-8 mt-10">
          <div className="flex flex-col">
            <span className="font-poppins font-bold text-white text-3xl">10+</span>
            <span className="font-raleway text-dimWhite text-sm mt-1">Years Experience</span>
          </div>
          <div className="flex flex-col">
            <span className="font-poppins font-bold text-white text-3xl">500+</span>
            <span className="font-raleway text-dimWhite text-sm mt-1">Happy Clients</span>
          </div>
          <div className="flex flex-col">
            <span className="font-poppins font-bold text-white text-3xl">98%</span>
            <span className="font-raleway text-dimWhite text-sm mt-1">Satisfaction Rate</span>
          </div>
        </div>
      </div>
      {/* Right section - Carousel */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative md:pl-8 pl-0`}
      >
        <Carousel />
      </div>
      {/* Get Started button (hidden on smaller screens) */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
