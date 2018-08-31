import React from 'react';
import { Clipboard, Share, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import QRCode from 'react-native-qrcode-svg';
import { Icon } from '@components/widgets';
import { General as GeneralActions } from '@common/actions';
import { colors, measures } from '@common/styles';

@inject('wallet')
@observer
export class ReceiveCoins extends React.Component {

    copyToClipboard() {
        const { item } = this.props.wallet;
        Clipboard.setString(item.getAddress());
        GeneralActions.notify('Copied to clipboard', 'short');
    }

    share() {
        const { item } = this.props.wallet;
        Share.share({
            title: 'Wallet address:',
            message: item.getAddress()
        });
    }

    renderColumn = (icon, label, action) => (
        <TouchableWithoutFeedback onPress={action}>
            <View style={styles.actionColumn}>
                <Icon name={icon} style={styles.actionIcon} />
                <Text style={styles.actionLabel}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    );

    render() {
        const { wallet: { item } } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.centered}>Show the code below to receive coins</Text>
                <View style={styles.centered}>
                    <QRCode size={256} value={item.getAddress()} />
                </View>
                <Text style={styles.centered}>{item.getAddress()}</Text>
                <View style={styles.actions}>
                    <View style={styles.actionsBar}>
                        {this.renderColumn('copy', 'Copy', () => this.copyToClipboard())}
                        {this.renderColumn('share', 'Share', () => this.share())}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-around',
        padding: measures.defaultPadding
    },
    actions: {
        height: 56
    },
    actionsBar: {
        flexDirection: 'row',
        flex: 3
    },
    actionColumn: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    centered: {
        alignSelf: 'center'
    }
});