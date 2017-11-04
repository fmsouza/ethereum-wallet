import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import autobind from 'autobind-decorator';
import { Button, ReadableInput } from 'components/widgets';
import { colors, measures } from 'common/styles';
import * as Utils from 'common/utils';

export class LoadPrivateKey extends React.Component {
    
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Load Wallet"
    });

    state = { pk: '' };

    @autobind
    onPressOpenWallet() {
        if (!this.state.pk) return;
        const wallet = Utils.loadWalletFromPrivateKey(this.state.pk);
        this.props.navigation.navigate('WalletsOverview', { wallet, replaceRoute: true });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.message}>Private key</Text>
                    <ReadableInput
                        placeholder="eg.: 3123012t3n1273v12n12b120b12731132b0t2"
                        onChangeText={pk => this.setState({ pk })} />
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        children="Open wallet"
                        onPress={this.onPressOpenWallet} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.defaultBackground,
        padding: measures.defaultPadding
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    message: {
        color: colors.black,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: measures.defaultMargin,
        marginHorizontal: 32
    },
    buttonsContainer: {
        width: '100%',
        justifyContent: 'space-between',
        height: 52
    }
});