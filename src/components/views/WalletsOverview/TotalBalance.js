import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, measures } from 'common/styles';

export default class TotalBalance extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.leftColumn}>
                    <Text style={styles.title}>Total balance:</Text>
                </View>
                <View style={styles.rightColumn}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 60,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray,
        marginVertical: measures.defaultMargin
    },
    leftColumn: {
        flex: 1
    },
    title: {
        fontSize: measures.fontSizeLarge,
        color: colors.gray
    },
    rightColumn: {
        flex: 1
    }
});