import { code_of_conduct } from "../constants";
import { layout } from "../style";
import PropTypes from "prop-types";
import { pdf_icon } from "../assets";
import { FiDownload, FiExternalLink, FiFileText } from "react-icons/fi";

// PDF file path from public folder
const KCL_Code_of_Conduct = "/KCL_Code_of_Conduct.pdf";

// Component for each code of conduct card
const ValueCard = ({ icon, title, value }) => (
  <div className="flex flex-row p-6 rounded-[20px] mb-6 feature-card mt-0 hover:bg-surface-secondary transition-all duration-300">
    <div className="w-[64px] h-[64px] rounded-full bg-dimBlue flex-shrink-0 flex items-center justify-center">
      <img src={icon} alt={`${title} icon`} className="w-[50%] h-[50%] object-contain" loading="lazy" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
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

// Enhanced PDF Viewer Component
const PdfView = () => {

  return (
    <section id="code-of-conduct" className={`${layout.section} ${layout.sectionImg}`}>
      <div className="flex-col mt-8 sm:mb-12 w-full">
        {/* Code of Conduct Cards */}
        <div className="grid grid-cols-1 gap-4">
          {code_of_conduct.map((val) => (
            <ValueCard key={val.id} {...val} />
          ))}
        </div>

        {/* PDF Document Card */}
        <div className="mt-8 rounded-[20px] bg-gradient-to-br from-surface-secondary to-surface-tertiary p-8 md:p-10 shadow-2xl border border-dimBlue/20">
          {/* Icon and Title */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-20 h-20 mb-4 bg-orange-gradient rounded-full p-[3px] shadow-lg">
              <div className="w-full h-full bg-surface-secondary rounded-full flex items-center justify-center">
                <FiFileText className="w-10 h-10 text-orange-gradient" />
              </div>
            </div>
            <h3 className="font-poppins font-bold text-white text-2xl md:text-3xl mb-2">
              Code of Conduct Document
            </h3>
            <p className="font-raleway text-dimWhite text-base max-w-2xl">
              View our comprehensive Code of Conduct outlining our commitment to integrity,
              customer care, quality, and teamwork.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={KCL_Code_of_Conduct}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-orange-gradient rounded-xl font-poppins font-bold text-white text-lg hover:scale-105 active:scale-95 transition-transform duration-200 shadow-xl hover:shadow-2xl w-full sm:w-auto justify-center"
            >
              <FiExternalLink className="w-6 h-6" />
              View PDF
            </a>
            <a
              href={KCL_Code_of_Conduct}
              download="Kavali_Capital_Code_of_Conduct.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-surface-tertiary hover:bg-dimBlue rounded-xl font-poppins font-semibold text-white border-2 border-dimBlue/30 hover:border-accent-cyan transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <FiDownload className="w-6 h-6" />
              Download PDF
            </a>
          </div>

          {/* Metadata */}
          <div className="mt-8 pt-6 border-t border-dimWhite/10">
            <div className="flex items-center justify-center gap-2 text-dimWhite/60 text-sm">
              <img src={pdf_icon} alt="PDF" className="w-5 h-5 opacity-60" />
              <span>PDF Format • KCL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PdfView;
