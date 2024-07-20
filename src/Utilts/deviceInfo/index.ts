import deviceInfo from 'react-native-device-info';

// get app name for both arabic and english case
const getAppName = () => {
  return deviceInfo.getApplicationName();
};

export {deviceInfo, getAppName};
