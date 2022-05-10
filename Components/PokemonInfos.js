import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native'
import { getPokemonInfo } from '../Api/PokeApi';
import { getTypeColor, uppercaseFirstLetter } from '../utils/utils';
import Sprite from './Sprite';
import Type from './Type';
import { useNavigation } from '@react-navigation/native';

export default function PokemonInfos(props){

    const navigation = useNavigation(); 

    const {uri, route, ...restProps} = props

    const [pokemonSpecs, setPokemonSpecs] = useState(null);

    useEffect(()=>{
        loadPokemonSpecs(uri)
    }, []);

    const loadPokemonSpecs = (url) =>{
        getPokemonInfo(url).then(datas => {
            setPokemonSpecs(datas)
        })
    }

    return (
        <View style={styles.viewPokemon}>
            <Sprite uri={pokemonSpecs ? pokemonSpecs.sprites.other.home.front_default : ''} size={75}></Sprite>

            <Text style={styles.pokemonName}>{pokemonSpecs ? uppercaseFirstLetter(pokemonSpecs.name) : 'Missing N°'}</Text>

            <Text>
                {pokemonSpecs ? pokemonSpecs.types.map((type, index) => {
                    return <Type key={type.slot}  type={type}></Type>
                }) : null}
            </Text>

            <Button
                onPress={() => {
                    navigation.navigate('PokemonScreen', {datas : pokemonSpecs});
                }}
                title="Voir plus"
            />
        </View>
    );
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