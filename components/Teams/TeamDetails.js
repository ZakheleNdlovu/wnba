import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from './TeamDetailsF/Header'
import Statistics from './TeamDetailsF/Statistics'
import Footer from '../Footer'

const TeamDetails = () => {

    const [details, setDetails] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()
    const route = useRoute()
    const { item } = route.params

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch(`https://sports.core.api.espn.com/v2/sports/basketball/leagues/wnba/seasons/2025/types/2/teams/${item.team.id}/statistics`)
                const data = await response.json()
                setDetails(data.splits)
            } catch (err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }
        fetchStats()
    }, [navigation])

    if (loading) {
        return (
            <View style={{ width: '98%', alignItems: 'center' }}>
                <Text>loading...</Text>
            </View>
        )
    }
    if (error) {
        return (
            <View style={{ width: '98%', alignItems: 'center' }}>
                <Text>Error:{error}</Text>
            </View>
        )
    }


    return (
        <View style={{ height: '100%' }}>
            <View style={{ height: '53%' }}>
                <Header item={item} />
            </View>
            <View style={{ height: '43%' }}>
                <Statistics item={details} />
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 60, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 5 }}>
                    <Text style={{ fontSize: 18, padding: 5, color: 'white', fontWeight: 'bold' }}>Back</Text>
                </TouchableOpacity>
            </View>
            <Footer />
        </View>
    )
}

export default TeamDetails