import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BoxScore from './BoxScore'

const Games = ({ data, navigation }) => {

    return (
        <View>
            <FlatList data={data} renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Details', { item: item })
                    }}>
                        <View style={styles.box}>
                            <Text style={styles.text}>{item.name} - {item.competitions[0].venue.address.city}, {item.competitions[0].venue.address.state}</Text>
                            <Text style={styles.text}>{item.date.slice(0, -7)} - {item.date.slice(-6, -1)} EST</Text>
                            <Text style={styles.text}>{item.season.slug.slice(0, 1).toUpperCase()}{item.season.slug.slice(1,)}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '78%' }}>
                                    <Text style={styles.text}>{item.competitions[0].status.type.shortDetail}</Text>
                                </View>
                                <Text style={styles.text}>Score</Text>
                            </View>
                            <BoxScore item={item} navigation={navigation} />
                        </View>
                    </TouchableOpacity>
                )
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '99%',
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        borderStyle: 'dotted',
        padding: 5,
    },

    text: {
        fontSize: 14.5,
        fontWeight: 'bold'
    }
})

export default Games