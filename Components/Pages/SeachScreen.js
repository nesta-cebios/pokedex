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
            <TextInput 
            
                placeholder="Chercher un pokémon"
                style={styles.input}
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
                <Sprite uri={ issetDatas ? pokemon?.sprites?.other?.home?.front_default : 'https://static.wikia.nocookie.net/gaming-urban-legends/images/7/7c/MissingNo..webp/revision/latest?cb=20210429173552'} size={200}></Sprite>
                
                <Text style={styles.pokemonName}>{ issetDatas ? uppercaseFirstLetter(pokemon.name) : 'Missing N°'}</Text>

                <Text>
                    { issetDatas ? pokemon?.types?.map((type, index) => {
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
        width: (width),
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    pokemonName: {
        fontWeight: '700',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
});