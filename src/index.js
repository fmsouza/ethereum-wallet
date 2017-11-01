import React from 'react';
import { BackHandler, Platform, StatusBar, StyleSheet, View } from 'react-native';
import autobind from 'autobind-decorator';
import { colors } from './common/styles';
import Router, { INITIAL_ROUTE } from './Router';

const ANDROID_STATUSBAR = {
    backgroundColor: "#000000",
    barStyle: "light-content"
};

export default class Application extends React.Component {

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }

    @autobind
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
            <View style={styles.container}>
                <StatusBar {...ANDROID_STATUSBAR} />
                <Router />
            </View>
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