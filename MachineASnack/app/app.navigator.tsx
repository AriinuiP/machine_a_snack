import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator screenOptions={{headerShown:false}} initialRouteName='Login'>
            <Screen name="Login" component={LoginScreen}/> 
            <Screen name="Product" component={ProductScreen}/>
        </Navigator>
    </NavigationContainer>

)

export default AppNavigator;