import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import BottomTab from "./src/navigation/BottomTab";
import MainStack from "./src/navigation/MainStack";
import HomeScreen from "./src/screens/HomeScreen";

const App = () => {
	return (
			<NavigationContainer>
				<BottomTab />
			</NavigationContainer>
	);
}

export default App