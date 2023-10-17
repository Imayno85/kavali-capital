import styles from "../style";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    {/* Add social media icons or links here if needed */}

    <div className="w-full flex md:flex-row flex-col pt-6 ">
      <p className={`${styles.paragraph1} xs:text-center`}>
        Copyright Ⓒ 2023 Kavali Capital Limited. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
