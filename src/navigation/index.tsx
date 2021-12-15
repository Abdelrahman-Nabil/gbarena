import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen'
import { Home, AddMovie }  from '../screens'
import { translator } from '../localization';

const Stack = createStackNavigator();

const Navigator = (props: any) => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options = {{title: translator.translate('home')}}/>
                <Stack.Screen name="AddMovie" options = {{title: translator.translate('addAMovie')}} component={AddMovie} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator