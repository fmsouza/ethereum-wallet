import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, measures } from '@common/styles';

export const TextBullet = ({ children }) => (
    <View style={styles.container}>
        <Text style={styles.label}>{children}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        padding: measures.defaultPadding,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 4
    },
    label: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: '600'
    },
});