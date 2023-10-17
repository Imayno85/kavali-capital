// import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      {/* Left section containing contact information */}
      <div className="flex-1 flex flex-col pb-4">
        <h2 className={styles.heading2}>Contact Us</h2>

        {/* Call Us */}
        <div className={styles.subsection}>
          <p className={`${styles.paragraph} max-w-[470px] mt-0`}>
            <b>Call:</b>{" "}
            <span className={styles.paragraph1}>
              <a href="tel:+256773275029">+256 773 275 029</a>
            </span>
          </p>
        </div>

        {/* Email Us */}
        <div className={styles.subsection}>
          <p
            className={`${styles.paragraph} max-w-[470px] mt-0 md:whitespace-nowrap`}
          >
            <b>Email:</b>{" "}
            <a
              className={styles.paragraph1}
              href="mailto:info@kavalicapital.com"
            >
              info@kavalicapital.com{" "}
            </a>
            <a
              className={styles.paragraph1}
              href="mailto:kavalicapital@gmail.com"
            >
              | kavalicapital@gmail.com
            </a>
          </p>
        </div>

        {/* Address */}
        <div className={styles.subsection}>
          <p
            className={`${styles.paragraph1} max-w-[470px] mt-0 md:whitespace-nowrap`}
          >
            <b>Address:</b> Kira House, Suite 42B, Plot 4 Pilkington Road,
            P.O.Box 119677 Kampala - Uganda
          </p>
        </div>
      </div>

      {/* Right section containing a CTA button */}
      <div
        id="contact-us"
        className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}
      >
        <Button />
      </div>
    </section>
  );
};

export default CTA;
