import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Calculator } from '@components/widgets';
import { colors } from '@common/styles';

export class SendCoins extends React.Component {

    onPressContinue() {
        const { amount } = this.refs.calc;
        if (!amount) return;
        this.props.navigation.navigate('SelectDestination', { amount });
    }

    render() {
        return (
            <View style={styles.container}>
                <Calculator ref="calc" />
                <Button children="Continue" onPress={() => this.onPressContinue()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.defaultBackground,
        flex: 1,
        alignItems: 'stretch'
    }
});