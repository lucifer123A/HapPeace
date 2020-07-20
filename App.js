import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';

import * as firebase from 'firebase';
import {firebaseConfig} from './config';
firebase.initializeApp(firebaseConfig);

import * as admin from 'firebase-admin';
var serviceAccount= require('./lokesh-world-peace-firebase-adminsdk-h1tn2-9efd9d3f96.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lokesh-world-peace.firebaseio.com/",
  databaseAuthVariableOverride: {
    uid: "my-service-worker"
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
