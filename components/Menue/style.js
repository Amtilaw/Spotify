import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 board: {
  width: '100%',
  height: 70,
  backgroundColor: '#211F24',
  position: 'absolute',
  bottom: 5,
  flex: 1,
  flexDirection: 'row',

 },
 button: {
  width: '33%',
  height: '100%',
 },
 text: {
  position: 'relative',
  left: '25%',
  top: '73%',
  color: 'white',
 },
 icon: {
  width: '30%',
  height: '40%',
  position: 'relative',
  left: '30%',
  resizeMode: 'contain',
  tintColor: 'white', 
 }
});



export default styles;
