import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
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

export default Button;
