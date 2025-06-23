/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        brand: {
          text: "#e0e0e0",
          "text-secondary": "rgba(224, 224, 224, 0.7)",
          line: "rgba(224, 224, 224, 0.1)",
          primary: "#0074cd",
          secondary: "#00b5cd",
          tertiary: "#eba91c",
          background: "#0a0b0f",
          "bg-alt-secondary": "rgba(0, 181, 205, 0.04)",
          "icon-border": "rgba(0, 116, 205, 0.2)",
          "icon-bg-blue": "rgba(0, 116, 205, 0.16)",
          "icon-bg-green": "rgba(0, 181, 205, 0.16)",
          "icon-bg-yellow": "rgba(235, 169, 28, 0.2)",
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: ['64px', { lineHeight: '1.21', fontWeight: '800' }],
        'h1-mobile': ['48px', { lineHeight: '1.21', fontWeight: '800' }],
        h2: ['48px', { lineHeight: '50px', fontWeight: '800' }],
        h3: ['36px', { lineHeight: '49px', fontWeight: '700' }],
        h4: ['24px', { lineHeight: '28px', fontWeight: '700' }],
        lead: ['20px', { lineHeight: '28px', fontWeight: '500' }],
        large: ['18px', { lineHeight: '28px', fontWeight: '500' }],
        p: ['16px', { lineHeight: '28px', fontWeight: '400' }],
        'p-ui': ['16px', { lineHeight: '24px', fontWeight: '400' }],
      },
      spacing: {
        'section-y': '64px',
        'card-x': '40px',
        'card-y': '60px',
        'between-cards': '48px',
        'between-heading': '8px',
        'between-icon': '36px',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
};
