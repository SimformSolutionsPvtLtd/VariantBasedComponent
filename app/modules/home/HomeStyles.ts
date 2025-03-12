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
    buttonsContainer: {
      rowGap: scale(20)
    },
    iconStyle: {
      height: scale(20),
      width: scale(20)
    },
    labelContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      rowGap: scale(20)
    },
    passwordIconStyle: {
      height: scale(16),
      width: scale(16)
    },
    screenView: {
      backgroundColor: Colors[theme]?.white,
      flex: 1
    },
    scrollContainer: {
      paddingBottom: scale(40),
      paddingHorizontal: scale(20),
      rowGap: scale(20)
    },
    textView: {
      color: Colors[theme]?.black
    },
    title: {
      fontFamily: Fonts.bold,
      fontSize: scale(20)
    }
  });

export default styles;
