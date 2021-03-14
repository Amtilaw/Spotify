import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import styles from './style';

const Menue= (props) => {
  return (
  <View style={styles.board}>

      <Pressable
        style={styles.button}
        onPress={() =>{
        console.warn()}}
      >

        <Text style={styles.text}>Accueil</Text>
        <Image
          style={styles.icon}
          source={require('../../assets/accueilIcon.png')}
        />
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() =>{
        console.warn()}}
      >
        <Text style={styles.text}>Rechercher</Text>

        <Image
          style={styles.icon}
          source={require('../../assets/rechercherIcon.png')}
        />
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() =>{
        console.warn()}}
      >
        <Text style={styles.text}>Bibliothèque</Text>

        <Image
          style={styles.icon}
          source={require('../../assets/bibliIcon.png')}
        />
      </Pressable>
  </View>
  );
};

export default Menue;
