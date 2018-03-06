import React from 'react';
import { StyleSheet, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import Modal from 'react-native-modal';
import moment from 'moment';
import { Icon } from '@components/widgets';
import { colors, measures } from '@common/styles';
import { Wallet as WalletUtils } from '@common/utils';

@inject('prices')
@observer
export default class TransactionDetails extends React.Component {

    state = { show: false };

    get isReceiving() {
        return this.to.toLowerCase() === this.props.walletAddress.toLowerCase();
    }

    get isConfirmed() {
        return this.props.transaction.confirmations > 0;
    }

    get from() {
        return this.props.transaction.from;
    }

    get to() {
        return this.props.transaction.to;
    }

    get iconName() {
        return (this.isReceiving) ? 'download' : 'upload';
    }

    get balance() {
        return Number(WalletUtils.formatBalance(this.props.transaction.value));
    }
    
    get fiatBalance() {
        return Number(this.props.prices.usd * this.balance).toFixed(2);
    }

    get timestamp() {
        return (this.props.transaction.timeStamp) ?
            moment.unix(this.props.transaction.timeStamp).format('DD/MM/YYYY hh:mm:ss') : 'Pending';
    }

    get transactionError() {
        return Number(this.props.transaction.isError) > 0 ? 'Yes' : 'No';
    }

    show() {
        this.setState({ show: true });
    }

    hide() {
        this.setState({ show: false });
    }

    renderTransactionOperator = () => (
        <Text
            style={styles.operatorLabel}
            ellipsizeMode="tail"
            numberOfLines={1}
            children={this.isReceiving ? `From ${this.from}` : `To ${this.to}`} />
    )

    renderBody = (transaction) => (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableWithoutFeedback onPress={() => this.hide()}>
                    <View>
                        <Icon name="close" size="large" />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.label}>From:</Text>
                    <Text style={styles.value}>{transaction.from}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>To:</Text>
                    <Text style={styles.value}>{transaction.to}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Timestamp:</Text>
                    <Text style={styles.value}>{this.timestamp}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Amount (ETH):</Text>
                    <Text style={styles.value}>{this.balance}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Amount (US$):</Text>
                    <Text style={styles.value}>{this.fiatBalance}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Block number:</Text>
                    <Text style={styles.value}>{transaction.blockNumber}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Block hash:</Text>
                    <Text style={styles.value}>{transaction.blockHash}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Gas:</Text>
                    <Text style={styles.value}>{transaction.gas}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Gas price:</Text>
                    <Text style={styles.value}>{transaction.gasPrice}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Gas used:</Text>
                    <Text style={styles.value}>{transaction.gasUsed}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Cumulative gas used:</Text>
                    <Text style={styles.value}>{transaction.cumulativeGasUsed}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Confirmations:</Text>
                    <Text style={styles.value}>{transaction.confirmations}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Error:</Text>
                    <Text style={styles.value}>{this.transactionError}</Text>
                </View>
            </ScrollView>
        </View>
    );

    render() {
        const { transaction } = this.props;
        return (
            <Modal
                isVisible={this.state.show}
                onBackButtonPress={() => this.hide()}
                onBackdropPress={() => this.hide()}
                children={this.renderBody(transaction)} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingHorizontal: measures.defaultPadding,
        maxHeight: 400,
        borderRadius: 4
    },
    header: {
        paddingVertical: measures.defaultPadding,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    content: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: colors.secondary
    },
    row: {
        alignItems: 'center',
        flexDirection: 'column',
        marginVertical: measures.defaultMargin / 2
    },
    label: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    value: {
        textAlign: 'center'
    }
});