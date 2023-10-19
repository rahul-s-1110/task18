import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/auth/signIn";
import SignUpScreen from "../screens/auth/signUp";
import { AuthContext } from "../gloablConstant/context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SIGN_IN, SIGN_OUT, TOKEN } from "../gloablConstant/globalValues";
import Home from "../screens/app/home";
import MapScreen from "../screens/app/mapScreen";
import AddProductScreen from "../screens/app/addProductScreen";
import DetailsPage from "../screens/app/detailsPage";



const AuthStackNavigator = createNativeStackNavigator();
const HomeStackNavigator = createNativeStackNavigator();
const RootNavigtion = () => {

  useEffect(() => {
    setTimeout(() => {
      bootstrapAsync();
    }, 2000);

    const bootstrapAsync = async () => {
      let userInfo;
      try {
        userInfo = {
          token: await AsyncStorage.getItem(TOKEN),
        };
      } catch (e) {}
      // dispatch({type: RESTORE_TOKEN, userData: userInfo});
    };
  },[])

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case SIGN_IN:
          return {
            ...prevState,
            userToken: action.userData.token,
          };
        case SIGN_OUT:
          return {
            ...prevState,
            isSignout: true,
            userToken: action.userData.token,
          };
      }
    },
    {
      userToken: null,
    },
  );

  function AuthStackScreen (data){
    if(data.userToken == 'true'){
      return(
        <HomeStackNavigator.Navigator screenOptions={{ headerShown: false }}>
          <HomeStackNavigator.Screen name="homeScreen" component={Home} />
          <HomeStackNavigator.Screen name="MapScreen" component={MapScreen} />
          <HomeStackNavigator.Screen name="addProductScreen" component={AddProductScreen} />
          <HomeStackNavigator.Screen name="detailScreen" component={DetailsPage} />
        </HomeStackNavigator.Navigator >
      )
    }else{
      return(
        <AuthStackNavigator.Navigator screenOptions={{ headerShown: false }}>
          <AuthStackNavigator.Screen name="loginScreen" component={SignInScreen} />
          <AuthStackNavigator.Screen name="registerScreen" component={SignUpScreen} />
        </AuthStackNavigator.Navigator >
      )
    }
    
  }

  const authContext = useMemo(()=>{
    return {
      signIn: async () => {
        console.log("sign in method call")
        let userInfo;
        try {
          userInfo = {
            token: await AsyncStorage.getItem(TOKEN),
          };
        } catch (e) {}
        dispatch({type: SIGN_IN, userData: userInfo});
      },
      signOut: async () => {
        let userInfo;
        try {
          userInfo = {
            token: await AsyncStorage.getItem(TOKEN),
          };
        } catch (e) {
        }
        dispatch({type: SIGN_OUT, userData: userInfo});
      },
    };
  },[])

  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="loginScreen" component={SignInScreen} />
    //     <Stack.Screen name="registerScreen" component={SignUpScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>{AuthStackScreen(state)}</NavigationContainer>
    </AuthContext.Provider>
  );
};

export default RootNavigtion;

const styles = StyleSheet.create({});