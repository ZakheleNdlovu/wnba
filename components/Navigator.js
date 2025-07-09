import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Welcome from './WelcomeScreen/Welcome'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import Details from './WelcomeScreen/Details'
import HomeScreen from './SearchByAuthor/HomeScreen'
import Read from './SearchByAuthor/Read'
import Book from './SearchByAuthor/Book'
import Header from './Header'
import Poets from './WelcomeScreen/Poets'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Bottom = createBottomTabNavigator()

/*
function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={Welcome} />
        </Drawer.Navigator>
    )
}
    */

function BottomNavigator() {
    return (
        <Bottom.Navigator>
            <Bottom.Screen name='Home' component={StackNavigator1} options={{ tabBarIcon: () => <Ionicons name='home' size={25} />, headerShown: false }} />
            <Bottom.Screen name='Poets' component={StackNavigator2} options={{ tabBarIcon: () => <Ionicons name='person' size={25} />, headerShown: false }} />
        </Bottom.Navigator>
    )
}

function StackNavigator1() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='All' component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name='Read' component={Details} options={{ headerShown: false }} />
            <Stack.Screen name='Autha' component={Read} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

function StackNavigator2() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Authors' component={HomeScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name='Author' component={Read} options={{ headerShown: false }} />
            <Stack.Screen name='Poem' component={Book} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <BottomNavigator />
        </NavigationContainer>
    )
}

export default Navigator