const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  // 2025 Modern Typography System with Professional Letter-spacing
  // Display - Hero titles (largest)
  display:
    "font-poppins font-extrabold text-[48px] xs:text-[64px] text-white leading-[1.1] tracking-[-0.02em] w-full",

  // H1 - Main page titles
  heading1:
    "font-poppins font-bold text-[40px] xs:text-[48px] text-white leading-[1.15] tracking-[-0.015em] w-full",

  // H2 - Section headings (previously heading2)
  heading2:
    "font-poppins font-bold text-[32px] xs:text-[36px] text-white leading-[1.25] tracking-[-0.01em] w-full",

  // H3 - Subsection headings (previously heading3)
  heading3:
    "font-poppins font-bold text-[24px] xs:text-[28px] text-white leading-[1.35] tracking-normal w-full",

  // H4 - Card titles (previously heading4)
  heading4:
    "font-raleway font-semibold text-[20px] xs:text-[24px] text-white leading-[1.4] tracking-normal w-full",

  // Body Large - Prominent body text
  bodyLarge:
    "font-raleway font-normal text-dimWhite text-[18px] leading-[1.75] tracking-[0.01em]",

  // Body - Default body text (previously paragraph)
  paragraph:
    "font-raleway font-normal text-dimWhite text-[16px] leading-[1.7] tracking-[0.01em]",

  // Body Small (previously paragraph1)
  paragraph1:
    "font-raleway font-normal text-dimWhite text-[14px] leading-[1.6] tracking-[0.015em]",

  // Caption - Small supporting text
  caption:
    "font-raleway font-medium text-dimWhite text-[12px] leading-[1.4] tracking-[0.03em]",

  // Layout utilities
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  // Spacing utilities (8px base grid)
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
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
