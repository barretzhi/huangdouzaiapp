/**
 * App Navigation
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Scenes
import AppLaunch from '@containers/Launch/LaunchContainer';
import Placeholder from '@components/general/Placeholder';
import ErrorModal from '@components/general/ErrorModal';
import AuthScenes from './auth';
import SplashScenes from './splash';
import TabsScenes from './tabs';
import Video from '@containers/Video/VideoContainer';

/* Routes ==================================================================== */
export default Actions.create(
  <Scene key={'root'} {...AppConfig.navbarProps} modal>
    <Scene
      hideNavBar
      key={'splash'}
      component={AppLaunch}
    />
    {/* Splach */}
    {SplashScenes}

    {/* Auth */}
    {AuthScenes}

    {/* Main App */}
    <Scene key={'app'} {...AppConfig.navbarProps} title={AppConfig.appName} hideNavBar={false} type={ActionConst.RESET}>
      {/* Tabbar */}
      {TabsScenes}
    </Scene>
    <Scene  key="error" component={ErrorModal} hideNavBar />
     {/* General */}
     <Scene
        {...AppConfig.navbarProps}
        clone
        hideNavBar={true}
        hideTabBar={true}
        key={'video'}
        component={Video}
      />
      <Scene
        clone
        hideTabBar={true}
        key={'comingSoon'}
        title={'Coming Soon'}
        component={Placeholder}
      />
  </Scene>,
);
