import HomeScreen from './Pages/HomeScreen';
import Pokemon from './Pages/Pokemon';

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function PokemonStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accueil" component={HomeScreen} />
            <Stack.Screen name="PokemonScreen" component={Pokemon} />
        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#b00a00",
            }}
            >
                <Tab.Screen
                    name="Home"
                    component={PokemonStack}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({tintColor}) => (
                            <Icon name="pokeball" size={25}/>
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}