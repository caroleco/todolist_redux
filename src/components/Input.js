import { TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Input = ({ onChangeText, value }) => {
    return (
        <TextInput
            styles={styles.input}
            onChangeText={onChangeText}
            value={value}
            underlineColorAndroid="#000" />
    );
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 30,
        paddingBottom: 15
    }
})

export default Input;