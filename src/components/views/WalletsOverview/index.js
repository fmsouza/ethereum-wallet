import React from 'react';
import autobind from 'autobind-decorator';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { HeaderIcon } from 'components/widgets';
import { colors, measures } from 'common/styles';
import { Wallets as WalletActions } from 'common/actions';
import NoWallets from './NoWallets';
import WalletCard from './WalletCard';

@inject('wallets')
@observer
export class WalletsOverview extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Overview",
        headerRight: (
            <HeaderIcon
                name="add"
                size="large"
                color={colors.white}
                onPress={() => navigation.navigate('NewWalletName')} />
        )
    });

    async componentWillMount() {
        try {
            await WalletActions.loadWallets();
        } catch (e) {
            console.warn(e);
        }
    }

    @autobind
    onPressWallet(wallet) {
        console.log(wallet);
    }

    renderItem = ({ item }) => <WalletCard wallet={item} onPress={() => this.onPressWallet(item)} />

    renderBody(wallets) {
        return (!wallets.length) ? <NoWallets /> : (
            <FlatList
                data={wallets}
                keyExtractor={(item, index) => index}
                renderItem={this.renderItem} />
        );
    }

    render() {
        const { wallets } = this.props;
        return (
            <View style={styles.container}>
                {wallets.loading && <ActivityIndicator loading />}
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
    }
});