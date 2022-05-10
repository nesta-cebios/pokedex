import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';

import { getPokemon } from '../../Api/PokeApi';
import PokemonInfos from '../PokemonInfos';
import Sprite from '../Sprite';


export default function HomeScreen(props) {

    /// Navigation
    const {route, navigation, ...restProps} = props;
    
    /// States
    const [listPokemon, setListPokemon] = useState([]);
    const [nextPage, setNextPage] = useState('https://pokeapi.co/api/v2/pokemon');
  
    useEffect(()=>{
		  loadPokemon(nextPage)
    }, []);


    /// Consts
    const renderItem = ({ item }) => (
      <PokemonInfos uri={item.url}></PokemonInfos>
    );
    
    
    const loadPokemon = (url) => {
      getPokemon(url).then(datas => {
        setListPokemon([...listPokemon, ...datas.results])
        setNextPage(datas.next)
      })
    }


    /// Rendering
    return(
      <>
		<View style={styles.container}>
			<FlatList
                data={listPokemon}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => item.name}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    loadPokemon(nextPage)
                }}
			/>
		</View>
      </>
    )
    
};

/// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#F0E2B7'
    }
});