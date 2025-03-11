
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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				lockora: {
					dark: '#10141E',
					navy: '#1A1F2C',
					blue: '#141B2D',
					emerald: '#36B37E',
					emerald2: '#30A46C',
					silver: '#E0E2E8',
					accent: '#4DA8FF',
					glass: 'rgba(255, 255, 255, 0.05)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(20px)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0)' 
					}
				},
				'fade-in-right': {
					'0%': { 
						opacity: '0', 
						transform: 'translateX(20px)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateX(0)' 
					}
				},
				'fade-in-left': {
					'0%': { 
						opacity: '0', 
						transform: 'translateX(-20px)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateX(0)' 
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0)' 
					},
					'50%': { 
						transform: 'translateY(-10px)' 
					}
				},
				'pulse-slow': {
					'0%, 100%': { 
						opacity: '1' 
					},
					'50%': { 
						opacity: '0.8' 
					}
				},
				'rotate-slow': {
					'0%': { 
						transform: 'rotate(0deg)' 
					},
					'100%': { 
						transform: 'rotate(360deg)' 
					}
				},
				'gradient-shift': {
					'0%': { 
						backgroundPosition: '0% 50%' 
					},
					'50%': { 
						backgroundPosition: '100% 50%' 
					},
					'100%': { 
						backgroundPosition: '0% 50%' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.7s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'gradient-shift': 'gradient-shift 8s ease infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': 'linear-gradient(to bottom right, #1A1F2C, #10141E)',
				'card-gradient': 'linear-gradient(135deg, rgba(26, 31, 44, 0.7), rgba(16, 20, 30, 0.95))',
				'emerald-gradient': 'linear-gradient(135deg, #36B37E, #30A46C)',
				'blue-accent': 'linear-gradient(135deg, #4DA8FF, #2D89E6)'
			},
			boxShadow: {
				'glass': '0 4px 32px 0 rgba(0, 0, 0, 0.37)',
				'feature-card': '0 4px 24px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(255, 255, 255, 0.05)',
				'feature-card-hover': '0 8px 32px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 0 rgba(255, 255, 255, 0.07)',
				'button': '0 4px 14px 0 rgba(54, 179, 126, 0.25)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
