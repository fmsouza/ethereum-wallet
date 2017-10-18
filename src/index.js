import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Views from './components/views';

export const INITIAL_ROUTE = 'home';

export default StackNavigator({
    home: { screen: Views.Home },
}, {
    initialRouteName: INITIAL_ROUTE
});