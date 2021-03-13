import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './style';

const GenresButton = (props) => {
  const type = props.type;

  const backgroundColor = type  === 'primary' ? 'orange' : type === 'secondary' ? 'blue' : type === 'third' ? 'red' : 'green';
  const marginLeft = type === 'third' ? 140 : type === 'fourth' ? 140 : 0;
  const positionAb = type  === 'third' ? 'absolute' : type === 'fourth' ? 'absolute' : 'relative';
  const marginTop = type === 'fourth' ? 120: 0;

  const content = props.content;
  return (
    <View style={[styles.container, { marginLeft: marginLeft, position: positionAb, marginTop: marginTop} ]}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() =>{
        console.warn(content)}}
      >
        <Text style={styles.text}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default GenresButton;
