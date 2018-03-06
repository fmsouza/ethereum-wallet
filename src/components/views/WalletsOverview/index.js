import React from 'react';
import autobind from 'autobind-decorator';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { HeaderIcon } from '@components/widgets';
import { colors, measures } from '@common/styles';
import { Wallets as WalletActions, Prices as PricesActions } from '@common/actions';
import NoWallets from './NoWallets';
import TotalBalance from './TotalBalance';
import WalletCard from './WalletCard';

@inject('prices', 'wallets')
@observer
export class WalletsOverview extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Overview',
        headerRight: (
            <HeaderIcon
                name='add'
                size='large'
                color={colors.white}
                onPress={() => navigation.navigate('NewWalletName')} />
        )
    });

    get loading() {
        return this.props.prices.loading || this.props.wallets.loading;
    }

    componentDidMount() {
        this.populate();
    }

    async populate() {
        try {
            await Promise.all([
                WalletActions.loadWallets(),
                PricesActions.getPrice()
            ]);
        } catch (e) {
            console.warn(e);
        }
    }

    @autobind
    onPressWallet(wallet) {
        if (this.loading) return;
        WalletActions.selectWallet(wallet);
        this.props.navigation.navigate('WalletDetails', { wallet });
    }

    renderItem = ({ item }) => <WalletCard wallet={item} onPress={() => this.onPressWallet(item)} />

    renderBody = (list) => (!list.length && !this.loading) ? <NoWallets /> : (
        <FlatList
            style={styles.content}
            data={list}
            refreshControl={<RefreshControl refreshing={this.loading} onRefresh={() => this.populate()} />}
            keyExtractor={(item, index) => String(index)}
            renderItem={this.renderItem} />
    );

    render() {
        const { wallets } = this.props;
        return (
            <View style={styles.container}>
                <TotalBalance wallets={wallets.list} />
                {this.renderBody(wallets.list)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: measures.defaultPadding,
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    content: {
        marginTop: measures.defaultMargin
    }
});