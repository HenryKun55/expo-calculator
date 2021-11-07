import { Dimensions, PixelRatio } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

function getOrientation() {
  return SCREEN_WIDTH < SCREEN_HEIGHT ? 'portrait' : 'landscape';
}

export function normalize(fontSize: number) {
  const baseWidth = 320;
  const width = getOrientation() == 'portrait' ? SCREEN_WIDTH : SCREEN_HEIGHT;
  return PixelRatio.roundToNearestPixel(fontSize * (width / baseWidth));
}
