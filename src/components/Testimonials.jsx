import { feedback } from "../constants";
import styles, { layout } from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="Directors"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative border-t-[1px] border-t-[#3F3E45]`}
  >
    <div
      className={`${layout.section} flex flex-wrap justify-center items-center`}
    >
      {feedback.map((card) => (
        <div key={card.id} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-2">
          {/* Adjusted width for medium and large screens */}
          <FeedbackCard {...card} />
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
