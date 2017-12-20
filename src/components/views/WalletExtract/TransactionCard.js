import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, measures } from '@common/styles';

export default ({ transaction }) => (
    <View style={styles.container}>
        <Text>{transaction.from}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {}
});