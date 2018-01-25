/**
 * Login/Sign Up/Forgot Password Screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView, AsyncStorage, TouchableOpacity,StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

// Components
import {Alerts, Card, Spacer, Text, Button,TextInput} from '@ui/';

// Consts and Libs
import {AppStyles} from '@theme/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  
});

/* Component ==================================================================== */
class AuthForm extends Component {
  static componentName = 'Login';

  static propTypes = {
    user: PropTypes.shape({email: PropTypes.string, firstName: PropTypes.string, lastName: PropTypes.string})
  }

  static defaultProps = {
    user: null
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {

    return (
      <View style={[AppStyles.container,{padding: 10}]}>
        <TextInput 
        image={require('../../../images/phone.png')} 
        placeholder={'请输入手机号码'} 
        keyboardType={'phone-pad'}
        maxLength={11}
        onChange={(v) => console.warn(v)}/>
        <Spacer size={10} />
        <TextInput 
        image={require('../../../images/pwd.png')} 
        placeholder={'请输入账户密码'} 
        secureTextEntry={true}
        onChange={(v) => console.warn(v)}/>
        <Spacer size={40} />
        <Button title={'立即登录'} onPress={() => {
          Actions.app({ type: 'reset' })
        }}/>
        <Spacer size={20} />
        <Button outlined title={'找回密码'} onPress={() => Actions.passwordReset()}/>
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default AuthForm;
