import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Views from './components/views';
import { colors } from './common/styles';

export const INITIAL_ROUTE = 'NoWallet';

export default StackNavigator({
    NoWallet: { screen: Views.NoWallet },
    NewWallet: { screen: Views.NewWallet },
    LoadWallet: { screen: Views.LoadWallet },
    CreateMnemonics: { screen: Views.CreateMnemonics },
    ConfirmMnemonics: { screen: Views.ConfirmMnemonics },
    WalletsOverview: { screen: Views.WalletsOverview }
}, {
    initialRouteName: INITIAL_ROUTE,
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary,
        },
        headerTintColor: colors.secondary
    }
});