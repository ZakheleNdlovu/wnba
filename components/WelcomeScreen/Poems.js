import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Poems = ({ poems, text }) => {
    const navigation = useNavigation()
    return (
        <ScrollView style={{ height: '84%', borderRadius: 10, borderColor: 'gray', borderWidth: 1, width: '98%', alignSelf: 'center', marginBottom: 4 }}>
            {poems.map((item, k) => {
                if (item.title.includes(text)) {
                    return (
                        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Read', { item: item })}>
                            <View key={k}>
                                <View style={{ width: '75%' }}>
                                    <Text style={styles.text}>{item.title}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                    <Text>By : </Text>
                                    <Text style={{ alignSelf: 'flex-end', fontWeight: 'bold', fontSize: 15 }}>{item.author}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }

            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '98%',
        borderLeftColor: 'black',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        padding: 4,
        marginBottom: 2,
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
        alignSelf: 'center'
    },
    text: {
        fontSize: 17
    }
})

export default Poems