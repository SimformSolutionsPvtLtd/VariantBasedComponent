import React, { type FC } from 'react';
import { View } from 'react-native';
import { Button } from '../../components';
import { ROUTES } from '../../constants';
import { useTheme } from '../../hooks';
import { navigateWithParam } from '../../utils';
import styleSheet from './HomeStyles';

/**
 * The HomeScreen component with two buttons for navigation respected screen.
 * @returns {React.ReactElement} A React element.
 */
const HomeScreen: FC = (): React.ReactElement => {
  const { styles } = useTheme(styleSheet);

  return (
    <View style={styles.screenView}>
      <Button title="Text component screen" onPress={() => navigateWithParam(ROUTES.Text)} />
      <Button title="Button component screen" onPress={() => navigateWithParam(ROUTES.Button)} />
      <Button title="Input component screen" onPress={() => navigateWithParam(ROUTES.Input)} />
    </View>
  );
};

export default HomeScreen;
