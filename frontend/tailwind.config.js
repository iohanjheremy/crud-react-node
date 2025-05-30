import daisyui from "daisyui"

// @ts-check
/**
 * @type {import('tailwindcss').Config}
 */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js, ts, jsx, tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        daisyui,
    ],
    daisyui: {
        themes: ["night"],
    }
}

