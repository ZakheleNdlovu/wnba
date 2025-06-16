import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import Header2 from './DetailsComponents/Header2'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import GameStatistics from './DetailsComponents/GameStatistics'
import Footer from '../Footer'

const Top = createMaterialTopTabNavigator()

const EventDetails = () => {

    const route = useRoute()
    const { item } = route.params

    return (
        <View style={{ height: '100%' }}>
            <View style={{ height: '35%' }}>
                <Header2 item={item} />
            </View>
            <View style={{ height: '61%' }}>
                <GameStatistics item={item} />
            </View>
            <Footer />
        </View>
    )
}

export default EventDetails