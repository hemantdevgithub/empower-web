import type { Config } from "tailwindcss";
import { colors } from "./src/constants/theme";
const config: Config = {
  content: [
    // Add your content sources here
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": `linear-gradient(90deg,${colors.primary[0]},${colors.primary[1]})`,
        "secondary-gradient": `linear-gradient(90deg,${colors.secondary[0]},${colors.secondary[1]})`,
        "stroke-gradient": `linear-gradient(90deg,${colors.stroke[0]},${colors.stroke[1]})`,
      },
      colors: {
        primary: {
          DEFAULT: colors.primary[0],
          dark: colors.primary[1],
        },
        stroke: {
          DEFAULT: colors.stroke[0],
          dark: colors.stroke[1],
        },
        secondary: {
          DEFAULT: colors.secondary[0],
          dark: colors.secondary[1],
        },
        accent: colors.accent,
        background: colors.background,
        success: colors.success,
        error: colors.error,
      },
    },
  },
};
export default config;
