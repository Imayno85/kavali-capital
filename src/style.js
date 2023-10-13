const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-raleway font-black italic text-black xs:text-[56px] text-[48px] text-white xs:leading-[65px] leading-[40px] w-full",

  heading3:
    "font-poppins font-extrabold text-[36px] text-white leading-[56.25px] w-full",

  heading4:
    "font-raleway font-semibold text-[28px] text-white leading-[48px] w-full",

  paragraph:
    "font-raleway font-normal text-dimWhite text-[18px] leading-[24px]",

  paragraph1:
    "font-poppins font-normal text-dimWhite text-[16px] leading-[24px]",

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
