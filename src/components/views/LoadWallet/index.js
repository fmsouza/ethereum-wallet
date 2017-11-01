import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'components/widgets';
import { colors, measures } from 'common/styles';

export class LoadWallet extends React.Component {

    static navigationOptions = { header: null }

    render() {
        const { navigate } = this.props.navigation;
        return (
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('assets/img/ethereum.png')} />
                    <View>
                        <Text style={styles.message}>Load the wallet from</Text>
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
    container: {
        backgroundColor: colors.splashscreenBackground,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flex: 1,
        padding: measures.defaultPadding,
    },
    message: {
        color: colors.secondary,
        fontSize: 16,
        textAlign: 'center',
        margin: measures.defaultMargin * 4,
    },
    logo: {
        alignSelf: 'center',
        width: 128,
        height: 128,
        marginTop: 64
    },
    buttonsContainer: {
        justifyContent: 'space-between',
        height: 104
    }
});