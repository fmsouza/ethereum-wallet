import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Utils from '../../../common/utils';
import ButtonConfirm from './ButtonConfirm';
import ConfirmBox from './ConfirmBox';

export class ConfirmMnemonics extends React.Component {
    
    static navigationOptions = { header: null }

    state = { mnemonics: null };

    componentWillMount() {
        const { mnemonics } = this.props.navigation.state.params;
        this.setState({ mnemonics });
    }

    onPressConfirm = () => {
        console.log(this.refs.confirm.isValidSequence());
        if (this.refs.confirm.isValidSequence()) {
            this.props.navigation.navigate('NoWallet');
        }
    }

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <View />
                    <ConfirmBox ref="confirm" mnemonics={this.state.mnemonics} />
                    <View style={styles.buttonsContainer}>
                        <ButtonConfirm onPress={this.onPressConfirm} />
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