/**
 * Launch Screen
 *  - Shows a nice loading screen whilst:
 *    - Preloading any specified app content
 *    - Checking if user is logged in, and redirects from there
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Alert,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';

import { Alerts, Card, Spacer, Text, Button } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  launchImage: {
    width: AppSizes.screen.width,
    height: AppSizes.screen.height,
  },
});

/* Component ==================================================================== */
class AppLaunch extends Component {
  static componentName = 'SplachLaunch';

  static defaultProps = {
    splash: null
  }

  static propTypes = {
    setSplash: PropTypes.func.isRequired,
    splash: PropTypes.shape({status: PropTypes.int})
  }

  constructor() {
    super();
    console.ignoredYellowBox = ['Setting a timer'];
  }

  componentDidMount = () => {
      // Once we've preloaded basic content,
      // - Try to authenticate based on existing token
      this.props.setSplash()
        // Logged in, show index screen
      .then(() => Actions.app({ type: 'reset' }))
        // Not Logged in, show Login screen
      .catch(() => Actions.authenticate({ type: 'reset' }));
  }

  handleSubmit = () => {
    Actions.app({ type: 'reset' });
  }

  render = () => (
    <View style={[AppStyles.container]}>
        <TouchableOpacity style={{backgroundColor:'#000',marginTop:50}} onPress={this.handleSubmit}>
              <Text>
                  Forgot Password
                </Text>
          </TouchableOpacity>
    </View>
  );
}

/* Export Component ==================================================================== */
export default AppLaunch;
