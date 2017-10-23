import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from 'common/styles';

export class WalletsOverview extends React.Component {

    static navigationOptions = { title: "Overview" }

    render() {
        return (
            <View style={styles.background}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.secondary,
        justifyContent: 'flex-end',
        padding: 8,
        paddingBottom: 32
    }
});