import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from './eventComponents/Header'
import Games from './eventComponents/Games'
import Footer from '../Footer'

const Events = () => {

    const [league, setLeague] = useState([])
    const [events, setEvents] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard')
                const data = await response.json()
                setLeague(data.leagues[0])
                setEvents(data.events)
            }
            catch (err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (loading) {
        return <Text>loading</Text>
    }

    if (error) {
        return <Text>{error}</Text>
    }

    return (
        <View style={{ height: '100%' }}>
            <View style={{ height: '7.7%' }}>
                <Header data={league} />
            </View>
            <View style={{ height: '89.3%', overflow: 'hidden', marginBottom: 2 }}>
                <Games data={events} navigation={navigation} />
            </View>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 1,
        borderColor: 'black'
    }
})
export default Events