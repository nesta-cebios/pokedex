import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, Image, ScrollView, Button, TextInput, Switch } from 'react-native';

export default function SettingScreen(props) { 
    const {route, navigation, ...restProps} = props;

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    return(
        <>
            <View style={{padding: 10, marginTop: 30, display: 'flex', alignItems: 'center'}}>
                <Text style={{fontWeight: '800', marginBottom: 10}}>Autorisez-vous l'application à collecter des données sur vos préférences ?</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#9F9F9F" }}
                    thumbColor={isEnabled ? "#fab400" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />    
            </View>

            <View style={{padding: 10, marginTop: 30, display: 'flex', alignItems: 'center'}}>
                <Text style={{fontWeight: '800', marginBottom: 10}}>Autorisez-vous la rotation automatique ?</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#9F9F9F" }}
                    thumbColor={isEnabled2 ? "#fab400" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}
                />    
            </View>
        </>
    )
}

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height