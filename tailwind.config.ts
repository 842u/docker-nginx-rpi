import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
        wave: {
          '0%': { transform: 'translateY(10%) rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'translateY(-10%)' },
          '75%': { transform: 'rotate(-15deg)' },
          '100%': { transform: 'translateY(10%) rotate(0deg)' },
        },
        roll: {
          '0%, 100%': { transform: 'translateX(30%) rotate(45deg)' },
          '50%': { transform: 'translateX(-30%) rotate(-45deg)' },
        },
        heartbeat: {
          '0%': { transform: 'scale(100%)' },
          '15%': { transform: 'scale(120%)' },
          '25%': { transform: 'scale(110%)' },
          '35%': { transform: 'scale(120%)' },
          '100%': { transform: 'scale(100%)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        wave: 'wave 3s linear infinite',
        roll: 'roll 3s ease-in-out infinite',
        heartbeat: 'heartbeat 1s ease infinite',
        pulse: 'pulse 0.5s ease infinite',
        ping: 'ping 2s ease-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
