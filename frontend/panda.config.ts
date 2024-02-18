import { defineConfig, defineGlobalStyles } from "@pandacss/dev";
import { wrappingInputRule } from "@tiptap/react";


export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: { value: "#3E8AFC" },
          main: {
            50: { value: "#eff1f5" },
            100: { value: "#d0d5e2" },
            200: { value: "#b0b9ce" },
            300: { value: "#919dbb" },
            400: { value: "#7181a8" },
            500: { value: "#57688e" },
            600: { value: "#44516e" },
            700: { value: "#313a4f" },
            800: { value: "#1d232f" },
            900: { value: "#10131A" }
          }
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: "react",
  globalCss: {
    'html, body': {
      color: 'white',
      backgroundColor: 'main.900',
      height: "100dvh",
    },
    '.tiptap': {
      backgroundColor: 'main.900/90',
      backdropFilter: "auto",
      backdropBlur: "lg",
      WebkitBackdropFilter: "auto",
      position: "absolute!",
      borderTopWidth: "thin",
      borderColor: "main.700",
      margin: "auto",
      left: "0",
      bottom: "1px",
      paddingX: "8",
      maxHeight: "80",
      overflowY: "auto",
      width: "full",
      paddingBottom: "6",
      paddingTop: "5",
      zIndex: "2",
      scrollPaddingBlockEnd: "6",
      "&:focus": {
        outline: "none"
      }
    },
    '.tiptap p.is-editor-empty:first-child::before': {
      content: 'attr(data-placeholder)',
      color: "main.600",
      float: "left",
      height: "0",
      pointerEvents: "none"
    },
    '*': {
      scrollbarWidth: "thin",
      scrollbarColor: "#313a4f #1d232f",
    }
    // '::-webkit-scrollbar': {
    //   width: "2",
    // },
    // '::-webkit-scrollbar-thumb': {
    //   backgroundColor: "main.700",
    //   rounded: "xl",
    // },
    // '::-webkit-scrollbar-track': {
    //   backgroundColor: "transparent",
    // },
    // '::-webkit-scrollbar-thumb:hover': {
    //   backgroundColor: "main.600",
    // }
  }
});
