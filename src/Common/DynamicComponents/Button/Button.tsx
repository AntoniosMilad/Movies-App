import React from 'react';
import styles, {theme} from './styles';
import {Button as RNPaperBtn} from 'react-native-paper';
import {ViewStyle, TextStyle} from 'react-native';
import {color} from 'Theme';
import {Theme} from 'react-native-paper/lib/typescript/types';

interface ButtonProps {
  handlePress: () => void;
  children: string | React.ReactNode;
  buttonStyle?: ViewStyle | ViewStyle[];
  buttonLabelStyle?: TextStyle | TextStyle[];
  loading?: boolean;
  disabled?: boolean;
  icon?:
    | string
    | number
    | import('react-native').ImageURISource
    | import('react-native').ImageURISource[]
    | Readonly<{
        source:
          | string
          | number
          | import('react-native').ImageURISource
          | import('react-native').ImageURISource[];
        direction: 'rtl' | 'ltr' | 'auto';
      }>
    | ((
        props: {
          size: number;
          allowFontScaling?: boolean | undefined;
        } & {
          color: string;
        },
      ) => React.ReactNode)
    | undefined;
  preventDoubleTap?: boolean;
  overrideTheme?: Theme;
  uppercase?: boolean;
  mode?: 'text' | 'outlined' | 'contained';
}

const Button = (props: ButtonProps) => {
  const {
    handlePress,
    buttonStyle: overrideButtonStyle,
    buttonLabelStyle: overrideLabelStyle,
    loading,
    disabled,
    icon,
    uppercase = true,
    mode = 'outlined',

    overrideTheme = theme,
  } = props;

  const isButtonDisabled: ViewStyle = disabled && {
    backgroundColor: color.disabled,
    borderColor: color.disabled,
  };

  return (
    <RNPaperBtn
      theme={overrideTheme}
      mode={mode}
      disabled={disabled}
      loading={loading}
      onPress={handlePress}
      uppercase={uppercase}
      icon={icon}
      style={[styles.btnStyle, overrideButtonStyle, isButtonDisabled]}
      labelStyle={[styles.labelStyle, overrideLabelStyle]}
      {...({} as any)}>
      {props.children}
    </RNPaperBtn>
  );
};

/**
 * export as default.
 */
export default Button;
