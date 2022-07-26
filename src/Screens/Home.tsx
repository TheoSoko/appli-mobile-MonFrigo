import React from 'react'
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {RootStackParams} from '../types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type HomeProps = NativeStackScreenProps<RootStackParams>

export default function Home({navigation, route}: HomeProps){
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Mon Frigo</Text>
            <TouchableOpacity style={styles.bloc1} onPress={() => navigation.navigate('IngredientsForm')}>
                <Text style={styles.mainText1}>Entrez les ingrédients de votre frigo, et découvrez les recettes possibles !</Text>
                <View style={styles.arrowView}>
                    <Icon name='arrow-forward-ios' size={43} color='white' style={styles.arrow}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bloc2}>
                <Text style={styles.mainText2}>Découvrez les dernières recettes tendances...</Text>
                <View style={styles.arrowView}>
                    <Icon name='arrow-forward-ios' size={43} color='white' style={styles.arrow}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a3c4f3',
        paddingTop: 66,
        alignItems: 'center',
    }, 
    titleText: {
        fontSize: 42,
        color: 'black',
        fontWeight: '700'
    },
    bloc1: {
        marginTop: 64,
        backgroundColor: '#FFCFD2',
        height: 100,
        flexDirection: 'row',
        width: '90%',
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 5,
    },
    mainText1: {
        flex: 3,
        fontSize: 19.2,
        color: 'black',
        fontWeight: '500',
        marginHorizontal: 13,
        justifyContent: 'center',
        textAlignVertical: 'center',
        marginBottom: 4,
        marginLeft: 14,
    },
    arrowView: {
        flex: 1,
        justifyContent: 'center'
    },
    bloc2: {
        marginTop: 27,
        backgroundColor: '#FFCFD2',
        height: 85,
        flexDirection: 'row',
        width: '90%',
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 5,
    },
    mainText2: {
        flex: 3,
        fontSize: 19.2,
        color: 'black',
        fontWeight: '500',
        marginHorizontal: 13,
        justifyContent: 'center',
        marginTop: 11,
        marginLeft: 14,
    },
    arrow: {
        alignSelf: 'center',
        marginRight: -15,
    }
})