import {StyleSheet} from 'react-native';
import color from './color';

/**
 * A stylesheet that contains a common styles in application
 */
export default StyleSheet.create({
  flex: {flex: 1},
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  justRow: {flexDirection: 'row'},
  flexGrow: {flexGrow: 1},
  nonFlex: {flex: 0},
  halfFlex: {flex: 0.5},
  fullWidth: {width: '100%'},
  nonFlexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crossElevation: {
    shadowColor: color.greyishBrown,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  crossElevation2: {
    shadowColor: color.greyishBrown,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  noBorderHeader: {
    backgroundColor: color.light,
    elevation: 0,
    shadowColor: 'rgba(0, 0, 0, 0)',
  },
  fullWidthHeight: {
    width: '100%',
    height: '100%',
  },
  normalMargin: {
    margin: 8,
  },
  zeroHeight: {
    height: 0,
  },
  zeroMarginTop: {
    marginTop: 0,
  },
  marginTop8: {
    marginTop: 8,
  },
  marginTop16: {
    marginTop: 16,
  },
  marginBottom16: {
    marginBottom: 16,
  },
  priceHolder: {
    width: '40%',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  minusZIndex: {
    zIndex: -1,
  },
  overlayCenter: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
