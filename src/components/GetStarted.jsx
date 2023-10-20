import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a
    href="https://api.whatsapp.com/send/?phone=%2B256773275029&text&type=phone_number&app_absent=0"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-orange-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-orange-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-orange-gradient">In Touch</span>
        </p>
      </div>
    </div>
  </a>
);

export default GetStarted;
