import { services } from "../constants";
import { layout } from "../style";
import PropTypes from "prop-types";

const FeatureCard = ({ icon, title, content }) => (
  <div className="flex flex-row p-6 rounded-[20px] mb-6 feature-card group">
    <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-dimBlue to-surface-tertiary flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
      <img src={icon} alt={`${title} icon`} className="w-[50%] h-[50%] object-contain transition-transform duration-300 group-hover:scale-110" loading="lazy" />
    </div>
    <div className="flex-1 flex flex-col ml-4">
      <h4 className="font-poppins font-semibold text-white text-[19px] leading-[1.3] mb-2 transition-colors duration-300 group-hover:text-gradient">
        {title}
      </h4>
      <p className="font-raleway font-normal text-dimWhite text-[15px] leading-[1.6] transition-colors duration-300 group-hover:text-dimWhite/90">
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

const Services = () => (
  <section id="services" className={`${layout.section} mb-16`}>
    <div
      className={`${layout.sectionImg} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 `}
    >
      {services.map((feature) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  </section>
);

export default Services;
