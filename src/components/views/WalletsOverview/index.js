import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderIcon } from 'components/widgets';
import { colors, measures } from 'common/styles';
import NoWallets from './NoWallets';

export class WalletsOverview extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Overview",
        headerRight: (
            <HeaderIcon
                name="add"
                size="large"
                color={colors.white}
                onPress={() => navigation.navigate('NewWallet')} />
        )
    });
    
    state = { wallets: [] };

    renderBody(wallets) {
        return (!wallets.length) ? <NoWallets /> : (
            null
        );
    }

    render() {
        return (
            <View style={styles.background}>
                {this.renderBody(this.state.wallets)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.secondary,
        padding: measures.defaultPadding,
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    }
});