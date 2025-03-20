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
  inputStyle?: StyleProp<TextStyle>;
}

/**
 * Interface for SubTexView component properties.
 * @interface SubTexViewProps
 *
 * @property {string} [subText] - Optional text to display as sub-text.
 * @property {Omit<TextProps, 'children'>} [subTextProps] - Optional props for the sub-text component, excluding 'children' property.
 * @property {StyleProp<TextStyle>} [subTextInputStyle] - Optional style object for customizing the sub-text appearance.
 */
export interface SubTexViewProps {
  subText?: string;
  subTextProps?: Omit<TextProps, 'children'>;
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

// export interface PressableWrapperProps extends BaseInputProps {
//   onInputPress?: () => void;
// }

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
  extends Omit<BaseInputProps, 'isError' | 'isSuccess'>,
    Omit<InputTitleProps, 'inputStyle'>,
    Omit<SubTexViewProps, 'subTextInputStyle'> {
  errorText?: string;
  successText?: string;
}
