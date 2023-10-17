import PropTypes from "prop-types";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

// FeatureCard component displays a feature with an icon, title, and content
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
      <p className="font-poppins font-normal text-dimWhite text-[15.2px] leading-[22.8px] whitespace-normal">
        {content}
      </p>
    </div>
  </div>
);

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const Business = () => (
  <section id="business" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo} mt-8`}>
      <h2 className={styles.heading2}>
        Exceptional products and services, <br className="sm:block hidden" />{" "}
        Redefined for your everyday needs
      </h2>
      <p className={`${styles.paragraph1} max-w-[470px] mt-5`}>
        Our unwavering commitment to quality, value, and convenience reshapes
        your satisfaction into an unparalleled journey. Seamlessly merging
        exceptional products and services, we transcend ordinary to deliver the
        extraordinary for your everyday needs.
      </p>

      <p className={`${styles.paragraph1} max-w-[470px] mt-5`}>
        KCL is registered and approved by the Petroleum Authority of Uganda to
        legally supply goods and services to the oil and gas sector in Uganda.
        Our NSD number is{" "}
        <b className="whitespace-nowrap text-orange-gradient">
          NS-15200/2023/4180
        </b>
      </p>

      {/* Button component can be added here */}
      <Button styles={`mt-10`} />
    </div>

    {/* Display mission, vision, and promise features */}
    <div className={`${layout.sectionImg1} flex-col mt-8 sm:mb-12`}>
      {features.map((feature) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  </section>
);

export default Business;
