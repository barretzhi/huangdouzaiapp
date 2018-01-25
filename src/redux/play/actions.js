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
async function getPlaystorage() {
  const values = await AsyncStorage.getItem('api/play');
  const jsonValues = JSON.parse(values);

  // Return from storage, or an empty object
  if (jsonValues && jsonValues.data) {
    return jsonValues;
  } else {
    return {data: {}};
  }
}

/**
  * Save to AsyncStorage
  */
async function savePlayToStorage(data) {
  await AsyncStorage.setItem('api/play', JSON.stringify(data));
  return data
}


export function getPlayInfo() {

  let data = {};

  return async(dispatch) => {
    if (!data) {
      const playstorage = await getPlaystorage();
      data = playstorage.data;
    }

    return dispatch({
      type: 'PLAY_INFO',
      data: {
        data: data
      }
    });
  }
}

export function setPlayInfo(formData={}) {
  let tmp = formData;
  return async(dispatch) => {
    let data = await savePlayToStorage(tmp);
    
    return dispatch({
      type: 'PLAY_INFO',
      data: {
        data: data
      }
    });
  }
}