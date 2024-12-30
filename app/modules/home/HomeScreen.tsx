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
        onChangeText={setValue}
        onSubmitEditing={Keyboard.dismiss}
      />
      <Input
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
        leftIconProps={{ leftIcon: <Image source={Icons.eye} style={styles.iconStyle} /> }}
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
      />

      <View style={styles.labelContainer}>
        <Label label={'Body Variant'} />
        <Label label={'caption Variant'} variant="caption" />
        <Label label={'captionMedium Variant'} variant="captionMedium" />
        <Label label={'header Variant'} variant="header" />
        <Label label={'title Variant'} variant="title" />
        <Label label={'Custom Style Variant'} style={styles.title} numberOfLines={2} />
      </View>

      <View style={styles.buttonsContainer}>
        <CustomButton label={'Solid button'} onPress={() => {}} />
        <CustomButton variant="outline" label={'Outline button'} onPress={() => {}} />
        <CustomButton
          variant="hyperlink"
          label={'Hyperlink button'}
          buttonContainerProps={{ style: { alignSelf: 'center' } }}
          onPress={() => {}}
        />

        <CustomButton isLoading label={'Solid button'} onPress={() => {}} />
        <CustomButton isLoading variant="outline" label={'Outline button'} onPress={() => {}} />
        <CustomButton isLoading variant="hyperlink" label={'Hyperlink button'} onPress={() => {}} />

        <CustomButton disabled label={'Solid button'} onPress={() => {}} />
        <CustomButton disabled variant="outline" label={'Outline button'} onPress={() => {}} />
        <CustomButton
          disabled
          variant="hyperlink"
          label={'Hyperlink button'}
          labelProps={{ variant: 'captionMedium', style: { color: 'red' } }}
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
