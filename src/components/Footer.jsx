import styles from "../style";

// import { socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div
      className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}
    ></div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[12px] leading-[27px] text-white">
        Copyright Ⓒ 2023 Kavali Capital Limited. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
