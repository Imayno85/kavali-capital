import { feedback } from "../constants";
import styles, { layout } from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="Directors"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative border-t-[1px] border-t-[#3F3E45]`}
  >
    <div className={`${layout.section}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-4 relative z-10">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
