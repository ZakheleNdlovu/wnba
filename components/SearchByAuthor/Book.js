import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'

const Book = () => {
    const navigation = useNavigation()

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
            <ScrollView style={{ padding: 2, height: '90%' }}>
                <View style={{ boxshadowcolor: '#000', borderRadius: 10, width: '98%', alignSelf: 'center', padding: 10, marginBottom: 5, backgroundColor: 'white', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                    {item.lines.map((line, _) => {
                        return (
                            <View key={_} style={{ width: '99%', alignSelf: 'center', padding: 2 }}>
                                <Text>{line}</Text>
                            </View>
                        )
                    })}
                </View>
                <View style={{ height: 50, width: '99%', alignItems: 'flex-end', justifyContent: 'flex-end', padding: 4, marginBottom: 10 }}>
                    <Text style={{ textDecorationLine: 'underline', color: 'darkslategray' }}>Line count : {item.linecount}</Text>
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
        height: '7%',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})
export default Book