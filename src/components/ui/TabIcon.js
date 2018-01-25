/**
 * Tabbar Icon
 *
    <TabIcon icon={'search'} focused={false} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View,Text,Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { AppColors,AppStyles,AppFonts } from '@theme/';

/* Component ==================================================================== */
const TabIcon = ({ icon,iconselect, focused,titlehide,title }) => (
  <View style={{...AppStyles.centerAligned}}>
      <Icon
        name={focused ? icon : iconselect}
        size={30}
        type='ionicon'
        color={focused ? AppColors.tabbar.iconSelected : AppColors.tabbar.iconDefault}
      >
      </Icon>
      { titlehide ? <Text style={{ fontSize: 12,top: Platform.OS === 'ios' ? -10 : 0,color: focused ? AppColors.tabbar.iconSelected : AppColors.tabbar.iconDefault }}>{title}</Text> : null }
  </View>
);

TabIcon.propTypes = { icon: PropTypes.string.isRequired,iconselect: PropTypes.string.isRequired, focused: PropTypes.bool };
TabIcon.defaultProps = { icon: 'ios-home',iconselect:'ios-home-outline', focused: false };

/* Export Component ==================================================================== */
export default TabIcon;
