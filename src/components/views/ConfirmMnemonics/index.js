import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import autobind from 'autobind-decorator';
import { Button } from '@components/widgets';
import { Wallet as WalletUtils } from '@common/utils';
import { colors, measures } from '@common/styles';
import { Wallets as WalletsActions } from '@common/actions';
import ConfirmBox from './ConfirmBox';

export class ConfirmMnemonics extends React.Component {
    
    static navigationOptions = { title: 'Create Wallet' };

    state = { mnemonics: [] };

    componentWillMount() {
        const { mnemonics, walletName, walletDescription } = this.props.navigation.state.params;
        this.setState({ mnemonics, walletName, walletDescription });
    }

    @autobind
    async onPressConfirm() {
        if (!this.refs.confirm.isValidSequence()) return;
        try {
            const wallet = WalletUtils.loadWalletFromMnemonics(this.state.mnemonics);
            const walletName = this.state.walletName;
            const walletDescription = this.state.walletDescription;
            await WalletsActions.addWallet(walletName, wallet, walletDescription);
            this.props.navigation.navigate('WalletsOverview', { replaceRoute: true });
            await WalletsActions.saveWallets();
        } catch (e) {
            console.warn(e);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View />
                <ConfirmBox ref='confirm' mnemonics={this.state.mnemonics} />
                <View style={styles.buttonsContainer}>
                    <Button onPress={this.onPressConfirm}>Confirm & open wallet</Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: colors.defaultBackground
    },
    message: {
        color: colors.black,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: measures.defaultMargin,
        marginHorizontal: 32
    },
    mnemonicsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '80%'
    },
    mnemonic: {
        margin: 4
    },
    buttonsContainer: {
        width: '100%',
        justifyContent: 'flex-end',
        height: 104
    }
});
