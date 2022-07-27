import React, {useState} from 'react'
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import CustomTextInput from '../components/CustomTextInput'
import GetRecipesData from '../data/data'


export default function IngredientsForm(){

    const [inputCount, setInputCount] = useState<number>(1)
    const [valuesList, setValuesList] = useState<Array<string>>([''])
    const [queryResults, setQueryResults] = useState<any>()

    function setQuery(){
        if (valuesList.length > 0){
            GetRecipesData(valuesList, (json) => setQueryResults(json))
        }
    }
    queryResults && console.warn(queryResults.results[0].analyzedInstructions[0].steps[0].ingredients)

    function addListEntry(){
        let array = valuesList
        array.push('')
        setValuesList(array)
    }
    function removeListEntry(){
        let array = valuesList
        array.pop()
        setValuesList(array)
    }
    function changeValue(text:string, index:number){
        let array = valuesList
        array[index] = text
        setValuesList(array)
        //console.warn(valuesList)
    }

    function renderInputList(){
        let JSXArray = []
        let i = 0
        while (i < inputCount){
            //changeValue avec le texte entré par l'utilisateur et (incrément - 1) pour correspondre à l'index dans le tableau (0 pour le premier)
            JSXArray.push(<CustomTextInput key={i} index={i} placeholder='Entrez un ingrédient' onChangeText={(text) => changeValue(text, i - 1)}/>)
            i ++
        }
        return JSXArray
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingrédients</Text>
            <Text style={styles.subTitle}>Entrez vos ingrédients :</Text>
            <View style={styles.iconsView}>
                <TouchableOpacity style={styles.IconTouchable} onPress={() => { setInputCount(inputCount + 1); addListEntry() }}>
                    <Icon name='pluscircle' size={34} color='black' style={styles.icon}/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.IconTouchable} onPress={() => { inputCount > 0 && setInputCount(inputCount - 1); removeListEntry() }}>
                    <Icon name='minuscircle' size={34} color='black' style={styles.icon}/>
                </TouchableOpacity> 
            </View>
            <ScrollView style={{width: '100%'}}>
                <View style={styles.formView}>
                    {
                        renderInputList()
                    }
                    <TouchableOpacity style={styles.submitButton} onPress={() => setQuery()}>
                        <Text style={styles.submitButtonText}>Chercher une recette</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        alignItems: 'center',
    },
    submitButton: {
        width: 270,
        backgroundColor: '#FFCFD2',
        paddingVertical: 11,
        marginTop: 21.3,
        marginBottom: 33,
        borderRadius: 7,
    },
    submitButtonText: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 18,
        color: 'black'
    }

})