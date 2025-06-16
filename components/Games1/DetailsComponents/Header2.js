import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Header2 = ({ item }) => {

    return (
        <View>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.name} - {item.competitions[0].venue.address.city}, {item.competitions[0].venue.address.state}</Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.date.slice(0, -7)} - {item.date.slice(-6, -1)} EST</Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }} >{item.season.slug.slice(0, 1).toUpperCase()}{item.season.slug.slice(1,)}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                <View>
                    <Image source={{ uri: item.competitions[0].competitors[0].team.logo }} width={60} height={60} />
                </View>
                <View>
                    <Image source={{ uri: item.competitions[0].competitors[1].team.logo }} width={60} height={60} />
                </View>
            </View>
            <View style={{ width: '80%', justifyContent: 'space-around', flexDirection: 'row', alignSelf: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.competitions[0].competitors[0].team.displayName}</Text>
                <Text style={{ color: 'orange' }}>VS</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.competitions[0].competitors[1].team.displayName}</Text>
            </View>
            <View style={{ width: '100%', justifyContent: 'space-around', flexDirection: 'row' }}>
                <Text style={{ fontSize: 25 }}>{item.competitions[0].competitors[0].score}</Text>
                <Text style={{ fontSize: 25 }}>{item.competitions[0].competitors[1].score}</Text>
            </View>
            <View style={{ width: '70%', justifyContent: 'space-around', flexDirection: 'row', alignSelf: 'center' }}>
                <Text style={{ fontSize: 15, backgroundColor: 'lightgray' }}>{item.competitions[0].competitors[0].records[0].summary}</Text>
                <Text>Team record</Text>
                <Text style={{ fontSize: 15, backgroundColor: 'lightgray' }}>{item.competitions[0].competitors[1].records[0].summary}</Text>
            </View>
            <View style={{ width: '100%', justifyContent: 'space-around', flexDirection: 'row', alignSelf: 'center' }}>
                <Text style={{ fontSize: 15, backgroundColor: 'lightgray' }}>Home</Text>
                <Text style={{ fontSize: 15, backgroundColor: 'lightgray' }}>Away</Text>
            </View>
        </View>
    )
}

export default Header2