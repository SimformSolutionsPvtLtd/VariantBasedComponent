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
import { inputVariantStyles } from './InputStyles';

export type InputVariant = keyof typeof inputVariantStyles;

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
 * Comprehensive properties for configuring the Input component.
 *
 * @extends TextInputProps - Inherits properties from the standard TextInput component.
 * @extends Omit<InputTitleProps, 'inputStyle'> - Includes input title properties, excluding input style.
 * @extends Omit<SubTexViewProps, 'subTextInputStyle'> - Includes sub text view properties, excluding sub text input style.
 *
 * @property {InputVariant} [variant] - Defines the visual style variant of the input.
 * @property {boolean} enableHighlight - Indicates if the input should visually highlight on interaction.
 * @property {StyleProp<ViewStyle>} containerStyle - Custom styling for the input's container.
 * @property {StyleProp<TextStyle>} textInputStyle - Custom styling for the text input field.
 * @property {Partial<LeftIconProps>} [leftIconProps] - Configuration options for the left icon, if present.
 * @property {Partial<RightIconProps>} [rightIconProps] - Configuration options for the right icon, if present.
 * @property {ReactNode} [children] - Additional elements to render within the input component.
 * @property {() => void} [onInputPress] - Function to execute when the input is pressed.
 * @property {string} [errorText] - Message to display when an error occurs.
 * @property {string} [successText] - Message to display when the input operation is successful.
 */
export interface InputProps
  extends TextInputProps,
    Omit<InputTitleProps, 'inputStyle'>,
    Omit<SubTexViewProps, 'subTextInputStyle'> {
  variant?: InputVariant;
  enableHighlight: boolean;
  containerStyle: StyleProp<ViewStyle>;
  textInputStyle: StyleProp<TextStyle>;
  leftIconProps?: Partial<LeftIconProps>;
  rightIconProps?: Partial<RightIconProps>;
  children?: ReactNode;
  onInputPress?: () => void;
  errorText?: string;
  successText?: string;
}
