import { debounce } from 'lodash';
import React from 'react';
import { Pressable, View } from 'react-native';
import { useTheme } from '../../hooks';
import { Spinner } from '../spinner';
import { Text } from '../text';
import {
  activityIndicatorColor,
  buttonDefaultStyles,
  buttonVariantStyles,
  getTextVariant,
  textColor
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
  titleProps,
  debounceTime = 300,
  enableDebounce = true,
  ...rest
}: ButtonProps) => {
  const { styles: buttonStyles, theme } = useTheme(buttonDefaultStyles);
  const { styles: variantStyles } = useTheme(buttonVariantStyles);

  const titleVariant = titleProps?.variant ?? getTextVariant(variant);

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
          <Text
            variant={titleVariant}
            {...titleProps}
            style={[{ color: textColor(variant, theme) }, titleProps?.style]}
          >
            {title}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default Button;
