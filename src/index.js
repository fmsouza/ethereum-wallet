import React from 'react';
import { BackHandler, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'mobx-react';
import { colors } from './common/styles';
import Router, { INITIAL_ROUTE } from './Router';
import * as stores from './common/stores';

const STATUSBAR_CONFIG = {
    backgroundColor: colors.statusBar,
    barStyle: 'light-content',
    translucent: false
};

export default class Application extends React.Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => this.handleBackButton());
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }

    handleBackButton() {
        if (!this.props.navigation) return false;
        
        const { state, goBack } = this.props.navigation;
        if (state.routes.length > 1 && state.index > 0) {
            goBack();
            return true;
        }
        return false;
    }

    render() {
        return (
            <Provider {...stores}>
                <View style={styles.container}>
                    <StatusBar {...STATUSBAR_CONFIG} />
                    <Router />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.defaultBackground,
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    }
});