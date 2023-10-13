import { services } from "../constants";
import { layout } from "../style";

const FeatureCard = ({ icon, title, content }) => (
  <div className="flex flex-row p-6 rounded-[20px] mb-6 feature-card ">
    <div className="w-[64px] h-[64px] rounded-full bg-dimBlue flex-shrink-0 flex items-center justify-center">
      <img src={icon} alt="" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Services = () => (
  <section
    id="services"
    className={`${layout.section} border-t-[1px] border-t-[#3F3E45] `}
  >
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
