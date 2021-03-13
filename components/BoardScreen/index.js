import React from 'react';
import {View, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

const BoardScreen= (props) => {
  return (
    <View style={styles.board}>
      <Text style={styles.title}>Rechercher</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default BoardScreen;
