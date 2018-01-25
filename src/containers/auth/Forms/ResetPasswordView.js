/**
 * Login/Sign Up/Forgot Password Screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView, AsyncStorage, TouchableOpacity, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

// Components
import {
  Alerts,
  Card,
  Spacer,
  Text,
  Button,
  TextInput
} from '@ui/';

// Consts and Libs
import {AppStyles} from '@theme/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({});

/* Component ==================================================================== */
class ResetPasswordView extends Component {
  static componentName = 'Login';

  static propTypes = {
    user: PropTypes.shape({email: PropTypes.string, firstName: PropTypes.string, lastName: PropTypes.string})
  }

  static defaultProps = {
    user: null
  }

  constructor(props) {
    super(props);
    this.state = {
      verfiy: false,
      verfiy_time: 60
    };
  }

  VerfiyTime() {
      if(this.state.verfiy) {
        return;
      }
      let that = this;
      let setverify = setInterval(() => {
          if(that.state.verfiy_time == 0) {
            that.setState({
              verfiy: false,
              verfiy_time: 60 
            });
            clearInterval(setverify);
          } else {
            that.setState({
              verfiy: true,
              verfiy_time: that.state.verfiy_time - 1 
            })
          }
       },1000)
  }

  render = () => {

    return (
      <View
        style={[
        AppStyles.container, {
          padding: 10
        }
      ]}>
        <TextInput
          image={require('../../../images/phone.png')}
          placeholder={'请输入手机号码'}
          keyboardType={'phone-pad'}
          maxLength={11}
          onChange={(v) => console.warn(v)}/>
        <Spacer size={10}/>
        <TextInput
          image={require('../../../images/lock.png')}
          placeholder={'请输入验证码'}
          keyboardType={'phone-pad'}
          maxLength={11}
          onChange={(v) => console.warn(v)}
          btnText={
            <Text style={{color: '#fff',fontSize: 14}}>{this.state.verfiy ? this.state.verfiy_time + '秒' : '获取验证码'}</Text>
          }
          btnOnPress={() => this.VerfiyTime()}/>
        <Spacer size={10}/>
        <TextInput
          image={require('../../../images/pwd.png')}
          placeholder={'请输入账户密码'}
          secureTextEntry={true}
          onChange={(v) => console.warn(v)}/>
        <Spacer size={40}/>
        <Button title={'确 定'} onPress={() => {
          console.log(11)
        }}/>
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default ResetPasswordView;
