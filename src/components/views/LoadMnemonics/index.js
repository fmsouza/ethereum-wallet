import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, SubmitableInput, TextBullet } from 'components/widgets';
import { colors, measures } from 'common/styles';

export class LoadMnemonics extends React.Component {

    static navigationOptions = { header: null }

    state = { mnemonics: [] };
    
    renderMnemonic = (mnemonic, index) => (
        <View style={styles.mnemonic} key={index}>
            <TextBullet>{mnemonic}</TextBullet>
        </View>
    );

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.background}>
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
                            onPress={() => this.state.mnemonics.length > 0 && navigate('WalletsOverview')} />
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
        justifyContent: 'space-between',
        width: '85%',
        height: 300
    },
    input: {
        width: '100%'
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