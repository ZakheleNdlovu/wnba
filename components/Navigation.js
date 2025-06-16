import { View, Text, Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Events from './Games1/Events'
import EventDetails from './Games1/EventDetails'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Teams from './Teams/Teams'
import TeamDetails from './Teams/TeamDetails'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function EventStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Games' component={Events} options={{ headerShown: false }} />
            <Stack.Screen name='Details' component={EventDetails} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => (
                <DrawerContentScrollView {...props}>
                    <View style={{ height: '100%' }}>
                        <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={{ uri: 'https://logos-world.net/wp-content/uploads/2021/11/WNBA-Symbol-700x394.png' }} width={150} height={'100%'} style={{ height: 100, marginTop: 4 }} />
                            <Text style={{ fontSize: 20, }}>WNBA</Text>
                        </View>

                    </View>
                    <View style={{ marginTop: 10, borderRadius: 30, marginBottom: 10 }}>
                        <DrawerItemList {...props} />

                    </View>


                </DrawerContentScrollView>
            )}>
            <Drawer.Screen name='Events' component={EventStackNavigator} />
            <Drawer.Screen name='Teams' component={TeamStackNavigator} />
        </Drawer.Navigator>
    )
}

function TeamStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Teams1' component={Teams} options={{ headerShown: false }} />
            <Stack.Screen name='Team-Details' component={TeamDetails} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}



const Navigation = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}

export default Navigation