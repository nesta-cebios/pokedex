import { React, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import { getPokemonInfo } from '../Api/PokeApi';


export default function Sprite(props) {

    const {uri, size, ...restProps} = props

    const styles = StyleSheet.create({
        imgPokemon: {
            height: size,
            width: size
        },
    });
    
    return (
        <>
            <Image
                style={styles.imgPokemon}
                source={{uri}}
            />
        </>
    )       
}