import {Dimensions, Platform, PixelRatio} from 'react-native';
import {deviceInfo} from 'Utilts/deviceInfo';

/**
 * interfaces and types.
 */
export type DeviceSize = 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge';

/**
 * constants
 */
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
const scale = windowWidth / 320;

/**
 * normalize font to be responsive
 * @param size
 */
export function normalizeFont(size) {
  const newSize = size * scale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

/**
 * categorize devices size based on "platform" and "dimensions".
 */
export function getDeviceSize(): DeviceSize {
  if (Platform.OS === 'ios') {
    if (
      (windowWidth <= 320 && windowHeight <= 480) ||
      (windowWidth <= 480 && windowHeight <= 320)
    ) {
      // iphone 4 spec
      return 'xsmall';
    } else if (
      (windowWidth <= 320 && windowHeight <= 568) ||
      (windowWidth <= 568 && windowHeight <= 320)
    ) {
      // iphone 5 spec
      return 'small';
    } else if (
      (windowWidth <= 375 && windowHeight <= 667) ||
      (windowWidth <= 667 && windowHeight <= 375)
    ) {
      // iphone 6 spec
      return 'normal';
    } else if (
      (windowWidth <= 414 && windowHeight <= 736) ||
      (windowWidth <= 736 && windowHeight <= 414)
    ) {
      // iphone 6 plus spec
      return 'large';
    }

    // greater then inphone 6 plus, such as tablets
    return 'xlarge';
  } else if (Platform.OS === 'android') {
    // size spec from: https://developer.android.com/guide/practices/screens_support.html
    // xlarge screens are at least 960dp x 720dp
    // large screens are at least 640dp x 480dp
    // normal screens are at least 470dp x 320dp
    // small screens are at least 426dp x 320dp

    if (
      (windowWidth >= 960 && windowHeight >= 720) ||
      (windowWidth >= 720 && windowWidth >= 960)
    ) {
      return 'xlarge';
    } else if (
      (windowWidth >= 640 && windowHeight >= 480) ||
      (windowWidth >= 480 && windowHeight >= 640)
    ) {
      return 'large';
    } else if (
      (windowWidth >= 470 && windowHeight >= 320) ||
      (windowWidth >= 320 && windowHeight >= 470)
    ) {
      return 'normal';
    } else if (
      (windowWidth >= 426 && windowHeight >= 320) ||
      (windowWidth >= 320 && windowHeight >= 426)
    ) {
      return 'small';
    }

    return 'xsmall';
  }
}

/**
 * export as default
 */
export default {
  window: {
    windowWidth,
    windowHeight,
  },
  isTablet: deviceInfo.isTablet(),
  isAndroid: Platform.OS === 'android',
  isIOS: Platform.OS === 'ios',
  getDeviceSize: getDeviceSize,
};
