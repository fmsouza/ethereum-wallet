import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class SendCoins extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Send coins</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {}
});