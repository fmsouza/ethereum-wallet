import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { Button } from '@components/widgets';
import { colors, measures } from '@common/styles';
import { Transaction as TransactionActions } from '@common/actions';
import { Image as ImageUtils } from '@common/utils';

@inject('wallet')
@observer
export class ConfirmTransaction extends React.Component {
    
    static navigationOptions = { title: 'Confirm transaction' };

    state = { success: false, error: null };

    get actionButton() {
        const buttonConfig = (this.state.success || this.state.error) ?
            { title: 'Return to wallet', action: this.onPressReturn } : { title: 'Confirm & send', action: this.onPressSend };
         return <Button children={buttonConfig.title} onPress={buttonConfig.action} />;
    }

    @autobind
    async onPressSend() {
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

    @autobind
    onPressReturn() {
        this.props.navigation.navigate('WalletsOverview', { replaceRoute: true });
    }

    renderSuccess = () => this.state.success && (
        <View style={styles.successContainer}></View>
    );

    renderError = () => this.state.error && (
        <View style={styles.errorContainer}></View>
    );

    render() {
        const { address, amount } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.content}>
                    <View style={styles.row}>
                        <Image style={styles.avatar}
                            source={{ uri: ImageUtils.generateAvatar(address) }} />
                        <View style={styles.textColumn}>
                            <Text style={styles.title}>Wallet address</Text>
                            <Text style={styles.value}
                                numberOfLines={1}
                                ellipsizeMode="middle"
                                children={address} />
                        </View>
                    </View>
                    <Text>Amount</Text>
                    <Text>{amount}</Text>
                    {this.renderSuccess()}
                    {this.renderError()}
                </ScrollView>
                {this.actionButton}
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
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: measures.fontSizeMedium + 1,
        fontWeight: 'bold'
    },
    value: {
        fontSize: measures.fontSizeMedium,
        width: 200
    },
    avatar: {
        width: 100,
        height: 100
    }
});