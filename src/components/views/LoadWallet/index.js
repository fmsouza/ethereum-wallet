import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'components/widgets';
import { colors, measures } from 'common/styles';

export class LoadWallet extends React.Component {
    
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Load Wallet"
    });

    render() {
        const { navigate } = this.props.navigation;
        return (
                <View style={styles.container}>
                    <Text style={styles.message}>Load the wallet from</Text>
                    <View style={styles.buttonsContainer}>
                        <Button onPress={() => navigate('LoadPrivateKey')}>Private key</Button>
                        <Button onPress={() => navigate('LoadMnemonics')}>Mnemonics</Button>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.defaultBackground,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flex: 1,
        padding: measures.defaultPadding,
    },
    message: {
        color: colors.black,
        fontSize: 16,
        textAlign: 'center',
        margin: measures.defaultMargin * 4,
    },
    buttonsContainer: {
        justifyContent: 'space-between'
    }
});