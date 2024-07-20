import * as React from 'react';
import styles from './style';
import {Appbar, IconButton} from 'react-native-paper';
import {
  TextStyle,
  ViewStyle,
  Platform,
  View,
  I18nManager,
  Text,
} from 'react-native';
import {Color, color} from 'Theme';
// import {Text} from 'components/Text';

interface HeaderProps {
  title?: string;
  titleStyle?: TextStyle | TextStyle[];
  handleGoBack?: () => void;
  style?: ViewStyle | ViewStyle[];
  backIconColor?: Color;
  backIconStyle?: ViewStyle;
  isCloseIcon?: boolean;
  children?: any;
}
interface BackIconProps {
  size?: number;
  color?: string;
}

function Header(props: HeaderProps) {
  const {
    title,
    titleStyle,
    handleGoBack,
    style: overrideHederStyle,
    backIconColor = 'tundora',
    backIconStyle,
    isCloseIcon: isCloseIcon,
    children,
  } = props;

  return (
    <Appbar.Header
      statusBarHeight={0}
      dark={Platform.OS === 'android'}
      style={[
        styles.header,
        overrideHederStyle,
        {padding: 0, margin: 0, height: 60},
      ]}>
      {Platform.OS === 'android' && (
        <>
          {children && !handleGoBack && children}

          {handleGoBack && children && (
            <View style={styles.headerWithAction}>
              <HedaerBackIcon
                isCloseIcon={isCloseIcon}
                backIconColor={backIconColor}
                backIconStyle={backIconStyle}
                handleGoBack={handleGoBack}
              />
              <View style={styles.headerAction}>{children}</View>
            </View>
          )}

          {!children && (
            <>
              {handleGoBack && (
                <View style={styles.backIconAndroid}>
                  <HedaerBackIcon
                    isCloseIcon={isCloseIcon}
                    backIconColor={backIconColor}
                    backIconStyle={backIconStyle}
                    handleGoBack={handleGoBack}
                  />
                </View>
              )}

              <View style={styles.androidContentHeader}>
                <Text style={[styles.titleTxt, titleStyle]}>{title}</Text>
              </View>

              <View style={styles.flexFix} />
            </>
          )}
        </>
      )}

      {Platform.OS === 'ios' && handleGoBack && (
        <HedaerBackIcon
          isCloseIcon={isCloseIcon}
          backIconColor={backIconColor}
          backIconStyle={backIconStyle}
          handleGoBack={handleGoBack}
        />
      )}
      {Platform.OS === 'ios' && title && (
        <Appbar.Content
          title={title}
          titleStyle={[styles.headerTitle, titleStyle]}
        />
      )}
      {Platform.OS === 'ios' && children}
    </Appbar.Header>
  );
}

export function HedaerBackIcon({
  isCloseIcon: iscloseIcon,
  backIconStyle,
  backIconColor,
  handleGoBack,
}: Partial<HeaderProps>) {
  return (
    <Appbar.Action
      icon={(arg) =>
        renderBackIcon(arg, iscloseIcon !== undefined && iscloseIcon)
      }
      style={backIconStyle}
      color={color[backIconColor]}
      onPress={handleGoBack}
    />
  );
}

function renderBackIcon({size, color}: BackIconProps, iscloseIcon: boolean) {
  return (
    <View
      style={[
        styles.backWrapper,
        {
          width: size,
          height: size,
          transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
        },
      ]}>
      <IconButton
        icon={iscloseIcon ? require('./close.png') : 'arrow-left'}
        style={[iscloseIcon ? styles.closeIcon : null]}
        // size={24}
        iconColor={color}
      />
    </View>
  );
}

export default Header;
