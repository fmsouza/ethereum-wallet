import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import autobind from 'autobind-decorator';
import { Button } from '@components/widgets';
import { colors, measures } from '@common/styles';

export class ConfirmTransaction extends React.Component {
    
    static navigationOptions = { title: 'Confirm transaction' };

    
    @autobind
    onPressContinue() {
        console.log("@TODO: should do the transaction");
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