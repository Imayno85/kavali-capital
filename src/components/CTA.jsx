import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col pb-4">
      <h2 className={styles.heading2}>Contact Us</h2>

      {/* Call Us */}
      <div className={styles.subsection}>
        <p className={`${styles.paragraph} max-w-[470px] mt-0`}>
          <b>Call:</b> +256 773 275 029
        </p>
      </div>

      {/* Email Us */}
      <div className={styles.subsection}>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-0 md:whitespace-nowrap`}
        >
          <b>Email:</b> info@kavalicapital.com | kavalicapital@gmail.com
        </p>
      </div>

      {/* Address */}
      <div className={styles.subsection}>
        <p
          className={`${styles.paragraph1} max-w-[470px] mt-0 md:whitespace-nowrap`}
        >
          <b>Address:</b> Kira House, Suite 42B, Plot 4 Pilkington Road, P.O.Box
          119677 Kampala - Uganda
        </p>
      </div>
    </div>

    {/* Address */}
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
