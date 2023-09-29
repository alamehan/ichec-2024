const styles = {
  
  /* --------------------------------- Layout --------------------------------- */

  rootPage: "flex flex-col items-center justify-center bg-white overflow-hidden",
  marginSectionSM: "mb-12 md:mb-16 lg:mb-20",
  marginSectionMD: "mb-24 md:mb-28 lg:mb-32",
  widthFull: "w-full",
  maxWidth: "max-w-[1440px] mx-auto",
  paddingToNavbarHScreen: "pt-20 pb-8 md:pt-24 md:pb-12 lg:py-6",
  paddingToNavbarHNormal: "pt-28 xl:pt-20 xxl:pt-28",
  paddingToNavbarHNormal2: "pt-28 xl:pt-32 xxl:pt-40",
  paddingToNavbarH404: "pt-20 pb-8 md:pt-32 md:pb-12 lg:py-6 xxl:pt-32 xxl:pb-16",
  verticalTop: "flex",
  verticalCenter: "flex items-center",
  verticalBottom: "flex items-end",
  contentContainer: "mx-3 md:mx-6 lg:mx-12 xl:mx-24 w-full",
  layout1Column: "flex flex-col",
  layout2Column: "flex flex-col lg:flex-row",
  layoutNavbar: "flex justify-between",
  orderSwitch: "order-last lg:order-first",
  marginMobileSM: "mb-8 lg:mb-0",
  marginMobileMD: "mb-12 lg:mb-0",
  marginMobileXL: "mb-16 lg:mb-0",
  marginMobileContact: "mb-32 lg:mb-0",

  /* ------------------------------- Text Style ------------------------------- */

  txtDisplay1: "txt-display-1 linear_1_txt shadow-text-sm",
  txtDisplay2: "txt-display-2 linear_1_txt",
  txtDisplay2White: "txt-display-2 text-white shadow-text-md",
  txtDisplay3: "txt-display-3 text-white shadow-text-sm",
  txtHeadline1: "txt-headline-1 text-brand_blue",
  txtHeadline1White: "txt-headline-1 text-white shadow-text-sm",
  txtHeadline2: "txt-headline-2 text-white shadow-text-sm",
  txtHeadline2Linear: "txt-headline-2 linear_1_txt",
  txtBody: "txt-body text-color_text_body",
  txtBodyDark: "txt-body text-slate-600",
  txtBodyBlack: "txt-body text-color_text_head",
  txtBodyWhite: "txt-body text-white shadow-text-sm",
  txtBodyBold: "txt-body-bold text-color_text_body",
  txtBodyBoldBlue: "txt-body-bold text-brand_blue",
  txtBodyBoldBrown: "txt-body-bold text-brand_brown",
  txtNavbar: "txt-navbar text-color_text_body",
  txtNavbarBold: "txt-navbar-bold text-color_text_head",

  /* ------------------------------- Other Style ------------------------------ */

  txtCenterToStart: "text-center lg:text-start",
  txtCenterToEnd: "text-center lg:text-end",
  txtCenterToCenter: "text-center",
  imgCenterToStart: "flex justify-center lg:justify-start",
  imgCenterToCenter: "flex justify-center",
  imgReponsive: "scale-[0.9] md:scale-[1] mx-auto",
  imgReponsiveNoCenter: "scale-[0.9] md:scale-[1]",

  /* ------------------------------ Miscellaneous ----------------------------- */

  logoListsLeft: "flex flex-wrap justify-center lg:justify-start",
  logoListsRight: "flex flex-wrap justify-center lg:justify-end",
  logoListsCenter: "flex flex-wrap justify-center",
  iconAndTextLeft: "flex flex-col lg:flex-row items-center",
  iconAndTextRight: "flex flex-col lg:flex-row-reverse items-center",
  iconAndTextLeftMargin: "mr-0 mb-8 lg:mr-8 lg:mb-0",
  iconAndTextLeftMarginLite: "mr-0 mb-4 lg:mr-4 lg:mb-0",
  iconAndTextRightMargin: "ml-0 mb-8 lg:ml-8 lg:mb-0",
  iconAndTextRightMarginLite: "ml-0 mb-4 lg:ml-4 lg:mb-0",
  iconAndTextKeepIconSize: "flex-shrink-0",
  iconSosmedFooter: "flex md:inline-flex flex-col md:flex-row gap-4 py-2 pl-4 pr-2 items-center glass-effect-2 rounded-full",

  countDownTimerBox: "flex items-center justify-center w-24 h-24 rounded-[24px]",
  countDownTimerGradient: "bg-gradient-to-br from-brand_yellow from-10% via-brand_teal via-50% to-brand_blue to-90%",
  timelineDateBox: "inline-flex px-3 py-2 mb-4 rounded-[12px] md:max-w-none glass-effect-3 shadow-glass-teal",
  cardContactStyle: "inline-flex flex-col glass-effect-1 px-8 pt-8 pb-8 rounded-b-[24px] rounded-t-[99px] min-w-[300px] outline outline-brand_yellow outline-offset-[12px]",
  cardSpeakerStyle: "flex flex-col lg:flex-row justify-start items-center mx-4 md:mx-16 md:mx-28 xl:mx-32 p-10 gap-6 lg:gap-0 lg:gap-12 glass-effect-1 rounded-[24px]",
};

export default styles;