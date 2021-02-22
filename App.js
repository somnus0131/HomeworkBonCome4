import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import SuGeButton from './src/SuGeButton';


export default function App() {
  const [appBgColor, setappBgColor] = useState('#FCFCFC');
  const [ButtonText, setButtonText] = useState('SuGeButton!!');
  const [ButtonTextColor, setButtonTextColor] = useState('#000000');
  const [ButtonBorderColor, setButtonBorderColor] = useState('#000000');
  const [ButtonBackgroundColor, setButtonBackgroundColor] = useState('#FCFCFC');
  const [ChangePage1, setChangePage1] = useState('flex');
  const [ChangePage2, setChangePage2] = useState('none');
  const reset1 = () => {
    setChangePage1('none');
    setChangePage2('flex');
  };
  const reset2 = () => {
    setChangePage1('flex');
    setChangePage2('none');
    setappBgColor('#FCFCFC')
    setButtonText('SuGeButton!!')
    setButtonTextColor('#000000')
    setButtonBorderColor('#000000')
    setButtonBackgroundColor('#FCFCFC')
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, flexDirection: 'column', width: '100%' }}>
          <View style={{ flex: 1, backgroundColor: appBgColor }}>
          </View>
          <View style={[styles.centerStyle, { flex: 1, backgroundColor: appBgColor }]}>
            <Text style={styles.topictext}>SuGeButton專屬視覺引導套色測試</Text>
          </View>
          <View style={[styles.centerStyle, { flex: 8, backgroundColor: appBgColor }]}>
            <SuGeButton
              ButtonText={ButtonText}
              TextColor={ButtonTextColor}
              BdColor={ButtonBorderColor}
              BgColor={ButtonBackgroundColor} />
          </View>
          <View style={{ flex: 9, backgroundColor: '#333333', flexDirection: 'column' }}>
            <View style={{ flex: 1, display: ChangePage1 }}>
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                  <Text style={styles.contenttexttopic}>按鈕文字設定</Text>
                </View>
                <View style={[styles.centerStyle, { flex: 2, flexDirection: 'row' }]}>
                  <View style={{ flex: 7, flexDirection: 'row' }}>
                    <Text style={[styles.contenttext, { flex: 1 }]}>內容</Text>
                    <TextInput
                      style={[styles.TextInputStyle, { flex: 4 }]}
                      placeholder='輸入按鈕文字'
                      clearTextOnFocus={true}
                      onChangeText={(text) => setButtonText(text)}
                    ></TextInput>
                  </View>
                  <View style={{ flex: 6, flexDirection: 'row' }}>
                    <Text style={[styles.contenttext, { flex: 1 }]}>顏色</Text>
                    <TextInput
                      style={[styles.TextInputStyle, { flex: 3 }]}
                      placeholder='輸入#字色碼'
                      clearTextOnFocus={true}
                      onChangeText={(text) => setButtonTextColor(text)}></TextInput>
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                  <Text style={styles.contenttexttopic}>按鈕樣式顏色設定</Text>
                </View>
                <View style={[styles.centerStyle, { flex: 2, flexDirection: 'row' }]}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={[styles.contenttext, { flex: 1 }]}>邊框</Text>
                    <TextInput
                      style={[styles.TextInputStyle, { flex: 4 }]}
                      placeholder='輸入#字色碼'
                      clearTextOnFocus={true}
                      onChangeText={(text) => setButtonBorderColor(text)}></TextInput>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={[styles.contenttext, { flex: 1 }]}>背景</Text>
                    <TextInput
                      style={[styles.TextInputStyle, { flex: 3 }]}
                      placeholder='輸入#字色碼'
                      clearTextOnFocus={true}
                      onChangeText={(text) => setButtonBackgroundColor(text)}></TextInput>
                  </View>
                </View>
              </View>
              <View style={[styles.centerStyle, { flex: 1, flexDirection: 'row' }]}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.contenttexttopic}>背景顏色設定</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <TextInput
                    style={styles.TextInputStyle}
                    placeholder='輸入#字色碼'
                    onChangeText={(text) => setappBgColor(text)}
                    clearTextOnFocus={true}></TextInput>
                </View>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <TouchableOpacity
                  style={[styles.buttonStyle, styles.centerStyle, { backgroundColor: '#FCFCFC' }]}
                  onPress={reset1}>
                  <Text style={styles.buttonText}>調整好了</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.centerStyle, { flex: 1, flexDirection: 'column', display: ChangePage2 }]}>
              <View style={[styles.centerStyle, { flex: 5 }]}>
                <Text style={styles.contenttexttopic}>您剛剛的設定如下</Text>
                <Text style={styles.contenttexttopic}>app背景顏色為：{appBgColor}</Text>
                <Text style={styles.contenttexttopic}>按鈕背景顏色為：{ButtonBackgroundColor}</Text>
                <Text style={styles.contenttexttopic}>按鈕邊框顏色為：{ButtonBorderColor}</Text>
                <Text style={styles.contenttexttopic}>按鈕文字內容為：{ButtonText}</Text>
                <Text style={styles.contenttexttopic}>按鈕文字顏色為：{ButtonTextColor}</Text>
              </View>
              <View style={{ flex: 2, width: '100%', alignItems: 'center' }}>
                <TouchableOpacity
                  style={[styles.buttonStyle, styles.centerStyle, { backgroundColor: '#FCFCFC' }]}
                  onPress={reset2}>
                  <Text style={styles.buttonText}>我都記好了，請還原</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topictext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contenttexttopic: {
    color: '#FCFCFC',
    fontSize: 20,
    padding: 10,
  },
  contenttext: {
    color: '#FCFCFC',
    fontSize: 15,
    padding: 10,
  },
  TextInputStyle: {
    backgroundColor: '#FCFCFC',
    height: 35,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    marginRight: 10,
    fontSize: 15,
  },
  buttonStyle: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    width: '80%',
  },
  buttonText: {
    fontSize: 25,
    padding: 5,
  },
});