import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from 'common/styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        padding: 8,
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 4
    },
    label: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: '600'
    },
});

export const TextBullet = ({ children }) => (
    <View style={styles.container}>
        <Text style={styles.label}>{children}</Text>
    </View>
);