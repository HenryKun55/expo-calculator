import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View,
  useColorScheme,
  ColorSchemeName,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import { Button, DarkMode } from '../../components';
import { numberButtons, operatorButtons } from '../../util/buttons';
import calculator, { INITIAL_STATE, initialState } from '../../util/calculator';

import styles from './styles';

export default function App() {
  const colorScheme = useColorScheme();

  const [darkMode, setDarkMode] = useState<ColorSchemeName>(colorScheme);

  const [state, setState] = useState<INITIAL_STATE>(initialState);

  const buttons = [
    'C',
    '+/₋',
    '%',
    '÷',
    7,
    8,
    9,
    'x',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    ',',
    '=',
  ];

  function isLight() {
    return darkMode === 'light';
  }

  function getResultsBackgroundColor() {
    switch (true) {
      case isLight():
        return styles.lightResults;
      default:
        return styles.darkResults;
    }
  }

  function getButtonsBackgroundColor() {
    switch (true) {
      case isLight():
        return styles.lightButtons;
      default:
        return styles.darkButtons;
    }
  }

  function getColorText() {
    switch (true) {
      case isLight():
        return styles.lightText;
      default:
        return styles.darkText;
    }
  }

  function getButtonType(button: string | number) {
    switch (true) {
      case numberButtons.includes(button as number):
        return 'number';
      case operatorButtons.includes(button as string):
        return 'operator';
      case button === ',':
        return 'decimal';
      case button === '=':
        return 'equal';
      case button === 'C':
        return 'clear';
      case button === 'DEL':
        return 'delete';
      case button === '+/₋':
        return 'posneg';
      case button === '%':
        return 'percentage';
      default:
        return '';
    }
  }

  function handleInput(type: string, value?: string | number) {
    return setState(
      (state: INITIAL_STATE) =>
        calculator(state, type, value ?? state.currentValue) as INITIAL_STATE
    );
  }

  return (
    <SafeAreaView style={[styles.safeAreaView, getButtonsBackgroundColor()]}>
      <StatusBar
        barStyle={darkMode === 'light' ? 'dark-content' : 'light-content'}
      />
      <View style={styles.container}>
        <DarkMode theme={darkMode} setDarkMode={setDarkMode} />

        <View style={[styles.results, getResultsBackgroundColor()]}>
          <Text style={[styles.resultText, getColorText()]}>
            {/* {parseFloat(state.currentValue).toLocaleString()} */}
            {state.currentValue}
          </Text>
        </View>

        <View>
          <FlatList
            data={buttons}
            contentContainerStyle={{ flexGrow: 1 }}
            columnWrapperStyle={{ justifyContent: 'space-evenly' }}
            keyExtractor={(item) => item.toString()}
            style={getButtonsBackgroundColor()}
            numColumns={4}
            renderItem={({ item }) => (
              <Button
                key={item}
                text={item}
                theme={darkMode}
                handleInput={() => {
                  if (
                    numberButtons.includes(item as number) ||
                    operatorButtons.includes(item as string)
                  ) {
                    return handleInput(getButtonType(item), item);
                  }
                  return handleInput(getButtonType(item));
                }}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
