import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, Text, Button } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { retrieveData } from "../../utils/localStorage";
import PokemonInfos from "../PokemonInfos";
import { storeData } from "../../utils/localStorage";

export default function TeamScreen(props) {
const { route, navigation, ...restProps } = props;
const [team, setTeam] = useState([]);

useEffect(() => {
    retrieveData('team').then((res) => {
        if (res) {
            let datas = JSON.parse(res);
            setTeam(datas);
        }
    });
}, []);

const resetTeam = () => {
    let newTeam = [];

    setTeam(newTeam);
    storeData('team', JSON.stringify(newTeam));
}
return (
    <>
        <View style={styles.container}>
            <FlatList
                data={team}
                numColumns={2}
                renderItem={({ item }) => (
                    <PokemonInfos uri={"https://pokeapi.co/api/v2/pokemon/"+item.id }/>
                )}
                keyExtractor={(item) => item.name}
                style={styles.list}
                onEndReachedThreshold={0.5}
            />
        </View>


        <Button 
            title="Mettre à jour" 
            onPress={() => retrieveData('team').then((res) => {
                if (res) {
                    let datas = JSON.parse(res);
                    setTeam(datas);
                }
            })}
        />

        <Button 
            title="Réinitialiser" 
            onPress={() => resetTeam()}
            color="red"
        />



    </>
);
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: "center",
    },
});