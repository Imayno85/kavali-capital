import PropTypes from "prop-types";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

// FeatureCard component displays a feature with an icon, title, and content
const FeatureCard = ({ icon, title, content }) => (
  <div className="flex flex-row p-6 rounded-[20px] mb-6 feature-card group">
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-gradient-to-br from-dimBlue to-surface-tertiary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg`}
    >
      <img src={icon} alt={`${title} icon`} className="w-[50%] h-[50%] object-contain transition-transform duration-300 group-hover:scale-110" loading="lazy" />
    </div>
    <div className="flex-1 flex flex-col ml-4">
      <h4 className="font-poppins font-semibold text-white text-[19px] leading-[1.3] mb-2 transition-colors duration-300 group-hover:text-gradient">
        {title}
      </h4>
      <p className="font-raleway font-normal text-dimWhite text-[15px] leading-[1.6] whitespace-normal transition-colors duration-300 group-hover:text-dimWhite/90">
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
      {/* Section badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-surface-secondary to-surface-tertiary border border-dimWhite/10 mb-6">
        <span className="font-raleway font-medium text-dimWhite text-sm tracking-wide">
          About Us
        </span>
      </div>

      <h2 className={`${styles.heading2} mb-6`}>
        Exceptional products and services,<br className="sm:block hidden" />
        <span className="text-gradient"> Redefined</span> for your everyday needs
      </h2>
      <p className={`${styles.paragraph} max-w-[540px] mb-6 leading-relaxed`}>
        Our unwavering commitment to quality, value and convenience reshapes
        your satisfaction into an unparalleled journey. Seamlessly merging
        exceptional products and services, we transcend ordinary to deliver the
        extraordinary for your everyday needs.
      </p>

      {/* Certification badge */}
      <div className="inline-flex flex-col p-5 rounded-xl bg-gradient-to-br from-surface-secondary to-surface-tertiary border border-dimWhite/10 max-w-[540px] mb-8">
        <p className={`${styles.paragraph} text-dimWhite/90 mb-2`}>
          KCL is registered and approved by the Petroleum Authority of Uganda to
          legally supply goods and services to the oil and gas sector in Uganda.
        </p>
        <div className="flex items-center gap-2">
          <span className="text-dimWhite text-sm">NSD Number:</span>
          <span className="font-poppins font-bold text-orange-gradient tracking-wide">
            NS-15200/2023/4180
          </span>
        </div>
      </div>

      {/* Button component can be added here */}
      <Button styles={`mt-6`} />
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
