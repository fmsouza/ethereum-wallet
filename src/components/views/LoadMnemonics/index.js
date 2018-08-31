import React from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button, InputWithIcon, TextBullet } from '@components/widgets';
import { colors, measures } from '@common/styles';
import { Wallet as WalletUtils } from '@common/utils';
import { General as GeneralActions, Wallets as WalletsActions } from '@common/actions';

export class LoadMnemonics extends React.Component {
    
    static navigationOptions = { title: 'Load Wallet' };

    state = { mnemonics: [] };

    async onPressOpenWallet() {
        if (!this.state.mnemonics.length) return;
        Keyboard.dismiss();
        try {
            const { mnemonics } = this.state;
            const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
            const { walletName, walletDescription } = this.props.navigation.state.params;
            await WalletsActions.addWallet(walletName, wallet, walletDescription);
            this.props.navigation.navigate('WalletsOverview', { replaceRoute: true });
            await WalletsActions.saveWallets();
        } catch (e) {
            GeneralActions.notify(e.message, 'long');
        }
    }

    removeMnemonic(mnemonic) {
        let { mnemonics } = this.state;
        mnemonics = mnemonics.filter(m => m !== mnemonic);
        this.setState({ mnemonics });
    }
    
    renderMnemonic = (mnemonic, index) => (
        <TouchableWithoutFeedback key={index} onPress={() => this.removeMnemonic(mnemonic)}>
            <View style={styles.mnemonic}>
                <TextBullet>{mnemonic}</TextBullet>
            </View>
        </TouchableWithoutFeedback>
    );

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.message}>Type the mnemonics</Text>
                    <View style={styles.mnemonics}>
                        {this.state.mnemonics.map(this.renderMnemonic)}
                    </View>
                    <InputWithIcon
                        icon='send'
                        placeholder='Type the mnemonic here'
                        onPressIcon={text => this.setState({ mnemonics: this.state.mnemonics.concat([text]) })} />
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        children='Open wallet'
                        onPress={() => this.onPressOpenWallet()} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: colors.defaultBackground
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    message: {
        color: colors.black,
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
        height: 52
    },
    mnemonics: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: 4
    },
    mnemonic: {
        margin: 4
    }
});