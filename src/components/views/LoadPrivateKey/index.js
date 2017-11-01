import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import autobind from 'autobind-decorator';
import { Button, ReadableInput } from 'components/widgets';
import { colors, measures } from 'common/styles';
import * as Utils from 'common/utils';

export class LoadPrivateKey extends React.Component {

    static navigationOptions = { header: null }

    state = { pk: '' };

    onPressOpenWallet() {
        const { pk } = this.state;
        if (!pk) return;
        const wallet = utils.loadWalletFromPrivateKey(pk);
        this.props.navigation.navigate('WalletsOverview', { wallet });
    }

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <View />
                    <Image style={styles.logo} source={require('assets/img/ethereum.png')} />
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'flex-end',
        padding: measures.defaultPadding
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    body: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        maxHeight: 300
    },
    message: {
        color: colors.secondary,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: measures.defaultMargin,
        marginHorizontal: 32
    },
    logo: {
        width: 128,
        height: 128,
    },
    buttonsContainer: {
        width: '100%',
        justifyContent: 'space-between',
        height: 52
    }
});