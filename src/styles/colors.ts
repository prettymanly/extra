/**
 * Color Token System - Olive + Yellow Editorial Style
 *
 * 60% Dominant: #F6F6F3 (warm cream) - backgrounds
 * 30% Secondary: #686344 (olive) - sections, text accents
 * 10% Accent: #b39d00 (bright yellow) - highlights, CTAs
 *
 * Inspired by Collins-style editorial design
 */

// Neutral scale (warm grays)
const neutral = {
  50: '#F6F6F3',    // Background - warm cream
  100: '#EDEDEA',   // Secondary background
  200: '#E0E0DC',   // Borders subtle
  300: '#C8C8C2',   // Borders
  400: '#A0A09A',   // Muted text
  500: '#6B6B65',   // Secondary text
  600: '#4A4A45',   // Body text
  700: '#2A2A26',   // Strong text
  800: '#1A1A17',   // Headings
  900: '#0A0A0A',   // Primary text - near black
};

// Olive scale (30% secondary color)
const olive = {
  50: '#f5f5f0',    // Very light olive tint
  100: '#e8e8df',
  200: '#d4d4c5',
  300: '#a9a87a',   // Pale olive
  400: '#939068',   // Light olive (muted text alternative)
  500: '#7d7856',   // Medium olive
  600: '#686344',   // PRIMARY OLIVE - dark sections, bold text
  700: '#535034',
  800: '#3e3c27',
  900: '#29281a',
};

const accent = {
  50: '#fffde6',
  100: '#fff9b3',
  200: '#fff580',
  300: '#FDDE0C',   // Bright yellow - for dark backgrounds
  400: '#b39d00',   // Deep gold - for light backgrounds (better contrast)
  500: '#9a8700',
  600: '#807100',
  700: '#665a00',
  800: '#4d4400',
  900: '#1a1700',
};

export const colors = {
  neutral,
  olive,
  accent,

  // Semantic
  bg: neutral[50],
  bgSecondary: neutral[100],
  bgDark: olive[600],           // Now olive instead of black
  text: neutral[900],
  textSecondary: olive[600],    // Olive for body text
  textMuted: olive[400],        // Light olive for muted
  border: `${neutral[300]}1a`,  // with alpha
  borderStrong: neutral[300],
  accent: accent[400],
  olive: olive[600],
} as const;

/**
 * Tailwind class mappings
 */
export const tw = {
  // === LIGHT THEME (Primary - 60% cream backgrounds) ===
  light: {
    bg: 'bg-[#F6F6F3]',
    bgSecondary: 'bg-[#EDEDEA]',
    bgCard: 'bg-white',
    bgCardHover: 'hover:bg-[#EDEDEA]',

    text: 'text-[#0A0A0A]',
    textSecondary: 'text-[#686344]',      // Olive for body text
    textMuted: 'text-[#939068]',          // Light olive for muted
    textOlive: 'text-[#686344]',          // Explicit olive text

    border: 'border-black/5',
    borderStrong: 'border-[#C8C8C2]',

    btnPrimary: 'bg-[#686344] text-white hover:bg-[#FDDE0C] hover:text-[#0A0A0A] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out',  // Olive → yellow on hover with scale
    btnSecondary: 'border border-[#686344] text-[#686344] hover:bg-[#686344] hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out',
    btnAccent: 'bg-[#b39d00] text-[#0A0A0A] hover:bg-[#FDDE0C] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out',  // Gold → bright yellow on hover

    accent: 'text-[#b39d00]',             // Yellow accent text
    accentBg: 'bg-[#b39d00]',             // Yellow accent background

    olive: 'text-[#686344]',              // Olive text
    oliveBg: 'bg-[#686344]',              // Olive background
    oliveLight: 'bg-[#a9a87a]',           // Pale olive background

    selection: 'selection:bg-[#b39d00] selection:text-[#0A0A0A]',
  },

  // === DARK SECTIONS (Footer CTA - 30% olive) ===
  dark: {
    bg: 'bg-[#686344]',                   // Olive instead of black
    bgSecondary: 'bg-[#535034]',          // Darker olive
    bgCard: 'bg-[#535034]',

    text: 'text-[#F6F6F3]',
    textSecondary: 'text-[#d4d4c5]',
    textMuted: 'text-[#a9a87a]',

    border: 'border-white/10',
    borderStrong: 'border-[#3e3c27]',

    btnPrimary: 'bg-white text-[#686344] hover:bg-[#F6F6F3] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out',
    btnAccent: 'bg-[#FDDE0C] text-[#0A0A0A] hover:bg-[#fff580] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out',  // Bright yellow on dark bg
    btnSecondary: 'border border-white/20 text-[#F6F6F3] hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out',

    accent: 'text-[#FDDE0C]',             // Bright yellow text on dark
    accentBg: 'bg-[#FDDE0C]',             // Bright yellow background on dark
  },

  // === CTA SECTION (Yellow bg - 10% accent) ===
  cta: {
    bg: 'bg-[#b39d00]',
    text: 'text-[#0A0A0A]',
    textMuted: 'text-[#0A0A0A]/60',
    btnPrimary: 'bg-[#686344] text-white hover:bg-[#535034]',  // Olive button on yellow
    btnSecondary: 'border border-[#686344]/20 text-[#686344] hover:bg-[#686344]/10',
  },
} as const;

/**
 * Animation constants
 */
export const brandEase = [0.16, 1, 0.3, 1] as const;

/**
 * Accent color hex values for direct use
 */
export const accentColors = {
  brightYellow: '#FDDE0C',  // For dark backgrounds, hovers
  deepGold: '#b39d00',      // For light backgrounds (better contrast)
  olive: '#686344',         // Primary olive
  cream: '#F6F6F3',         // Background
} as const;

export type Colors = typeof colors;
export type TailwindClasses = typeof tw;
export type BrandEase = typeof brandEase;
