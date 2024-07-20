import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {color, typography} from 'Theme';
import {useTranslation} from 'react-i18next';
import CountryPhoneInput from 'Common/DynamicComponents/form/countryPhoneInput/CountryPhoneInput';
import styles from './styles';
import Button from 'Common/DynamicComponents/Button/Button';
import DynamicTextInput from 'Common/DynamicComponents/form/TextInput/DynamicTextInput';

const LoginForm: React.FC = () => {
  const keyboardAwareScrollRef = useRef<Element | null>(null);
  const {t} = useTranslation('transalition');
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        scrollEnabled
        innerRef={(ref) => (keyboardAwareScrollRef.current = ref)}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.viewScroll}>
        <Text style={styles.title}>{t('SignIn')}</Text>
        <Text style={styles.welcome}>{t('WelcomeToAlwaseet')}</Text>
        <View style={{gap: 15}}>
          <CountryPhoneInput />
          <DynamicTextInput
            style={{width: '100%', marginBottom: 10}}
            placeholder="Enter your password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCompleteType="password"
            textContentType="password"
          />
        </View>
        <TouchableOpacity
          // onPress={() => navigateToForgetPassword(getValues('phone'))}
          style={styles.forgotPasswordHolder}>
          <Text style={styles.forgetPassText}>{t('Forgot your password')}</Text>
        </TouchableOpacity>

        <Button
          // loading={loading}
          // disabled={loading}
          buttonStyle={styles.button}
          buttonLabelStyle={styles.buttonLabel}
          handlePress={() => {
            // setPhoneNumberInputEvent('NONE');
            // handleSubmit(onSubmit)();
          }}>
          {t('Sign In')}
        </Button>

        <View style={styles.registerAndTechnicalContainer}>
          <TouchableOpacity
          // onPress={() => {
          //   props.navigation.navigate('Signup');
          //   resetState();
          // }}
          >
            <Text>
              <Text style={styles.haveAccount}>{`${t(
                "Don't have an account?",
              )} `}</Text>
              <Text style={styles.registerNow}>{t('Register now')}</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          // onPress={() =>
          //   props.navigation.navigate('TechnicalSupportScreen')
          // }
          >
            <Text style={styles.haveAccount}>{t('Facing a problem?')}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default LoginForm;
