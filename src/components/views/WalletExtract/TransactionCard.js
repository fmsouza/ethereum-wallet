import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from '@components/widgets';
import { colors, measures } from '@common/styles';
import { Wallet as WalletUtils } from '@common/utils';

export default class TransactionCard extends React.Component {

    get isReceiving() {
        const { transaction: { to }, walletAddress } = this.props;
        return (to.toLowerCase() === walletAddress.toLowerCase());

    }

    get iconName() {
        return (this.isReceiving) ? 'download' : 'upload';
    }

    get amount() {
        return WalletUtils.formatBalance(this.props.transaction.value);
    }

    render() {
        const { transaction } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.leftColumn}>
                    <Icon name={this.iconName} type="fe" />
                </View>
                <View style={styles.centerColumn}>
                    <Text>{transaction.from}</Text>
                    <Text>{transaction.to}</Text>
                    <Text>{this.amount}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: colors.secondary,
        height: 80,
        marginBottom: measures.defaultMargin,
    },
    leftColumn: {
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    centerColumn: {
        flex: 1,
        height: 80,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    }
});