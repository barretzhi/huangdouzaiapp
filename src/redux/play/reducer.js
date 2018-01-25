/**
 * User Reducer
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

// Set initial state
const initialState = {};

export default function videoReducer(state = initialState, action) {
  switch (action.type) {
    case 'PLAY_INFO': {
      if (action.data) {
        const input = action.data;
        return {
          ...state,
          data: input.data
        };
      }
      return {};
    }
    default:
      return state;
  }
}
