import { StyleSheet } from 'react-native';
import { Fonts } from '../../assets';
import { Colors, scale, type ThemeMode } from '../../theme';

export const fontWeightStyles = StyleSheet.create({
  bold: {
    fontFamily: Fonts.bold
  },
  medium: {
    fontFamily: Fonts.medium
  },
  regular: {
    fontFamily: Fonts.regular
  },
  semiBold: {
    fontFamily: Fonts.semiBold
  }
});

export const fontSizeStyles = StyleSheet.create({
  displayLG: {
    fontSize: scale(48, true),
    lineHeight: scale(60, true)
  },
  displayMD: {
    fontSize: scale(36, true),
    lineHeight: scale(44, true)
  },
  displaySM: {
    fontSize: scale(30, true),
    lineHeight: scale(38, true)
  },
  displayXS: {
    fontSize: scale(24, true),
    lineHeight: scale(32, true)
  },
  textLG: {
    fontSize: scale(18, true),
    lineHeight: scale(28, true)
  },
  textMD: {
    fontSize: scale(16, true),
    lineHeight: scale(24, true)
  },
  textSM: {
    fontSize: scale(14, true),
    lineHeight: scale(20, true)
  },
  textXL: {
    fontSize: scale(20, true),
    lineHeight: scale(30, true)
  },
  textXS: {
    fontSize: scale(12, true),
    lineHeight: scale(18, true)
  }
});

/**
 * Creates a style object for label variants based on the theme mode.
 * @param {ThemeMode} theme - The theme mode.
 * @returns {Object} An object containing styles for different label variants.
 */
export const labelVariantsStyles = (theme: ThemeMode) =>
  StyleSheet.create({
    body: {
      ...fontSizeStyles.textMD,
      ...fontWeightStyles.regular,
      color: Colors[theme]?.black
    },
    caption: {
      ...fontSizeStyles.textSM,
      ...fontWeightStyles.regular,
      color: Colors[theme]?.black
    },
    captionMedium: {
      ...fontSizeStyles.textSM,
      ...fontWeightStyles.medium,
      color: Colors[theme]?.black
    },
    header: {
      ...fontSizeStyles.displaySM,
      ...fontWeightStyles.medium,
      color: Colors[theme]?.black
    },
    title: {
      ...fontSizeStyles.textLG,
      ...fontWeightStyles.semiBold,
      color: Colors[theme]?.black
    }
  });
