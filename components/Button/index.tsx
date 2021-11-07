import React from 'react';
import { TouchableOpacity, Text, ColorSchemeName } from 'react-native';

import { handleButtons, numberButtons } from '../../util/buttons';

import styles from './styles';

type Props = {
  theme: ColorSchemeName;
  text: string | number;
  handleInput: () => void;
};

export default function Button(props: Props) {
  function isLight() {
    return props.theme === 'light';
  }

  function isZero() {
    return props.text === 0;
  }

  function isDecimal() {
    return props.text === ',';
  }

  function isNumber() {
    return numberButtons.includes(props.text as number) || isDecimal();
  }

  function isHandle() {
    return handleButtons.includes(props.text as string);
  }

  function getButtonZero() {
    return isZero() ? styles.zeroButton : {};
  }

  function getTextZero() {
    return isZero() ? styles.zeroText : {};
  }

  function getBorderColor() {
    switch (true) {
      case isLight():
        return styles.lightButton;
      default:
        return styles.darkButton;
    }
  }

  function getBackgroundColor() {
    switch (true) {
      case isNumber() && isLight():
        return styles.lightButtonNumber;
      case isNumber() && !isLight():
        return styles.darkButtonNumber;
      case isHandle():
        return styles.buttonHandle;
      case props.text === '=':
        return styles.buttonEqual;
      default:
        return styles.buttonOperator;
    }
  }

  function getTextColor() {
    switch (true) {
      case isNumber() && isLight():
        return styles.lightTextNumber;
      case isNumber() && !isLight():
        return styles.darkTextNumber;
      case isHandle() && isLight():
        return styles.lightTextHandle;
      case isHandle() && !isLight():
        return styles.darkTextHandle;
      case props.text === '=':
        return styles.textEqual;
      default:
        return styles.darkTextNumber;
    }
  }

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getButtonZero(),
        getBorderColor(),
        getBackgroundColor(),
      ]}
      onPress={() => props.handleInput()}
    >
      <Text style={[styles.textNumber, getTextZero(), getTextColor()]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}
