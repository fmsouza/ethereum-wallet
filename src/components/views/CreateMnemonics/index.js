import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextBullet } from '@components/widgets';
import { Wallet as WalletUtils } from '@common/utils';
import { colors, measures } from '@common/styles';

export class CreateMnemonics extends React.Component {
    
    static navigationOptions = { title: 'Create Wallet' };

    state = { mnemonics: null };

    onPressProceed() {
        const { mnemonics } = this.state;
        const { walletName, walletDescription } = this.props.navigation.state.params;
        this.props.navigation.navigate('ConfirmMnemonics', { mnemonics, walletName, walletDescription });
    }

    onPressReveal() {
        const mnemonics = WalletUtils.generateMnemonics();
        this.setState({ mnemonics });
    }

    renderMnemonic = (mnemonic, index) => (
        <View style={styles.mnemonic} key={index}>
            <TextBullet>{mnemonic}</TextBullet>
        </View>
    );

    renderBody() {
        const { mnemonics } = this.state;
        if (!mnemonics) return <Button onPress={() => this.onPressReveal()}>Reveal</Button>;
        return (
            <View style={styles.mnemonicsContainer}>
                {mnemonics.map(this.renderMnemonic)}
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View />
                <Text style={styles.message}>Save carefully your sequence of mnemonics:</Text>
                {this.renderBody()}
                <View style={styles.buttonsContainer}>
                    {this.state.mnemonics && (
                        <Button onPress={() => this.onPressProceed()}>Proceed</Button>
                    )}
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
        backgroundColor: colors.defaultBackground,
        padding: measures.defaultPadding
    },
    message: {
        color: colors.black,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: measures.defaultMargin,
        marginHorizontal: 32
    },
    mnemonicsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '80%'
    },
    mnemonic: {
        margin: 4
    },
    buttonsContainer: {
        width: '100%',
        justifyContent: 'flex-end',
        height: 104
    }
});