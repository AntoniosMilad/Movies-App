import {Platform, StyleSheet} from 'react-native';
import {color, layout, typography, normalizeFont} from 'Theme';

/**
 * screen style lives here
 */
const {
  window: {windowWidth},
} = layout;
const styles = StyleSheet.create({
  container: {
    // flex: 0.5,
    backgroundColor: color.light,
  },
  image: {
    alignSelf: 'center',
  },
  viewScroll: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  title: {
    color: color.tundora,
    fontSize: 20,
    fontFamily: typography.notoBold,
  },
  welcome: {
    color: color.tundora,
    fontSize: 18,
    fontFamily: typography.notoRegular,
    marginBottom: 56,
  },
  forgotPasswordHolder: {
    alignItems: 'flex-end',
    marginTop: 8,
  },
  forgotPassword: {
    fontFamily: typography.regular,
  },
  inputOutline: {
    borderColor: color.mercury,
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  errorInput: {
    borderColor: color.redRibbon,
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  button: {
    marginTop: 32,
    borderRadius: 8,
    marginBottom: 24,
  },
  registerAndTechnicalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  haveAccount: {
    fontFamily: typography.notoBold,
    fontSize: 12,
  },
  registerNow: {
    fontFamily: typography.notoBold,
    fontSize: 12,
    color: color.redRibbon,
  },
  logoContainer: {
    position: 'absolute',
    bottom: 32,
    left: 0,
    right: 0,
  },
  logoImage: {
    alignSelf: 'center',
  },
  buttonLabel: {
    fontSize: 20,
  },
  youHaveNoAccContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  buttonOutlined: {
    backgroundColor: color.light,
    borderColor: color.redRibbon,
    borderWidth: 2,
  },
  buttonLabelStyle: {
    color: color.redRibbon,
    fontSize: 16,
  },
  forgetPassText: {
    fontFamily: typography.bold,
    fontWeight: Platform.OS === 'ios' ? 'bold' : null,
    fontSize: 12,
  },
});

/**
 * export styles as default
 */
export default styles;
