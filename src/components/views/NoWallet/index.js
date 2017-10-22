import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ButtonLoadWallet from './ButtonLoadWallet';
import ButtonNewWallet from './ButtonNewWallet';

export class NoWallet extends React.Component {

    static navigationOptions = { header: null }
    
    onPressNewWallet = () => {
        this.props.navigation.navigate('NewWallet');
    }

    onPressLoadWallet = () => {}

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <View />
                    <Image style={styles.logo} source={require('assets/img/ethereum.png')} />
                    <View style={styles.buttonsContainer}>
                        <ButtonNewWallet onPress={this.onPressNewWallet} />
                        <ButtonLoadWallet onPress={this.onPressLoadWallet} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#3E7BE5',
        justifyContent: 'flex-end',
        padding: 8,
        paddingBottom: 32
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    logo: {
        width: 128,
        height: 128
    },
    buttonsContainer: {
        width: '100%',
        justifyContent: 'space-between',
        height: 104
    }
});