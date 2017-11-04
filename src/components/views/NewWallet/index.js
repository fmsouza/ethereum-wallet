import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import autobind from 'autobind-decorator';
import { Button } from 'components/widgets';
import { colors, measures } from 'common/styles';

export class NewWallet extends React.Component {
    
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "New Wallet"
    });
    
    @autobind
    onPressLoad() {
        this.props.navigation.navigate('LoadWallet');
    }
    
    @autobind
    onPressCreate() {
        this.props.navigation.navigate('CreateWallet');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={styles.message}>Do you already have a wallet to configure?</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <Button onPress={this.onPressLoad}>Yes, load it</Button>
                    <Button onPress={this.onPressCreate}>No, create new</Button>
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
    contentContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    message: {
        color: colors.black,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: measures.defaultMargin,
        marginHorizontal: 32
    },
    buttonsContainer: {
        justifyContent: 'space-between'
    }
});