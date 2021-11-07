import { StyleSheet } from 'react-native';

import colors from '../../util/colors';
import { normalize } from '../../util/styles';

const Styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  results: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  resultText: {
    marginTop: normalize(10),
    marginRight: normalize(10),
    fontSize: normalize(60),
  },
  lightText: {
    color: colors.black,
  },
  darkText: {
    color: colors.fauxWhite,
  },
  lightResults: {
    backgroundColor: colors.fauxWhite,
  },
  darkResults: {
    backgroundColor: colors.black,
  },
  lightButtons: {
    backgroundColor: colors.fauxWhite,
  },
  darkButtons: {
    backgroundColor: colors.black,
  },
});

export default Styles;
