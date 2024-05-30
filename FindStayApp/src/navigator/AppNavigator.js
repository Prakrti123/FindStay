import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import StackNavigator from './StackNavigator';

const AppNavigator = () => {
    
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
        
    )
}
export default AppNavigator;