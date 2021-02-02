module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gray: {
                    '50':  '#FAFAFA',
                    '100': '#F5F5F5',
                    '200': '#E5E5E5',
                    '300': '#D4D4D4',
                    '400': '#A3A3A3',
                    '500': '#737373',
                    '600': '#525252',
                    '700': '#404040',
                    '800': '#262626',
                    '900': '#171717',
                    '950': '#0F0F0F',
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
