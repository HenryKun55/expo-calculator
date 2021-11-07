import { StyleSheet } from 'react-native';
import { normalize } from '../../util/styles';

import colors from '../../util/colors';

const Styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: normalize(70),
    minHeight: normalize(70),
    borderRadius: normalize(35),
    marginBottom: 10,
  },
  lightButton: {
    borderColor: colors.gray,
    borderWidth: 1,
  },
  darkButton: {
    borderColor: colors.black,
    borderWidth: 1,
  },
  lightButtonNumber: {
    backgroundColor: colors.fauxWhite,
  },
  darkButtonNumber: {
    backgroundColor: colors.nightRider,
  },
  buttonOperator: {
    backgroundColor: colors.orange,
  },
  buttonEqual: {
    backgroundColor: colors.fauxWhite,
  },
  buttonHandle: {
    backgroundColor: colors.gray,
  },
  textNumber: {
    fontSize: normalize(30),
  },
  lightTextNumber: {
    color: colors.nightRider,
  },
  darkTextNumber: {
    color: colors.fauxWhite,
  },
  textOperator: {
    color: colors.fauxWhite,
  },
  lightTextHandle: {
    color: colors.fauxWhite,
  },
  darkTextHandle: {
    color: colors.black,
  },
  textEqual: {
    color: colors.orange,
  },
  zeroButton: {
    width: normalize(150),
    alignItems: 'flex-start',
  },
  zeroText: {
    marginLeft: normalize(25),
  },
});

export default Styles;
