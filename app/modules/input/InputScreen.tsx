import { isEmpty } from 'lodash';
import React, { useMemo, useRef, useState } from 'react';
import { Alert, Image, Keyboard, ScrollView, TextInput } from 'react-native';
import { Icons } from '../../assets';
import { Input, type TextVariant } from '../../components';
import { useTheme } from '../../hooks';
import styleSheet from './InputStyles';
import type { FC, ReactElement } from 'react';

/**
 * A functional component that renders the input screen.
 */
const InputScreen: FC = (): ReactElement => {
  const { styles } = useTheme(styleSheet);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const firstNameRef = useRef<TextInput | null>(null);
  const lastNameRef = useRef<TextInput | null>(null);
  const userNameRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const dateOfBirthRef = useRef<TextInput | null>(null);

  const userNameMessage: { type?: TextVariant; message: string } = useMemo(() => {
    if (userName.length < 1) {
      return { message: '' };
    }
    if (userName.length < 4) {
      return { message: 'User name must be at least 4 characters', type: 'error' };
    }
    if (userName.length > 10) {
      return { message: 'User name must be less than 10 characters', type: 'error' };
    }
    if (userName.length >= 4 && userName.length <= 10) {
      return { message: 'User name is valid', type: 'success' };
    }
    return { message: '' };
  }, [userName]);

  /**
   * Handles the press event for the Date of Birth button.
   */
  const handleDoBPress = () => {
    Keyboard.dismiss();
    Alert.alert('Date of Birth', 'Select your date of birth', [
      { text: 'OK', onPress: () => setDob((prev) => (isEmpty(prev) ? '01-04-2025' : '')) }
    ]);
  };

  /**
   * Handles the press event for the username field.
   */
  const handleUserNamePress = () => {
    Keyboard.dismiss();
    Alert.alert('User name', 'This username will be used for login', [{ text: 'OK' }]);
  };

  return (
    <ScrollView contentContainerStyle={styles.inputContainer} keyboardShouldPersistTaps="handled">
      <Input
        enableHighlight
        ref={firstNameRef}
        title="First name"
        variant="ghost"
        value={firstName}
        keyboardType="default"
        returnKeyType="next"
        autoComplete="given-name"
        placeholder="Enter your first name"
        onChangeText={setFirstName}
        onSubmitEditing={() => lastNameRef.current?.focus()}
      />
      <Input
        enableHighlight
        ref={lastNameRef}
        title="Last name"
        variant="outlined"
        returnKeyType="next"
        inputTitleProps={{ variant: 'caption' }}
        value={lastName}
        autoComplete="family-name"
        placeholder="Enter your last name"
        onChangeText={setLastName}
        onSubmitEditing={() => userNameRef.current?.focus()}
      />
      <Input
        enableHighlight
        ref={userNameRef}
        title="User name"
        variant="underlined"
        value={userName}
        placeholder="Enter your user name"
        returnKeyType="next"
        message={userNameMessage?.message}
        messageProps={{ variant: userNameMessage?.type }}
        leftIcon={{
          icon: <Image source={Icons.user} style={styles.passwordIconStyle} />
        }}
        rightIcon={{
          icon: <Image source={Icons.info} style={styles.passwordIconStyle} />,
          onPress: handleUserNamePress
        }}
        onChangeText={setUserName}
        onSubmitEditing={() => passwordRef.current?.focus()}
      />

      <Input
        enableHighlight
        secureTextEntry
        ref={passwordRef}
        title="Password"
        value={password}
        returnKeyType="next"
        placeholder="Enter your password"
        onChangeText={setPassword}
        onSubmitEditing={handleDoBPress}
      />

      <Input
        enableHighlight
        ref={dateOfBirthRef}
        title="Date of Birth"
        variant="outlined"
        value={dob}
        returnKeyType="done"
        placeholder="Select your date of birth"
        onInputPress={handleDoBPress}
      />
    </ScrollView>
  );
};

export default InputScreen;
