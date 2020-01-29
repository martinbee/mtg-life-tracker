import { AsyncStorage } from 'react-native';

export default {
  async get(key) {
    return await AsyncStorage.getItem(key);
  },
  async set(key, value) {
    return await AsyncStorage.setItem(key, value);
  },
};
