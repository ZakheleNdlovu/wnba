import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import Header from './TeamDetailsF/Header'
import Statistics from './TeamDetailsF/Statistics'
import Footer from '../Footer'

const TeamDetails = () => {

    const [details, setDetails] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

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
    }, [])

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
            </View>
            <Footer />
        </View>
    )
}

export default TeamDetails