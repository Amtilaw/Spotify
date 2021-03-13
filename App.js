import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextField, {HelperText, Input} from '@material/react-text-field';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.board}>
        <Text style={styles.title}>Rechercher</Text>
        <StatusBar style="auto" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000'
  },

  board: {
    width: '100%',
    height: '100%',
  },
  title: {
    marginTop: '20%',
    width: '100%',
    marginLeft: '5%',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
});

