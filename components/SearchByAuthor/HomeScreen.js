import { View, Text, FlatList, ScrollView, TouchableOpacity, Button, TextInput, Touchable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Header from '../Header'

const HomeScreen = () => {

    const [author, setAuthor] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchPoems = async () => {
            try {
                const response = await fetch('https://poetrydb.org/author')
                const data = await response.json()
                setAuthor(data.authors)
            }
            catch (err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }
        fetchPoems()
    }, [])

    if (loading) {
        return <Text>loading...</Text>
    }
    if (error) {
        return <Text>Error: {error}</Text>
    }
    return (
        <View>
            <View style={{ height: '8%' }}>
                <View style={{ height: 50, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderColor: 'gray', borderWidth: 1, width: '98%', alignSelf: 'center', marginBottom: 4, borderRadius: 10 }}>
                    <View style={{ overflow: 'hidden', borderRadius: 10, borderColor: 'gray', borderWidth: 1 }}>
                        <TextInput style={{ width: 230, height: 35, backgroundColor: 'white' }} placeholder='Search by Poet...' onChangeText={(value) => setSearch(value)} />
                    </View>

                </View>
            </View>
            <ScrollView style={{ height: '91.5%', borderRadius: 10, borderColor: 'gray', borderWidth: 1, width: '98%', alignSelf: 'center', marginBottom: 4 }}>
                {author.map((auth, key) => {
                    if (auth.includes(search)) {
                        return (
                            <TouchableOpacity key={key} onPress={() => navigation.navigate('Author', { item: auth })} style={{ padding: 5, borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                                <View style={{ padding: 5 }}>
                                    <View key={key} style={{ borderLeftColor: 'black', borderBottomColor: 'gray', borderBottomWidth: 1, padding: 4, marginBottom: 2, borderTopColor: 'lightgray', borderTopWidth: 1 }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{auth}</Text>

                                        <TouchableOpacity onPress={() => navigation.navigate('Author', { item: auth })} style={{ width: 70, height: 30, borderColor: 'black', borderWidth: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end' }}>
                                            <Text>See Poems</Text>
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

export default HomeScreen