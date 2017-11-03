import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import autobind from 'autobind-decorator';
import { Button, SubmitableInput, TextBullet } from 'components/widgets';
import { colors, measures } from 'common/styles';
import * as Utils from 'common/utils';

export class LoadMnemonics extends React.Component {
    
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Load Wallet"
    });

    state = { mnemonics: [] };
    
    @autobind
    onPressOpenWallet() {
        if (this.state.mnemonics.length > 0) {
            const { mnemonics } = this.state;
            const wallet = Utils.loadWalletFromMnemonics(mnemonics);
            this.props.navigation.navigate('WalletsOverview', { wallet, replaceRoute: true });
        }
    }
    
    renderMnemonic = (mnemonic, index) => (
        <View style={styles.mnemonic} key={index}>
            <TextBullet>{mnemonic}</TextBullet>
        </View>
    );

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View />
                <Image style={styles.logo} source={require('assets/img/ethereum.png')} />
                <View style={styles.body}>
                    <Text style={styles.message}>Type the mnemonics</Text>
                    <View style={styles.mnemonics}>
                        {this.state.mnemonics.map(this.renderMnemonic)}
                    </View>
                    <SubmitableInput
                        placeholder="Type the mnemonic here"
                        onPressSave={text => this.setState({ mnemonics: this.state.mnemonics.concat([text]) })} />
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
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: colors.defaultBackground
    },
    body: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%',
        height: 300
    },
    input: {
        width: '100%'
    },
    message: {
        color: colors.black,
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
    },
    mnemonics: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: 4
    },
    mnemonic: {
        margin: 4
    }
});