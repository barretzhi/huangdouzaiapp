/**
 * Text Input template for tcomb
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import {View, TextInput, Image, StyleSheet, TouchableOpacity} from 'react-native';

/* Component ==================================================================== */
function textbox(locals) {
  if (locals.hidden) {
    return null;
  }

  if (!locals.btnText) {
    locals.btnText = null;
  }

  return (
    <View
      style={{
      flexDirection: 'row',
      height: 50,
      borderColor: '#D0D1D5',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10
    }}>
      {locals.image
        ? <Image
            source={locals.image}
            resizeMode={'center'}
            style={{
            width: 35,
            height: 35,
            margin: 10
          }}/>
        : null
      }
      <TextInput
        accessibilityLabel={locals.label}
        autoCapitalize={locals.autoCapitalize}
        autoCorrect={locals.autoCorrect}
        autoFocus={locals.autoFocus}
        blurOnSubmit={locals.blurOnSubmit}
        editable={locals.editable}
        keyboardType={locals.keyboardType}
        maxLength={locals.maxLength}
        multiline={locals.multiline}
        onBlur={locals.onBlur}
        onEndEditing={locals.onEndEditing}
        onFocus={locals.onFocus}
        onLayout={locals.onLayout}
        onSelectionChange={locals.onSelectionChange}
        onSubmitEditing={locals.onSubmitEditing}
        onContentSizeChange={locals.onContentSizeChange}
        placeholderTextColor={locals.placeholderTextColor}
        secureTextEntry={locals.secureTextEntry}
        selectTextOnFocus={locals.selectTextOnFocus}
        selectionColor={'#222222'}
        numberOfLines={locals.numberOfLines}
        underlineColorAndroid={'rgba(0,0,0,0)'}
        clearButtonMode={locals.clearButtonMode}
        clearTextOnFocus={locals.clearTextOnFocus}
        enablesReturnKeyAutomatically={locals.enablesReturnKeyAutomatically}
        keyboardAppearance={locals.keyboardAppearance}
        onKeyPress={locals.onKeyPress}
        returnKeyType={locals.returnKeyType}
        selectionState={locals.selectionState}
        onChangeText={value => locals.onChange(value)}
        onChange={locals.onChangeNative}
        placeholder={locals.placeholder}
        value={locals.value}
        style={{
        flex: 1,
        height: 40,
        lineHeight: 40,
        margin: 5,
        fontSize: 16
      }}/>
      <TouchableOpacity
        style={{
        width: locals.btnText != null
          ? 100
          : 0,
        height: 50,
        backgroundColor: '#5CBFC3',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }}
        onPress={locals.btnOnPress}>
        {locals.btnText}
      </TouchableOpacity>
    </View>
  );
}

/* Export Component ==================================================================== */
module.exports = textbox;