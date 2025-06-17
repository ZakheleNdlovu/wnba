import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Statistics = ({ item }) => {
    if (item) {
        return (
            <View style={styles.box}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', alignSelf: 'center' }}>Season Statistics</Text>
                <View style={styles.container}>
                    <View style={{ alignItems: 'center', width: '16%' }}>
                        <Text>{item.categories[1].stats[31].abbreviation}</Text>
                        <Text>{item.categories[1].stats[31].value}</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '16%' }}>
                        <Text>{item.categories[2].stats[10].abbreviation}</Text>
                        <Text>{item.categories[2].stats[10].value}</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '16%' }}>
                        <Text>{item.categories[2].stats[0].abbreviation}</Text>
                        <Text>{item.categories[2].stats[0].value}</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '16%' }}>
                        <Text>{item.categories[1].stats[5].abbreviation}</Text>
                        <Text>{item.categories[1].stats[5].value}</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '16%' }}>
                        <Text>{item.categories[2].stats[4].abbreviation}</Text>
                        <Text>{item.categories[2].stats[4].displayValue}</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '16%' }}>
                        <Text>{item.categories[2].stats[12].abbreviation}</Text>
                        <Text>{item.categories[2].stats[12].displayValue}</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={{ alignItems: 'center', width: '16%' }}>
                        <Text>{item.categories[2].stats[6].abbreviation}</Text>
                        <Text>{item.categories[2].stats[6].displayValue}</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '16%' }}>
                        <Text>{item.categories[0].stats[2].abbreviation}</Text>
                        <Text>{item.categories[0].stats[2].value}</Text>
                    </View>

                    <View style={{ alignItems: 'center', width: '16%' }}>
                        <Text>{item.categories[0].stats[0].abbreviation}</Text>
                        <Text>{item.categories[0].stats[0].value}</Text>
                    </View>

                    <View style={{ alignItems: 'center', width: '16%' }}>
                        <Text>{item.categories[2].stats[11].abbreviation}</Text>
                        <Text>{item.categories[2].stats[11].displayValue}</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '16%' }}>
                        <Text>{item.categories[1].stats[2].abbreviation}</Text>
                        <Text>{item.categories[1].stats[2].displayValue}</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '16%' }}>
                        <Text>{item.categories[1].stats[8].abbreviation}</Text>
                        <Text>{item.categories[1].stats[8].displayValue}</Text>
                    </View>
                </View>
            </View>
        )
    }
    else {
        return (
            <View style={{ width: '98%', alignItems: 'center', alignSelf: 'center' }}>
                <Text style={{ fontSize: 20, textDecorationLine: 'underline' }}>No Statistics available.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'dotted',
        width: '100%',
        alignSelf: 'center',
        padding: 2,
        marginBottom: 2,
        marginTop: 2
    },
    box: {
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'dotted',
        width: '98%',
        alignSelf: 'center'
    }
})

export default Statistics