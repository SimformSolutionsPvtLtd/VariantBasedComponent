import React, { forwardRef, useState } from 'react';
import { Image, Pressable, StyleSheet, TextInput, View } from 'react-native';

import { Icons } from '../../assets';
import { useTheme } from '../../hooks';
import { Colors } from '../../theme';

import { Label } from '../label';
import { inputStyles } from './InputStyles';
import type { InputProps } from './InputTypes';

/**
 * The custom text input component.
 * @param {Partial<InputProps> & TextInputProps} props - the props for the custom text input component.
 * @returns {React.ReactElement} A React Element.
 */
const Input = forwardRef<TextInput, Partial<InputProps>>(
  (
    {
      title,
      variant = 'default',
      containerStyle,
      placeholderTextColor,
      enableHighlight = false,
      onBlur,
      textInputStyle,
      secureInputProps,
      inputTitleProps,
      rightIconProps,
      leftIconProps,
      multiline,
      children,
      subTextLabelProps,
      subText,
      maxLength,
      value,
      onInputPress = () => {},
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const { styles, theme } = useTheme(inputStyles);
    const [isSecureEntry, setIsSecureEntry] = useState<boolean>(variant === 'secureEntry');

    /**
     * Handle the password icon press.
     */
    const onSecureEntryIconPress = () => {
      setIsSecureEntry((prev) => !prev);
      secureInputProps?.onSecureIconPress?.();
    };

    /**
     * Render the form input label.
     */
    const renderInputTitle = () =>
      title && (
        <Label
          variant="captionMedium"
          label={title}
          {...inputTitleProps}
          style={StyleSheet.flatten([styles.titleLabelStyle, inputTitleProps?.style])}
        />
      );

    /**
     * Render the password icon.
     */
    const renderSecureEntryIcon = () =>
      variant === 'secureEntry' && (
        <Pressable hitSlop={styles.pressableHitSlop} onPress={onSecureEntryIconPress}>
          <Image
            source={isSecureEntry ? Icons.eye : Icons.eyeOff}
            style={styles.passwordIconStyle}
          />
        </Pressable>
      );

    /**
     * Render the input sub text view to show message or error.
     */
    const renderSubTexView = () =>
      subText && (
        <Label
          variant="caption"
          label={subText}
          {...subTextLabelProps}
          style={StyleSheet.flatten([
            variant === 'error' && styles.errorLabelStyle,
            variant === 'success' && styles.successLabelStyle,
            subTextLabelProps?.style
          ])}
        />
      );

    return (
      <View>
        {renderInputTitle()}
        <Pressable
          pointerEvents="box-none"
          style={StyleSheet.flatten([
            styles.container,
            variant === 'error' && styles.errorContainerStyle,
            variant === 'success' && styles.successContainerStyle,
            isFocused && styles.activeColorTextInput,
            multiline && styles.multilineContainerStyle,
            containerStyle
          ])}
          onPress={onInputPress}
        >
          <View style={styles.innerContainer}>
            {leftIconProps?.leftIcon && (
              <Pressable
                hitSlop={styles.pressableHitSlop}
                onPress={leftIconProps?.onLeftIconPress}
                {...leftIconProps?.leftIconPressableProps}
                style={StyleSheet.flatten([
                  styles.rightPressableStyle,
                  leftIconProps?.leftIconPressableProps?.style
                ])}
              >
                {leftIconProps?.leftIcon}
              </Pressable>
            )}
            <TextInput
              ref={ref}
              style={StyleSheet.flatten([
                styles.textInputStyle,
                multiline && styles.multilineTextInputStyle,
                textInputStyle
              ])}
              placeholderTextColor={placeholderTextColor ?? Colors[theme]?.gray}
              textAlign={'left'}
              value={value}
              maxLength={maxLength}
              secureTextEntry={variant === 'secureEntry' && isSecureEntry}
              blurOnSubmit={false}
              multiline={multiline}
              onFocus={() => (enableHighlight ? setIsFocused(true) : null)}
              onBlur={(e) => {
                onBlur?.(e);
                enableHighlight && setIsFocused(false);
              }}
              {...rest}
            />
            {children}
            {rightIconProps?.rightIcon && (
              <Pressable
                hitSlop={styles.pressableHitSlop}
                onPress={rightIconProps?.onRightIconPress}
                {...rightIconProps?.rightIconPressableProps}
                style={StyleSheet.flatten([
                  styles.rightPressableStyle,
                  rightIconProps?.rightIconPressableProps?.style
                ])}
              >
                {rightIconProps?.rightIcon}
              </Pressable>
            )}
            {renderSecureEntryIcon()}
          </View>
        </Pressable>
        {renderSubTexView()}
      </View>
    );
  }
);

export default Input;
