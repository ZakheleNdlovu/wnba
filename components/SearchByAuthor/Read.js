import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

const Read = () => {

    const route = useRoute()
    const { item } = route.params
    const [search, setSearch] = useState('')
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
            <View style={{ height: '8%' }}>
                <View style={{ height: 50, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderColor: 'gray', borderWidth: 1, width: '98%', alignSelf: 'center', marginBottom: 4, borderRadius: 10 }}>
                    <View style={{ overflow: 'hidden', borderRadius: 10, borderColor: 'gray', borderWidth: 1 }}>
                        <TextInput style={{ width: 230, height: 35, backgroundColor: 'white' }} placeholder='Search Poem name...' onChangeText={(value) => setSearch(value)} />
                    </View>

                </View>
            </View>
            <View style={{ width: '98%', alignSelf: 'center', alignItems: 'flex-end' }}>
                <Button title='back' onPress={() => navigation.goBack()} color={'darkslategray'} />
            </View>
            <ScrollView style={{ height: '92%', width: '100%', alignSelf: 'center', marginBottom: 1, borderRadius: 10 }}>
                {books.map((auth, _) => {
                    if (auth.title.toLowerCase().includes(search.toLowerCase())) {
                        return (
                            <TouchableOpacity key={_} onPress={() => navigation.navigate('Poem', { item: auth })} style={{ padding: 2, }}>
                                <View style={{ borderRadius: 10, padding: 3, marginBottom: 1, backgroundColor: 'white', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, boxShadowColor: 'black' }}>
                                    <View style={{ borderLeftColor: 'black', borderBottomColor: 'gray', padding: 4, marginBottom: 2, borderTopColor: 'lightgray', width: '98%', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>{auth.title}</Text>
                                        <Text style={{ alignSelf: 'center', fontSize: 17 }}>by: {auth.author}</Text>
                                        <TouchableOpacity onPress={() => navigation.navigate('Poem', { item: auth })} style={{ width: 70, height: 30, boxshadowcolor: '#000', elevation: 5, borderRadius: 10, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                                            <Text>Read</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }

                })}
            </ScrollView>
        </View>
    )
}

export default Read