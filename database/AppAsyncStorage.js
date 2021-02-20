import { AsyncStorage } from 'react-native';
class AppAsyncStorage {
  static storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log("error storing" + error)
    }
  };

  static retrieveData = async (key) => {
    try {
      let value = await AsyncStorage.getItem(key);
         return value;
    } catch (error) {
      console.log("error at fetching")
    }
  }
}



export default AppAsyncStorage;