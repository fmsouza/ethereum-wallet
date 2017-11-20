import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Icon } from 'components/widgets';
import { colors, measures } from 'common/styles';
import { Wallet as WalletUtils } from 'common/utils';

export default class WalletCard extends React.Component {

    state = { balance: 0, loading: false };

    get balance() {
        return Number(WalletUtils.formatBalance(this.state.balance)).toFixed(3);
    }

    componentDidMount() {
        const { wallet } = this.props;
        this.setState(
            { loading: true },
            () => wallet.getBalance()
                .then(
                    (balance) => this.setState({ balance, loading: false })
                )
        );
    }

    render() {
        const { onPress, wallet } = this.props;
        const { balance, loading } = this.state;
        return (
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.container}>
                    <View style={styles.leftColumn}>
                        <Icon name="wallet" size="large" type="ent" />
                    </View>
                    <View style={styles.middleColumn}>
                        <Text style={styles.title}>{wallet.name}</Text>
                        <Text style={styles.description}>{wallet.description}</Text>
                    </View>
                    <View style={styles.rightColumn}>
                        <View style={styles.balanceContainer}>
                            {loading && <ActivityIndicator animating />}
                            <Text style={styles.balance}>{this.balance} ETH</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: measures.defaultPadding,
        marginBottom: measures.defaultMargin,
        height: 70
    },
    leftColumn: {
        width: 40,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    middleColumn: {
        flex: 2
    },
    rightColumn: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    title: {
        fontSize: measures.fontSizeMedium,
        color: colors.gray,
        fontWeight: 'bold'
    },
    description: {
        fontSize: measures.fontSizeMedium - 2,
        color: colors.gray,
    },
    balanceContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    balance: {
        fontSize: measures.fontSizeMedium - 1,
        color: colors.gray,
        marginLeft: measures.defaultMargin
    },
    next: {
        color: colors.lightGray
    }
});