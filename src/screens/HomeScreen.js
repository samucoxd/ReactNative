import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
	FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import TaskItem from '../components/TaskItem';
import ListHeader from '../components/ListHeader';
import useTask from '../hooks/useTask';
import { firebase } from '@react-native-firebase/firestore';


const screenHeight = Dimensions.get('screen').height;

const HomeScreen = () => {

	const {addTask,deleteTask,editTask,updateAdd,addNew,task,tasks} = useTask()

  return (
    <SafeAreaView style={{marginHorizontal: 20}}>

      {addNew && (
        <View>
          <TextInput
            onChangeText={editTask}
            placeholder="Agregar Nueva Tarea..."
            style={styles.input}
            value={task}
          />
          <View style={{marginVertical: 10, flexDirection: 'row'}}>
            <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={addTask}>
              <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => updateAdd(false)}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

			<View>
				<FlatList
					data = { tasks }
					keyExtractor = {(item) => item.id}
					renderItem = { ({item, index}) => <TaskItem task={item} onPress={() => deleteTask(index)}/>}
					ListHeaderComponent ={()=><ListHeader/>}
					ItemSeparatorComponent = {()=><View style={{marginVertical:4,}}/>}
				/>
			</View>



      <View style={styles.addButtonLocator}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => updateAdd(true)}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addButton: {
    alignItems: 'center',
    backgroundColor: 950,
    borderRadius: 30,
    height: 60,
    justifyContent: 'center',
    width: 60,
  },

  addButtonLocator: {
    right: 10,
    top: screenHeight - 300,
    position: 'absolute',
  },

  addButtonText: {
    color: 'white',
    fontSize: 25,
  },

  button: {
    alignSelf: 'flex-start',
    borderRadius: 10,
    padding: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 15,
  },

  acceptButton: {
    backgroundColor: 'green',
  },

  cancelButton: {
    backgroundColor: 'red',
    marginLeft: 5,
  },

  input: {
    backgroundColor: '#dedede',
    borderRadius: 10,
    padding: 10,
  },
});

export default HomeScreen;
