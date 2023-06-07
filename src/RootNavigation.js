import React from 'react'
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './screens/LoginSignupScreens/AuthNavigation';

const RootNavigation = () => {
  return (
    <View>
        <NavigationContainer>
            <AuthNavigation />
        </NavigationContainer>
    </View>
  )
}

export default RootNavigation;