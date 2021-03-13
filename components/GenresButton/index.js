import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './style';

const GenresButton = (props) => {
  const type = props.type;

  const backgroundColor = type  === 'primary' ? 'orange' : type === 'secondary' ? 'blue' : 'green';
  const marginLeft = type === 'third' ? 100 : type === 'fourth' ? 100 : 0;
  const positionAb = type  === 'third' ? 'absolute' : type === 'absolute' ? 100 : 'relative';

  const content = props.content;
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor, marginLeft: marginLeft, position: positionAb}]}
        onPress={() =>{
        console.warn(content)}}
      >
        <Text style={styles.text}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default GenresButton;
