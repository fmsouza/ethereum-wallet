import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { colors, measures } from '@common/styles';
import { Wallet as WalletUtils } from '@common/utils';

@inject('prices', 'wallet')
@observer
export default class Balance extends React.Component {

    get balance() {
        const { item } = this.props.wallet;
        return Number(WalletUtils.formatBalance(item.balance));
    }
    
    get fiatBalance() {
        return Number(this.props.prices.usd * this.balance);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.leftColumn}>
                    <Text style={styles.title}>Balance:</Text>
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