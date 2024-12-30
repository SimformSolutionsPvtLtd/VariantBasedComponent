// Define theme colors with corresponding color values
const themeColors = {
  primary: '#141414',
  secondary: '#F1C336',
  gray: '#7B7B7B',
  error: '#E53E3E',
  pink: '#BA25EB',
  orange: '#F39C3C',
  lightBlue: '#3787FC',
  red: '#DD2C2C',
  darkBlue: '#374dfc',
  green: '#2ECC71',
  transparent: 'transparent'
} as const;

// Define common colors with corresponding color values
const commonColors = {
  white: '#FFFFFF',
  black: '#000000',
  transparentBlack: '#00000000',
  transparentWhite: '#FFFFFF00'
} as const;

// Define ThemeColors as a combination of theme colors and common colors
export type ThemeColors = Record<keyof typeof themeColors | keyof typeof commonColors, string>;

/**
 * A light theme object.
 * @returns {ThemeColors}
 */
const light: ThemeColors = {
  ...themeColors,
  black: commonColors.black,
  white: commonColors.white,
  transparentWhite: commonColors.transparentWhite,
  transparentBlack: commonColors.transparentBlack
};

/**
 * A dark theme object.
 * @returns {ThemeColors}
 */
const dark: ThemeColors = {
  ...themeColors,
  black: commonColors.white,
  white: commonColors.black,
  transparentWhite: commonColors.transparentBlack,
  transparentBlack: commonColors.transparentWhite
};

export enum ThemeModeEnum {
  'light' = 'light',
  'dark' = 'dark',
  'system' = 'system'
}

export type ThemeMode = ThemeModeEnum.light | ThemeModeEnum.dark;

export default { light, dark };
