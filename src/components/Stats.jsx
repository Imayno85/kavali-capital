import { ourValues } from "../constants";
import { layout } from "../style";
import PropTypes from "prop-types"; // Import prop-types package

const ValueCard = ({ icon, title, value }) => (
  <div className="flex flex-row p-6 rounded-[20px] mb-6 feature-card mt-0">
    <div className="w-[64px] h-[64px] rounded-full bg-dimBlue flex-shrink-0 flex items-center justify-center">
      <img src={icon} alt="" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[15.2px] leading-[22.8px]">
        {value}
      </p>
    </div>
  </div>
);

ValueCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const Stats = () => (
  <section
    id="values"
    className={`${layout.section} ${layout.sectionImg} border-t-[1px] border-t-[#3F3E45]`}
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {ourValues.map((val) => (
        <ValueCard key={val.id} {...val} />
      ))}
    </div>
  </section>
);

export default Stats;
