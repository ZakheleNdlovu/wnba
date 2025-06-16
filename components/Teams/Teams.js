import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from './TeamComponents/Header'
import AllTeams from './TeamComponents/AllTeams'
import Footer from '../Footer'

const Teams = () => {

    const [league, setLeague] = useState([])
    const [teams, setTeams] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/teams')
                const data = await response.json()
                setLeague(data.sports[0].leagues)
                setTeams(data.sports[0].leagues[0].teams)
            }
            catch (err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }

        }
        fetchTeams()
    }, [])
    if (loading) {
        return (
            <View style={{ alignItems: 'center', width: '100%' }}>
                <Text>Loading...</Text>
            </View>
        )
    }
    if (error) {
        return (
            <Text>Error:{error}</Text>
        )
    }

    return (
        <View>
            <View style={{ height: '5%' }}>
                <Header data={league} />
            </View>
            <View style={{ height: '91%' }}>
                <AllTeams data={league} teams={teams} navigation={navigation} />
            </View>
            <Footer />
        </View>
    )
}

export default Teams