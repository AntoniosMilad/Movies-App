import {I18nManager, Platform} from 'react-native';

// isRTL from the native side.
const isRTL = () => I18nManager.isRTL;

/**
 * all fonts in application live here.
 */
const typography = Object.freeze({
  regular: isRTL()
    ? Platform.select({
        ios: 'NotoKufiArabic',
        android: 'NotoKufiArabicRegular',
      })
    : 'Lato-Regular',
  bold: isRTL()
    ? Platform.select({
        ios: 'NotoKufiArabic-Bold',
        android: 'NotoKufiArabicBold',
      })
    : 'Lato-Bold',

  // in case there is need to use them directly,
  // such as setup stack screens.
  notoRegular: Platform.select({
    ios: 'NotoKufiArabic',
    android: 'NotoKufiArabicRegular',
  }),
  notoBold: Platform.select({
    ios: 'NotoKufiArabic-Bold',
    android: 'NotoKufiArabicBold',
  }),
  latoRegular: 'Lato-Regular',
  latoBold: 'Lato-Bold',
  robotoRegular: 'Roboto-Regular',
  robotoBold: 'Roboto-Bold',
  robotoMedium: 'Roboto-Medium',
});

/**
 * export font as default.
 */
export default typography;
