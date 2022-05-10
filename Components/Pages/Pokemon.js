import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, Image, ScrollView, Button } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Type from '../Type';
import { Table, Row, Rows } from 'react-native-table-component';


import { getPokemon } from '../../Api/PokeApi';
import PokemonInfos from '../PokemonInfos';
import Sprite from '../Sprite';

export default function Pokemon(props) { 

    const {uri, route, ...restProps} = props

    const pokemon = route.params.datas;


    /// Rendering
    return(
        <>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.pokemonName}>
                        <Text style={styles.pokemonNameText}>{pokemon ? pokemon.name : ''}</Text>
                        <Text>
                            {pokemon ? pokemon.types.map((type, index) => {
                                return <Type key={type.slot}  type={type}></Type>
                            }) : null}
                        </Text>
                    </View>

                    <View style={styles.pokemonSprite}>
                        <Sprite uri={pokemon ? pokemon.sprites.other.home.front_default : ''} size={300}></Sprite>
                    </View>

                    <View style={{padding:10}}>
                        <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                            <Row data={['Stat', 'Value']} style={styles.tableHeader} textStyle={styles.tableHeaderText}/>
                            <Rows data={[
                                ['HP', pokemon ? pokemon.stats[0].base_stat : ''],
                                ['Attack', pokemon ? pokemon.stats[1].base_stat : ''],
                                ['Defense', pokemon ? pokemon.stats[2].base_stat : ''],
                                ['Sp. Atk', pokemon ? pokemon.stats[3].base_stat : ''],
                                ['Sp. Def', pokemon ? pokemon.stats[4].base_stat : ''],
                                ['Speed', pokemon ? pokemon.stats[5].base_stat : ''],
                            ]} textStyle={styles.tableText}/>
                        </Table>
                    </View>
                    
                    <Button
                        onPress={() => {
                            navigation.navigate('PokemonScreen', {datas : pokemonSpecs});
                        }}
                        title="Ajouter à mon équipe"
                    />
                    
                </View>
            </ScrollView>
        </>
    )
}

/// Styles
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },

    pokemonSprite: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },

    pokemonAlternativeSprites: {
        width: 100,
        height: 100
    },

    pokemonName: {
        padding: 10,
        marginBottom: 10,
        width: (width),
        alignItems: 'center',
    },

    pokemonNameText: {
        fontSize: 30,
        fontWeight: '800',
    },
});