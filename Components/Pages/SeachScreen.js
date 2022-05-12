import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, Image, ScrollView, Button, TextInput } from 'react-native';
import { getPokemonInfo } from '../../Api/PokeApi';
import Sprite from '../Sprite';
import { uppercaseFirstLetter } from '../../utils/utils';
import Type from '../Type';

export default function SearchScreen(props) { 
    const {route, navigation, ...restProps} = props;


    // Usestate for pokemon datas
    const [pokemon, setPokemon] = useState([]);

    // Usestate for pokemon datas
    const [issetDatas, setIssetDatas] = useState(false);

    return(
        <>
            {/* Add a text input that search if a pokemon has that name and display it */}
            <Text>Search a pokemon</Text>
            <TextInput placeholder="Ex: Absol" 
            
                onChangeText={(text) => {
                    getPokemonInfo('https://pokeapi.co/api/v2/pokemon/' + text.toLowerCase()).then(datas => {
                        if (typeof datas == "object"){
                            setPokemon(datas)

                            setIssetDatas(true);
                        } else {
                            setIssetDatas(false);
                        }
                    })
                    }}
            />

            <View style={styles.viewPokemon}>
                <Sprite uri={ issetDatas ? pokemon.sprites.other.home.front_default : ''} size={75}></Sprite>

                <Text style={styles.pokemonName}>{ issetDatas ? uppercaseFirstLetter(pokemon.name) : 'Missing N°'}</Text>

                <Text>
                    { issetDatas ? pokemon.types.map((type, index) => {
                        return <Type key={type.slot}  type={type}></Type>
                    }) : null}
                </Text>

                <Button
                    onPress={() => {
                        navigation.navigate('PokemonScreen', {datas : pokemon});
                    }}
                    title="Voir plus"
                />
            </View>

        </>
    )
}

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    viewPokemon: {
        padding: 10,
        marginBottom: 10,
        width: (width/2),
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    pokemonName: {
        fontWeight: '700',
    }
});