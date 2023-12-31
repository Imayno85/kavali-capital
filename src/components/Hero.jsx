import styles from "../style";
import GetStarted from "./GetStarted";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    // Hero section
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* Left section */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* Title */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1`}>
            QUALITY <br /> <span className="text-orange-gradient ">VALUE</span>{" "}
            <br /> <span>CONVENIENCE</span>
          </h1>
          {/* Get Started button */}
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        {/* Description */}
        <p className={`${styles.paragraph1} max-w-[470px] mt-5`}>
          Experience the perfect blend of quality, value and convenience with
          our exceptional products and services, elevating your satisfaction to
          new heights.
        </p>
      </div>
      {/* Right section - Carousel */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        style={{ width: "100%" }}
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
