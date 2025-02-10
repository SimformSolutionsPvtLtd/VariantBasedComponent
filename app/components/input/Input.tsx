import React, { forwardRef, useState } from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';
import { Icons } from '../../assets';
import { useTheme } from '../../hooks';
import { Colors } from '../../theme';
import { Label } from '../label';
import { inputStyles } from './InputStyles';
import type { InputProps, InputTitleProps, SubTexViewProps } from './InputTypes';

/**
 * Render the form input label.
 */
const InputTitle = ({ title, inputTitleProps, inputStyle }: InputTitleProps) => {
  return title ? (
    <Label variant="captionMedium" text={title} {...inputTitleProps} style={inputStyle} />
  ) : null;
};

/**
 * the input sub text view to show message or error.
 */
const SubTexView = ({ subText, subTextLabelProps, subTextInputStyle }: SubTexViewProps) => {
  return (
    subText && (
      <Label variant="caption" text={subText} {...subTextLabelProps} style={subTextInputStyle} />
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
            variant === 'error' && styles.errorContainerStyle,
            variant === 'success' && styles.successContainerStyle,
            isFocused && styles.activeColorTextInput,
            multiline && styles.multilineContainerStyle,
            containerStyle
          ]}
          onPress={onInputPress}
        >
          <View style={styles.innerContainer}>
            {leftIconProps?.leftIcon && (
              <Pressable
                hitSlop={styles.pressableHitSlop}
                onPress={leftIconProps?.onLeftIconPress}
                {...leftIconProps?.leftIconPressableProps}
                style={({ pressed }) => [
                  styles.rightPressableStyle,
                  typeof leftIconProps?.leftIconPressableProps?.style === 'function'
                    ? leftIconProps?.leftIconPressableProps?.style({ pressed })
                    : leftIconProps?.leftIconPressableProps?.style ?? undefined
                ]}
              >
                {leftIconProps?.leftIcon}
              </Pressable>
            )}
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
                style={({ pressed }) => [
                  styles.rightPressableStyle,
                  typeof rightIconProps?.rightIconPressableProps?.style === 'function'
                    ? rightIconProps.rightIconPressableProps.style({ pressed })
                    : rightIconProps?.rightIconPressableProps?.style ?? undefined
                ]}
              >
                {rightIconProps?.rightIcon}
              </Pressable>
            )}
            {variant === 'secureEntry' && (
              <Pressable hitSlop={styles.pressableHitSlop} onPress={onSecureEntryIconPress}>
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
          subTextInputStyle={[
            variant === 'error' && styles.errorLabelStyle,
            variant === 'success' && styles.successLabelStyle,
            subTextLabelProps?.style
          ]}
        />
      </View>
    );
  }
);

export default Input;
