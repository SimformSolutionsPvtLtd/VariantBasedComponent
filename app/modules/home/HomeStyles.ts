import { StyleSheet } from 'react-native';
import { Colors, type ThemeMode } from '../../theme';

/**
 * A StyleSheet object that contains all of the home screen styles.
 * @param {ThemeMode} theme - The theme to use for the styles.
 * @returns {StyleSheet} A StyleSheet object containing all of the home screen styles.
 */
const styles = (theme: ThemeMode) =>
  StyleSheet.create({
    screenView: {
      alignItems: 'center',
      backgroundColor: Colors[theme]?.white,
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 40,
      rowGap: 20
    }
  });

export default styles;
