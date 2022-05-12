import HomeScreen from './Pages/HomeScreen';
import Pokemon from './Pages/Pokemon';

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SearchScreen from './Pages/SeachScreen';
import SettingScreen from './Pages/SettingScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accueil" component={HomeScreen} />
            <Stack.Screen name="PokemonScreen" component={Pokemon} />
        </Stack.Navigator>
    );
}

function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Recherche" component={SearchScreen} />
        </Stack.Navigator>
    );
}

function SettingStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Paramètres" component={SettingScreen} />
        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#fab400",
            }}
            >
                <Tab.Screen
                    name="Accueil"
                    component={HomeStack}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({tintColor}) => (
                            <Icon name="pokeball" size={25}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="Rechercher"
                    component={SearchStack}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({tintColor}) => (
                            <Icon name="magnify" size={25}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="Paramètres"
                    component={SettingStack}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({tintColor}) => (
                            <Icon name="cog" size={25}/>
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}