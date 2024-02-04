/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        stats: "repeat(auto-fit, minmax(230px, 1fr))",
      },
      colors: {
        "app-primary-cyan": "hsl(180, 66%, 49%)",
        "app-primary-dark-violet": "hsl(257, 27%, 26%)",
        "app-secondary-Red": "hsl(0, 87%, 67%)",
        "app-neutral-gray": "hsl(0, 0%, 75%)",
        "app-neutral-grayish-violet": "hsl(257, 7%, 63%)",
        "app-neutral-very-dark-blue": "hsl(255, 11%, 22%)",
        "app-neutral-very-dark-violet": "hsl(260, 8%, 14%)",
      },
      backgroundImage: {
        "hero-pattern-mobile": "url('images/bg-shorten-mobile.svg')",
        "hero-pattern-desktop": "url('images/bg-shorten-desktop.svg')",
        "boost-pattern-mobile": "url('images/bg-boost-mobile.svg')",
        "boost-pattern-desktop": "url('images/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
