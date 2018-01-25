/**
 * List
 *
 *  <ListView>
      <List></List>
 *  </ListView>
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity,Dimensions } from 'react-native';
import PropTypes from 'prop-types';

// Consts and Libs
import { AppColors,AppStyles,AppSizes} from '@theme/';

import { Icon } from 'react-native-elements';
const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

/* Styles ==================================================================== */
const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 15,
        paddingTop: 10,
        width: deviceWidth - 30,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor: AppColors.border
    },
    list_up: {
        height: 188,
        borderRadius: 5,
        backgroundColor: '#dfdfdf',
        overflow: 'hidden'
    },
    list_up_image: {
        height: 188,
        resizeMode: 'cover'
    },
    list_down: {
        paddingTop: 8
    },
    list_down_title: {
        color: AppColors.brand.secondary,
        fontSize: 16
    },
    list_down_icon: {
        height: 30,
        flex: 1,
        alignItems:'center'
    },
    title_btn: {
       
    },
    title_btn_text: {
        color: AppColors.brand.threeary,
        margin: 5
    },
});

/* Component ==================================================================== */
class List extends Component {
    static componentName = 'List';
  
    static propTypes = {
      data: PropTypes.object,
    }
  
    static defaultProps = {
      data: null,
    }
    
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <TouchableOpacity style={[...AppStyles.column,styles.wrapper]} onPress={this.props.onPress}>
            <View style={styles.list_up}>
                <Image style={styles.list_up_image} source={{uri: this.props.data.pic}}></Image>
            </View>
            <View style={[...AppStyles.column,styles.list_down]}>
                <Text style={styles.list_down_title} numberOfLines={1}>{this.props.data.title ? this.props.data.title : '老铁们，我已经无话可说了😄😄😄'}</Text>
                <View style={[AppStyles.row,styles.list_down_icon]}>
                    <View style={[AppStyles.row,styles.title_btn]}>
                        <Icon
                        name='md-eye'
                        type='ionicon'
                        color={AppColors.brand.threeary}
                        size={16}
                        />
                        <Text style={styles.title_btn_text}>
                        {this.props.data.play_count}
                        </Text>
                    </View>
                    {/* <View style={[AppStyles.row,styles.title_btn]}>
                        <Icon
                        name='ios-aperture-outline'
                        type='ionicon'
                        color={AppColors.brand.threeary}
                        size={16}
                        />
                        <Text style={styles.title_btn_text}>
                        {this.props.data.collect_count}
                        </Text>
                    </View>
                    <View style={[AppStyles.row,styles.title_btn]}>
                        <Icon
                        name='md-heart-outline'
                        type='ionicon'
                        color={AppColors.brand.threeary}
                        size={16}
                        />
                        <Text style={styles.title_btn_text}>
                        {this.props.data.share_count}
                        </Text>
                    </View> */}

                    <Text style={styles.title_btn_text}>
                        #{this.props.data.classify_type == 1 ? '娱乐' : this.props.data.classify_type == 2 ? '搞笑' : this.props.data.classify_type == 3 ? '创意' : this.props.data.classify_type == 4 ? '动画' : this.props.data.classify_type == 5 ? '情感' : this.props.data.classify_type == 6 ? '音乐' : this.props.data.classify_type == 7 ? '美食' : this.props.data.classify_type == 8  ? '运动' : this.props.data.classify_type == 9 ? '科技' : '旅行'}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
      )
    }
}

/* Export Component ==================================================================== */
export default List;
