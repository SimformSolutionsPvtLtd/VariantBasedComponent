import { StyleSheet } from 'react-native';
import { Colors, scale, type ThemeMode } from '../../theme';

/**
 * A StyleSheet object that contains all of the home screen styles.
 * @param {ThemeMode} theme - The theme to use for the styles.
 * @returns {StyleSheet} A StyleSheet object containing all of the home screen styles.
 */
const styles = (theme: ThemeMode) =>
  StyleSheet.create({
    inputContainer: {
      backgroundColor: Colors[theme]?.white,
      paddingBottom: scale(40),
      paddingHorizontal: scale(20),
      paddingTop: scale(20),
      rowGap: scale(20)
    },
    passwordIconStyle: {
      height: scale(16),
      width: scale(16)
    }
  });

export default styles;
