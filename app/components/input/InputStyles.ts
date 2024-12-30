import { StyleSheet } from 'react-native';
import { Fonts } from '../../assets';
import { ApplicationStyles, Colors, scale, type ThemeMode } from '../../theme';

/**
 * Create a custom style sheet for the given theme.
 * @param {StyleSheetOption} theme - The theme to create the style sheet for.
 * @returns A custom style sheet that can be injected into the component.
 */
export const inputStyles = (theme: ThemeMode) =>
  StyleSheet.create({
    ...ApplicationStyles(theme),
    activeColorTextInput: {
      borderColor: Colors[theme]?.black
    },
    container: {
      backgroundColor: Colors[theme]?.white,
      borderColor: Colors[theme]?.gray,
      borderRadius: scale(8),
      borderWidth: scale(0.7, true),
      maxHeight: scale(44),
      paddingHorizontal: scale(14),
      paddingVertical: scale(10)
    },

    errorContainerStyle: {
      borderColor: Colors[theme]?.red
    },
    errorLabelStyle: {
      color: Colors[theme]?.red,
      marginVertical: scale(3)
    },
    innerContainer: {
      alignItems: 'center',
      columnGap: scale(8),
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    multilineContainerStyle: {
      maxHeight: scale(170),
      minHeight: scale(154)
    },
    multilineTextInputStyle: {
      textAlignVertical: 'top'
    },

    passwordIconStyle: {
      height: scale(16),
      width: scale(16)
    },

    pressableHitSlop: {
      bottom: scale(5),
      left: scale(5),
      right: scale(5),
      top: scale(5)
    },
    rightPressableStyle: {
      alignItems: 'center',
      height: scale(18),
      justifyContent: 'center'
    },
    successContainerStyle: {
      borderColor: Colors[theme]?.green
    },
    successLabelStyle: {
      color: Colors[theme]?.green,
      marginVertical: scale(3)
    },
    textInputStyle: {
      color: Colors[theme]?.black,
      flex: 1,
      fontFamily: Fonts.regular,
      fontSize: scale(16, true),
      padding: 0
    },
    titleLabelStyle: {
      marginBottom: scale(4)
    }
  });
