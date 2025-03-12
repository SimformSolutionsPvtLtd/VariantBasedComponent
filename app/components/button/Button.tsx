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
  debounceTime = 2000,
  ...rest
}: ButtonProps) => {
  const { styles: buttonStyles, theme } = useTheme(buttonDefaultStyles);
  const { styles: variantStyles } = useTheme(buttonVariantStyles);

  const labelVariant = labelProps?.variant ?? getLabelVariant(variant);

  // Debounce the onPress function
  const debouncedOnPress = debounce(
    (event) => {
      if (onPress) {
        onPress(event);
      }
    },
    debounceTime,
    { leading: true, trailing: false }
  );

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
        onPress={debouncedOnPress}
        {...rest}
      >
        {isLoading ? (
          <Spinner color={activityIndicatorColor(variant, theme)} />
        ) : (
          <Label
            variant={labelVariant}
            children={title}
            {...labelProps}
            style={[{ color: labelColor(variant, theme) }, labelProps?.style]}
          />
        )}
      </Pressable>
    </View>
  );
};

export default Button;
