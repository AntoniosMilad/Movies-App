
import loginReducer from './loginReducer';

import {combineReducers} from 'redux';

 

// export default
const appReducer = combineReducers({
  login:loginReducer
});


export default appReducer;
