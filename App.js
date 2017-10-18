import React from 'react';
import { BackHandler, Platform, StatusBar, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Router, { INITIAL_ROUTE } from './src';
import AppConfig from './app.json';

export default class Application extends React.Component {

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            const { state, goBack } = this.props.navigation;
            const { index, routes } = state;
            if (routes[index].routeName !== INITIAL_ROUTE) {
                goBack();
                return true;
            }
            return false;
        });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }

    render() {
        return (
            <Provider {...stores}>
                <View style={{ flex: 1 }}>
                    <StatusBar {...AppConfig.expo.androidStatusBar} />
                    <Router />
                </View>
            </Provider>
        );
    }
}