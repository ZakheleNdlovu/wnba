import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Details = () => {
    const route = useRoute()
    const { item } = route.params
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.text}>{item.title}</Text>
            </View>
            <View style={{ width: '99%', height: '3%' }}>
                <Text style={{ alignSelf: 'flex-end' }}>{item.author}</Text>
            </View>
            <ScrollView style={{ padding: 2, height: '92%' }}>
                {item.lines.map((line, _) => {
                    return (
                        <View key={_} style={{ width: '99%', alignSelf: 'center', padding: 2 }}>
                            <Text>{line}</Text>
                        </View>
                    )
                })}
                <View style={{ height: 40, width: '99%', alignItems: 'flex-end', justifyContent: 'flex-end', padding: 4 }}>
                    <Text>Line count : {item.linecount}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 5,
        width: '99%',
        alignItems: 'center',
        backgroundColor: 'darkslategray',
        alignSelf: 'center',
        height: '5%'
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Details