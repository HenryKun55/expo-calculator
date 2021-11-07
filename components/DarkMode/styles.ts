import { StyleSheet } from 'react-native';

import colors from '../../util/colors';
import { normalize } from '../../util/styles';

const Styles = StyleSheet.create({
  themeLightButton: {
    backgroundColor: colors.gray90,
  },
  themeDarkButton: {
    backgroundColor: colors.darkGrayBlue,
  },
  themeButton: {
    marginTop: normalize(10),
    marginLeft: normalize(10),
    marginBottom: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(20),
  },
});

export default Styles;
