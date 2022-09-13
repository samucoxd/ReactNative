import { View, Text } from 'react-native'
import React, { useState } from 'react'

const useTask = () => {
	const [addNew, setAddNew] = useState(false);

  const [task, setTask] = useState('');

	const [tasks, setTasks] = useState(['Programar app to do',]);

	const addTask = () => {
		setTasks(currentTasks => [...currentTasks, task])
		setTask('')
		setAddNew(false)
	}

	const deleteTask = (index) => {
		let temp = [...tasks]
		temp.splice(index,1)
		setTasks(temp)
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