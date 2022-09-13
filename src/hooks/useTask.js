import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { firebase } from '@react-native-firebase/firestore';

const useTask = () => {
	const [addNew, setAddNew] = useState(false);

  const [task, setTask] = useState('');

	const [tasks, setTasks] = useState([]);

	useEffect(()=>{
		getFirestoreData()
	},[])


	const getFirestoreData= () => {
		firebase.firestore().collection('tasks').onSnapshot(querySnapshot => {
			setTasks([])
			querySnapshot.forEach(doc => {
				setTasks(currentTasks => [...currentTasks, doc])
			})
		})
	}


	const addTask = () => {

		firebase.firestore().collection('tasks').add({
			task
		}).then(response => {
			//setTasks(currentTasks => [...currentTasks, task])
			setTask('')
			setAddNew(false)
		})
	}

	const deleteTask = (index) => {
		// let temp = [...tasks]
		// temp.splice(index,1)
		// setTasks(temp)
		const selectedTask = tasks[index]

		try {
			firebase.firestore().collection('tasks').doc(selectedTask.id).delete()	
		} catch (e) {
			console.log(e)
		}
		

	}

	const updateAdd = (state) => {
		setAddNew(state)
	}

	const editTask = (text) => {
		setTask(text)
	}

	return {
		addTask,deleteTask,editTask,updateAdd,addNew,task,tasks
	}
}

export default useTask