import React, { type FC } from 'react';
import { View } from 'react-native';
import { Button } from '../../components';
import { useTheme } from '../../hooks';
import styleSheet from './ButtonStyles';

/**
 * A screen component that demonstrates different variants and states of buttons.
 */
const ButtonScreen: FC = (): React.ReactElement => {
  const { styles } = useTheme(styleSheet);
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.individualContainer}>
        <Button title="Solid button" onPress={() => console.log('pressing button solid')} />
        <Button
          enableDebounce={false}
          variant="outline"
          title="Outline button"
          onPress={() => {
            console.log('pressing button outline');
          }}
        />
        <Button
          variant="hyperlink"
          title="Hyperlink button"
          onPress={() => {
            console.log('pressing button hyperlink');
          }}
        />
      </View>

      <View style={styles.individualContainer}>
        <Button loading title="Solid button" onPress={() => {}} />
        <Button loading variant="outline" title="Outline button" onPress={() => {}} />
        <Button loading variant="hyperlink" title="Hyperlink button" onPress={() => {}} />
      </View>

      <View style={styles.individualContainer}>
        <Button disabled title="Solid button" onPress={() => {}} />
        <Button disabled variant="outline" title="Outline button" onPress={() => {}} />
        <Button
          disabled
          variant="hyperlink"
          title="Hyperlink button"
          titleProps={{ variant: 'title', style: { color: 'red' } }}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default ButtonScreen;
