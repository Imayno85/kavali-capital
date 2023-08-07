import PropTypes from "prop-types";

const FeedbackCard = ({ name, title, img }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-4 px-10 py-12 rounded-[20px] my-5 feedback-card max-w-[50%]">
    <div className="flex items-center">
      <img
        src={img}
        alt={name}
        className="w-[80] h-[80] rounded-full bg-white"
      />
      <div className="flex flex-col ml-4 text-center md:text-left">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white whitespace-nowrap">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[14px] leading-[24px] text-dimWhite whitespace-nowrap">
          {title}
        </p>
      </div>
    </div>
  </div>
);

FeedbackCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default FeedbackCard;
