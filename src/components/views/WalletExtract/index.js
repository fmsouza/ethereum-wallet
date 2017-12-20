import React from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { colors, measures } from '@common/styles';
import { Wallets as WalletActions } from '@common/actions';
import Balance from './Balance';
import TransactionCard from './TransactionCard';

@inject('wallet')
@observer
export class WalletExtract extends React.Component {

    componentWillMount() {
        this.updateHistory();
    }

    async updateHistory() {
        try {
            await WalletActions.updateHistory(this.props.wallet.item);
        } catch (e) {
            console.warn(e);
        }
    }

    renderItem = ({ item }) => <TransactionCard transaction={item} />

    render() {
        const { history, loading } = this.props.wallet;
        return (
            <View style={styles.container}>
                <Balance />
                <View style={styles.historyContainer}>
                    <FlatList
                        data={history.reverse()}
                        refreshControl={<RefreshControl refreshing={loading} onRefresh={() => this.updateHistory()} />}
                        keyExtractor={(item, index) => item.hash}
                        renderItem={this.renderItem} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flex: 1,
        padding: measures.defaultPadding
    },
    historyContainer: {
        alignItems: 'stretch',
        flex: 1
    }
});