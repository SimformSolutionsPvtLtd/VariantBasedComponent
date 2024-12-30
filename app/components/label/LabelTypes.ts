import { fontSizeStyles, fontWeightStyles, labelVariantsStyles } from './LabelStyles';
import type { TextStyle, StyleProp, TextProps } from 'react-native';

export type FontSizeType = keyof typeof fontSizeStyles;

export type FontWeightType = keyof typeof fontWeightStyles;

export type LabelVariant = keyof ReturnType<typeof labelVariantsStyles>;

export interface LabelProps extends Omit<TextProps, 'style'> {
  children?: React.ReactNode;
  label: string;
  variant?: LabelVariant;
  style?: StyleProp<TextStyle>;
}
