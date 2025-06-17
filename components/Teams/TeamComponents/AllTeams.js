import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

const AllTeams = ({ teams, navigation }) => {

    return (
        <View>
            <FlatList data={teams} renderItem={({ item }) => {

                if (item.team.logos[0]) {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Team-Details', { item: item })
                        }}>
                            <View style={styles.container}>
                                <View style={{ width: '15%' }}>
                                    <Image source={{ uri: item.team.logos[1].href }} width={40} height={40} />
                                </View>
                                <Text>{item.team.displayName}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
                else {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Team-Details', { item: item })
                        }}>
                            <View style={styles.container}>
                                <View style={{ width: '15%', height: 40 }}>

                                </View>
                                <Text>{item.team.displayName}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }

            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 2,
        borderStyle: 'dotted'
    }
})

export default AllTeams