import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, measures } from 'common/styles';

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
        padding: measures.defaultPadding
    }
});