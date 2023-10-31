
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors: {
        'brand': {
          brand1: "#4529E6",
          brand2: "#5126EA",
          brand3: "#B0A6F0",
          brand4: "#EDEAFD",
        },
        'gray': {
          gray0: "#0b0d0d",
          gray1: "#212529",
          gray2: "#495057",
          gray3: "#868e96",
          gray4: "#adb5bd",
          gray5: "#ced4da",
          gray6: "#dee2e6",
          gray7: "#e9ecef",
          gray8: "#f1f3f5",
          gray9: "#f8f9fa",
          gray10: "#fdfdfd",
          whiteFixed: "#ffffff",
        },
        'feedback': {
          alert_1: "#cd2b31",
          alert_2: "#fdd8d8",
          alert_3: "#ffe5e5",
          sucess_1:" #18794e",
          sucess_2: "#ccebd7",
          sucess_3: "#ddf3e4",
        },
        'random': {
          random1: "#e34d8c",
          random2: "#c04277",
          random3: "#7d2a4d",
          random4: "#7000ff",
          random5: "#6200e3",
          random6: "#36007d",
          random7: "#349974",
          random8: "#2a7d5f",
          random9: "#153d2e",
          random10: "#6100ff",
          random11: "#5700e3",
          random12: "#30007d",
        }
    }
    },
  },
  plugins: [],
}
export default config
