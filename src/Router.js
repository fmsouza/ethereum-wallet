import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import NavigationActions from "react-navigation/lib/NavigationActions";
import * as Views from './components/views';
import { colors } from './common/styles';

export const INITIAL_ROUTE = Views.WalletsOverview.name;

const navigator = StackNavigator({
    [Views.CreateMnemonics.name]: { screen: Views.CreateMnemonics },
    [Views.CreateWallet.name]: { screen: Views.CreateWallet },
    [Views.ConfirmMnemonics.name]: { screen: Views.ConfirmMnemonics },
    [Views.LoadMnemonics.name]: { screen: Views.LoadMnemonics },
    [Views.LoadPrivateKey.name]: { screen: Views.LoadPrivateKey },
    [Views.LoadWallet.name]: { screen: Views.LoadWallet },
    [Views.NewWallet.name]: { screen: Views.NewWallet },
    [Views.NewWalletName.name]: { screen: Views.NewWalletName },
    [Views.SelectDestination.name]: { screen: Views.SelectDestination },
    [Views.WalletDetails.name]: { screen: Views.WalletDetails },
    [Views.WalletsOverview.name]: { screen: Views.WalletsOverview }
}, {
    initialRouteName: INITIAL_ROUTE,
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary,
        },
        headerTintColor: colors.secondary
    }
});

const parentGetStateForAction = navigator.router.getStateForAction;

navigator.router.getStateForAction = (action, inputState) => {
    const state = parentGetStateForAction(action, inputState);
    
    // fix it up if applicable
    if (state && action.type === NavigationActions.NAVIGATE) {
        if (action.params && action.params.replaceRoute) {
            delete action.params.replaceRoute;
            while (state.routes.length > 1 && state.index > 0) {
                const oldIndex = state.index - 1;
                // remove one that we are replacing
                state.routes.splice(oldIndex, 1);
                // index now one less
                state.index = oldIndex;
            }
        }
    }

    return state;
};

export default navigator;