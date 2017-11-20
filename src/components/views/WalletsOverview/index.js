import React from 'react';
import autobind from 'autobind-decorator';
import { FlatList, StyleSheet, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { HeaderIcon } from 'components/widgets';
import { colors, measures } from 'common/styles';
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

    @autobind
    onPressWallet(wallet) {
        console.log(wallet);
    }

    renderItem = ({ item }) => <WalletCard wallet={item} onPress={this.onPressWallet} />

    renderBody(wallets) {
        return (!wallets.length) ? <NoWallets /> : (
            <FlatList
                data={wallets}
                keyExtractor={item => item.getAddress()}
                renderItem={this.renderItem} />
        );
    }

    render() {
        const { wallets } = this.props;
        return (
            <View style={styles.container}>
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