/** @type {import('tailwindcss').Config} */
export default {
    // darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'gray-very-light': '#D2D5DA',
                'gray-light': '#6C727F',
                'gray-dark': '#282B30',
                'gray-very-dark': '#1B1D1F',
                'blue-sky': '#4E80EE',
            },
            fontFamily: {
                'be-vietnam-pro': '"Be Vietnam Pro", sans-serif',
            },
        },
    },
    plugins: [],
}
