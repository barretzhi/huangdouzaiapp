import React, { Component, PureComponent } from 'react';
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

import {AppColors, AppStyles} from '@theme/';

import List from '@components/list/list';

import {Icon} from 'react-native-elements';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from './SliderEntry';

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
class Ca extends PureComponent {

    static propTypes = {
        data: PropTypes.array.isRequired,
    };

    componentWillMount() {
        this._renderItemWithParallax = this._renderItemWithParallax.bind(this);
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
            data={item}
            even={(index + 1) % 2 === 0}
            parallax={true}
            parallaxProps={parallaxProps}
            onPress={() => this.props.PlayVideo(item)}
            />
        );
    }

    render() {
        let item = this.props.data;
        return(
            <Carousel
                data={item}
                renderItem={this._renderItemWithParallax}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                hasParallaxImages={true}
                firstItem={1}
                useScrollView={true}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.7}
                enableMomentum={false}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                loop={true}
                loopClonesPerSide={2}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={3000}
            />
        )
    }
}
export default class FirstScene extends PureComponent {

    static propTypes = {
        route: PropTypes.object.isRequired,
    };

    /**
     * 推荐模板
     */
    TmpToday = (item) => {
        return (
        <View>
            <TouchableOpacity style={{paddingLeft:15,marginTop:10}} onPress={() => this.props.PressDaily()}>
                <Text style={{fontSize: 16,fontWeight: '700',color: '#999'}}>TODAY'S SELECTION</Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 26,fontWeight: '800',color: AppColors.brand.secondary}}>豆仔今日编辑精选</Text>
                <Icon name='ios-arrow-forward' size={14} type='ionicon' color={'#999'} containerStyle={{marginLeft:8}}/>
                </View>
            </TouchableOpacity>
            <Ca data={item} PlayVideo={(item) => this.props.PlayVideo(item)}></Ca>
            <TouchableOpacity style={{paddingLeft:15,marginTop:10}}>
                <Text style={{fontSize: 26,fontWeight: '800',color: AppColors.brand.secondary}}>猜你喜欢</Text>
            </TouchableOpacity>
        </View>
        )
    }

    render () {
        const route = this.props.route;
        return (
            <View style={styles.tabContainer}>
                <FlatList
                    data={route.data}
                    extraData={this.state}
                    ListHeaderComponent={() => this.TmpToday(route.todayitem) }
                    renderItem={({item}) => <List data={item} onPress={() => this.props.PlayVideo(item)}></List>}
                    keyExtractor={(item, index) => (item.id)}
                    onRefresh={() => this.props.handleRefresh()} 
                    refreshing={this.props.refreshing}
                    initialNumToRender={3}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => this.props.handleEnd()}
                />
            </View>
        );
    }
}
