import { type TextProps } from 'react-native';
import { labelVariantsStyles } from './LabelStyles';

export type LabelVariant = keyof ReturnType<typeof labelVariantsStyles>;

export interface LabelProps extends TextProps {
  variant?: LabelVariant;
}
