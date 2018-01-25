/**
 * User Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import {AsyncStorage} from 'react-native';

/**
  * Get Login Credentials from AsyncStorage
  */
async function getSplashtorage() {
  const values = await AsyncStorage.getItem('api/splash');
  const jsonValues = JSON.parse(values);

  // Return from storage, or an empty object
  if (jsonValues && jsonValues.status) {
    return jsonValues;
  } else {
    return {status: 0};
  }
}

/**
  * Save to AsyncStorage
  */
async function saveSplashToStorage(status = 0) {
  await AsyncStorage.setItem('api/splash', JSON.stringify({status}));
  return status
}

/**
  * Remove from AsyncStorage
  */
async function removeSplashStorage() {
  await AsyncStorage.removeItem('api/splash');
}

export function getSlplash() {

  let status = 0;

  return async(dispatch) => {
    if (!status) {
      const splashtorage = await getSplashtorage();
      status = splashtorage.status;
    }

    return dispatch({
      type: 'SPLASH_STATUS',
      data: {
        status: status
      }
    });
  }
}

export function setSplash() {
  return async(dispatch) => {
    let status = await saveSplashToStorage(1);
    
    return dispatch({
      type: 'SPLASH_STATUS',
      data: {
        status: status
      }
    });
  }
}