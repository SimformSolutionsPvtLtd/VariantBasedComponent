import { StyleSheet } from 'react-native';
import { Colors, fontSizeStyles, fontWeightStyles, type ThemeMode } from '../../theme';

/**
 * Creates a style object for text variants based on the theme mode.
 * @param {ThemeMode} theme - The theme mode.
 * @returns {Object} An object containing styles for different text variants.
 */
export const textVariantsStyles = (theme: ThemeMode) =>
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
    error: {
      ...fontSizeStyles.textSM,
      ...fontWeightStyles.regular,
      color: Colors[theme]?.error
    },
    header: {
      ...fontSizeStyles.displaySM,
      ...fontWeightStyles.medium,
      color: Colors[theme]?.black
    },
    success: {
      ...fontSizeStyles.textSM,
      ...fontWeightStyles.regular,
      color: Colors[theme]?.green
    },
    title: {
      ...fontSizeStyles.textLG,
      ...fontWeightStyles.semiBold,
      color: Colors[theme]?.black
    }
  });
