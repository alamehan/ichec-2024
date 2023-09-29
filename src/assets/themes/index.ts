import { ThemeConfig } from 'antd/es/config-provider/context';

export const theme: ThemeConfig = {
  token: {
    // ⚠️ Redefine Breakpoints ⚠️ //

    // Mobile
    screenXS: 360,
    screenXSMin: 0.1,
    screenXSMax: 360,

    // Tablet Potrait
    screenSM: 768,
    screenSMMin: 360.1,
    screenSMMax: 768,

    // Tablet Landscape
    screenMD: 1024,
    screenMDMin: 768.1,
    screenMDMax: 1024,

    // Desktop
    screenLG: 1280,
    screenLGMin: 1024.1,
    screenLGMax: 1280,

    // Desktop XL
    screenXL: 1440,
    screenXLMin: 1280.1,
    screenXLMax: 1440,

    // Desktop XXL
    screenXXL: 1728,
    screenXXLMin: 1440.1,
  },
  
  components: {
    Timeline: {
      dotBg: "transparent",
      itemPaddingBottom: 20,
      tailColor: "#FCC055",
      tailWidth: 2,
    }
  },
};
