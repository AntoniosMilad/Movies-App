import {StyleSheet} from 'react-native';
import {color, typography} from 'Theme';

/**
 * component style lives here
 */
const styles = StyleSheet.create({
  btnStyle: {
    width: '100%',
    backgroundColor: color.redRibbon,
    minHeight: 48,
    justifyContent: 'center',
    borderColor: color.redRibbon,
  },
  labelStyle: {
    color: color.light,
    fontFamily: typography.bold,
    fontSize: 18,
  },
});

/**
 * button theme
 */
export const theme = {
  colors: {
    /**
     * for ripple color in android
     */
    primary: color.pinkishGrey,
  },
};

export default styles;
