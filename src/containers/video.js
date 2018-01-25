'use strict';
import React, {
  Component
} from 'react';

import {
  AlertIOS,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
} from 'react-native';

import Video from 'react-native-video';
import {
  ParallaxSwiper,
  ParallaxSwiperPage
} from "react-native-parallax-swiper";


const { width, height } = Dimensions.get("window");

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onBuffer = this.onBuffer.bind(this);
  }
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    controls: false,
    paused: true,
    skin: 'custom',
    ignoreSilentSwitch: null,
    isBuffering: false,
    index: 0
  };

  myCustomAnimatedValue = new Animated.Value(0);

  onLoad(data) {
    console.log('On load fired!');
    this.setState({duration: data.duration});
  }

  onProgress(data) {
    this.setState({currentTime: data.currentTime});
  }

  onBuffer({ isBuffering }: { isBuffering: boolean }) {
    this.setState({ isBuffering });
  }

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    } else {
      return 0;
    }
  }

  renderSkinControl(skin) {
    const isSelected = this.state.skin == skin;
    const selectControls = skin == 'native' || skin == 'embed';
    return (
      <TouchableOpacity onPress={() => { this.setState({
          controls: selectControls,
          skin: skin
        }) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {skin}
        </Text>
      </TouchableOpacity>
    );
  }

  renderRateControl(rate) {
    const isSelected = (this.state.rate == rate);

    return (
      <TouchableOpacity onPress={() => { this.setState({rate: rate}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    )
  }

  renderResizeModeControl(resizeMode) {
    const isSelected = (this.state.resizeMode == resizeMode);

    return (
      <TouchableOpacity onPress={() => { this.setState({resizeMode: resizeMode}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    )
  }

  renderVolumeControl(volume) {
    const isSelected = (this.state.volume == volume);

    return (
      <TouchableOpacity onPress={() => { this.setState({volume: volume}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    )
  }

  renderIgnoreSilentSwitchControl(ignoreSilentSwitch) {
    const isSelected = (this.state.ignoreSilentSwitch == ignoreSilentSwitch);

    return (
      <TouchableOpacity onPress={() => { this.setState({ignoreSilentSwitch: ignoreSilentSwitch}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {ignoreSilentSwitch}
        </Text>
      </TouchableOpacity>
    )
  }

  renderCustomSkin(i) {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

    return (
      <View style={styles.container}>
            
      </View>
    );
  }

  render() {
    return (
      <ParallaxSwiper
      speed={0}
      animatedValue={this.myCustomAnimatedValue}
      dividerWidth={0}
      // vertical={true}
      showsVerticalScrollIndicator={false}
      backgroundColor="red"
      onMomentumScrollEnd={activePageIndex => this.setState({index:activePageIndex})}
      showProgressBar={false}
    >
      <ParallaxSwiperPage
        BackgroundComponent={<Video
          source={{uri: 'https://aweme.snssdk.com/aweme/v1/play/?video_id=f6e47a6c7a5646659a2fc79bcfc43b74&amp;line=0&amp;ratio=720p&amp;media_type=4&amp;vr_type=0'}}
          style={styles.fullScreen}
          rate={this.state.rate}
          paused={this.state.index == 4 ? false : true}
          volume={this.state.volume}
          muted={this.state.muted}
          ignoreSilentSwitch={this.state.ignoreSilentSwitch}
          resizeMode={this.state.resizeMode}
          onLoad={this.onLoad}
          onBuffer={this.onBuffer}
          onProgress={this.onProgress}
          onEnd={() => { AlertIOS.alert('Done!') }}
          // repeat={true}
        />}
        ForegroundComponent={<View style={{backgroundColor: 'rgba(0,0,0,0.5)',width, height}}></View>}
      />
      <ParallaxSwiperPage
        BackgroundComponent={<Video
          source={{uri: 'https://aweme.snssdk.com/aweme/v1/play/?video_id=f6e47a6c7a5646659a2fc79bcfc43b74&amp;line=0&amp;ratio=720p&amp;media_type=4&amp;vr_type=0'}}
          style={styles.fullScreen}
          rate={this.state.rate}
          paused={this.state.index == 4 ? false : true}
          volume={this.state.volume}
          muted={this.state.muted}
          ignoreSilentSwitch={this.state.ignoreSilentSwitch}
          resizeMode={this.state.resizeMode}
          onLoad={this.onLoad}
          onBuffer={this.onBuffer}
          onProgress={this.onProgress}
          onEnd={() => { AlertIOS.alert('Done!') }}
          // repeat={true}
        />}
        ForegroundComponent={<View style={{backgroundColor: 'rgba(0,0,0,0.5)',width, height}}></View>}
      />
      <ParallaxSwiperPage
        BackgroundComponent={<Video
          source={{uri: 'https://aweme.snssdk.com/aweme/v1/play/?video_id=f6e47a6c7a5646659a2fc79bcfc43b74&amp;line=0&amp;ratio=720p&amp;media_type=4&amp;vr_type=0'}}
          style={styles.fullScreen}
          rate={this.state.rate}
          paused={this.state.index == 4 ? false : true}
          volume={this.state.volume}
          muted={this.state.muted}
          ignoreSilentSwitch={this.state.ignoreSilentSwitch}
          resizeMode={this.state.resizeMode}
          onLoad={this.onLoad}
          onBuffer={this.onBuffer}
          onProgress={this.onProgress}
          onEnd={() => { AlertIOS.alert('Done!') }}
          // repeat={true}
        />}
        ForegroundComponent={<View style={{backgroundColor: 'rgba(0,0,0,0.5)',width, height}}></View>}
      />
    </ParallaxSwiper>
      // {this.state.controls ? this.renderNativeSkin() : this.renderCustomSkin()}
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: "transparent",
    borderRadius: 5,
    position: 'absolute',
    bottom: 44,
    left: 4,
    right: 4,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingBottom: 10,
  },
  skinControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ignoreSilentSwitchControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: "white",
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
  nativeVideoControls: {
    top: 184,
    height: 300
  }
});

export default VideoPlayer;