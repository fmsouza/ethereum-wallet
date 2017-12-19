import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import QRCode from 'react-native-qrcode-svg';
import { colors, measures } from '@common/styles';

@inject('wallet')
@observer
export class ReceiveCoins extends React.Component {

    render() {
        const { wallet: { item } } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Show the code below to receive coins</Text>
                <QRCode size={256} value={item.getAddress()} />
                <Text style={styles.label}>{item.getAddress()}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: measures.defaultPadding
    }
});