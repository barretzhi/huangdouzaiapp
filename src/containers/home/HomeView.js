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
  Dimensions,
  ImageBackground,
  Text,
  Platform,
  TouchableHighlight
} from 'react-native';

import {Actions} from 'react-native-router-flux';

// Consts and Libs
import {AppStyles, AppSizes,AppColors,AppFonts} from '@theme/';
import { Api } from '@constants/';

// Components
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { Icon } from 'react-native-elements';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: deviceWidth - 50,
    height: deviceHeight - 200,
    borderTopLeftRadius: (deviceWidth - 50) / 2,
    borderTopRightRadius: (deviceWidth - 50) / 2,
    borderBottomRightRadius:  10,
    borderBottomLeftRadius: (deviceWidth - 50) / 2,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    backgroundColor: 'rgba(0,0,0,0)',
    shadowOpacity:0.5,
    flexDirection: 'column',
    overflow: 'hidden'
  },
  card_up_view: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    borderTopLeftRadius: (deviceWidth - 50) / 2,
    borderTopRightRadius: (deviceWidth - 50) / 2,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  icon:{
    position: 'absolute',
    zIndex: 999,
    top: '50%',
    left: '50%',
    marginLeft: -18,
  },
  card_up: {
    flex: 1,
    overflow: 'hidden',
    borderTopLeftRadius: (deviceWidth - 50) / 2,
    borderTopRightRadius: (deviceWidth - 50) / 2,
    backgroundColor: Platform.OS == 'ios' ? '#fff' : 'rgba(0,0,0,0)'
  },
  card_down: {
    flexDirection: 'column',
    height: 160,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderBottomRightRadius:  10,
    borderBottomLeftRadius: (deviceWidth - 50) / 2,
  },
  title: {
    color: AppColors.textPrimary,
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 20,
    padding: 5,
    fontWeight: '700'
  },
  title_btn_view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  title_btn: {
    width: 88,
    justifyContent:'center',
    alignItems:'center'
  },
  title_btn_text: {
      color: AppColors.brand.secondary
  },
  footer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonContainer:{
    width:220,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  button:{
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    zIndex: 0,
  },
  orange:{
    width:55,
    height:55,
    borderWidth:6,
    borderColor:'rgb(246,190,66)',
    borderWidth:4,
    borderRadius:55,
    marginTop:-15
  },
  green:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#01df8a',
  },
  red:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#fd267d',
  } 
});

/* Component ==================================================================== */
class HomeLaunch extends Component {
  static componentName = 'HomeLaunch';

  constructor() {
    super();
    this.state = {
      data: [],
      id_data: [],
      tmp: null,
      url: null,
    }
  }

  async componentWillMount() {
    let that = this;
    let res = await Api.get('/api/app/hot');
    let tmp = [];
    res.data.forEach((item) => {
      tmp.push(item.id)
    })
    this.setState({
      data: res.data,
      url: res.data[0].pic,
      id_data: tmp
    },() => {
      that.renderRow()
    });
  }

  async goBackFromTop() {
    let res = await Api.post('/api/app/hot',{id: this.state.id_data});
    let index = this.swiper.state.sindex;
    if(this.swiper.state.sindex == 0) {
      index = this.state.data.length
    } else if(this.swiper.state.sindex == 1) {
      index = this.state.data.length + 1
    }
    let tmp = this.state.data
    let id_data = this.state.id_data;
    id_data.push(res.data.id)
    tmp[index-2] = res.data
    this.setState({
        data: tmp,
        id_data: id_data
    })
    this.renderRow()
    this.swiper.swipeTop(800)
  }

  CardonSwiped(index) {
    this.setState({
      url: this.state.data[index+1].pic
    })
  }

  PlayVideo(item,index) {
    this.props.setPlayInfo(item)
    .then(() =>Actions.video({type: 'push'}));
  }

  renderRow() {
    let tmp = [];
    
    this.state.data.forEach((item,index) => {
      tmp.push(
        <Card style={styles.card} key={item.id} onSwipedLeft={() => this.CardonSwiped(index)} onSwipedRight={() => this.CardonSwiped(index)}>
        <TouchableOpacity activeOpacity={0.8} style={styles.card_up_view} onPress={() => this.PlayVideo(item,index)}>
            <Icon
                name='md-eye'
                type='ionicon'
                color='#fff'
                size={36}
                containerStyle={styles.icon}
              />
          <Image style={styles.card_up} resizeMode={'cover'} blurRadius={0.5} source={{uri: item.pic}}/>
        </TouchableOpacity>
          
          <View style={styles.card_down}>
            <Text style={styles.title} numberOfLines={2}>{item.title ? item.title : '老铁们，我已经无话可说了😄😄😄'}</Text>
            <View style={styles.title_btn_view}>
                <View style={styles.title_btn}>
                    <Icon
                      name='md-eye'
                      type='ionicon'
                      color={AppColors.brand.primary}
                      size={36}
                      containerStyle={styles.title_btn_icon}
                    />
                    <Text style={styles.title_btn_text}>
                      {item.play_count}
                    </Text>
                </View>
                <View style={styles.title_btn}>
                    <Icon
                      name='ios-aperture-outline'
                      type='ionicon'
                      color={AppColors.brand.primary}
                      size={36}
                      containerStyle={styles.title_btn_icon}
                    />
                    <Text style={styles.title_btn_text}>
                    {item.share_count}
                    </Text>
                </View>
                <View style={styles.title_btn}>
                    <Icon
                      name='md-heart-outline'
                      type='ionicon'
                      color={AppColors.brand.primary}
                      size={36}
                      containerStyle={styles.title_btn_icon}
                    />
                    <Text style={styles.title_btn_text}>
                      {item.collect_count}
                    </Text>
                </View>
            </View>
          </View>
        </Card>
      )
    });
    this.setState({
      tmp: tmp
    })
  }

  render = () => (
      <ImageBackground style={[AppStyles.container]} resizeMode={'cover'} blurRadius={50} source={this.state.url != null ? {uri:this.state.url} : require('../../images/launch.jpg')}>
        <StatusBar
            translucent={true}
            backgroundColor="rgba(0,0,0,0)"
            barStyle="dark-content"
          />
        {
          this.state.tmp != null
          ?
          <CardStack
            style={styles.content}
            renderNoMoreCards={() => (<View style={{backgroundColor: 'rgba(0,0,0,0)'}}></View>)}
            ref={swiper => {
              this.swiper = swiper
            }}
            loop={true}
            verticalSwipe={false}
          >
            {this.state.tmp}
          </CardStack>
          :
          null
        }
        {
          this.state.tmp != null
          ?
          <View style={styles.footer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button,styles.red]} onPress={()=>{
                this.swiper.swipeLeft();
              }}>
              <Icon
                  name='hand-o-left'
                  type='font-awesome'
                  color='#fd267d'
                  size={36}
                />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button,styles.orange]} onPress={() => {
                this.goBackFromTop();
              }}>
              <Icon
                  name='remove'
                  type='font-awesome'
                  color='rgb(246,190,66)'
                  size={36}
                />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button,styles.green]} onPress={()=>{
                this.swiper.swipeRight();
              }}>
              <Icon
                  name='hand-o-right'
                  type='font-awesome'
                  color='#01df8a'
                  size={36}
                />
              </TouchableOpacity>
            </View>
          </View>
          :
          null
        }
      </ImageBackground>
  );
}

/* Export Component ==================================================================== */
export default HomeLaunch;
