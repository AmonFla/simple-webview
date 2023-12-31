import React, { Component } from 'react';
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView 
          source={{ uri: 'http://192.168.4.1/' }} 
        />
      </SafeAreaView>
    );
  }
}


export default MyWeb;