import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, Image, ScrollView, Button } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Type from '../Type';
import { Table, Row, Rows } from 'react-native-table-component';


import { getPokemon } from '../../Api/PokeApi';
import PokemonInfos from '../PokemonInfos';
import Sprite from '../Sprite';
import { retrieveData, storeData } from '../../utils/localStorage';

export default function Pokemon(props) { 

    const {uri, route, ...restProps} = props

    const datas = route.params.datas;
    
    const [team, setTeam] = useState([]);

    const addToTeam = () => {
        let newTeam = [datas, ...team];

        setTeam(newTeam);
        storeData('team', JSON.stringify(newTeam));

    }
        

    const removeFromTeam = () => {
        let newTeam = team.filter(pokemon => pokemon?.name != datas.name);

        setTeam(newTeam);
        storeData('team', JSON.stringify(newTeam));
    }

    useEffect(() => {
        retrieveData('team').then(res => {
            if (res) {
                setTeam(JSON.parse(res));
            }
        })
    }, [])


    /// Rendering
    return(
        <>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.pokemonName}>
                        <Text style={styles.pokemonNameText}>{datas ? datas.name : ''}</Text>
                        <Text>
                            {datas ? datas.types.map((type, index) => {
                                return <Type key={type.slot}  type={type}></Type>
                            }) : null}
                        </Text>
                    </View>

                    <View style={styles.pokemonSprite}>
                        <Sprite uri={datas ? datas.sprites.other.home.front_default : ''} size={300}></Sprite>
                    </View>

                    <View style={{padding:10}}>
                        <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                            <Row data={['Stat', 'Value']} style={styles.tableHeader} textStyle={styles.tableHeaderText}/>
                            <Rows data={[
                                ['HP', datas ? datas.stats[0].base_stat : ''],
                                ['Attack', datas ? datas.stats[1].base_stat : ''],
                                ['Defense', datas ? datas.stats[2].base_stat : ''],
                                ['Sp. Atk', datas ? datas.stats[3].base_stat : ''],
                                ['Sp. Def', datas ? datas.stats[4].base_stat : ''],
                                ['Speed', datas ? datas.stats[5].base_stat : ''],
                            ]} textStyle={styles.tableText}/>
                        </Table>
                    </View>
                    
                    <View>
                        {team.length >= 0 ? (
                            team.find((pokemon) => pokemon?.name == datas.name) == undefined ? (
                                team.length >= 6 ? (
                                    <Text style={styles.warning}>
                                        6 pokémons sont déjà présents dans mon équipe !
                                    </Text>
                                ) : (
                                        <Button
                                            onPress={() => addToTeam()}
                                            title="Ajouter à mon équipe"
                                        />
                                )
                            ) : (
                                    <Button
                                        onPress={() => removeFromTeam()}
                                        title="Supprimer de l'équipe"
                                        color="red"
                                    />
                            )
                        ) : (
                            console.log('Array empty')
                        )}
                    </View>
                    
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