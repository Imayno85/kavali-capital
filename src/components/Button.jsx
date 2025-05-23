import PropTypes from "prop-types";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 mb-6 px-6 font-poppins font-medium text-[18px] text-primary bg-orange-gradient rounded-[10px] outline-none ${styles}`}
  >
    <a
      href="https://api.whatsapp.com/send/?phone=%2B256773275029&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      Get Started
    </a>
  </button>
);

Button.propTypes = {
  styles: PropTypes.string,
};

export default Button;
