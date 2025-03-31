import { type ForwardedRef } from 'react';
import {
  TextInput,
  type PressableProps,
  type StyleProp,
  type TextInputProps,
  type TextStyle,
  type ViewStyle
} from 'react-native';
import { type TextProps } from '../text';
import { inputVariantStyles } from './InputStyles';

export type InputVariant = keyof typeof inputVariantStyles;

/**
 * Interface for input title component props
 * @interface InputTitleProps
 * @property {string} [title] - Optional title text to be displayed
 * @property {Omit<TextProps, 'children'>} [inputTitleProps] - Optional props for the input title text component, excluding children prop
 * @property {StyleProp<TextStyle>} [inputStyle] - Optional style props for customizing the input title appearance
 */
export interface InputTitleProps {
  title?: string;
  inputTitleProps?: Omit<TextProps, 'children'>;
}

/**
 * Interface for Message View Properties
 * @interface MessageViewProps
 * @property {string} [message] - The message text to be displayed
 * @property {('error'|'success'|'warning'|'info')} [messageType] - The type of message which determines its visual styling
 * @property {Omit<TextProps, 'children'>} [messageProps] - Additional text properties excluding children prop
 */
export interface MessageViewProps {
  message?: string;
  messageProps?: Omit<TextProps, 'children'>;
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

export interface BaseInputProps extends TextInputProps {
  ref: ForwardedRef<TextInput>;
  variant?: InputVariant;
  isError: boolean;
  isSuccess: boolean;
  enableHighlight?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  leftIcon?: Pick<SideIconProps, 'icon'>;
  rightIcon?: Partial<SideIconProps>;
  onInputPress?: () => void;
}

/**
 * Comprehensive properties for configuring the Input component.
 *
 * @interface InputProps
 * @extends {Omit<BaseInputProps, 'isError' | 'isSuccess'>} Base input properties excluding error/success flags
 * @extends {InputTitleProps} Properties for input title
 * @extends {MessageViewProps} Properties for message display
 */
export interface InputProps
  extends Omit<BaseInputProps, 'isError' | 'isSuccess'>,
    InputTitleProps,
    MessageViewProps {}
