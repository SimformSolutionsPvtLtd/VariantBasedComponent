import { type PressableProps, type StyleProp, type ViewProps, type ViewStyle } from 'react-native';
import { type LabelProps } from '../label';
import { buttonVariantStyles } from './CustomButtonStyle';

export type ButtonVariant = keyof ReturnType<typeof buttonVariantStyles>;

/**
 * The type for the props of the CustomButton component.
 * This interface extends PressableProps and includes properties specific to the CustomButton component.
 *
 * @property {ButtonVariant} [variant] - The variant of the button.
 * @property {string} label - The label text of the button.
 * @property {StyleProp<ViewStyle>} [buttonStyle] - The custom style for the button.
 * @property {Partial<ViewProps>} [buttonContainerProps] - The props for the button container.
 * @property {boolean} [isLoading] - Indicates if the button is currently loading.
 * @property {() => void} onPress - The function to call when the button is pressed.
 * @property {boolean} [disabled] - Indicates if the button is disabled.
 * @property {Partial<Omit<LabelProps, 'label'>>} [labelProps] - The props for the label, excluding the label text.
 */
export interface CustomButtonPropsType extends Omit<PressableProps, 'style'> {
  variant?: ButtonVariant;
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonContainerProps?: Partial<ViewProps>;
  isLoading?: boolean;
  onPress: () => void;
  disabled?: boolean;
  labelProps?: Partial<Omit<LabelProps, 'text'>>;
}
