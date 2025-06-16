import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Header = ({ data }) => {
    return (
        <View style={styles.header}>
            <Image source={{ uri: data.logos[0].href }} width={45} height={40} />
            <Text style={styles.text}>{data.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '99%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 3,
        margin: 2,
        backgroundColor: 'black'
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default Header