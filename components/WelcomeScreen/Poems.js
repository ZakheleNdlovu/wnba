import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Poems = ({ poems, text }) => {
    const navigation = useNavigation()
    return (
        <ScrollView style={{ height: '83%', borderRadius: 10, borderColor: 'gray', width: '98%', alignSelf: 'center', marginBottom: 4 }}>
            {poems.map((item, k) => {
                if (item.title.includes(text)) {
                    return (
                        <TouchableOpacity key={k} style={styles.box} onPress={() => navigation.navigate('Read', { item: item })}>
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={styles.text}>{item.title}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
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
        padding: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontSize: 18,
        color: 'black',
        marginBottom: 5,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        textAlignVertical: 'center',

    }
})

export default Poems