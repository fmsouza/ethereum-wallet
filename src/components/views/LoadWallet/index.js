import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@components/widgets';
import { colors, measures } from '@common/styles';

export class LoadWallet extends React.Component {
    
    static navigationOptions = { title: 'Load Wallet' };

    render() {
        const { navigate, state: { params: { walletName, walletDescription } } } = this.props.navigation;
        return (
                <View style={styles.container}>
                    <Text style={styles.message}>Load the wallet from</Text>
                    <View style={styles.buttonsContainer}>
                        <Button
                            children="Private key"
                            onPress={() => navigate('LoadPrivateKey', { walletName, walletDescription })} />
                        <Button
                            children="Mnemonics"
                            onPress={() => navigate('LoadMnemonics', { walletName, walletDescription })} />
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.defaultBackground,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flex: 1,
        padding: measures.defaultPadding,
    },
    message: {
        color: colors.black,
        fontSize: 16,
        textAlign: 'center',
        margin: measures.defaultMargin * 4,
    },
    buttonsContainer: {
        justifyContent: 'space-between'
    }
});