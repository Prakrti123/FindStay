import * as React from 'react';
import {
    Text, Button,
} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import HouseDetail from "../screens/HouseDetail";
import BottomNav from "../navigator/BottomNav";
import ReceiptScreen from "../screens/ReceiptScreen";

const Stack = createNativeStackNavigator();

const HomeNav = () => {

    return (
        <Stack.Navigator initialRouteName={'BottomNav'}
        screenOptions={{
        }}
        >
            {/* <Text>Stack</Text> */}
            <Stack.Screen
                name="BottomNav"
                component={BottomNav}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="HouseDetail"
                component={HouseDetail}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Receipt"
                component={ReceiptScreen}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    );
};
export default HomeNav;