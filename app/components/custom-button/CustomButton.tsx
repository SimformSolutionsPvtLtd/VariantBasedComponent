import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';
import { useTheme } from '../../hooks';
import { Label } from '../label';
import { buttonDefaultStyles, buttonVariantStyles } from './CustomButtonStyle';
import { activityIndicatorColor, getLabelVariant, labelColor } from './CustomButtonUtils';
import type { CustomButtonPropsType } from './CustomButtonTypes';

/**
 * The custom button component.
 * @param {CustomButtonPropsType} props - the props for the button component.
 * @returns {React.ReactElement} A React Element.
 */
const CustomButton = ({
  variant = 'solid',
  label,
  buttonStyle,
  buttonContainerProps,
  isLoading = false,
  disabled,
  onPress,
  labelProps,
  ...rest
}: CustomButtonPropsType) => {
  const { styles: buttonStyles, theme } = useTheme(buttonDefaultStyles);
  const { styles: variantStyles } = useTheme(buttonVariantStyles);

  const labelVariant = labelProps?.variant ?? getLabelVariant(variant);

  return (
    <View
      {...buttonContainerProps}
      style={StyleSheet.flatten([buttonStyles.container, buttonContainerProps?.style])}
    >
      <Pressable
        style={({ pressed }) =>
          StyleSheet.flatten([
            buttonStyles.defaultButtonStyle,
            variantStyles[variant],
            pressed && buttonStyles.pressedStyle,
            disabled && buttonStyles.disabledButtonStyle,
            buttonStyle
          ])
        }
        disabled={isLoading || disabled}
        onPress={onPress}
        {...rest}
      >
        {isLoading ? (
          <ActivityIndicator color={activityIndicatorColor(variant, theme)} />
        ) : (
          <Label
            variant={labelVariant}
            label={label}
            {...labelProps}
            style={StyleSheet.flatten([labelProps?.style, { color: labelColor(variant, theme) }])}
          />
        )}
      </Pressable>
    </View>
  );
};

export default CustomButton;
