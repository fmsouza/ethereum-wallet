import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'components/widgets';
import { colors, measures } from 'common/styles';

export default class WalletCard extends React.Component {

    state = { balance: 0, loading: false };

    render() {
        const { wallet } = this.props;
        const { balance, loading } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.leftColumn}>
                    <Icon name="wallet" size="large" type="ent" />
                </View>
                <View style={styles.middleColumn}>
                    <Text style={styles.title}>{wallet.name}</Text>
                    <View style={styles.balanceContainer}>
                        <Text style={styles.balance}>{balance} ETH</Text>
                        {loading && <ActivityIndicator style={styles.refresh} animating />}
                    </View>
                </View>
                <View style={styles.rightColumn}>
                    <Icon name="arrow-forward" style={styles.next} />
                </View>
            </View>
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
        height: 60
    },
    leftColumn: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    middleColumn: {
        flex: 7
    },
    title: {
        fontSize: measures.fontSizeMedium,
        fontWeight: 'bold'
    },
    balanceContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    balance: {
        fontSize: measures.fontSizeMedium - 1,
        color: colors.gray,
        marginRight: measures.defaultMargin
    },
    refresh: {
        width: measures.fontSizeMedium - 1,
        height: measures.fontSizeMedium - 1
    },
    next: {
        color: colors.lightGray
    }
});