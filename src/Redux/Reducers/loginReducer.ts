enum LoginActionTypesEnum {
  SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN",
  SET_USER_TOKEN = "SET_USER_TOKEN",
  SET_IS_LOGGED_OUT = "SET_IS_LOGGED_OUT",
  SET_EMAIL_ID = 'SET_EMAIL_ID',
  SET_IS_LOADDING = 'SET_IS_LOADDING',
}

interface ActionPayload {
  [LoginActionTypesEnum.SET_IS_LOGGED_IN]: boolean;
  [LoginActionTypesEnum.SET_USER_TOKEN]: string;
  [LoginActionTypesEnum.SET_EMAIL_ID]: string;
  [LoginActionTypesEnum.SET_IS_LOADDING]: boolean;
  [LoginActionTypesEnum.SET_IS_LOGGED_OUT]: LoginState;
}

type LoginActionTypes = {
  type: LoginActionTypesEnum;
  payload?: ActionPayload[LoginActionTypesEnum];
};

interface LoginState {
  isLoggedIn: boolean;
  userToken: string;
  email: string;
  isLoading: boolean;
}

const initialState: LoginState = {
  isLoggedIn: false,
  userToken: '',
  email: '',
  isLoading: false,
};

const loginReducer = (state: LoginState = initialState, action: LoginActionTypes): LoginState => {
  switch (action.type) {
    case LoginActionTypesEnum.SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload as boolean,
      };
    case LoginActionTypesEnum.SET_IS_LOADDING:
      return {
        ...state,
        isLoading: action.payload as boolean,
      };
    case LoginActionTypesEnum.SET_USER_TOKEN:
      return {
        ...state,
        userToken: action.payload as string,
      };
    case LoginActionTypesEnum.SET_EMAIL_ID:
      return {
        ...state,
        email: action.payload as string,
      };
    case LoginActionTypesEnum.SET_IS_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};

export default loginReducer;
