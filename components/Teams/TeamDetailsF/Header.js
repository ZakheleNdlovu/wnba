import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const Header = ({ item }) => {
    if (item.team.logos[0]) {
        return (
            <ImageBackground source={{ uri: item.team.logos[0].href }} width={'90%'} height={350} borderRadius={10} style={{ width: '98%', height: 350, alignSelf: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center', height: 350, backgroundColor: 'black', opacity: .8, justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>{item.team.displayName}</Text>
                </View>
            </ImageBackground>
        )
    }
    else {
        return (
            <ImageBackground width={'90%'} height={350} style={{ width: '100%', height: 350 }}>
                <View style={{ width: '100%', alignItems: 'center', height: 350, backgroundColor: 'black', opacity: .8, justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>{item.team.displayName}</Text>
                </View>
            </ImageBackground>
        )
    }
}

export default Header