import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
return(
    <View style={styles.header}>
        <Text style={styles.title}>
            Ma liste de Todos
        </Text>
    </View>
)
}

const styles = StyleSheet.create({
    header:{
        height: 120,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        paddingTop: 30,
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

