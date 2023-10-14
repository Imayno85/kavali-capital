const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-extrabold xs:text-[45.6px] text-black  text-[38px] text-white xs:leading-[72.96px] leading-[63.46px] w-full",
  heading3:
    "font-poppins font-bold text-[32.5px] text-white leading-[50.875px] w-full",

  heading4:
    "font-raleway font-semibold text-[26.6px] text-white leading-[45.6px] w-full",

  paragraph:
    "font-raleway font-normal text-dimWhite text-[17.1px] leading-[22.8px]",

  paragraph1:
    "font-poppins font-normal text-dimWhite text-[15.2px] leading-[22.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-15.2 px-5",
  paddingY: "sm:py-15.2 py-5",
  padding: "sm:px-15.2 px-5 sm:py-11.4 py-3.8",

  marginX: "sm:mx-15.2 mx-5",
  marginY: "sm:my-15.2 my-5",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-9.5 mr-0 md:mt-0 mt-9.5 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-9.5 ml-0 md:mt-0 mt-9.5 relative`,

  sectionImg1: ` flex-1 flex  justify-start mt-9.5 lg:justify-center `,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col md:pl-8`,
  feedbackCardContent: "flex flex-col justify-center items-center text-center",
};

export default styles;
