import * as React from 'react';
import {
    Text, Button,
} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from "../screens/OnBoarding";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeNav from "../navigator/HomeNav";
import MyTabs from "./BottomNav";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    return (
        <Stack.Navigator initialRouteName={'OnBoarding'}
        screenOptions={{
        }}
        >
            {/* <Text>Stack</Text> */}
            <Stack.Screen
                name="OnBoarding"
                component={OnBoarding}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="HomeNav"
                component={HomeNav}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    );
};
export default StackNavigator;