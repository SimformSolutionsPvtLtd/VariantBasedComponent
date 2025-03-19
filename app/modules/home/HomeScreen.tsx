import React, { useState, type FC } from 'react';
import { Image, Keyboard, ScrollView, View } from 'react-native';
import { Icons } from '../../assets';
import { CustomButton, Label } from '../../components';
import { Input } from '../../components/input';
import { useTheme } from '../../hooks';
import styleSheet from './HomeStyles';

/**
 * The HomeScreen component with two buttons for navigation respected screen.
 * @returns {React.ReactElement} A React element.
 */
const HomeScreen: FC = (): React.ReactElement => {
  const { styles } = useTheme(styleSheet);
  const [value, setValue] = useState<string>('');
  const [subText, setSubText] = useState<string>('');

  return (
    <ScrollView
      style={styles.screenView}
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="interactive"
    >
      <Input
        enableHighlight
        title="This is ghost"
        variant="ghost"
        inputTitleProps={{ variant: 'caption' }}
        value={value}
        placeholder="This is placeholder for without title input"
        subText={subText}
        onChangeText={setValue}
        onSubmitEditing={Keyboard.dismiss}
      />
      <Input
        enableHighlight
        title="This is outlined"
        variant="outlined"
        inputTitleProps={{ variant: 'caption' }}
        value={value}
        placeholder="This is placeholder for without title input"
        errorText="show error message here"
        onChangeText={setValue}
        onSubmitEditing={Keyboard.dismiss}
      />
      <Input
        enableHighlight
        title="This is underlined"
        variant="underlined"
        inputTitleProps={{ variant: 'caption' }}
        value={value}
        placeholder="This is placeholder for without title input"
        successText="show success message here"
        leftIcon={{
          icon: <Image source={Icons.eye} style={styles.passwordIconStyle} />
        }}
        rightIcon={{
          icon: <Image source={Icons.eyeOff} style={styles.passwordIconStyle} />,
          onPress: () => {
            console.log('right icon pressed');
          }
        }}
        onChangeText={setValue}
        onSubmitEditing={Keyboard.dismiss}
      />

      <Input
        enableHighlight
        secureTextEntry
        title="This is secure entry title"
        value={value}
        placeholder="This is placeholder for secure input"
        onChangeText={setValue}
        onSubmitEditing={Keyboard.dismiss}
      />

      <View style={styles.labelContainer}>
        <Label variant="title">this is title variant</Label>
        <Label>Body Variant</Label>
        <Label variant="caption">caption Variant</Label>
        <Label variant="captionMedium">captionMedium Variant </Label>
        <Label variant="header">header Variant </Label>
        <Label variant="title">title Variant </Label>
        <Label variant="error">error Variant </Label>
        <Label variant="success">success Variant </Label>
        <Label style={styles.title} numberOfLines={2}>
          Custom Style Variant
        </Label>
      </View>

      <View style={styles.buttonsContainer}>
        <CustomButton
          title="Solid button"
          onPress={() => setSubText((prev) => (!prev ? 'show any other info' : ''))}
        />
        <CustomButton
          enableDebounce={false}
          variant="outline"
          title="Outline button"
          onPress={() => {
            console.log('pressing button outline');
          }}
        />
        <CustomButton
          variant="hyperlink"
          title="Hyperlink button"
          buttonContainerProps={{ style: { alignSelf: 'center' } }}
          onPress={() => {
            console.log('pressing button hyperlink');
          }}
        />

        <CustomButton isLoading title="Solid button" onPress={() => {}} />
        <CustomButton isLoading variant="outline" title="Outline button" onPress={() => {}} />
        <CustomButton isLoading variant="hyperlink" title="Hyperlink button" onPress={() => {}} />

        <CustomButton disabled title="Solid button" onPress={() => {}} />
        <CustomButton disabled variant="outline" title="Outline button" onPress={() => {}} />
        <CustomButton
          disabled
          variant="hyperlink"
          title="Hyperlink button"
          labelProps={{ variant: 'title', style: { color: 'red' } }}
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
