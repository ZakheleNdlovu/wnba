import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Poets = () => {
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
        <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, padding: 4, marginBottom: 1, backgroundColor: 'white', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, height: '100%' }}>
            <Text style={{ fontSize: 16, alignSelf: 'center' }}>Authors</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {author.map((auth, key) => {
                    if (auth.toLowerCase().includes(search.toLowerCase())) {
                        return (
                            <View key={key} style={{ padding: 5 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Autha', { item: auth })}>
                                    <View style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2)', borderRadius: 10, borderColor: 'gray', borderWidth: 1, padding: 10, marginBottom: 5 }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{auth}</Text>

                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                })}
            </ScrollView>
        </View>
    )
}

export default Poets