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
} from './CustomButtonStyle';
import type { CustomButtonPropsType } from './CustomButtonTypes';

/**
 * The custom button component.
 * @param {CustomButtonPropsType} props - the props for the button component.
 * @returns {React.ReactElement} A React Element.
 */
const CustomButton = ({
  variant = 'solid',
  title,
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
        onPress={onPress}
        {...rest}
      >
        {isLoading ? (
          <Spinner color={activityIndicatorColor(variant, theme)} />
        ) : (
          <Label
            variant={labelVariant}
            text={title}
            {...labelProps}
            style={[{ color: labelColor(variant, theme) }, labelProps?.style]}
          />
        )}
      </Pressable>
    </View>
  );
};

export default CustomButton;
