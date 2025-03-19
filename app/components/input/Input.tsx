import { isEmpty } from 'lodash';
import React, { forwardRef, useState } from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';
import { Icons } from '../../assets';
import { useTheme } from '../../hooks';
import { Colors } from '../../theme';
import { Label } from '../label';
import { inputStyles, inputVariantStyles } from './InputStyles';
import type { InputProps, InputTitleProps, SubTexViewProps } from './InputTypes';

/**
 * Render the form input label.
 */
const InputTitle = ({ title, inputTitleProps, inputStyle }: InputTitleProps) => {
  return title ? (
    <Label variant="captionMedium" {...inputTitleProps} style={inputStyle}>
      {title}
    </Label>
  ) : null;
};

/**
 * the input sub text view to show message or error.
 */
const SubTexView = ({ subText, subTextLabelProps, subTextInputStyle }: SubTexViewProps) => {
  return (
    subText && (
      <Label variant="caption" {...subTextLabelProps} style={subTextInputStyle}>
        {subText}
      </Label>
    )
  );
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
      children,
      subTextLabelProps,
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
      <View>
        <InputTitle
          {...{ title, inputTitleProps }}
          inputStyle={[styles.titleLabelStyle, inputTitleProps?.style]}
        />
        <Pressable
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
          onPress={onInputPress}
        >
          <View style={styles.innerContainer}>
            {!!leftIcon && leftIcon?.icon && <>{React.cloneElement(leftIcon.icon)}</>}
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
            {children}
            {!!rightIcon && rightIcon?.icon && secureTextEntry === undefined && (
              <Pressable onPress={rightIcon.onPress} {...rightIcon.pressableProps}>
                {React.cloneElement(rightIcon?.icon)}
              </Pressable>
            )}
            {secureTextEntry !== undefined && (
              <Pressable onPress={handleTogglePassword}>
                <Image
                  source={isSecureEntry ? Icons.eye : Icons.eyeOff}
                  style={styles.passwordIconStyle}
                />
              </Pressable>
            )}
          </View>
        </Pressable>
        <SubTexView
          {...{ subText, subTextLabelProps }}
          subTextInputStyle={[subTextLabelProps?.style]}
        />
        {isError && <SubTexView subText={errorText} subTextLabelProps={{ variant: 'error' }} />}
        {isSuccess && (
          <SubTexView subText={successText} subTextLabelProps={{ variant: 'success' }} />
        )}
      </View>
    );
  }
);

export default Input;
