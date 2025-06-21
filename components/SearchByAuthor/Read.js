import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

const Read = () => {

    const route = useRoute()
    const { item } = route.params

    const [books, setBooks] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`https://poetrydb.org/author/${item}`)
                const data = await response.json()
                setBooks(data)
            }
            catch (err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }
        fetchBooks()
    }, [])

    if (loading) {
        return <Text>loading...</Text>
    }

    if (error) {
        return <Text>Error: {error}</Text>
    }
    return (
        <View style={{ height: '100%' }}>
            <View style={{ height: '7%', backgroundColor: 'darkslategray', alignItems: 'center', justifyContent: 'center', width: '98%', alignSelf: 'center', marginBottom: 4, borderRadius: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{item}</Text>
            </View>
            <ScrollView style={{ height: '94%', borderColor: 'gray', borderWidth: 1, width: '98%', alignSelf: 'center', marginBottom: 4, borderRadius: 10 }}>
                {books.map((auth, _) => {
                    return (
                        <TouchableOpacity key={_} onPress={() => navigation.navigate('Poem', { item: auth })} style={{ padding: 5, borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                            <View key={_} style={{ padding: 2 }}>
                                <View style={{ borderLeftColor: 'black', borderBottomColor: 'gray', borderBottomWidth: 1, padding: 4, marginBottom: 2, borderTopColor: 'lightgray', borderTopWidth: 1 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline' }}>{auth.title}</Text>
                                    <Text style={{ alignSelf: 'flex-start' }}>{auth.author}</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Poem', { item: auth })} style={{ width: 70, height: 30, borderColor: 'black', borderWidth: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end' }}>
                                        <Text>Read</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Read