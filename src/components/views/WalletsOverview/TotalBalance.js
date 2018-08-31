import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { colors, measures } from '@common/styles';
import { Wallet as WalletUtils } from '@common/utils';

@inject('prices')
@observer

export default class TotalBalance extends React.Component {

    get balance() {
        const { wallets } = this.props;
        const balances = wallets.map(({ balance }) => balance);
        if (balances.some(el => !el)) return 0;
        const balance = WalletUtils.reduceBigNumbers(balances).toString();
        return Number(WalletUtils.formatBalance(balance));
    }
    
    get fiatBalance() {
        return Number(this.props.prices.usd * this.balance);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.leftColumn}>
                    <Text style={styles.title}>Total balance:</Text>
                </View>
                <View style={styles.rightColumn}>
                    <Text style={styles.balance}>ETH {this.balance.toFixed(3)}</Text>
                    <Text style={styles.fiatBalance}>US$ {this.fiatBalance.toFixed(2)}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 60,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray
    },
    leftColumn: {
        flex: 1
    },
    title: {
        fontSize: measures.fontSizeLarge,
        color: colors.gray
    },
    balance: {
        fontSize: measures.fontSizeMedium + 2,
        fontWeight: 'bold',
        color: colors.gray
    },
    fiatBalance: {
        fontSize: measures.fontSizeMedium - 3,
        color: colors.gray
    },
    rightColumn: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
});