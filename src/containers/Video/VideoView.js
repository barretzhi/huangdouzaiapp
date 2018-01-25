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
  ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import {AppStyles, AppSizes,AppColors,AppFonts} from '@theme/';

import VideoPlayer from 'react-native-af-video-player';
import { Alerts, Card, Spacer, Text, Button } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  
});

/* Component ==================================================================== */
class VideoView extends Component {
  static componentName = 'SplachLaunch';

  static defaultProps = {
  }

  static propTypes = {
  }

  constructor() {
    super();
  }

  componentDidMount = () => {
    
  }

 
  render = () => (
    <ImageBackground style={[AppStyles.container,{paddingTop: 20}]} resizeMode={'cover'} blurRadius={50} source={{uri: this.props.play.data.pic}}>
        <StatusBar
            translucent={true}
            backgroundColor="rgba(0,0,0,0)"
            barStyle="default"
          />
        <VideoPlayer 
          url={this.props.play.data.video} 
          title={this.props.play.data.title}
          placeholder={this.props.play.data.pic}
          rotateOnFullScreen={this.props.play.data.type == 1 ? false : true}
          playInBackground={true}
          playWhenInactive={true}
          onMorePress={Actions.error}
          onBackPress={() => Actions.pop()}
        />
    </ImageBackground>
  );
}

/* Export Component ==================================================================== */
export default VideoView;
