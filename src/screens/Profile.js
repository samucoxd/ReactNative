import React from 'react';
import { Text, StatusBar, StyleSheet, ScrollView } from 'react-native';
import GoogleLoginScreen from './GoogleLoginScreen';
import EmailSignIn from './EmailSignIn';

const Profile = () => {
	return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }} style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <Text style={styles.text}>Firebase Authentications</Text>
      <GoogleLoginScreen />
      <EmailSignIn />
    </ScrollView>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 16,
  },
})


export default Profile