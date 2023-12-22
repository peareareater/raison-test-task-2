import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        colors: {
            'purple': '#7480ff',
            'dark': '#15191f',
            'gray': '#a6adbb',
            'gray-1': '#1d232a',
            'gray-2': '#2a323c',
        },
        extend: {},
    },
    daisyui: {
        themes: [
            {
                myTheme: {
                    'primary': '#7480ff',
                    'disabled': '#a6adbb',
                    '--fallback-n': '#a6adbb',
                },
            },
        ],
    },
    plugins: [daisyui],
}
