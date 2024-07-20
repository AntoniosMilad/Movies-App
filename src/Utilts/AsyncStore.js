import AsyncStorage from '@react-native-async-storage/async-storage';

export var AsyncStorageKeys;

(function (AsyncStorageKeys) {
  AsyncStorageKeys['CustomerToken'] = 'customer_token';
  AsyncStorageKeys['Language'] = 'language';
  AsyncStorageKeys['Country'] = 'country';
  AsyncStorageKeys['RecentSearch'] = 'recent_search';
})(AsyncStorageKeys || (AsyncStorageKeys = {}));
// If a valid string is passed then only it is stored, else key is removed

const saveValue = async (key, value) => {
  try {
    if (value) {
      await AsyncStorage.setItem(key, value);
    } else {
      await AsyncStorage.removeItem(key);
    }
    return true;
  } catch (e) {
    // saving error
    return false;
  }
};

const loadValue = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    // error reading value
    return null;
  }
};

export const saveCustomerToken = async token =>
  await saveValue(AsyncStorageKeys.CustomerToken, token);

export const loadCustomerToken = async () =>
  loadValue(AsyncStorageKeys.CustomerToken);

export const saveLanguage = async language =>
  saveValue(AsyncStorageKeys.Language, language);

export const loadLanguage = async () => loadValue(AsyncStorageKeys.Language);

export const saveCountry = async payload =>
  saveValue(AsyncStorageKeys.Country, payload);

  
export const saveDeepLinkingURL = async payload =>
  saveValue('DeepLinking', payload);

  export const changeLangOrCountry = async payload =>
  saveValue('LangOrCountry', payload);

export const loadCountry = async () => loadValue(AsyncStorageKeys.Country);

export const saveRecentSearch = async payload =>
  saveValue(AsyncStorageKeys.RecentSearch, payload);

export const loadRecentSearch = async () =>
  loadValue(AsyncStorageKeys.RecentSearch);
