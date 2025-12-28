import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a
    href="https://api.whatsapp.com/send/?phone=%2B256773275029&text&type=phone_number&app_absent=0"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Get in touch via WhatsApp"
    className="group"
  >
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] sm:w-[140px] sm:h-[140px] xs:w-[120px] xs:h-[120px] rounded-full bg-orange-gradient p-[2px] cursor-pointer transition-all duration-500 ease-out-expo hover:scale-110 hover:shadow-2xl hover:rotate-6 active:scale-95 active:rotate-0`}
      style={{ boxShadow: '0 0 30px rgba(245, 134, 20, 0.3)' }}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full transition-all duration-300 group-hover:bg-surface-secondary`}
      >
        <div className={`${styles.flexStart} flex-row transition-transform duration-300 group-hover:translate-x-1`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-orange-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
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
