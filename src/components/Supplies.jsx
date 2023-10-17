import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel"; // Import the Carousel component
import styles, { layout } from "../style"; // Import styles and layout from style file

const Supplies = () => {
  // Array of carousel image paths
  const carouselImages = [
    "/img/ce/ce-1.jpg",
    "/img/ce/ce-2.jpg",
    "/img/ce/ce-3.jpg",
    "/img/ce/ce-4.jpg",
  ];

  return (
    // Supplies section
    <section id="supplies" className={`${layout.sectionReverse} mb-16 mt-8`}>
      <div className={`${layout.sectionImgReverse} relative w-full h-full`}>
        {/* Use the Carousel component */}
        <Carousel
          className="mt-4"
          showThumbs={false}
          autoPlay={true}
          interval={5000}
          showStatus={false}
          infiniteLoop={true}
          transitionTime={500}
          selectedItem={0} // Set the initially selected item to control the highlight
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const style = {
              background: isSelected ? "orange" : "#ddd",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              display: "inline-block",
              margin: "0 4px",
            };
            return (
              <li
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={isSelected ? `Selected: ${label}` : label}
                aria-label={isSelected ? `Selected: ${label}` : label}
              />
            );
          }}
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="w-full h-full relative">
              <img
                src={image}
                alt={`carousel-slide-${index}`}
                className="w-full h-full relative rounded-[20px]"
              />
            </div>
          ))}
        </Carousel>

        {/* Gradient */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* Gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Elevate your lifestyle with cutting-edge offerings in
        </h2>
        <p className={`${styles.paragraph1} max-w-[470px] mt-5 mb-6`}>
          Consumer Electronics | Phones & Tablets | General Supplies | Computers
          | Motor Vehicles | Audio Equipment
        </p>
      </div>
    </section>
  );
};

export default Supplies;
