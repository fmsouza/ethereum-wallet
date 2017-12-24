import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import autobind from 'autobind-decorator';
import { Button, NumberGrid } from '@components/widgets';
import { colors, measures } from '@common/styles';

export class SendCoins extends React.Component {

    state = { amount: '' };
    
    @autobind
    onPressNumber(number) {
        let { amount } = this.state;
        switch (number) {
            case 'erase':
                amount = amount.slice(0, amount.length-1);
                break;

            case '.':
                if (amount.indexOf('.') > -1) return;
                else if (!amount.length) amount += '0.';
                else amount += '.';
                break;

            default:
                if (amount === number) return;
                else if (amount === '0') amount = number;
                else amount += number;
                break;
        }
        this.setState({ amount });
    }

    @autobind
    onPressContinue() {
        const { amount } = this.state;
        if (!amount || Number(amount) === 0) return;
        this.props.navigation.navigate('SelectDestination', { amount });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={styles.txtAmount}>{this.state.amount || 0}</Text>
                    <Text style={styles.subtitle}>ETH</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <NumberGrid onPressNumber={this.onPressNumber} />
                </View>
                <Button children="Continue" onPress={this.onPressContinue} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.defaultBackground,
        flex: 5,
        alignItems: 'stretch'
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtAmount: {
        fontSize: measures.fontSizeLarge,
        fontWeight: 'bold',
        color: colors.lightBlue
    },
    subtitle: {
        fontSize: measures.fontSizeMedium,
        color: colors.grey
    },
    bottomContainer: {
        flex: 4,
        alignItems: 'stretch',
        justifyContent: 'center'
    }
});