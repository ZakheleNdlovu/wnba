import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Poems from './Poems'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Poets from './Poets'

const Welcome = () => {

    const [poems, setPoems] = useState([])
    const [search, setSearch] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPoems = async () => {
            try {
                const response = await fetch('https://poetrydb.org/title/day?limit=20')
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
            <View >
                <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderColor: 'gray', borderWidth: 1, width: '98%', alignSelf: 'center', marginBottom: 4, borderRadius: 10 }}>
                    <View style={{ overflow: 'hidden', borderRadius: 10, borderColor: 'gray', borderWidth: 1 }}>
                        <TextInput style={{ width: 230, height: 35, backgroundColor: 'white' }} placeholder='Search by title...' onChangeText={(value) => setSearch(value)} />
                    </View>

                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '99%', alignSelf: 'center' }}>
                <Poets />
            </View>
            <Poems poems={poems} text={search} />
        </View >
    )
}

export default Welcome