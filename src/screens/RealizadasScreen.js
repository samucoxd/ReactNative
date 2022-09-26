import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RealizadasItem from '../components/RealizadasItem';
import ListRealizadasHeader from '../components/ListRealizadasHeader';
import useTask from '../hooks/useTask';
import {firebase} from '@react-native-firebase/firestore';

const screenHeight = Dimensions.get('screen').height;

const RealizadasScreen = () => {
  const {addTask, deleteTask, editTask, updateAdd, addNew, task, tasks,realizadas} =
    useTask();

  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <View>
        <FlatList
          data={realizadas}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <RealizadasItem task={item} />
          )}
          ListHeaderComponent={() => <ListRealizadasHeader />}
          ItemSeparatorComponent={() => <View style={{marginVertical: 4}} />}
        />

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

export default RealizadasScreen;
