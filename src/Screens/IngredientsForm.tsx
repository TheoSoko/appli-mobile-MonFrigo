import React, {useState} from 'react'
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import CustomTextInput from '../components/CustomTextInput'


export default function IngredientsForm(){
    const initialComponent = <CustomTextInput placeholder='Entrez un ingrédient' onChangeText={(text) => null}/>
    const [inputCount, setInputCount] = useState<number>(1)
    function renderInputList(){
        let JSXArray = []
        let i = 0
        while (i < inputCount){
            JSXArray.push(initialComponent)
            i ++
        }
        return JSXArray
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingrédients</Text>
            <Text style={styles.subTitle}>Entrez vos ingrédients :</Text>
            <View style={styles.iconsView}>
                <TouchableOpacity style={styles.IconTouchable} onPress={() => setInputCount(inputCount + 1)}>
                    <Icon name='pluscircle' size={34} color='black' style={styles.icon}/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.IconTouchable} onPress={() => setInputCount(inputCount - 1)}>
                    <Icon name='minuscircle' size={34} color='black' style={styles.icon}/>
                </TouchableOpacity> 
            </View>
            <View style={styles.formView}>
                {
                    renderInputList()
                }
            </View>
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Chercher une recette</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a3c4f3',
        alignItems: 'center',
        paddingTop: 66,
    },
    title: {
        fontSize: 42,
        color: 'black',
        fontWeight: '700'
    },
    subTitle: {
        marginTop: 55,
        fontSize: 20,
        color: 'black',
        fontWeight: '500'
    },
    iconsView: {
        flexDirection: 'row',
        marginVertical: 4,
    },
    IconTouchable: {
        marginHorizontal: 35,
    },
    icon: {
        marginTop: 29,
        //marginLeft: -130,
    },
    formView: {
        marginTop: 21,
    },
    submitButton: {
        width: 270,
        backgroundColor: '#FFCFD2',
        paddingVertical: 11,
        marginTop: 21.5,
        borderRadius: 7,
    },
    submitButtonText: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 18,
        color: 'black'
    }

})