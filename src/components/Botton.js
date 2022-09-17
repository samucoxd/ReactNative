import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Botton = (props) => {

	const {onPress, text} = props

	return (
		<TouchableOpacity onPress={onPress}>
			<Text>{text}</Text>
		</TouchableOpacity>
	)
}

export default Botton