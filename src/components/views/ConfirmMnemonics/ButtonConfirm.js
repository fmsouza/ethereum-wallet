import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 48,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 8,
        borderRadius: 4
    },
    title: {
        color: 'white',
        fontSize: 16
    }
});

export default ({ onPress, ...props }) => (
    <TouchableHighlight style={styles.container} onPress={onPress} underlayColor={null}>
        <Text style={styles.title} children="Confirm & open wallet" />
    </TouchableHighlight>
);