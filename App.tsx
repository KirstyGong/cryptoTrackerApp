import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
import Auxilary from './hoc/Auxillary/Auxillary'

import store from './src/redux/store'

import AppNavigator from './src/navigation/AppNavigator'

export default function App() {
  return (
      <AppNavigator />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
