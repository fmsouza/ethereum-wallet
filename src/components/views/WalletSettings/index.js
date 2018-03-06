import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { Icon } from '@components/widgets';
import { colors, measures } from '@common/styles';
import { Wallets as WalletsActions } from '@common/actions';
import ListItem from './ListItem';

@inject('wallet')
@observer
export class WalletSettings extends React.Component {

    @autobind
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