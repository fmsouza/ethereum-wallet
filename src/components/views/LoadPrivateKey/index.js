import React from 'react';
import { Keyboard, StyleSheet, Text, View } from 'react-native';
import { Button, Camera, InputWithIcon } from '@components/widgets';
import { colors, measures } from '@common/styles';
import { Wallet as WalletUtils } from '@common/utils';
import { General as GeneralActions, Wallets as WalletsActions } from '@common/actions';

export class LoadPrivateKey extends React.Component {
    
    static navigationOptions = { title: 'Load Wallet' };

    state = { pk: '' };

    async onPressOpenWallet() {
        if (!this.state.pk) return;
        Keyboard.dismiss();
        try {
            const wallet = WalletUtils.loadWalletFromPrivateKey(this.state.pk);
            const { walletName, walletDescription } = this.props.navigation.state.params;
            await WalletsActions.addWallet(walletName, wallet, walletDescription);
            this.props.navigation.navigate('WalletsOverview', { replaceRoute: true });
            await WalletsActions.saveWallets();
        } catch (e) {
            GeneralActions.notify(e.message, 'long');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.message}>Private key</Text>
                    <InputWithIcon
                        ref='input'
                        icon='qr-scanner'
                        placeholder='eg.: 0xa80B875daC7fE18ed999218E3195022017f32Ac1'
                        onChangeText={pk => this.setState({ pk })}
                        onPressIcon={() => this.refs.camera.show()} />
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        children='Open wallet'
                        onPress={() => this.onPressOpenWallet()} />
                </View>
                <Camera
                    ref='camera'
                    modal
                    onClose={() => this.refs.camera.hide()}
                    onBarCodeRead={data => this.refs.input.onChangeText(data)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.defaultBackground,
        padding: measures.defaultPadding
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    message: {
        color: colors.black,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: measures.defaultMargin,
        marginHorizontal: 32
    },
    buttonsContainer: {
        width: '100%',
        justifyContent: 'space-between',
        height: 52
    }
});