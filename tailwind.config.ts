
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(215 20% 25%)',
				input: 'hsl(215 25% 18%)',
				ring: 'hsl(215 70% 60%)',
				background: 'hsl(220 40% 10%)',
				foreground: 'hsl(0 0% 95%)',
				primary: {
					DEFAULT: 'hsl(215 70% 60%)',
					foreground: 'hsl(0 0% 100%)'
				},
				secondary: {
					DEFAULT: 'hsl(215 30% 20%)',
					foreground: 'hsl(0 0% 98%)'
				},
				destructive: {
					DEFAULT: 'hsl(0 84% 60%)',
					foreground: 'hsl(0 0% 98%)'
				},
				muted: {
					DEFAULT: 'hsl(215 25% 18%)',
					foreground: 'hsl(215 10% 75%)'
				},
				accent: {
					DEFAULT: 'hsl(215 40% 25%)',
					foreground: 'hsl(0 0% 98%)'
				},
				popover: {
					DEFAULT: 'hsl(215 45% 12%)',
					foreground: 'hsl(0 0% 98%)'
				},
				card: {
					DEFAULT: 'hsl(215 35% 15%)',
					foreground: 'hsl(0 0% 98%)'
				},
				sidebar: {
					DEFAULT: 'hsl(215 45% 12%)',
					foreground: 'hsl(215 10% 75%)',
					primary: 'hsl(215 70% 60%)',
					'primary-foreground': 'hsl(0 0% 100%)',
					accent: 'hsl(215 25% 18%)',
					'accent-foreground': 'hsl(0 0% 98%)',
					border: 'hsl(215 20% 25%)',
					ring: 'hsl(215 70% 60%)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: {
						opacity: '0',
						transform: 'translateY(5px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-right': {
					from: {
						opacity: '0',
						transform: 'translateX(10px)'
					},
					to: {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-bottom': {
					from: {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					from: {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					to: {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'blur-in': {
					from: {
						opacity: '0',
						filter: 'blur(8px)'
					},
					to: {
						opacity: '1',
						filter: 'blur(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-in-right': 'fade-in-right 0.3s ease-out',
				'slide-in-bottom': 'slide-in-bottom 0.4s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'blur-in': 'blur-in 0.4s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
