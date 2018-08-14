import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Icon } from '@components/widgets';
import { colors, measures } from '@common/styles';
import { Wallets as WalletsActions } from '@common/actions';
import ListItem from './ListItem';

@inject('wallet')
@observer
export class WalletSettings extends React.Component {

    async removeWallet() {
        try {
            const { wallet } = this.props;
            await WalletsActions.removeWallet(wallet.item);
            this.props.navigation.goBack();
            await WalletsActions.saveWallets();
        } catch (e) {
            console.warn(e);
        }
    }

    showPK() {
        const { wallet } = this.props;
        this.props.navigation.push('ShowPrivateKey', { wallet: wallet.item });
    }

    confirmRemoveWallet() {
        Alert.alert(
            'Remove wallet',
            'This action cannot be undone. Are you sure?',
            [
                { text: 'Cancel', onPress: () => {}, style: 'cancel' },
                { text: 'Remove', onPress: () => this.removeWallet() }
            ],
            { cancelable: false }
        );
    }

    confirmExportPK() {
        Alert.alert(
            'Export private key',
            'Make sure you are alone and no one else will see your private key.',
            [
                { text: 'Cancel', onPress: () => {}, style: 'cancel' },
                { text: 'Continue', onPress: () => this.showPK() }
            ],
            { cancelable: false }
        );
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <ListItem onPress={() => this.confirmRemoveWallet()}>
                    <View style={styles.itemContainer}>
                        <View style={styles.icon}>
                            <Icon name='trash' />
                        </View>
                        <Text style={styles.itemTitle}>Remove wallet</Text>
                    </View>
                </ListItem>
                <ListItem onPress={() => this.confirmExportPK()}>
                    <View style={styles.itemContainer}>
                        <View style={styles.icon}>
                            <Icon name='trash' />
                        </View>
                        <Text style={styles.itemTitle}>Export private key</Text>
                    </View>
                </ListItem>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.defaultBackground,
        flex: 1
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    icon: {
        width: 24,
        height: 24,
        margin: measures.defaultMargin
    },
    itemTitle: {
        fontSize: measures.fontSizeMedium
    }
});