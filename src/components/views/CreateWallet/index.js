import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@components/widgets';
import { colors, measures } from '@common/styles';

export class CreateWallet extends React.Component {
    
    static navigationOptions = { title: 'Create Wallet' };
    
    onPressProceed() {
        const { walletName, walletDescription } = this.props.navigation.state.params;
        this.props.navigation.navigate('CreateMnemonics', { walletName, walletDescription });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <View>
                        <Text style={styles.message}>When creating a new wallet you will receive a sequence of mnemonics which represent your "personal password". Anyone with this sequence may be able to reconfigure your wallet in any new device. Keep it stored as secure as possible. Only you should have access to this information.</Text>
                        <Text style={styles.message}>Write it somewhere safe so you can make sure you won't lose it, or you may lose permanently all your coins. There is no way to recover it later.</Text>
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <Button onPress={() => this.onPressProceed()}>Proceed</Button>
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
    contentContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    message: {
        color: colors.black,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: measures.defaultMargin,
        marginHorizontal: 32
    },
    buttonsContainer: {
        justifyContent: 'space-between'
    }
});