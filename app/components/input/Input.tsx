import React, { forwardRef, useState } from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';
import { Icons } from '../../assets';
import { useTheme } from '../../hooks';
import { Colors } from '../../theme';
import { Text } from '../text';
import { inputStyles, inputVariantStyles } from './InputStyles';
import type { BaseInputProps, InputProps, InputTitleProps, MessageViewProps } from './InputTypes';

/**
 * Render the form input Text.
 */
const InputTitle = ({ title, inputTitleProps }: InputTitleProps) => {
  return title ? (
    <Text variant="captionMedium" {...inputTitleProps}>
      {title}
    </Text>
  ) : null;
};

/**
 * A component that conditionally renders a message as a Text element
 * @returns {React.ReactElement | null} Returns Text element with message if message exists, null otherwise
 */
const MessageView = ({ message, messageProps }: MessageViewProps) => {
  return message ? <Text {...messageProps}>{message}</Text> : null;
};

/**
 * Input
 * @returns
 */
const BaseInput = forwardRef<TextInput, BaseInputProps>(
  (
    {
      variant = 'outlined',
      isError,
      isSuccess,
      multiline,
      containerStyle,
      leftIcon,
      textInputStyle,
      placeholderTextColor,
      value,
      maxLength,
      onBlur,
      enableHighlight,
      secureTextEntry,
      rightIcon,
      onInputPress,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const { styles, theme } = useTheme(inputStyles);
    const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true);

    /**
     * Toggles the visibility of password input field
     */
    const handleTogglePassword = () => {
      setIsSecureEntry((prev) => !prev);
    };

    return (
      <View
        pointerEvents="box-none"
        style={[
          styles.container,
          inputVariantStyles[variant],
          isError && styles.errorContainerStyle,
          isSuccess && styles.successContainerStyle,
          isFocused && styles.activeColorTextInput,
          multiline && styles.multilineContainerStyle,
          containerStyle
        ]}
      >
        <View style={styles.innerContainer}>
          {!!leftIcon && React.isValidElement(leftIcon?.icon) ? leftIcon.icon : null}
          <TextInput
            style={[
              styles.textInputStyle,
              multiline && styles.multilineTextInputStyle,
              textInputStyle
            ]}
            placeholderTextColor={placeholderTextColor ?? Colors[theme]?.gray}
            textAlign={'left'}
            value={value}
            maxLength={maxLength}
            editable={onInputPress ? false : true}
            blurOnSubmit={false}
            multiline={multiline}
            onBlur={(e) => {
              onBlur?.(e);
              enableHighlight && setIsFocused(false);
            }}
            {...rest}
            ref={ref}
            secureTextEntry={secureTextEntry ? isSecureEntry : secureTextEntry}
            onFocus={() => (enableHighlight ? setIsFocused(true) : null)}
            onTouchStart={(e) => {
              if (onInputPress) {
                onInputPress?.();
                e.stopPropagation();
              }
            }}
          />
          {!!rightIcon && React.isValidElement(rightIcon?.icon) && secureTextEntry === undefined ? (
            <Pressable onPress={rightIcon.onPress} {...rightIcon.pressableProps}>
              {rightIcon?.icon}
            </Pressable>
          ) : null}
          {secureTextEntry ? (
            <Pressable onPress={handleTogglePassword}>
              <Image
                source={isSecureEntry ? Icons.eye : Icons.eyeOff}
                style={styles.passwordIconStyle}
              />
            </Pressable>
          ) : null}
        </View>
      </View>
    );
  }
);

/**
 * Component that conditionally wraps children with a Pressable if onInputPress is provided
 * @param props - Component props with children and onInputPress
 * @returns Children with or without Pressable wrapper
 */
const PressableInputWrapper = ({
  onInputPress,
  children
}: {
  onInputPress?: () => void;
  children: React.ReactNode;
}) => (onInputPress ? <Pressable onPress={onInputPress}>{children}</Pressable> : children);
/**
 * The custom text input component.
 * @param {Partial<InputProps> & TextInputProps} props - the props for the custom text input component.
 * @returns {React.ReactElement} A React Element.
 */
const Input = forwardRef<TextInput, Partial<InputProps>>(
  ({ title, inputTitleProps, onInputPress, message, messageProps, ...rest }, ref) => {
    const { styles } = useTheme(inputStyles);

    const isError = messageProps?.variant === 'error';
    const isSuccess = messageProps?.variant === 'success';

    return (
      <View style={styles.wrapper}>
        {title ? <InputTitle {...{ title, inputTitleProps }} /> : null}
        <PressableInputWrapper onInputPress={onInputPress}>
          <BaseInput
            isSuccess={isSuccess}
            isError={isError}
            onInputPress={onInputPress}
            {...rest}
            ref={ref}
          />
        </PressableInputWrapper>
        {message ? <MessageView {...{ message, messageProps }} /> : null}
      </View>
    );
  }
);

export default Input;
