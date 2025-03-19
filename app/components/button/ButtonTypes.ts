import {
  type GestureResponderEvent,
  type PressableProps,
  type StyleProp,
  type ViewProps,
  type ViewStyle
} from 'react-native';
import { type TextProps } from '../text';
import { buttonVariantStyles } from './ButtonStyle';

export type ButtonVariant = keyof ReturnType<typeof buttonVariantStyles>;

/**
 * The type for the props of the CustomButton component.
 * This interface extends PressableProps and includes properties specific to the CustomButton component.
 *
 * @property {ButtonVariant} [variant] - The variant of the button.
 * @property {string} title - The title text of the button.
 * @property {StyleProp<ViewStyle>} [buttonStyle] - The custom style for the button.
 * @property {Partial<ViewProps>} [buttonContainerProps] - The props for the button container.
 * @property {boolean} [isLoading] - Indicates if the button is currently loading.
 * @property {(event: GestureResponderEvent) => void} onPress - The function to call when the button is pressed.
 * @property {boolean} [disabled] - Indicates if the button is disabled.
 * @property {Partial<Omit<TextProps, 'children'>>} [titleProps] - The props for the text, excluding the text.
 * @property {number} [debounceTime] - The time in milliseconds to debounce the onPress function.
 * @property {boolean} [enableDebounce] - Whether to enable debounce for the onPress function.
 */
export interface ButtonProps extends Omit<PressableProps, 'style'> {
  variant?: ButtonVariant;
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonContainerProps?: Partial<ViewProps>;
  isLoading?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  titleProps?: Partial<Omit<TextProps, 'children'>>;
  debounceTime?: number;
  enableDebounce?: boolean;
}
