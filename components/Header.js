import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const Header = () => {

    return (
        <View style={{ height: 50, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderColor: 'gray', borderWidth: 1, width: '98%', alignSelf: 'center', marginBottom: 4 }}>
            <View style={{ overflow: 'hidden', borderRadius: 10, borderColor: 'gray', borderWidth: 1 }}>
                <TextInput style={{ width: 230, height: 35, backgroundColor: 'white' }} placeholder='Search by author...' onChangeText={() => {

                }} />
            </View>
            <TouchableOpacity style={{ padding: 4, }}>
                <Ionicons name='search' size={25} />
            </TouchableOpacity>
        </View>
    )
}

export default Header