import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TaskItem = ({onPress, task}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}/>
      <Text style={styles.text}>{task}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderRadius: 15,
    height: 30,
    width: 30,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#212121',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    color: 'white',
    marginLeft: 10,
  },
});

export default TaskItem;
