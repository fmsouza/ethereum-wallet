import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'components/widgets';
import { colors, measures } from 'common/styles';

export class NoWallet extends React.Component {

    static navigationOptions = { header: null }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <View />
                    <Image style={styles.logo} source={require('assets/img/ethereum.png')} />
                    <View style={styles.buttonsContainer}>
                        <Button onPress={() => navigate('NewWallet')}>Create new wallet</Button>
                        <Button onPress={() => navigate('LoadWallet')}>Load from existing wallet</Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'flex-end',
        padding: measures.defaultPadding
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