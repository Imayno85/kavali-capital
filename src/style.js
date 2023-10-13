const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  // Raleway Font
  // heading2: "font-raleway font-semibold text-4xl text-white leading-1.2",
  // heading3: "font-raleway font-semibold text-3xl text-white leading-1.3",
  // heading4: "font-raleway font-semibold text-2xl text-white leading-1.5",
  // paragraph: "font-raleway font-normal text-base text-dimWhite leading-1.6",

  // Lato Font
  // heading2: "font-lato font-semibold text-4xl text-white leading-1.2",
  // heading3: "font-lato font-semibold text-3xl text-white leading-1.3",
  // heading4: "font-lato font-semibold text-2xl text-white leading-1.5",
  // paragraph: "font-lato font-normal text-base text-dimWhite leading-1.6",
  // ==============================================================
  // Roboto Font
  // heading2:
  //   "font-roboto font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  // heading3:
  //   "font-roboto font-semibold text-[36px] text-white leading-[56.25px] w-full",
  // paragraph:
  //   "font-roboto font-normal text-dimWhite text-[18px] leading-[30.8px]",

  // heading4:
  //   "font-roboto font-semibold text-[28px] text-white leading-[48px] w-full",
  // ==============================================================
  // Original Fonts Poppins
  // ... other styles
  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",

  heading3:
    "font-poppins font-semibold text-[36px] text-white leading-[56.25px] w-full",

  heading4:
    "font-poppins font-semibold text-[28px] text-white leading-[48px] w-full",

  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  // =================================================================
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionImg1: ` flex-1 flex  justify-start mt-10 lg:justify-center `,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  feedbackCardContent: "flex flex-col justify-center items-center text-center",
};

export default styles;
