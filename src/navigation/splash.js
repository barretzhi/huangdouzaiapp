/**
 * Auth Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene, ActionConst } from 'react-native-router-flux';

// Scenes
import SplashLaunch from '@containers/Splash/LaunchContainer';

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'splashlaunch'}>
    <Scene
      hideNavBar
      key={'splashlaunchsin'}
      type={ActionConst.RESET}
      component={SplashLaunch}
      analyticsDesc={'SplashLaunch: SplashLaunch App'}
    />
  </Scene>
);

export default scenes;
