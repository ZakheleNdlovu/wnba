import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'

const Details = () => {
    const route = useRoute()
    const { item } = route.params
    const navigation = useNavigation()
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
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 100, height: 40, backgroundColor: 'darkslategray', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 10, marginBottom: 5 }}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Go Back</Text>
                    </TouchableOpacity>
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