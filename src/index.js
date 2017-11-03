import React from 'react';
import { BackHandler, StatusBar, StyleSheet, View } from 'react-native';
import autobind from 'autobind-decorator';
import { colors } from './common/styles';
import Router, { INITIAL_ROUTE } from './Router';

const STATUSBAR_CONFIG = {
    backgroundColor: colors.statusBar,
    barStyle: "default",
    translucent: false
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
                <StatusBar {...STATUSBAR_CONFIG} />
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