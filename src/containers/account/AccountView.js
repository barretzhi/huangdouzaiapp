/**
 * Launch Screen
 *  - Shows a nice loading screen whilst:
 *    - Preloading any specified app content
 *    - Checking if user is logged in, and redirects from there
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Alert,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Text,
  Platform
} from 'react-native';

import {Actions} from 'react-native-router-flux';

// Consts and Libs
import {AppStyles, AppSizes,AppColors} from '@theme/';

// Components
import List from '@components/list/list';
import {Alerts, Card, Spacer, Button} from '@ui/';
import { Icon } from 'react-native-elements';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#dfdfdf'
  },
  wrapper_header: {
    height: 260,
    backgroundColor: AppColors.brand.primary,
    flexDirection: 'column',
  },
  header_up: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 25 : 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_down: {
    height: 80,
    marginVertical: 10,
    marginHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_li: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  header_li_text: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 20,
  },
  btn: {
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  wrapper_center: {
    marginVertical: 10,
    backgroundColor: '#FFF'
  },
  center_ul: {
    height: 100,
    flexDirection: 'row',
  },
  center_li: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center_li_image: {
      height: 50,
      width: 50
  },
  center_li_text: {
      color: AppColors.border,
  }
});

/* Component ==================================================================== */
class AccountView extends Component {
  static componentName = 'HomeLaunch';

  constructor() {
    super();
  }

  handleSubmit = () => {
    Actions.app({type: 'reset'});
  }

  render = () => (
    <View style={[AppStyles.container]}>
      <StatusBar
        // backgroundColor={AppColors.brand.primary}
        barStyle="dark-content"
      />
      <ScrollView style={styles.wrapper}>
        <View style={styles.wrapper_header}>
          <View style={styles.header_up}>
            <Image source={require('../../images/head.png')} resizeMode={'center'} style={{height: 80,width: 80}}/>
            <Text style={{color: '#FFF',fontSize: 16,margin: 10}}>继续不下去了，欢迎合作一起做</Text>
            <Text style={{color: '#FFF',fontSize: 16,margin: 10}}>邮箱：barret.zhi@gmail.com</Text>
            <Text style={{color: '#FFF',fontSize: 16,margin: 10}}>官网：barret.zhi@gmail.com</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

/* Export Component ==================================================================== */
export default AccountView;
