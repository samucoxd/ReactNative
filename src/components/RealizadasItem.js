import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RealizadasItem = ({task}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task.data().task}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#212121',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    color: 'red',
    marginLeft: 10,
		fontStyle:'italic',
		textDecorationLine:'line-through',
  },
});

export default RealizadasItem;
