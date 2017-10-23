import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { colors } from 'common/styles';

const styles = StyleSheet.create({
    container: {
        height: 48,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.secondary,
        padding: 8,
        borderRadius: 4
    },
    title: {
        color: colors.secondary,
        fontSize: 16
    }
});

export const Button = ({ children, onPress }) => (
    <TouchableHighlight style={styles.container} onPress={onPress} underlayColor={null}>
        <Text style={styles.title} children={children} />
    </TouchableHighlight>
);