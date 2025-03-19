import { debounce } from 'lodash';
import React from 'react';
import { Pressable, View } from 'react-native';
import { useTheme } from '../../hooks';
import { Label } from '../label';
import { Spinner } from '../spinner';
import {
  activityIndicatorColor,
  buttonDefaultStyles,
  buttonVariantStyles,
  getLabelVariant,
  labelColor
} from './ButtonStyle';
import type { ButtonProps } from './ButtonTypes';

/**
 * The  button component.
 * @param {ButtonProps} props - the props for the button component.
 * @returns {React.ReactElement} A React Element.
 */
const Button = ({
  variant = 'solid',
  title,
  buttonStyle,
  buttonContainerProps,
  isLoading = false,
  disabled,
  onPress,
  labelProps,
  debounceTime = 300,
  enableDebounce = true,
  ...rest
}: ButtonProps) => {
  const { styles: buttonStyles, theme } = useTheme(buttonDefaultStyles);
  const { styles: variantStyles } = useTheme(buttonVariantStyles);

  const labelVariant = labelProps?.variant ?? getLabelVariant(variant);

  // Debounce the onPress function only if enableDebounce is true
  const handleOnPress = enableDebounce
    ? debounce(
        (event) => {
          if (onPress) {
            onPress(event);
          }
        },
        debounceTime,
        { leading: true, trailing: false }
      )
    : onPress;

  return (
    <View {...buttonContainerProps} style={[buttonStyles.container, buttonContainerProps?.style]}>
      <Pressable
        style={({ pressed }) => [
          buttonStyles.defaultButtonStyle,
          variantStyles[variant],
          pressed && buttonStyles.pressedStyle,
          disabled && buttonStyles.disabledButtonStyle,
          buttonStyle
        ]}
        disabled={isLoading || disabled}
        onPress={handleOnPress}
        {...rest}
      >
        {isLoading ? (
          <Spinner color={activityIndicatorColor(variant, theme)} />
        ) : (
          <Label
            variant={labelVariant}
            {...labelProps}
            style={[{ color: labelColor(variant, theme) }, labelProps?.style]}
          >
            {title}
          </Label>
        )}
      </Pressable>
    </View>
  );
};

export default Button;
