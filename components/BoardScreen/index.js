import React from 'react';
import {View, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import GenreButton from "../GenresButton";
import Menue from "../Menue";

const BoardScreen= (props) => {
  return (
    <View style={styles.board}>
      <Text style={styles.title}>Rechercher</Text>
      <Text style={styles.titleh2}>Vos genres préférés</Text>
      <StatusBar style="auto" />
      <View style={styles.genreBoard}>
        <GenreButton type="primary" content="Rap"/>

        <GenreButton type="secondary" content="Pop"/>

        <GenreButton type="third" content="Indie"/>
        
        <GenreButton type="fourth" content="Variété française"/>
      </View>
      <Menue />
    </View>
  );
};

export default BoardScreen;
