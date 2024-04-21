import { code_of_conduct } from "../constants";
import { layout } from "../style";
import PropTypes from "prop-types";
import KCL_Code_of_Conduct from "../assets/KCL_Code_of_Conduct.pdf";

// Component for each value card
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

// PropTypes for ValueCard component
ValueCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

// Stats component
const Stats = () => (
  <section id="values" className={`${layout.section} ${layout.sectionImg}  `}>
    <a href={KCL_Code_of_Conduct} target="_blank" rel="noopener noreferrer">
      <div className="flex-col mt-8 sm:mb-12">
        {code_of_conduct.map((val) => (
          <ValueCard key={val.id} {...val} />
        ))}
      </div>
    </a>
  </section>
);

export default Stats;

// import KCL_Code_of_Conduct from "../assets/KCL_Code_of_Conduct.pdf";

// const PdfView = () => {
//   return (
//     <div className="flex flex-row p-6 rounded-[20px] mb-6 feature-card mt-0 font-poppins font-semibold text-white text-[18px] leading-[23.4px]">
//       <a href={KCL_Code_of_Conduct} target="_blank" rel="noopener noreferrer">
//         Download Code of Conduct
//       </a>
//     </div>
//   );
// };

// export default PdfView;
