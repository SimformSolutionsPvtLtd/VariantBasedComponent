import { type ReactNode } from 'react';
import {
  type PressableProps,
  type StyleProp,
  type TextInputProps,
  type TextStyle,
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
 * Props interface for a side icon component.
 *
 * @interface SideIconProps
 * @description Defines properties for an icon component that can be placed on either side of the input.
 * @property {() => void} onPress - Callback function triggered when the icon is pressed.
 * @property {React.ReactElement} icon - React element representing the icon to be displayed.
 * @property {Omit<PressableProps, 'onPress'>} pressableProps - Props for the Pressable component wrapping the icon, excluding onPress.
 */
export interface SideIconProps {
  onPress: () => void;
  icon: React.ReactElement;
  pressableProps: Omit<PressableProps, 'onPress'>;
}
/**
 * Comprehensive properties for configuring the Input component.
 *
 * @interface InputProps
 * @extends {TextInputProps} Inherits properties from React Native's TextInput
 * @extends {Omit<InputTitleProps, 'inputStyle'>} Includes input title properties except inputStyle
 * @extends {Omit<SubTexViewProps, 'subTextInputStyle'>} Includes sub text properties except subTextInputStyle
 *
 * @property {InputVariant} [variant] - Visual style variant of the input
 * @property {boolean} enableHighlight - Whether input should highlight on interaction
 * @property {StyleProp<ViewStyle>} containerStyle - Custom container styles
 * @property {StyleProp<TextStyle>} textInputStyle - Custom text input styles
 * @property {Pick<SideIconProps, 'icon'>} [leftIcon] - Configuration for left icon
 * @property {Partial<SideIconProps>} [rightIcon] - Configuration for right icon
 * @property {ReactNode} [children] - Child elements to render
 * @property {() => void} [onInputPress] - Callback when input is pressed
 * @property {string} [errorText] - Error message to display
 * @property {string} [successText] - Success message to display
 */
export interface InputProps
  extends TextInputProps,
    Omit<InputTitleProps, 'inputStyle'>,
    Omit<SubTexViewProps, 'subTextInputStyle'> {
  variant?: InputVariant;
  enableHighlight: boolean;
  containerStyle: StyleProp<ViewStyle>;
  textInputStyle: StyleProp<TextStyle>;
  leftIcon?: Pick<SideIconProps, 'icon'>;
  rightIcon?: Partial<SideIconProps>;
  children?: ReactNode;
  onInputPress?: () => void;
  errorText?: string;
  successText?: string;
}
