import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, measures } from '@common/styles';
import Balance from './Balance';

export class WalletExtract extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Balance />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: measures.defaultPadding
    }
});