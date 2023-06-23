import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changehandler = (value) => {
        setText(value);
    }


    return(
        <View>
            <TextInput
            style={styles.input}
                placeholder='Ajouter une Todo'
                onChangeText={changehandler}
            />
            <TouchableOpacity
                style={styles.addTodoButton}
                onPress={() => submitHandler(text)}
                underlayColor='#fff'>
                <Text style={styles.addTodoButtonText}>Ajouter une Todo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    addTodoButton: {
        marginTop: 10,
        padding: 15,
        backgroundColor: 'coral',
        borderRadius: 15,
    },
    addTodoButtonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
    }
})





