/**
 * Login/Sign Up/Forgot Password Screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';
import {Actions} from 'react-native-router-flux';

// Components
import {Alerts, Card, Spacer, Text, Button} from '@ui/';
import Picker from 'react-native-picker';

// Consts and Libs
import {AppStyles} from '@theme/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  textinput: {
    height: 50,
    padding: 5,
    borderColor: '#D0D1D5',
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center'
  }
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
  _createDateData() {
    let date = [];
    for (let i = 2017; i < 2099; i++) {
      let month = [];
      for (let j = 1; j < 13; j++) {
        let day = [];
        if (j === 2) {
          for (let k = 1; k < 29; k++) {
            day.push(k + '日');
          }
          //Leap day for years that are divisible by 4, such as 2000, 2004
          if (i % 4 === 0) {
            day.push(29 + '日');
          }
        } else if (j in {
          1 : 1,
          3 : 1,
          5 : 1,
          7 : 1,
          8 : 1,
          10 : 1,
          12 : 1
        }) {
          for (let k = 1; k < 32; k++) {
            day.push(k + '日');
          }
        } else {
          for (let k = 1; k < 31; k++) {
            day.push(k + '日');
          }
        }
        let _month = {};
        _month[j + '月'] = day;
        month.push(_month);
      }
      let _date = {};
      _date[i + '年'] = month;
      date.push(_date);
    }
    return date;
  }
  /**
   * on select site
   */
  handleSite = () => {
    Picker.init({
      pickerData: this._createDateData(),
      selectedValue: [59],
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerTitleText: '请选择数据',
      pickerBg: [255,255,255,255],
      onPickerConfirm: data => {
        console.log(data);
      },
      onPickerCancel: data => {
        console.log(data);
      },
      onPickerSelect: data => {
        console.log(data);
      }
    });
    Picker.show();
  }

  /**
   * on select date
   */
  handleDate = () => {
    Picker.init({
      pickerData: this._createDateData(),
      selectedValue: [59],
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerTitleText: '请选择数据',
      pickerBg: [255,255,255,255],
      onPickerConfirm: data => {
        console.log(data);
      },
      onPickerCancel: data => {
        console.log(data);
      },
      onPickerSelect: data => {
        console.log(data);
      }
    });
    Picker.show();
  }

  render = () => {

    return (
      <View
        style={[
        AppStyles.container, {
          padding: 10,
          marginTop: 10
        }
      ]}>
        <Text style={{
          fontSize: 16
        }}>选择平台</Text>
        <Spacer size={20}/>
        <TouchableOpacity style={styles.textinput} onPress={() => this.handleSite()}>
          <Text style={{
            color: '#ddd',
            fontSize: 16
          }}>请选择平台</Text>
        </TouchableOpacity>
        <Spacer size={20}/>
        <Text style={{
          fontSize: 16
        }}>注册日期</Text>
        <Spacer size={20}/>
        <TouchableOpacity style={styles.textinput} onPress={() => this.handleDate()}>
          <Text style={{
            color: '#ddd',
            fontSize: 16
          }}>请选择时间</Text>
        </TouchableOpacity>
        <Spacer size={20}/>
        <Text style={{
          fontSize: 16
        }}>手机号码</Text>
        <Spacer size={20}/>
        <TextInput
          placeholder={'请输入手机号码'}
          keyboardType={'phone-pad'}
          maxLength={11}
          style={{
          height: 50,
          lineHeight: 50,
          fontSize: 16,
          padding: 5,
          borderColor: '#D0D1D5',
          borderWidth: StyleSheet.hairlineWidth
        }}
          selectionColor={'#222222'}
          underlineColorAndroid={'rgba(0,0,0,0)'}
          onChange={(v) => console.warn(v)}/>
        <Spacer size={40}/>
        <Button title={'查询'} onPress={() => console.log(1)}/>
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default AuthForm;
