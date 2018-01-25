/**
 * Auth Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene, ActionConst,Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Scenes
import LoginForm from '@containers/auth/Forms/LoginContainer';
import SignUpForm from '@containers/auth/Forms/SignUpContainer';
import ResetPasswordForm from '@containers/auth/Forms/ResetPasswordContainer';

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'authenticate'} hideNavBar>
    <Scene
      {...AppConfig.navbarProps}
      key={'login'}
      title={'登录'}
      rightTitle={'注册'}
      component={LoginForm}
      onRight={() => Actions.signUp()  }
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'signUp'}
      title={'注册'}
      component={SignUpForm}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'passwordReset'}
      title={'找回密码'}
      component={ResetPasswordForm}
    />
  </Scene>
);

export default scenes;
