import { isEmpty } from 'lodash';
import React, { forwardRef, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
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
    <Label variant="captionMedium" children={title} {...inputTitleProps} style={inputStyle} />
  ) : null;
};

/**
 * the input sub text view to show message or error.
 */
const SubTexView = ({ subText, subTextLabelProps, subTextInputStyle }: SubTexViewProps) => {
  return (
    subText && (
      <Label
        variant="caption"
        children={subText}
        {...subTextLabelProps}
        style={subTextInputStyle}
      />
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
      rightIconProps,
      leftIconProps,
      multiline,
      children,
      subTextLabelProps,
      subText,
      maxLength,
      value,
      onInputPress = () => {},
      errorText,
      successText,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const { styles, theme } = useTheme(inputStyles);

    const isError = !isEmpty(errorText);
    const isSuccess = !isEmpty(successText);

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
              blurOnSubmit={false}
              multiline={multiline}
              onBlur={(e) => {
                onBlur?.(e);
                enableHighlight && setIsFocused(false);
              }}
              {...rest}
              onFocus={() => (enableHighlight ? setIsFocused(true) : null)}
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
