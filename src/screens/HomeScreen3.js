import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import useTask from '../hooks/useTask';
import { Card } from '../components/card';
import { COLORS, SIZES, FONTS, SHADOW } from '../constants/index'; 

const screenHeight = Dimensions.get('screen').height;

const HomeScreen = () => {
  const {addTask, deleteTask, editTask, updateAdd, addNew, task, tasks} =
    useTask();

  return (
		<View style={styles.container}>
			<Text style={{ ...FONTS.h1_semiBold, color: COLORS.secondary, marginBottom: 15 }}>What need to be done.</Text>
        <FlatList
          style={{flex: 1}}
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <Card
              data={item}
							onPress={() => deleteTask(index)}
            />
          )}
        />
				<View style={styles.textBoxWrapper}>
            <TextInput
                style={styles.textInput}
                placeholder="New Task"
                placeholderTextColor={COLORS.primary}
								onChangeText={editTask}
                value={task} />
            <TouchableOpacity
                style={styles.btn}
                onPress={addTask}>
                <Text style={{ fontSize: 34, color: COLORS.secondary }}>+</Text>
            </TouchableOpacity>
        </View>
		</View>
  );
};

const styles = StyleSheet.create({
	container: {
			paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight + 10,
			flex: 1,
			backgroundColor: COLORS.primary,
			padding: SIZES.padding
	},
	textBoxWrapper: {
			width: "100%",
			position: "absolute",
			bottom: 0,
			left: 0,
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			padding: SIZES.padding
	},
	textInput: {
			...SHADOW,
			borderRadius: SIZES.textBoxRadius,
			backgroundColor: COLORS.secondary,
			height: 42,
			paddingLeft: 15,
			width: "90%",
			color: COLORS.primary,
			marginRight: 15,
			...FONTS.h2_semiBold,
	},
	btn: {
			...SHADOW,
			backgroundColor: COLORS.accent,
			height: 42,
			width: 42,
			borderRadius: 100,
			alignItems: "center",
			justifyContent: "center",
	}
});

export default HomeScreen;
