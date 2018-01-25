/**
 * Tabs Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Platform } from 'react-native';
import { Scene } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes,AppColors,AppFonts } from '@theme/';

// Components
import { TabIcon } from '@ui/';

// Scenes
import ListView from '@containers/List/ListContainer';
import AccountView from '@containers/account/AccountContainer';
import HomeView from '@containers/home/HomeContainer'
import VerifyView from '@containers/verify/VerifyContainer'

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'tabBar'} tabs lazy={true} showLabel={false} swipeEnabled={false} tabBarPosition={'bottom'} tabBarStyle={{backgroundColor: '#fff'}} pressOpacity={0.95}>
    <Scene
      {...navbarPropsTabs}
      key={'home'}
      path={"/home"}
      hideNavBar={true}
      icon={props => TabIcon({ ...props, icon: 'ios-ice-cream',iconselect: 'ios-ice-cream-outline', titlehide: true, title: '首页' })}
    >
      <Scene
        {...navbarPropsTabs}
        hideNavBar={true}
        key={'homeinner'}
        component={HomeView}
      />
    </Scene>

    <Scene
      key={'list'}
      {...navbarPropsTabs}
      hideNavBar={true}
      back={false}
      component={ListView}
      icon={props => TabIcon({ ...props, icon: 'ios-color-filter',iconselect: 'ios-color-filter-outline', titlehide: true, title: '发现' })}
    />

    {/* <Scene
      key={'verify'}
      {...navbarPropsTabs}
      title={'自助核名'}
      back={Platform.OS === 'ios' ? false : true}
      backButtonImage={require('../images/kong.png')}
      component={VerifyView}
      icon={props => TabIcon({ ...props, icon: 'ios-chatbubbles',iconselect: 'ios-chatbubbles-outline', titlehide: true, title: '消息' })}
    /> */}

    <Scene
      key={'account'}
      {...navbarPropsTabs}
      hideNavBar={true}
      component={AccountView}
      icon={props => TabIcon({ ...props, icon: 'ios-disc',iconselect: 'ios-disc-outline', titlehide: true, title: '我的' })}
    />
  </Scene>
);

export default scenes;
