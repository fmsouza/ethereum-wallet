import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, measures } from 'common/styles';

export class WalletDetails extends React.Component {
    
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: navigation.state.params.wallet.name
    });

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.defaultBackground,
        padding: measures.defaultPadding,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flex: 1
    }
});