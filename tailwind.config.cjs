const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: ["light", "dark", "halloween",    "lofi",      "dracula",  "autumn",    "night",  "winter"],
	  },
	theme: {
		extend: {}
	},

plugins: [require("@tailwindcss/typography"),require("daisyui")],
};

module.exports = config;
