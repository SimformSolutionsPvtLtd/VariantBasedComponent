import { type ReactNode } from 'react';
import {
  type PressableProps,
  type StyleProp,
  type TextInputProps,
  type TextStyle,
  type ViewProps,
  type ViewStyle
} from 'react-native';
import { type LabelProps } from '../label';

/**
 * Enum for defining the variant of the input.
 *
 * @enum {string}
 * @description Represents the different variants of the input.
 * @property {'default'} default - The default input variant.
 * @property {'secureEntry'} secureEntry - The secure entry input variant.
 * @property {'error'} error - The error input variant.
 * @property {'success'} success - The success input variant.
 */
export type InputVariant = 'default' | 'secureEntry' | 'error' | 'success';

/**
 * Props for the input title.
 *
 * @interface InputTitleProps
 * @description Props for the input title.
 * @property {string} [title] - The title of the input.
 * @property {Omit<LabelProps, 'text'>} [inputTitleProps] - Props for the input title, excluding the label text.
 * @property {StyleProp<TextStyle>} [inputStyle] - The style for the input title.
 */
export interface InputTitleProps {
  title?: string;
  inputTitleProps?: Omit<LabelProps, 'text'>;
  inputStyle?: StyleProp<TextStyle>;
}

/**
 * Props for the sub text view.
 *
 * @interface SubTexViewProps
 * @description Props for the sub text view.
 * @property {string} [subText] - The sub text to be displayed.
 * @property {Omit<LabelProps, 'text'>} [subTextLabelProps] - Props for the sub text label, excluding the label text.
 * @property {StyleProp<TextStyle>} [subTextInputStyle] - The style for the sub text input.
 */
export interface SubTexViewProps {
  subText?: string;
  subTextLabelProps?: Omit<LabelProps, 'text'>;
  subTextInputStyle?: StyleProp<TextStyle>;
}

/**
 * Props for the password input.
 *
 * @interface SecureInputProps
 * @description Props for the secure input.
 * @property {() => void} onSecureIconPress - Function to call when the password icon is pressed.
 */
export interface SecureInputProps {
  onSecureIconPress: () => void;
}

/**
 * Props for the left icon.
 *
 * @interface LeftIconProps
 * @description Props for the left icon.
 * @property {() => void} onLeftIconPress - Function to call when the left icon is pressed.
 * @property {React.ReactElement} leftIcon - The left icon element.
 * @property {Partial<PressableProps>} leftIconPressableProps - Props for the left icon pressable.
 */
export interface LeftIconProps {
  onLeftIconPress: () => void;
  leftIcon: React.ReactElement;
  leftIconPressableProps: Omit<PressableProps, 'onPress'>;
}

/**
 * Props for the right icon.
 *
 * @interface RightIconProps
 * @description Props for the right icon.
 * @property {() => void} onRightIconPress - Function to call when the right icon is pressed.
 * @property {React.ReactElement} rightIcon - The right icon element.
 * @property {Partial<PressableProps>} rightIconPressableProps - Props for the right icon pressable.
 */
export interface RightIconProps {
  onRightIconPress: () => void;
  rightIcon: React.ReactElement;
  rightIconPressableProps: Partial<PressableProps>;
}

/**
 * Props for the error view.
 *
 * @interface ErrorViewProps
 * @description Props for the error view.
 * @property {ViewProps} [containerProps] - Props for the container of the error view.
 * @property {Partial<Omit<LabelProps, 'text'>>} [errorLabelProps] - Props for the error label, excluding the label text.
 */
export interface ErrorViewProps {
  containerProps?: ViewProps;
  errorLabelProps?: Partial<Omit<LabelProps, 'text'>>;
}

/**
 * Props for the Input component.
 *
 * @interface InputProps
 * @description This interface defines the properties for the Input component.
 * @extends TextInputProps
 * @extends Omit<InputTitleProps, 'inputStyle'>
 * @extends Omit<SubTexViewProps, 'subTextInputStyle'>
 * @property {InputVariant} [variant] - The variant of the input.
 * @property {boolean} enableHighlight - Enables or disables the highlight effect on focus.
 * @property {StyleProp<ViewStyle>} containerStyle - Styles for the container of the input.
 * @property {StyleProp<TextStyle>} textInputStyle - Styles for the text input.
 * @property {Partial<SecureInputProps>} [secureInputProps] - Props for the secure input.
 * @property {Partial<LeftIconProps>} [leftIconProps] - Props for the left icon.
 * @property {Partial<RightIconProps>} [rightIconProps] - Props for the right icon.
 * @property {ReactNode} [children] - Children components to be rendered inside the input.
 * @property {() => void} [onInputPress] - Function to call when the input is pressed.
 */
export interface InputProps
  extends TextInputProps,
    Omit<InputTitleProps, 'inputStyle'>,
    Omit<SubTexViewProps, 'subTextInputStyle'> {
  variant?: InputVariant;
  enableHighlight: boolean;
  containerStyle: StyleProp<ViewStyle>;
  textInputStyle: StyleProp<TextStyle>;
  secureInputProps?: Partial<SecureInputProps>;
  leftIconProps?: Partial<LeftIconProps>;
  rightIconProps?: Partial<RightIconProps>;
  children?: ReactNode;
  onInputPress?: () => void;
}
