import { React, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import { getPokemonInfo } from '../Api/PokeApi';
import { getTypeColor } from '../utils/utils';


export default function Type(props) {

    const {name, ...restProps} = props

    const styles = StyleSheet.create({
        marginViewType: {
            paddingLeft: props.type.slot == 1 ? 0 : 2,
            paddingRight: props.type.slot == 2 ? 0 : 2,
            paddingTop: 10,
        },
        viewType: {
            backgroundColor: getTypeColor(props.type.type.name),
            borderRadius: 8,
            height: 25,
            width: 70,
            justifyContent:"center",
            alignItems:'center',
        },
        textType: {
            color: '#fff',
            textTransform: 'uppercase',
            fontWeight: "900",
            fontSize: 10,
        },
    });

    return (
        <View style={styles.marginViewType}>
            <View style={styles.viewType}>
                <Text style={styles.textType}>{props.type.type.name}</Text>
            </View>
        </View>
    )       
}

