import React from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { getComponentTheme } from '../../utils/getVariants';

// Extract available variants for the Label component
const { variants: labelVariants, defaultProps } = getComponentTheme('Label');
type VariantKeys = keyof typeof labelVariants;

interface CustomTextProps extends TextProps {
  variant?: VariantKeys; // Restrict variant prop to available variants
  text?: string;
}

/**
 * Merges `passedProps` with `defaultProps`. If a property is `null` or `undefined` in `passedProps`, it uses the value from `defaultProps`.
 *
 * @param passedProps - The props passed to the component (can be `null`, `undefined`, or an object).
 * @param defaultProps - The default props, often pulled from a theme.
 * @returns Merged props.
 */
export const mergeProps = <T extends object>(passedProps: T, defaultProp: Partial<T>): T => {
  // If passedProps is undefined or null, return defaultProps
  if (!passedProps) {
    return { ...defaultProps } as T;
  }

  const merged: Partial<T> = { ...defaultProps };
  Object.keys(passedProps).forEach((key) => {
    const passedValue = passedProps[key];
    const defaultValue = defaultProp[key];

    if (passedValue === null || passedValue === undefined) {
      merged[key] = defaultValue;
    } else {
      merged[key] = passedValue;
    }
  });

  return merged as T;
};

/**
 * CustomText component renders a Text component with the provided text.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to be rendered.
 * @returns {React.ReactNode} The Text component with the provided text.
 */
const CustomText = ({ text, variant, ...props }: CustomTextProps) => {
  const mergedProps = mergeProps<CustomTextProps>({ variant, ...props }, defaultProps);

  const variantStyles = (labelVariants[mergedProps.variant] || {}) as StyleProp<TextStyle>;

  return <Text style={variantStyles}>{text}</Text>;
};

export default CustomText;
