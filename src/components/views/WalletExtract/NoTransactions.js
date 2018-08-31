import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, measures } from '@common/styles';

export default () => (
    <View style={styles.container}>
        <Text style={styles.message}>
            There are still no transactions involving this wallet.
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: measures.defaultPadding
    },
    message: {
        color: colors.black
    }
});