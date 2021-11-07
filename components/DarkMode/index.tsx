import React, { Dispatch, SetStateAction } from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, ColorSchemeName } from 'react-native';

import styles from './styles';

type Props = {
  theme: ColorSchemeName;
  setDarkMode: Dispatch<SetStateAction<ColorSchemeName>>;
};

export default function DarkMode(props: Props) {
  function isLight() {
    return props.theme === 'light';
  }

  function getThemeButtonStyle() {
    switch (true) {
      case isLight():
        return styles.themeDarkButton;
      default:
        return styles.themeLightButton;
    }
  }

  function getIconName() {
    switch (true) {
      case isLight():
        return 'moon';
      default:
        return 'light-up';
    }
  }

  function getIconColor() {
    switch (true) {
      case isLight():
        return 'white';
      default:
        return 'black';
    }
  }

  function getIconHandle() {
    switch (true) {
      case isLight():
        return props.setDarkMode('dark');
      default:
        return props.setDarkMode('light');
    }
  }

  return (
    <TouchableOpacity
      style={[styles.themeButton, getThemeButtonStyle()]}
      onPress={() => getIconHandle()}
    >
      <Entypo name={getIconName()} size={24} color={getIconColor()} />
    </TouchableOpacity>
  );
}
