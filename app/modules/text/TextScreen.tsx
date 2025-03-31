import React from 'react';
import { View } from 'react-native';
import { Text } from '../../components';
import { useTheme } from '../../hooks';
import styleSheet from './TextStyles';
import type { FC } from 'react';

/**
 * A functional component that renders the Text screen.
 */
const TextScreen: FC = (): React.ReactElement => {
  const { styles } = useTheme(styleSheet);
  return (
    <View style={styles.textContainer}>
      <Text variant="header">header Variant </Text>
      <Text variant="title">title Variant </Text>
      <Text>Body Variant</Text>
      <Text variant="captionMedium">captionMedium Variant </Text>
      <Text variant="caption">caption Variant</Text>
      <Text variant="error">error Variant </Text>
      <Text variant="success">success Variant </Text>
      <Text style={styles.title} numberOfLines={2}>
        Custom Style Variant
      </Text>
    </View>
  );
};

export default TextScreen;
