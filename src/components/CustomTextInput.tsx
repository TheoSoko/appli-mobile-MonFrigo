import React from 'react'
import {View, StyleSheet, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

type inputProps = {
    index:number
    placeholder?: string
    onChangeText: (text:string) => void
}

export default function CustomTextInput(props:inputProps) {
    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder={props.placeholder}
                onChangeText={(text) => props.onChangeText(text)}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        width: 270,
        borderRadius: 4,
        marginVertical: 10,
        height: 45,
        paddingLeft: 9,
        fontSize: 15,
        fontWeight: '500'
    }
})