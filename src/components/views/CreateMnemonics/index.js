import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Utils from '../../../common/utils';
import ButtonProceed from './ButtonProceed';
import ButtonReveal from './ButtonReveal';
import Mnemonic from './Mnemonic';

export class CreateMnemonics extends React.Component {
    
    static navigationOptions = { header: null }

    state = { mnemonics: null }

    onPressReveal = () => {
        const mnemonics = Utils.generateMnemonic();
        this.setState({ mnemonics });
    }

    renderMnemonic = (mnemonic, index) => (
        <View style={styles.mnemonic} key={index}>
            <Mnemonic label={mnemonic} />
        </View>
    );

    renderBody() {
        const { mnemonics } = this.state;
        if (!mnemonics) return <ButtonReveal onPress={this.onPressReveal} />;
        return (
            <View style={styles.mnemonicsContainer}>
                {mnemonics.map(this.renderMnemonic)}
            </View>
        );
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