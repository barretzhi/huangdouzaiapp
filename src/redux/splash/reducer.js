/**
 * User Reducer
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

// Set initial state
const initialState = {};

export default function splashReducer(state = initialState, action) {
  switch (action.type) {
    case 'SPLASH_STATUS': {
      if (action.data) {
        const input = action.data;
        return {
          ...state,
          status: input.status
        };
      }
      return {};
    }
    default:
      return state;
  }
}
