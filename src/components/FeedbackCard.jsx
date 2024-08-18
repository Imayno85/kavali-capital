import PropTypes from "prop-types";
import styles from "../style";
import { FaLinkedin } from "react-icons/fa";

const FeedbackCard = ({ name, title, img, url }) => (
  <div className="flex flex-col items-center p-12 my-5 lg:mx-2 max-w-full">
    <div className="rounded-full bg-white overflow-hidden w-63 h-63">
      <img
        src={img}
        alt={name}
        className="w-[60] h-[60] object-cover rounded-full"
      />
    </div>
    <div className="flex flex-col items-center mt-4">
      <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white text-center">
        {name}
      </h4>
      <p className={`${styles.paragraph1}`}>{title}</p>
    </div>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.paragraph1} flex items-center`}
    >
      <FaLinkedin className="mr-2" />
      LinkedIn
    </a>
  </div>
);

FeedbackCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default FeedbackCard;
