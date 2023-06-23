import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
    return(

        <TouchableOpacity
        onPress={() => pressHandler(item.id)}>
            <View style={styles.text}>
                <MaterialIcons name='delete' size={20} color='#333' />
                <Text style={styles.itemText}>
                    { item.text }
                </Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    text:{
        padding: 16,
        marginTop: 16,
        borderColor: '#BBB',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
    }
})