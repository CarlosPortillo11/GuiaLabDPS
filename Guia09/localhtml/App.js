import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview'


class App extends Component{
  render(){
    return(
      <WebView
        source={require('./assets/index.html')}
        style={styles.webStyle}
      />
    )
  }
}

export default App

const styles = StyleSheet.create({
  webStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 70,
  }
})