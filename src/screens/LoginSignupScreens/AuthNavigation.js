import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import SignupScreen from './SIgnupScreen';
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="WelcomePage" component={WelcomeScreen} />
            <Stack.Screen name="signup" component={SignupScreen} />
            <Stack.Screen name="login" component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigation;