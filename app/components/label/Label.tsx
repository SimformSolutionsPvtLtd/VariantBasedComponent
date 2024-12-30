import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from '../../hooks';

import { labelVariantsStyles } from './LabelStyles';
import { type LabelProps } from './LabelTypes';

/**
 * The Label component.
 * @param {LabelProps} props - The props for the Label component.
 * @param {string} props.label - The label text.
 * @param {string} [props.variant='body'] - The variant of the label.
 * @param {StyleProp<TextStyle>} [props.style] - The custom style for the label.
 * @param {TextProps} props.rest - The rest of the Text component props.
 * @returns A Text component with the label text and styles.
 */
const Label = ({ label, variant = 'body', style, ...rest }: LabelProps) => {
  const { styles } = useTheme(labelVariantsStyles);

  return (
    <Text style={StyleSheet.flatten([styles[variant], style])} {...rest}>
      {label}
    </Text>
  );
};

export default Label;
