import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { Button } from '@components/widgets';
import { colors, measures } from '@common/styles';
import { Transaction as TransactionActions } from '@common/actions';

@inject('wallet')
@observer
export class ConfirmTransaction extends React.Component {
    
    static navigationOptions = { title: 'Confirm transaction' };

    state = { success: false, error: null };

    @autobind
    async onPressContinue() {
        const {
            wallet: { wallet },
            navigation: { state: { params: { address, amount } } }
        } = this.props;
        wallet.isLoading(true);
        try {
            const txn = await TransactionActions.sendEther(wallet, address, amount);
            wallet.addPrendingTransaction(txn);
            this.setState({ success: true });
        } catch (error) {
            console.warn(e);
            this.setState({ error });
        } finally {
            wallet.isLoading(false);
        }
    }

    render() {
        const { address, amount } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Wallet address</Text>
                    <Text>{address}</Text>
                    <Text>Amount</Text>
                    <Text>{amount}</Text>
                </View>
                <Button children="Confirm & send" onPress={this.onPressContinue} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: measures.defaultPadding,
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});