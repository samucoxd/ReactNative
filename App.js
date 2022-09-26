import React, {useEffect} from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {NavigationContainer} from '@react-navigation/native';
import BottomTab from "./src/navigation/BottomTab";
import MainStack from "./src/navigation/MainStack";

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: [], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '1080770830830-8net17ljsn9i14scuvke1k1pkgp7p80i.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      // googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
      // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  }, []);

  // const googleSignIn = async () => {
  // 	// Get the users ID token
  // 	const { idToken } = await GoogleSignin.signIn();

  // 	// Create a Google credential with the token
  // 	const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // 	// Sign-in the user with the credential
  // 	const user_sign_in = auth().signInWithCredential(googleCredential);
  // 	user_sign_in.then((user)=>{
  // 		console.log(user);
  // 	}).catch((error)=>{console.log(error)})
  // }
  return (
    // <View style={styles.container}>
    // 	<Pressable onPress={()=>googleSignIn().then(res=>{
    // 		console.log(res)
    // 	}).catch(error=>console.log(error))
    // 	} style={styles.btnBox}>
    // 		<Text>Google SignIn</Text>
    // 	</Pressable>
    // </View>
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
    //<GoogleLoginScreen/>
  );
};

export default App;

// const styles = StyleSheet.create({
// 	container:{
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	title:{
// 		fontSize: 22,
// 		color: 'black'
// 	},
// 	btnBox:{
// 		paddingHorizontal: 20,
// 		backgroundColor: 'coral',
// 		paddingVertical: 10,
// 		borderRadius: 10,
// 	}
// })
