import { StyleSheet } from 'react-native';
import { Fonts } from '../../assets';
import { Colors, scale, type ThemeMode } from '../../theme';

/**
 * A StyleSheet object that contains all of the home screen styles.
 * @param {ThemeMode} theme - The theme to use for the styles.
 * @returns {StyleSheet} A StyleSheet object containing all of the home screen styles.
 */
const styles = (theme: ThemeMode) =>
  StyleSheet.create({
    textContainer: {
      alignItems: 'center',
      backgroundColor: Colors[theme]?.white,
      justifyContent: 'center',
      paddingTop: scale(40),
      rowGap: scale(20)
    },

    title: {
      fontFamily: Fonts.bold,
      fontSize: scale(20)
    }
  });

export default styles;
