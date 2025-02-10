import React, { useState, type FC } from 'react';
import { Keyboard, ScrollView, View } from 'react-native';
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
        inputTitleProps={{ variant: 'caption' }}
        value={value}
        placeholder="This is placeholder for without title input"
        subText={subText}
        onChangeText={setValue}
        onKeyPress={(e) => e.preventDefault()}
        onSubmitEditing={Keyboard.dismiss}
      />
      {/* <Input
        enableHighlight
        title="This is default"
        inputTitleProps={{ variant: 'caption' }}
        value={value}
        placeholder="This is placeholder for default input"
        onChangeText={setValue}
        onSubmitEditing={Keyboard.dismiss}
      />

      <Input
        enableHighlight
        variant="secureEntry"
        title="This is secure entry title"
        value={value}
        placeholder="This is placeholder for secure input"
        onChangeText={setValue}
        onSubmitEditing={Keyboard.dismiss}
      />

      <Input
        enableHighlight
        variant="success"
        title="This is success title"
        value={value}
        leftIconProps={{
          leftIcon: <Image source={Icons.eye} style={styles.iconStyle} />
        }}
        rightIconProps={{
          onRightIconPress: () => {},
          rightIcon: <Image source={Icons.eye} style={styles.iconStyle} />
        }}
        subText="This is success message"
        placeholder="This is placeholder for success input"
        onChangeText={setValue}
        onSubmitEditing={Keyboard.dismiss}
      />

      <Input
        enableHighlight
        variant="error"
        title="This is error title"
        value={value}
        subText="This is error message"
        placeholder="This is placeholder for success input"
        onChangeText={setValue}
        onSubmitEditing={Keyboard.dismiss}
      />

      <Input
        multiline
        enableHighlight
        title="This is multiline"
        value={value}
        placeholder="This is for multiline placeholder"
        onChangeText={setValue}
        onSubmitEditing={Keyboard.dismiss}
      /> */}

      <View style={styles.labelContainer}>
        <Label variant="title" text="this is" />
        <Label text="Body Variant" />
        <Label text="caption Variant" variant="caption" />
        <Label text="captionMedium Variant" variant="captionMedium" />
        <Label text="header Variant" variant="header" />
        <Label text="title Variant" variant="title" />
        <Label text="Custom Style Variant" style={styles.title} numberOfLines={2} />
      </View>

      <View style={styles.buttonsContainer}>
        <CustomButton
          title="Solid button"
          onPress={() => setSubText((prev) => (!prev ? 'set net data' : ''))}
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
