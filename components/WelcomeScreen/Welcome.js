import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Poems from './Poems'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {

    const [poems, setPoems] = useState([])
    const [search, setSearch] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPoems = async () => {
            try {
                const response = await fetch('https://poetrydb.org/title/love?limit=20')
                const data = await response.json()
                setPoems(data)
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
        <View >
            <View style={{ height: '8%' }}>
                <View style={{ height: 50, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderColor: 'gray', borderWidth: 1, width: '98%', alignSelf: 'center', marginBottom: 4, borderRadius: 10 }}>
                    <View style={{ overflow: 'hidden', borderRadius: 10, borderColor: 'gray', borderWidth: 1 }}>
                        <TextInput style={{ width: 230, height: 35, backgroundColor: 'white' }} placeholder='Search by title...' onChangeText={(value) => setSearch(value)} />
                    </View>

                </View>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 10, borderColor: 'red', borderWidth: 2, width: '98%', alignSelf: 'center', marginBottom: 4, backgroundColor: 'tomato', borderRadius: 10, height: '7%' }}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>❤Feeling in love?❤</Text>
            </View>
            <Poems poems={poems} text={search} />
        </View >
    )
}

export default Welcome