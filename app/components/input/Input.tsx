import { isEmpty } from 'lodash';
import React, { forwardRef, useState } from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';
import { Icons } from '../../assets';
import { useTheme } from '../../hooks';
import { Colors } from '../../theme';
import { Text } from '../text';
import { inputStyles, inputVariantStyles } from './InputStyles';
import type { InputProps, InputTitleProps, SubTexViewProps } from './InputTypes';

/**
 * Render the form input Text.
 */
const InputTitle = ({ title, inputTitleProps, inputStyle }: InputTitleProps) => {
  return title ? (
    <Text variant="captionMedium" {...inputTitleProps} style={inputStyle}>
      {title}
    </Text>
  ) : null;
};

/**
 * the input sub text view to show message or error.
 */
const SubTextView = ({ subText, subTextProps, subTextInputStyle }: SubTexViewProps) => {
  return subText ? (
    <Text variant="caption" {...subTextProps} style={subTextInputStyle}>
      {subText}
    </Text>
  ) : null;
};

/**
 * The custom text input component.
 * @param {Partial<InputProps> & TextInputProps} props - the props for the custom text input component.
 * @returns {React.ReactElement} A React Element.
 */
const Input = forwardRef<TextInput, Partial<InputProps>>(
  (
    {
      title,
      variant = 'outlined',
      containerStyle,
      placeholderTextColor,
      enableHighlight = false,
      onBlur,
      textInputStyle,
      inputTitleProps,
      rightIcon,
      leftIcon,
      multiline,
      subTextProps,
      subText,
      maxLength,
      value,
      onInputPress = () => {},
      errorText,
      successText,
      secureTextEntry,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const { styles, theme } = useTheme(inputStyles);
    const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true);
    const isError = !isEmpty(errorText);
    const isSuccess = !isEmpty(successText);

    /**
     * Toggles the visibility of password input field
     * Changes the state of isSecureEntry from true to false or vice versa
     */
    const handleTogglePassword = () => {
      setIsSecureEntry((prev) => !prev);
    };

    return (
      <View style={styles.wrapper}>
        {title ? (
          <InputTitle {...{ title, inputTitleProps }} inputStyle={inputTitleProps?.style} />
        ) : null}
        <Pressable onPress={onInputPress}>
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
                ref={ref}
                style={[
                  styles.textInputStyle,
                  multiline && styles.multilineTextInputStyle,
                  textInputStyle
                ]}
                placeholderTextColor={placeholderTextColor ?? Colors[theme]?.gray}
                textAlign={'left'}
                value={value}
                maxLength={maxLength}
                blurOnSubmit={false}
                multiline={multiline}
                onBlur={(e) => {
                  onBlur?.(e);
                  enableHighlight && setIsFocused(false);
                }}
                {...rest}
                secureTextEntry={secureTextEntry ? isSecureEntry : secureTextEntry}
                onFocus={() => (enableHighlight ? setIsFocused(true) : null)}
              />
              {!!rightIcon &&
              React.isValidElement(rightIcon?.icon) &&
              secureTextEntry === undefined ? (
                <Pressable onPress={rightIcon.onPress} {...rightIcon.pressableProps}>
                  {rightIcon?.icon}
                </Pressable>
              ) : null}
              {secureTextEntry !== undefined ? (
                <Pressable onPress={handleTogglePassword}>
                  <Image
                    source={isSecureEntry ? Icons.eye : Icons.eyeOff}
                    style={styles.passwordIconStyle}
                  />
                </Pressable>
              ) : null}
            </View>
          </View>
        </Pressable>
        {subText ? (
          <SubTextView {...{ subText, subTextProps }} subTextInputStyle={subTextProps?.style} />
        ) : null}
        {isError ? <SubTextView subText={errorText} subTextProps={{ variant: 'error' }} /> : null}
        {isSuccess ? (
          <SubTextView subText={successText} subTextProps={{ variant: 'success' }} />
        ) : null}
      </View>
    );
  }
);

export default Input;
