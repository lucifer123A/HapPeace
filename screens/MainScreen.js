import React from 'react';
import {View,
        Text,
        StyleSheet
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Login';
import Dashboard from './Dashboard';
import SignUp from './SignUp';

class MainScreen extends React.Component{
    render(){
        const Stack= createStackNavigator();
        return(
            <NavigationContainer>
                <Stack.Navigator>

                    <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{title: 'Login'}}/>

                    <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{title: 'SignUp'}}/>

                    <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{title: 'Welcome'}}/>
                    
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default MainScreen;
