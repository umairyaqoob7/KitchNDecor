import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Favourite from  "../screens/Favourite";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    height: 65,
                    justifyContent: "center",
                    paddingVerticle: 15,
                    backgroundColor: "#eff4f0",
                    elevation: 2
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ Colors, size }) => (
                        <Image
                            source={ require("../images/8.png" )}
                            style={{ height: 20, weight: 20 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ Colors, size }) => (
                        <Image
                            source={require("../images/9.png")}
                            style={{ height: 20, weight: 20 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ Colors, size }) => (
                        <Image
                            source={require("../images/10.png")}
                            style={{ height: 20, weight: 20 }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

const stack=createStackNavigator ();
const screenOptionStyle ={
    headerShown : false
}

const HomeStackNavigator = () =>{
    return(
        <stack.Navigator screenOptions={screenOptionStyle}>
            <stack.Screen name = "Home" component={BottomTabNavigator} />
            <stack.Screen name = "Detail" component={Detail} />
        </stack.Navigator>
    )
}

export default HomeStackNavigator;