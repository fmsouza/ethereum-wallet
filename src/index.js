import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Views from './components/views';

export const INITIAL_ROUTE = 'NoWallet';

export default StackNavigator({
    NoWallet: { screen: Views.NoWallet },
    NewWallet: { screen: Views.NewWallet },
}, {
    initialRouteName: INITIAL_ROUTE
});