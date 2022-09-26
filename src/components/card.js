import React from 'react';
import { View, Text, StyleSheet, Pressable,CheckBox } from "react-native";
import { SIZES, FONTS, COLORS, SHADOW } from '../constants/index';


const Card = ({onPress,task}) => {
  return (
		<Pressable style={styles.view} onPress={onPress} onLongPress={() => props.deleteItem(props.index)}>
		<Text>{task.data().task}</Text>
</Pressable>
  )
}


const styles = StyleSheet.create({
    view: {
        ...SHADOW,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.borderRadius,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        marginBottom: 15
    },
    text: {
        ...FONTS.h2_semiBold,
        color: COLORS.primary
    },
    checkbox: {
        marginRight: 15
    }
})

export default Card;
