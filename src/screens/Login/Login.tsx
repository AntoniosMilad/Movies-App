import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginForm from './Components/LoginForm/LoginForm';
import {commonStyles} from 'Theme';
import Header from 'Common/DummyComponents/Header/Header';

const Login = () => {
  return (
    <View>
      <Header
        style={commonStyles.noBorderHeader}
        isCloseIcon={false}
        handleGoBack={() => {
          console.log('test');
        }}
      />
      <LoginForm />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
