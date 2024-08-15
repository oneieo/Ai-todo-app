import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const primitiveColors = {
  system: {
    black: "#000000",
    white: "#ffffff",
    red200: "#FF001E",
    red300: "#CC0018",
    error: "#FF334B"
  },
  gray: {
    100: "#F2F2F2",
    200: "#D8D8D9",
    300: "#BFBEC0",
    400: "#A5A4A7",
    500: "#8B8A8E",
    600: "#727175",
    700: "#58585B",
    800: "#3F3F41",
    900: "#262627"
  },
  pai: {
    100: "#E7E5FF",
    200: "#B9B2FF",
    300: "#8A80FF",
    400: "#5B4DFF",
    500: "#2C19FF",
    600: "#1200E5",
    700: "#0E00B2",
    800: "#0E00B2",
    900: "#06004C"
  },
  fai: {
    100: "#FFF8F0",
    200: "#FFDFBD",
    300: "#FFC68A",
    400: "#FFAE57",
    500: "#FF9524",
    600: "#F07C00",
    700: "#BD6200",
    800: "#8A4700",
    900: "#572D00"
  }
};

const transparentColors = {
  whiteTrans: {
    wh72: "#FFFFFF72",
    wh56: "#FFFFFF56",
    wh40: "#FFFFFF40"
  },
  grayTrans: {
    20032: "#D8D8D932",
    20060: "#D8D8D960",
    30080: "#BFBEC080",
    60080: "#72717580",
    90020: "#26262720",
    90052: "#26262752",
    90080: "#26262780"
  },
  paiTrans: {
    10080: "#E7E5FF80",
    40060: "#5B4DFF60",
    40080: "#5B4DFF80",
    60032: "#1200E532"
  },
  faiTrans: {
    50060: "#FF952460",
    20060: "#FFDFBD60",
    20080: "#FFDFBD80"
  },
  modalBg: {
    black40: "#00000040"
  }
};

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1280px" // 재확인 필요
    },
    colors: {
      ...primitiveColors,
      ...transparentColors
    },
    extend: {
      fontSize: {
        // Head styles
        h1: ["1.625rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "extrabold" }],
        h2: ["1.5rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "extrabold" }],
        h3: ["1.375rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "extrabold" }],
        h4: ["1.25rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "extrabold" }],
        h5: ["1.125rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "extrabold" }],
        h6: ["1rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "extrabold" }],
        h7: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "extrabold" }],

        // Sub head styles
        sh1: ["1.5rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "bold" }],
        sh2: ["1.375rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "bold" }],
        sh3: ["1.25rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "bold" }],
        sh4: ["1.125rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "bold" }],
        sh5: ["1rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "bold" }],
        sh6: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "bold" }],

        // Body styles
        b1: ["1.375rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "medium" }],
        b2: ["1.25rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "medium" }],
        b3: ["1.125rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "medium" }],
        b4: ["1rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "medium" }],
        b5: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "medium" }],
        b6: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "medium" }],
        b7: ["0.625rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "medium" }],

        // Body-chat styles
        bc1: ["1.375rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "medium" }],
        bc2: ["1.25rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "medium" }],
        bc3: ["1.125rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "medium" }],
        bc4: ["1rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "medium" }],
        bc5: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "medium" }],
        "bc5-20": ["0.875rem", { lineHeight: "1.25", letterSpacing: "0.05rem", fontWeight: "medium" }],
        bc6: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "medium" }],
        bc7: ["0.625rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "medium" }],

        // Caption styles
        c1: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "bold" }],
        c2: ["0.625rem", { lineHeight: "1.5", letterSpacing: "0.05rem", fontWeight: "bold" }]
      },
      backgroundImage: {
        "gradient-pai600-fai700-br": `linear-gradient(to bottom right, ${primitiveColors.pai[600]},  ${primitiveColors.fai[700]})`,
        "gradient-pai400-fai500-br": `linear-gradient(to bottom right, ${primitiveColors.pai[400]},  ${primitiveColors.fai[500]})`,
        "gradient-pai200-fai200-br": `linear-gradient(to bottom right, ${primitiveColors.pai[200]},  ${primitiveColors.fai[200]})`,
        "gradient-gray300-gray200-br": `linear-gradient(to bottom right, ${primitiveColors.gray[300]},  ${primitiveColors.gray[200]})`,
        "header-gradient": `linear-gradient(180deg, ${primitiveColors.gray[100]} 68.96%, ${primitiveColors.gray[100]}00 99.9%)`
      },
      opacity: {
        "stroke-border": "0.95"
      },
      maxHeight: {
        "0": "0",
        screen: "100vh"
      },
      transitionProperty: {
        "max-height": "max-height"
      },
      fontFamily: {
        sans: ["SUIT", "sans-serif"], // 기본 sans-serif 폰트로 SUIT 설정
        custom: ["SUIT", "sans-serif"] // custom 클래스 유지
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      },
      height: {
        myPageList: "calc(100svh - 370px)"
      }
    }
  },
  variants: {
    extend: {
      maxHeight: ["responsive", "hover", "focus"]
    }
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      const newUtilities = {
        ".gradient-pai400-fai500-br-opacity-60": {
          position: "relative",
          isolation: "isolate",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            "background-image": `linear-gradient(to bottom right, ${primitiveColors.pai[400]}, ${primitiveColors.fai[500]})`,
            opacity: "0.6",
            "z-index": "-1"
          }
        },
        ".gradient-gray300-gray200-br-opacity-60": {
          position: "relative",
          isolation: "isolate",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            "background-image": `linear-gradient(to bottom right, ${primitiveColors.gray[300]},  ${primitiveColors.gray[200]})`,
            opacity: "0.6",
            "z-index": "-1"
          }
        },
        // 아래 3가지 원형 그라디언트 속성
        // 1) 그라디언트 컨테이너
        ".gradient-container": {
          position: "relative",
          overflow: "hidden"
        },
        // 2) 그라디언트 부분
        ".gradient-ellipse": {
          "background-image": `radial-gradient(ellipse 20% 43% at center, ${theme("colors.pai.200")} -10%, ${theme(
            "colors.fai.100"
          )} 77%)`
        },
        // 3) 그라디언트 회전
        ".gradient-rotated": {
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          transform: "rotate(-33deg)"
        }
      };
      addUtilities(newUtilities, { respectPrefix: true, respectImportant: true });
    }),
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide")
  ]
} satisfies Config;

export default config;
