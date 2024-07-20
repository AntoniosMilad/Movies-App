import {
  SET_IS_LOGGED_IN,
  SET_USER_TOKEN,
  SET_IS_LOGGED_OUT,
  SET_EMAIL_ID,
  SET_IS_LOADDING,
} from '../Constants/Login.constants';
import axios from 'axios';
import Config from 'react-native-config';
import Toast from 'react-native-toast-message';
import { saveCustomerToken } from '../../Utilts/AsyncStore';
// import * as generalActions from '../../../../Redux/Actions/general';
// import LoginEventHandler from '../../screens/Login/hook/LoginEventHandler';
import { Dispatch } from 'redux';
import { NavigationProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';

interface FormData {
  email: string;
  emailId: string;
  password: string;
}

interface RootState {
  auth: {
    country: string;
    // other auth-related state properties...
  };
  // other slices of your Redux store...
}

const { logSuccessfulLoginEvent, logFailedLoginEvent } = LoginEventHandler();

export const setIsLoggedIn = (isLoggedIn: boolean) => {
  return {
    type: SET_IS_LOGGED_IN,
    payload: isLoggedIn,
  };
};

export const setIsLoading = (isLoading: boolean) => {
  return {
    type: SET_IS_LOADDING,
    payload: isLoading,
  };
};
export const setUserToken = (token: string) => {
  return {
    type: SET_USER_TOKEN,
    payload: token,
  };
};

export const setIsLoggedOut = (isLoggedOut: boolean) => {
  return {
    type: SET_IS_LOGGED_OUT,
    payload: isLoggedOut,
  };
};

export const setEmailId = (email: string) => {
  return {
    type: SET_EMAIL_ID,
    payload: email,
  };
};





export const login = (data: FormData, handleNavigation: Function, createCart: Function) => {

  return (dispatch: Dispatch, getState: () => RootState) => {
    const { auth }: RootState = getState();
    const countryId = auth.country;
    const BaseUrl =  Config.Auth_BASE_URL_SA ;

    dispatch(setIsLoading(true));
    axios.post(`${BaseUrl}login`, { email: data.email, password: data.password })
      .then(response => {
        const token = response?.data?.token;
        if (token) {
          // dispatch(generalActions.setIsLoggedIn(true));
          dispatch(setIsLoggedIn(true));
          // dispatch(setUserToken(token));
          createCart();

          saveCustomerToken(token)
            .then(() => {
              logSuccessfulLoginEvent();
              dispatch(setEmailId(''));
              handleNavigation();
              dispatch(setIsLoading(false));

            })
        }
      })
      .catch(error => {
        console.log('errorerrorerror::', error);
        dispatch(setIsLoading(false));
        logFailedLoginEvent(error);
        Toast.show({
          type: 'homzToast',
          props: { variant: 'error', message: error?.response?.data?.message }
        });
      });
  };
};

