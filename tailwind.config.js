export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".scrollbar-none": {
            "scrollbar-width": "none",
            "-ms-overflow-style": "none",
          },
          ".scrollbar-none::-webkit-scrollbar": {
            display: "none",
          },
        },
        ["responsive"]
      );
    },
  ],
};
