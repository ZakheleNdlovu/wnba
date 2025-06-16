import { View, Text, Image } from 'react-native'
import React from 'react'

const GameStatistics = ({ item }) => {

    if (item.competitions[0].status.type.state == 'pre') {
        return (
            <View style={{ alignItems: 'center', height: '100%' }}>
                <Text style={{ fontSize: 20, padding: 5 }}>Game details will be available when the game starts</Text>
            </View>
        )
    }
    else {
        if (item.competitions[0].competitors[0].leaders[0].leaders[0].athlete.headshot) {
            return (
                <View>
                    <View style={{ width: '98%', alignItems: 'center', justifyContent: 'center', padding: 10, backgroundColor: 'lightgray', alignSelf: 'center', borderWidth: 1, borderColor: 'black', marginTop: 2 }}>
                        <Text style={{ fontSize: 20 }}>Game Statistics</Text>
                    </View>
                    <View style={{ borderColor: 'black', borderWidth: 1, borderStyle: 'dotted', width: '98%', alignSelf: 'center' }}>
                        <View style={{ width: '99%', alignItems: 'center' }}>
                            <Text style={{ fontSize: 17, color: 'black' }}>{item.competitions[0].competitors[0].team.displayName}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View>
                                <Text>{item.competitions[0].competitors[0].statistics[9].abbreviation}</Text>
                                <Text>{item.competitions[0].competitors[0].statistics[9].displayValue}</Text>
                            </View>
                            <View>
                                <Text>{item.competitions[0].competitors[0].statistics[0].abbreviation}</Text>
                                <Text>{item.competitions[0].competitors[0].statistics[0].displayValue}</Text>
                            </View>
                            <View>
                                <Text>{item.competitions[0].competitors[0].statistics[2].abbreviation}</Text>
                                <Text>{item.competitions[0].competitors[0].statistics[2].displayValue}</Text>
                            </View>
                            <View>
                                <Text>{item.competitions[0].competitors[0].statistics[5].abbreviation}</Text>
                                <Text>{item.competitions[0].competitors[0].statistics[5].displayValue}</Text>
                            </View>
                            <View>
                                <Text>{item.competitions[0].competitors[0].statistics[6].abbreviation}</Text>
                                <Text>{item.competitions[0].competitors[0].statistics[6].displayValue}</Text>
                            </View>
                            <View>
                                <Text>{item.competitions[0].competitors[0].statistics[10].abbreviation}</Text>
                                <Text>{item.competitions[0].competitors[0].statistics[10].displayValue}</Text>
                            </View>
                        </View>
                        <View style={{ width: '99%', alignItems: 'center' }}>
                            <Text style={{ fontSize: 17, color: 'black' }}>Highest Rated Player</Text>
                            <Image source={{ uri: item.competitions[0].competitors[0].leaders[0].leaders[0].athlete.headshot }} width={65} height={65} />
                            <Text>{item.competitions[0].competitors[0].leaders[3].leaders[0].athlete.displayName}</Text>
                            <Text>{item.competitions[0].competitors[0].leaders[3].leaders[0].displayValue}</Text>
                            <Text>Rating: {item.competitions[0].competitors[0].leaders[3].leaders[0].value.toFixed(2)}</Text>
                        </View>
                    </View>
                    <View style={{ borderColor: 'black', borderWidth: 1, borderStyle: 'dotted', width: '98%', alignSelf: 'center' }}>
                        <View style={{ width: '99%', alignItems: 'center' }}>
                            <Text style={{ fontSize: 17, color: 'black' }}>{item.competitions[0].competitors[1].team.displayName}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View>
                                <Text>{item.competitions[0].competitors[1].statistics[9].abbreviation}</Text>
                                <Text>{item.competitions[0].competitors[1].statistics[9].displayValue}</Text>
                            </View>
                            <View>
                                <Text>{item.competitions[0].competitors[1].statistics[0].abbreviation}</Text>
                                <Text>{item.competitions[0].competitors[1].statistics[0].displayValue}</Text>
                            </View>
                            <View>
                                <Text>{item.competitions[0].competitors[1].statistics[2].abbreviation}</Text>
                                <Text>{item.competitions[0].competitors[1].statistics[2].displayValue}</Text>
                            </View>
                            <View>
                                <Text>{item.competitions[0].competitors[1].statistics[5].abbreviation}</Text>
                                <Text>{item.competitions[0].competitors[1].statistics[5].displayValue}</Text>
                            </View>
                            <View>
                                <Text>{item.competitions[0].competitors[1].statistics[6].abbreviation}</Text>
                                <Text>{item.competitions[0].competitors[1].statistics[6].displayValue}</Text>
                            </View>
                            <View>
                                <Text>{item.competitions[0].competitors[1].statistics[10].abbreviation}</Text>
                                <Text>{item.competitions[0].competitors[1].statistics[10].displayValue}</Text>
                            </View>
                        </View>
                        <View style={{ width: '99%', alignItems: 'center' }}>
                            <Text style={{ fontSize: 17, color: 'black' }}>Highest Rated Player</Text>
                            <Image source={{ uri: item.competitions[0].competitors[1].leaders[0].leaders[0].athlete.headshot }} width={65} height={65} />
                            <Text>{item.competitions[0].competitors[1].leaders[3].leaders[0].athlete.displayName}</Text>
                            <Text>{item.competitions[0].competitors[1].leaders[3].leaders[0].displayValue}</Text>
                            <Text>Rating: {item.competitions[0].competitors[1].leaders[3].leaders[0].value.toFixed(2)}</Text>
                        </View>
                    </View>
                </View>
            )
        }
    }

}

export default GameStatistics