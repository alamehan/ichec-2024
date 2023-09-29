/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        brand_teal: "#4EB1A1",
        brand_blue: "#326199",
        brand_yellow: "#FCC055",
        brand_vanilla: "#FFF8E8",
        brand_orange: "#EB8D50",
        brand_brown: "#CB725E",

        white: "#FFFFFF",
        gray: "#8C8C8C",
        black: "#000000",
        surface_1: "#F8FAFC",
        surface_2: "#F1F5F9",
        mute: "#E2E8F0",
        border_1: "#CBD5E1",
        border_2: "#94A3B8",

        color_text_mute: "#94A3B8",
        color_text_body: "#64748B",
        color_text_head: "#1E293B",

        system_primary: "#3B82F6",
        system_success: "#22C55E",
        system_danger: "#EF4444",
        system_warning: "#F59E0B",
        system_info: "#06B6D4",

        linear_1: "linear-gradient(119deg, #FCC055 18.75%, #4EB1A1 50%, #326199 81.25%)",
        linear_2: "linear-gradient(119deg, #4EB1A1 9.9%, #326199 88.92%)",
        linear_3: "linear-gradient(180deg, #F8FAFC 0%, #E2E8F0 100%)",
        linear_4: "linear-gradient(180deg, #F5F5F5 0%, #326199 100%)",

        brown: {
          50: "#FDF8F6",
          100: "#F2E8E5",
          200: "#EADDD7",
          300: "#E0CEC7",
          400: "#D2BAB0",
          500: "#BFA094",
          600: "#A18072",
          700: "#977669",
          800: "#846358",
          900: "#43302B",
        },
      },
      animation: {
        'rotate': "rotate_key 20s linear infinite",
        'gelatine': "gelatine_key 1s infinite",
        'swing': "swing_key 2.5s ease infinite",
        'swing2': "swing_key 3s ease infinite",
      },
      keyframes: {
        rotate_key: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        gelatine_key: {
          'from, to': { transform: 'scale(1, 1)' },
          '25%': { transform: 'scale(0.95, 1.05)' },
          '50%': { transform: 'scale(1.05, 0.95)' },
          '75%': { transform: 'scale(0.95, 1.05)' },
        },
        swing_key: {
          '20%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '80%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      }
    },
    screens: {
      xs: "1px",      // min-width: 1px     (Mobile Small)
      sm: "360px",    // min-width: 360px   (Mobile)
      md: "768px",    // min-width: 768px   (Tablet Potrait)
      lg: "1024px",   // min-width: 1024px  (Tablet Landscape)
      xl: "1280px",   // min-width: 1280px  (Desktop)
      xxl: "1440px",  // min-width: 1440px  (Desktop Large)
    },
  },
  plugins: [],
}

