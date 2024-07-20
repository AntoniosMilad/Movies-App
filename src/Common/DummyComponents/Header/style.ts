import {StyleSheet, Platform} from 'react-native';
import {color, typography, commonStyles} from 'Theme';

/**
 * component style lives here
 */
const styles = StyleSheet.create({
  header: {
    backgroundColor: color.crimson,
    // ...commonStyles.noBorderHeader,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  headerTitle: {
    fontFamily: typography.notoBold,
    color: color.crimson,
    fontWeight: Platform.select({
      ios: 'bold',
    }),
    fontSize: 20,
  },
  backWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
  },
  closeIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  androidContentHeader: {
    flex: 3,
    flexGrow: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTxt: {
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: typography.notoBold,
    color: color.greyishBrown,
    fontSize: 20,
  },
  flexFix: {
    flex: 0.5,
  },
  backIconAndroid: {
    flex: 0.5,
    justifyContent: 'flex-start',
  },
  headerWithAction: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerAction: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  parentViewStyle: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
});

export default styles;
