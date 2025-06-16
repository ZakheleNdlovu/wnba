import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const BoxScore = ({ item, navigation }) => {
    if (item.competitions[0].competitors[0].team.logo || item.competitions[0].competitors[0].team.logo) {
        return (
            <View >
                <View style={styles.rows}>
                    <View style={styles.block}>
                        <Image source={{ uri: item.competitions[0].competitors[0].team.logo }} width={25} height={25} />
                        <Text style={{ color: 'white' }}>{item.competitions[0].competitors[0].team.displayName}</Text>
                    </View>
                    <Text style={{ color: 'white' }}>{item.competitions[0].competitors[0].score}</Text>
                </View>

                <View style={styles.rows2}>
                    <View style={styles.block}>
                        <Image source={{ uri: item.competitions[0].competitors[1].team.logo }} width={25} height={25} />
                        <Text>{item.competitions[0].competitors[1].team.displayName}</Text>
                    </View>
                    <Text>{item.competitions[0].competitors[1].score}</Text>
                </View>
            </View>
        )
    }
    else {
        return (
            <View >
                <View style={styles.rows}>
                    <View style={styles.block}>

                        <Text style={{ color: 'white' }}>{item.competitions[0].competitors[0].team.displayName}</Text>
                    </View>
                    <Text style={{ color: 'white' }}>{item.competitions[0].competitors[0].score}</Text>
                </View>

                <View style={styles.rows2}>
                    <View style={styles.block}>

                        <Text>{item.competitions[0].competitors[1].team.displayName}</Text>
                    </View>
                    <Text>{item.competitions[0].competitors[1].score}</Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    rows: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        alignSelf: 'center',
        backgroundColor: 'gray'
    },
    rows2: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        alignSelf: 'center',
        backgroundColor: 'lightgray'
    },
    block: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default BoxScore