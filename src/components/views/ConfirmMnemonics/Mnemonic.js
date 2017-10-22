import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        padding: 8,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 4
    },
    label: {
        color: '#3E7BE5',
        fontSize: 16,
        fontWeight: '600'
    },
});

export default ({ label }) => (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
    </View>
);