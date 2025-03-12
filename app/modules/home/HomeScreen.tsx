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
  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true);

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
        onChangeText={setValue}
        onSubmitEditing={Keyboard.dismiss}
      />

      <Input
        enableHighlight
        secureTextEntry={isSecureEntry}
        title="This is secure entry title"
        value={value}
        placeholder="This is placeholder for secure input"
        rightIconProps={{
          onRightIconPress: () => setIsSecureEntry((prev) => !prev),
          rightIcon: (
            <Image
              source={isSecureEntry ? Icons.eye : Icons.eyeOff}
              style={styles.passwordIconStyle}
            />
          )
        }}
        onChangeText={setValue}
        onSubmitEditing={Keyboard.dismiss}
      />

      <View style={styles.labelContainer}>
        <Label variant="title" children="this is" />
        <Label children="Body Variant" />
        <Label children="caption Variant" variant="caption" />
        <Label children="captionMedium Variant" variant="captionMedium" />
        <Label children="header Variant" variant="header" />
        <Label children="title Variant" variant="title" />
        <Label children="error Variant" variant="error" />
        <Label children="success Variant" variant="success" />
        <Label children="Custom Style Variant" style={styles.title} numberOfLines={2} />
      </View>

      <View style={styles.buttonsContainer}>
        <CustomButton
          title="Solid button"
          onPress={() => setSubText((prev) => (!prev ? 'show any other info' : ''))}
        />
        <CustomButton variant="outline" title="Outline button" onPress={() => {}} />
        <CustomButton
          variant="hyperlink"
          title="Hyperlink button"
          buttonContainerProps={{ style: { alignSelf: 'center' } }}
          onPress={() => {}}
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
