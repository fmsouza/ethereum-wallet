import React from 'react';
import { View, Text } from 'react-native';

export default class WalletCard extends React.Component {

    render() {
        const { wallet } = this.props;
        return (
            <View>
                <Text>{wallet.getAddress()}</Text>
            </View>
        );
    }
}