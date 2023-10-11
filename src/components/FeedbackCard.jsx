import PropTypes from "prop-types";

const FeedbackCard = ({ name, title, img }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 py-12 my-5 max-w-full">
    <div className="flex items-center justify-center">
      <img
        src={img}
        alt={name}
        className="w-[80] h-[80] rounded-full bg-white"
      />
    </div>
    <div className="flex flex-col justify-center ml-4 mt-4 md:mt-0">
      <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white text-center">
        {name}
      </h4>
      <p className="font-poppins font-normal text-[14px] leading-[24px] text-dimWhite mt-2 text-center">
        {title}
      </p>
    </div>
  </div>
);

FeedbackCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default FeedbackCard;
