module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "1A1A1A": "#1A1A1A",
        "2480EA": "#2480EA",
        "1E1E1E": "#1E1E1E",
        "0F0F0F": "#0F0F0F",
        "000000": "#000000",
        "00FF0A": "#00FF0A",
        252525: "#252525",
        101010: "#101010",
        "0073F0": "#0073F0",
        "060606": "#060606",
      },
      borderColor: {
        "0073F0": "#0073F0",
      },
    },
  },
  plugins: [],
};
