import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel"; // Import the Carousel component
import styles, { layout } from "../style";

const Supplies = () => {
  // Array of carousel image paths
  const carouselImages = [
    "/img/ce/ce-1.jpg",
    "/img/ce/ce-2.jpg",
    "/img/ce/ce-3.jpg",
    "/img/ce/ce-4.jpg",
    "/img/ce/ce-5.jpg",
    "/img/ce/ce-6.jpg",
    // Add more image paths if needed
  ];

  return (
    <section
      id="supplies"
      className={`${layout.sectionReverse} border-t-[1px] border-t-[#3F3E45]`}
    >
      <div className={`${layout.sectionImgReverse} relative w-[100%] h-[100%]`}>
        {/* Use the Carousel component */}
        <Carousel
          showThumbs={false}
          autoPlay={true}
          interval={5000}
          showStatus={false}
          infiniteLoop={true}
          transitionTime={500}
          selectedItem={0} // Set the initially selected item to control the highlight
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <li
                  style={{
                    background: "orange",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    display: "inline-block",
                    margin: "0 4px",
                  }}
                  aria-label={`Selected: ${label}`}
                  title={`Selected: ${label}`}
                />
              );
            }
            return (
              <li
                style={{
                  background: "#ddd",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  display: "inline-block",
                  margin: "0 4px",
                }}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label}`}
                aria-label={`${label}`}
              />
            );
          }}
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="w-[100%] h-[100%] relative">
              <img
                src={image}
                alt={`carousel-slide-${index}`}
                className="w-[100%] h-[100%] relative rounded-[20px]"
              />
            </div>
          ))}
        </Carousel>

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {/* <span className="text-gradient">Supplies</span>{" "} */}
          <br className="sm:block hidden" />
          {/* <hr className="w-full" /> */}
          Elevate your lifestyle with cutting-edge
          <br className="sm:block hidden" /> offerings in
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Consumer Electronics&nbsp;<b>|</b>
          &nbsp;Phones&nbsp;&amp;&nbsp;Tablets&nbsp;<b>|</b>&nbsp;General
          Supplies&nbsp;<b>|</b>&nbsp;Computers&nbsp;<b>|</b>&nbsp;Motor
          Vehicles&nbsp;<b>|</b>&nbsp;Audio Equipment
        </p>

        {/* Rest of the content */}
      </div>
    </section>
  );
};

export default Supplies;
