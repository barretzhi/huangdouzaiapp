/**
 * Style Guide
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, {Component} from 'react';
import {
  View,
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';

// Consts and Libs
import {AppColors, AppStyles} from '@theme/';
import {Api} from '@constants/';

// Components
import {TabViewAnimated, TabBar} from 'react-native-tab-view';
import {Icon} from 'react-native-elements';
import {
  Alerts,
  Button,
  Card,
  Spacer,
  FormInput,
  FormLabel
} from '@components/ui/';
import List from '@components/list/list';
import ListCard from '@components/list/listCard';

import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import FirstScene from './components/FirstScene';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  // Tab Styles
  tabContainer: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  tabbar_view: {
    flexDirection: 'row',
    marginTop: 25,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: AppColors.border,
  },
  tabbar: {
    flex: 1,
    backgroundColor: '#FFF',
    elevation: 0
  },
  tabbarIndicator: {
    width: 8,
    bottom: 3,
    left: 21,
    backgroundColor: '#000'
  },
  tab: {
    opacity: 1,
    width: 50,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  tabbar_text: {
    color: AppColors.brand.secondary,
    fontWeight: '700',
    fontSize: 12
  },
  tabbar_text_indicator: {
    color: AppColors.brand.primary,
    fontWeight: '700',
    fontSize: 12
  },
  /*日报*/
  daily_title: {
    marginHorizontal: 20,
    paddingTop: 10,
    fontSize: 24,
    fontWeight: '700',
    color: AppColors.brand.secondary,
  },
  slider: {
    marginTop: 15
  },
  sliderContentContainer: {
      paddingVertical: 10 // for custom animation
  },
});

/* Component ==================================================================== */
class ListView extends Component {
  static componentName = 'ListView';

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [{
            key: '-1',
            title: '推荐',
          }, {
            key: '-2',
            title: '日报',
          }, {
            key: '1',
            title: "娱乐",
          }, {
            key: '2',
            title: "搞笑",
          }, {
            key: '3',
            title: "创意",
          }, {
            key: '4',
            title: "动画",
          }, {
            key: '5',
            title: "情感",
          }, {
            key: '6',
            title: "音乐"
          }, {
            key: '7',
            title: "美食",
          }, {
            key: '8',
            title: "运动",
          }, {
            key: '9',
            title: "科技"
          }, {
            key: '10',
            title: "旅行"
          }
      ],
      data:[{
            data: [],
            todayitem: [],
            hotitem: [],
            subjectitem: [],
            page: 1
          }, {
            data: [],
            page: 1
          }, {
            data: [],
            page: 1
          }, {
            data: [],
            page: 1
          }, {
            data: [],
            page: 0
          }, {
            data: [],
            page: 1
          }, {
            data: [],
            page: 1
          }, {
            data: [],
            page: 1
          }, {
            data: [],
            page: 1
          }, {
            data: [],
            page: 1
          }, {
            data: [],
            page: 1
          }, {
            data: [],
            page: 1
          }
      ],
      refreshing: false
    };
  }
  
  componentWillMount() {
    this.getList();
  }

  /**
    * On Change Tab
    */
  handleChangeTab = (index) => {
    this.setState({
      index: index
    },() => {
      if(this.state.data[index].data.length == 0) {
        this.getList()
      }
    });
  }

  //getList
  getList = async() => {
    let res = await Api.get('/api/app/list/' + this.state.routes[this.state.index].key,{pagesize: 10,page: this.state.data[this.state.index].page});
    let tmp = this.state.data;
    //推荐获取数据
    if(this.state.routes[this.state.index].key == '-1' && res.data.page == 1) {
      tmp[this.state.index].todayitem = res.data.todayitem;
      tmp[this.state.index].hotitem = res.data.hotitem;
      tmp[this.state.index].subjectitem = res.data.subjectitem;
    }
    tmp[this.state.index].data = tmp[this.state.index].data.concat(res.data.list);
    this.setState({
        index: this.state.index,
        data: tmp,
        refreshing: false
    })
  }

  /**
   * On Refresh
   */
  handleRefresh = () => {
    let tmp = this.state.data;
    tmp[this.state.index].page = 1;
    tmp[this.state.index].data = []
    this.setState({
      index: this.state.index,
      data: tmp,
      refreshing: true
    },() => {
      this.getList()
    })
  }

  /**
   * On End
   */
  handleEnd = () => {
    let tmp = this.state.data;
    tmp[this.state.index].page = (tmp[this.state.index].page + 1)
    this.setState({
      index: this.state.index,
      data: tmp,
      refreshing: true
    },() => {
      this.getList()
    })
  }

  /**
   * On Play Video
   */
  PlayVideo = (item) => {
    this.props.setPlayInfo(item)
    .then(() =>Actions.video({type: 'push'}));
  }

  /**
   * 时间
   */
  DateWeek = (val) => {
    var d = new Date(); 
    d.setYear(parseInt(val.substring(0,4),10)); 
    d.setMonth(parseInt(val.substring(5,7)-1,10)); 
    d.setDate(parseInt(val.substring(8,10),10)); 
    d.setHours(parseInt(val.substring(11,13),10)); 
    d.setMinutes(parseInt(val.substring(14,16),10)); 
    d.setSeconds(parseInt(val.substring(17,19),10)); 
    let str = "";  
    if(new Date().toDateString() === new Date(d).toDateString()){
        str = "今日豆仔精选";
    } else {
      let week = new Date(d).getDay();  
      let date = (new Date()).getTime() - d.getTime();  //时间差的毫秒数  
      
      //计算出相差天数  
      let days = Math.floor(date/(24*3600*1000));
      if(days <= 3) {
        if (week == 0) {  
          str = "星期日";  
        } else if (week == 1) {  
          str = "星期一";  
        } else if (week == 2) {  
          str = "星期二";  
        } else if (week == 3) {  
          str = "星期三";  
        } else if (week == 4) {  
          str = "星期四";  
        } else if (week == 5) {  
          str = "星期五";  
        } else if (week == 6) {  
          str = "星期六";  
        } 
      } else {
          str = ((d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1)) + '/' + (d.getDate() < 10 ? '0' + d.getDate() : d.getDate()) + '   ' + new Date(d).getUTCFullYear()
      }
    }
    return str;
  }
  /**
   * 日报模板
   */
  TmpDaily = (item) => {
    let tmp  = []
    item.daily_video.forEach((it,i) => {
      tmp.push(<List key={i} data={it} onPress={() => this.PlayVideo(it)}></List>)
    });
    return(
      <View style={{flexDirection: 'column'}}>
          <Text style={styles.daily_title}>{this.DateWeek(item.created_at)}</Text>
          {tmp}
      </View>
    );
  }
  /**
   * 日报跳转
   * PressDaily
   */
  PressDaily = () => {
    this.setState({
      index: 1
    },() => {
      if(this.state.data[1].data.length == 0) {
        this.getList()
      }
    });
  }

  _renderItem ({item, i}) {
    return (
      <ListCard key={i} data={item}  style={i == 0 ? {marginLeft: 15} : {}}  onPress={() => this.PlayVideo(item)}></ListCard>
    );
  }

  /**
    * Which component to show
    */
  renderScene = ({route,index}) => {
    switch (route.key) {
      case '-1':
        return (
          <FirstScene
            route={this.state.data[0]}
            handleRefresh={() => this.handleRefresh()} 
            refreshing={this.state.refreshing}
            PlayVideo={(item) => this.PlayVideo(item)}
            handleEnd={() => this.handleEnd()}
            PressDaily={() => this.PressDaily()}
          ></FirstScene>
        );
      case '-2':
        return (
          <View style={styles.tabContainer}>
            <FlatList
              data={this.state.data[1].data}
              extraData={this.state}
              renderItem={({item}) => this.TmpDaily(item)}
              keyExtractor={(item, index) => (item.id)}
              onRefresh={() => this.handleRefresh()} 
              refreshing={this.state.refreshing}
              initialNumToRender={3}
              onEndReachedThreshold={0.1}
              onEndReached={() => this.handleEnd()}
              />
          </View>
        );
      default:
        return (
          <View style={styles.tabContainer}>
            <FlatList
              data={this.state.data[index].data}
              extraData={this.state}
              renderItem={({item}) => <List data={item} onPress={() => this.PlayVideo(item)}></List>}
              keyExtractor={(item, index) => (item.id)}
              onRefresh={() => this.handleRefresh()}
              refreshing={this.state.refreshing}
              initialNumToRender={3}
              onEndReachedThreshold={0.1}
              onEndReached={() => this.handleEnd()}/>
          </View>
        );
    }
  }

  /**
    * Header Component
    */
  renderHeader = props => (
    <View style={styles.tabbar_view}>
      <TabBar
        {...props}
        style={styles.tabbar}
        tabStyle={styles.tab}
        indicatorStyle={styles.tabbarIndicator}
        scrollEnabled={true}
        useNativeDriver={true}
        renderLabel={scene => (
        <Text
          style={[scene.focused
            ? styles.tabbar_text_indicator
            : styles.tabbar_text]}>{scene.route.title}</Text>
        )}
      />
      <View
        style={{
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Icon
          name='ios-search'
          type='ionicon'
          color={AppColors.brand.secondary}
          containerStyle={{
          backgroundColor: '#fff'
        }}/>
      </View>
    </View>

  )
  

  render = () => (
    <View style={[AppStyles.container]}>
      <StatusBar translucent={true} barStyle="dark-content"/>
      <TabViewAnimated
        useNativeDriver
        style={[styles.tabContainer]}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        navigationState={{routes:this.state.routes,index: this.state.index}}
        onIndexChange={this.handleChangeTab}/>
    </View>
  )
}

/* Export Component ==================================================================== */
export default ListView;
