import PropTypes from "prop-types"; // Import prop-types package

import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content }) => (
  <div className="flex flex-row p-6 rounded-[20px] mb-6 feature-card">
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] whitespace-normal">
        {content}
      </p>
    </div>
  </div>
);

// Add prop-type validation for the FeatureCard component
FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const Business = () => (
  <section id="business" className={`${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Exceptional products and services, <br className="sm:block hidden" />{" "}
        Redefined for your everyday needs
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our unwavering commitment to quality, value, and convenience reshapes
        your satisfaction into an unparalleled journey. Seamlessly merging
        exceptional products and services, we transcend ordinary to deliver the
        extraordinary for your everyday needs.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  </section>
);

export default Business;
