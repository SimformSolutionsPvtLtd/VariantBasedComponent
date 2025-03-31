import { StyleSheet } from 'react-native';
import { Colors, scale, type ThemeMode } from '../../theme';

/**
 * A StyleSheet object that contains all of the home screen styles.
 * @param {ThemeMode} theme - The theme to use for the styles.
 * @returns {StyleSheet} A StyleSheet object containing all of the home screen styles.
 */
const styles = (theme: ThemeMode) =>
  StyleSheet.create({
    buttonsContainer: {
      backgroundColor: Colors[theme]?.white,
      paddingHorizontal: scale(20),
      paddingTop: scale(40),
      rowGap: scale(30)
    },
    individualContainer: {
      rowGap: scale(20)
    }
  });

export default styles;
