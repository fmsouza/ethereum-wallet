import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'components/widgets';
import { colors, measures } from 'common/styles';

export class LoadWallet extends React.Component {

    static navigationOptions = { header: null }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <View />
                    <Image style={styles.logo} source={require('assets/img/ethereum.png')} />
                    <View>
                        <Text style={styles.message}>Load the wallet from</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Button onPress={() => navigate('LoadPrivateKey')}>Private key</Button>
                        <Button onPress={() => navigate('LoadMnemonics')}>Mnemonics</Button>
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
        flex: 1
    },
    message: {
        color: colors.secondary,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: measures.defaultMargin,
        marginHorizontal: 32
    },
    logo: {
        width: 128,
        height: 128,
    },
    buttonsContainer: {
        width: '100%',
        justifyContent: 'space-between',
        height: 104
    }
});