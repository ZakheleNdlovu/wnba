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
                <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderColor: 'gray', borderWidth: 1, width: '98%', alignSelf: 'center', marginBottom: 4, borderRadius: 10 }}>
                    <View style={{ overflow: 'hidden', borderRadius: 10, borderColor: 'gray', borderWidth: 1 }}>
                        <TextInput style={{ width: 230, height: 35, backgroundColor: 'white' }} placeholder='Search by Poet...' onChangeText={(value) => setSearch(value)} />
                    </View>

                </View>
            </View>
            <ScrollView style={{ height: '91.5%', borderRadius: 10, width: '98%', alignSelf: 'center', marginBottom: 4 }}>
                {author.map((auth, key) => {
                    if (auth.toLowerCase().includes(search.toLowerCase())) {
                        return (
                            <TouchableOpacity key={key} onPress={() => navigation.navigate('Author', { item: auth })} style={{ padding: 10, marginBottom: 5, backgroundColor: 'white', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, alignItems: 'center' }}>
                                <View style={{ padding: 5 }}>
                                    <View key={key} style={{ borderLeftColor: 'black', borderBottomColor: 'gray', padding: 4, marginBottom: 2, borderTopColor: 'lightgray', width: '98%', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{auth}</Text>

                                        <TouchableOpacity onPress={() => navigation.navigate('Author', { item: auth })} style={{ boxshadowcolor: '#000', elevation: 5, borderRadius: 10, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center', width: 100, height: 30, marginTop: 5 }}>
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