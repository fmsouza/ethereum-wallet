import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Utils from '../../../common/utils';
import ButtonProceed from './ButtonProceed';
import ButtonReveal from './ButtonReveal';

export class CreateMnemonics extends React.Component {
    
    static navigationOptions = { header: null }

    state = { mnemonics: null }

    get revealButton() {
        return <ButtonReveal onPress={this.onPressReveal} />;
    }

    onPressReveal = () => {
        const mnemonics = Utils.generateMnemonic();
        this.setState({ mnemonics });
    }

    renderMnemonic = (mnemonic, index) => (
        <Text key={index}>{mnemonic}</Text>
    );

    renderBody() {
        const { mnemonics } = this.state;
        return (mnemonics) ? mnemonics.map(this.renderMnemonic) : this.revealButton;
    }

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <View />
                    <Text style={styles.message}>Save carefully your sequence of mnemonics:</Text>
                    {this.renderBody()}
                    <View style={styles.buttonsContainer}>
                        <ButtonProceed onPress={this.onPressProceed} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#3E7BE5',
        justifyContent: 'flex-end',
        padding: 8,
        paddingBottom: 32
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    message: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 8,
        marginHorizontal: 32
    },
    buttonsContainer: {
        width: '100%',
        justifyContent: 'flex-end',
        height: 104
    }
});