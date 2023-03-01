import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import PaymentScreen from './screens/PaymentScreen';
import RegisterScreen from './screens/RegisterScreen';
import AdminScreen from './screens/AdminScreen';
import SettingsScreen from './screens/SettingsScreen';
import AccountScreen from './screens/AccountScreen';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator screenOptions={{headerShown:false}} initialRouteName='Login'>
            <Screen name="Login" component={LoginScreen}/> 
            <Screen name="Product" component={ProductScreen}/>
            <Screen name="Payment" component={PaymentScreen}/>
            <Screen name="Register" component={RegisterScreen}/>
            <Screen name="Admin" component={AdminScreen}/>
            <Screen name="Settings" component={SettingsScreen}/>
            <Screen name="Account" component={AccountScreen}/>
        </Navigator>
    </NavigationContainer>

)

export default AppNavigator;