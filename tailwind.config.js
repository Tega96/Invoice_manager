/**@type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // ========== COLORS ============
            colors: {
                'primary': '#7C5DFA',
                'primary-dark': '_',
                'secondary': '',
                'secondary-light': '',



                // Neutral colors (grays, whites, blacks) - common values
                'neutral': {
                    50: '', // Very light gray (page background)
                    100: '', // Light gray (card background)
                    200: '', // Border color
                    300: '', // Disabled background
                    400: '', // Placeholder text
                    500: '', // Secondary text
                    600: '', // Body text
                    700: '', // Dark text
                    800: '', // Heading text
                    900: '', // Almost black
                },

                // Semantic colors (useful for alerts, badges, etc)
                'success': '',
                'warning': '',
                'error': '',
            },

            // ========== FONT SIZES FROM YOUR FIGMA ==========
            fontSize: {
                // Display/Heading sizes
                'display-l': ['36px', {fontWeight: '700', lineHeight: '2', spacing: '-1'}],
                'display-m': ['24px', {fontWeight: '700', lineHeight: '1.4', spacing: '-0.75'}],
                'heading-sm': ['15px', {fontWeight: '600', lineHeight: '1.5', spacing: '-0.25', }],
                'heading-s': ['15px', {fontWeight: '600', lineHeight: '1.5', spacing: '-0.25'}],

                // Body text sizes
                'body-lg': ['13px', {fontWeight: '500', lineHeight: '1.13', spacing: '-0.1' }],
                'body-lg': ['13px', {fontWeight: '500', lineHeight: '0.9', spacing: '-0.1' }],
                'body-md': [],
                'body-sm': [],
                'caption': [],

                // ========= SPACING ========
                spacing: {
                    '18': '',
                    '88': '22rem',
                    '128': '',
                },


                // ============= BORDER RADIUS ===========
                borderRadius: {
                    'button': '8px',
                    'card': '12px',
                    'modal': '16px',
                    'pill': '999px'
                },

                // ============== BOX SHADOW ============
                boxShadow: {
                    'card': '',
                    'dropdown': '',
                    'button': '',
                    'custom': '0px 10px 10px -10px #48549F1A'
                },

                // ========= ANIMATION ===============
                animation: {
                    'fade-in': 'fadeIn 0.5s ease-in-out',
                    'slide-up': 'slideup 0.3s ease-out',
                },
                
            },
        },
    },
    plugins: [],
}