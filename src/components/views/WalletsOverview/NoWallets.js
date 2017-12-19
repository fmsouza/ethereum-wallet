import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@common/styles';

export default () => (
    <View style={styles.container}>
        <Text style={styles.message}>
            There are no wallets configured. Click on the + button to add a new one.
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {},
    message: {
        color: colors.black
    }
});