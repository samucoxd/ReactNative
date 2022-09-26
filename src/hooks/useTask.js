import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { firebase } from '@react-native-firebase/firestore';

const useTask = () => {
	const [addNew, setAddNew] = useState(false);

  const [task, setTask] = useState('');

	const [tasks, setTasks] = useState([]);

	const [realizadas, setRealizadas] = useState([]);

	useEffect(()=>{
		getFirestoreData()
		getItemRealizadasData()
	},[])


	const getFirestoreData = () => {
		firebase.firestore().collection('tasks').onSnapshot(querySnapshot => {
			setTasks([])
			querySnapshot.forEach(doc => {
				const docdata = doc.data()
				if(docdata.active) setTasks(currentTasks => [...currentTasks, doc])
				
			})
		})
	}

	const getItemRealizadasData = () => {
		firebase.firestore().collection('tasks').onSnapshot(querySnapshot => {
			setRealizadas([])
			querySnapshot.forEach(doc => {
				const docdata = doc.data()
				if(docdata.active === false) setRealizadas(currentTasks => [...currentTasks, doc])
			})
		})
	}


	const addTask = () => {

		firebase.firestore().collection('tasks').add({
			task,
			active: true,
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
			//firebase.firestore().collection('tasks').doc(selectedTask.id).delete()	
			firebase.firestore().collection('tasks').doc(selectedTask.id).update({
				active: false,
			})	
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
		addTask,deleteTask,editTask,updateAdd,addNew,task,tasks,realizadas
	}
}

export default useTask