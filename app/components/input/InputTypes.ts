import { type ReactNode } from 'react';
import { type LabelProps } from '../label';
import type {
  PressableProps,
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewProps,
  ViewStyle
} from 'react-native';

/**
 * Enum for defining the variant of the input.
 * @enum {string}
 * @property {'default'} default - Represents the default input variant.
 * @property {'secureEntry'} secureEntry - Represents the secure entry input variant.
 * @property {'error'} error - Represents the error input variant.
 * @property {'success'} success - Represents the success input variant.
 */
export type InputVariant = 'default' | 'secureEntry' | 'error' | 'success';

/**
 * Props for the password input.
 * @property {() => void} onPasswordIconPress - Function to call when the password icon is pressed.
 */
export interface SecureInputProps {
  onSecureIconPress: () => void;
}

/**
 * Props for the input title.
 * @property {ViewProps} [containerProps] - Props for the container of the title.
 * @property {Partial<Omit<LabelProps, 'label'>>} [labelProps] - Props for the label, excluding the label text.
 */
export interface InputTitleProps {
  containerProps?: ViewProps;
  labelProps?: Partial<Omit<LabelProps, 'label'>>;
}

/**
 * Props for the left icon.
 * @property {() => void} onLeftIconPress - Function to call when the left icon is pressed.
 * @property {React.ReactElement} leftIcon - The left icon element.
 * @property {Partial<PressableProps>} leftIconPressableProps - Props for the left icon pressable.
 */
export interface LeftIconProps {
  onLeftIconPress: () => void;
  leftIcon: React.ReactElement;
  leftIconPressableProps: Partial<PressableProps>;
}

/**
 * Represents the properties for the right icon component.
 *
 * @property {() => void} onRightIconPress - The function to be called when the right icon is pressed.
 * @property {React.ReactElement} rightIcon - The React element representing the right icon.
 * @property {Partial<PressableProps>} rightIconPressableProps - The properties for the pressable component containing the right icon.
 */
export interface RightIconProps {
  onRightIconPress: () => void;
  rightIcon: React.ReactElement;
  rightIconPressableProps: Partial<PressableProps>;
}

/**
 * Props for the error view.
 * @property {ViewProps} [containerProps] - Props for the container of the error view.
 * @property {Partial<Omit<LabelProps, 'label'>>} [errorLabelProps] - Props for the error label, excluding the label text.
 */
export interface ErrorViewProps {
  containerProps?: ViewProps;
  errorLabelProps?: Partial<Omit<LabelProps, 'label'>>;
}

/**
 * Props for the input component.
 * @extends TextInputProps
 * @property {string} [title] - The title of the input.
 * @property {InputVariant} [variant] - The variant of the input.
 * @property {string} placeholderTextColor - The color of the placeholder text.
 * @property {boolean} enableHighlight - Enables or disables the highlight effect.
 * @property {string} [subText] - The subtext of the input.
 * @property {StyleProp<ViewStyle>} containerStyle - The style of the container.
 * @property {StyleProp<TextStyle>} textInputStyle - The style of the text input.
 * @property {Partial<SecureInputProps>} [secureInputProps] - Props for the secure input.
 * @property {Omit<LabelProps, 'label'>} [inputTitleProps] - Props for the input title.
 * @property {Partial<LeftIconProps>} [leftIconProps] - Props for the left icon.
 * @property {Partial<RightIconProps>} [rightIconProps] - Props for the right icon.
 * @property {Omit<LabelProps, 'label'>} [subTextLabelProps] - Props for the subtext label.
 * @property {ReactNode} [children] - The children of the input.
 * @property {() => void} [onInputPress] - Function to call when the input is pressed.
 */
export interface InputProps extends TextInputProps {
  title?: string;
  variant?: InputVariant;
  placeholderTextColor: string;
  enableHighlight: boolean;
  subText?: string;
  containerStyle: StyleProp<ViewStyle>;
  textInputStyle: StyleProp<TextStyle>;
  secureInputProps?: Partial<SecureInputProps>;
  inputTitleProps?: Omit<LabelProps, 'label'>;
  leftIconProps?: Partial<LeftIconProps>;
  rightIconProps?: Partial<RightIconProps>;
  subTextLabelProps?: Omit<LabelProps, 'label'>;
  children?: ReactNode;
  onInputPress?: () => void;
}
