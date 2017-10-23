import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'components/widgets';
import * as Utils from 'common/utils';
import { colors } from 'common/styles';
import ConfirmBox from './ConfirmBox';

export class ConfirmMnemonics extends React.Component {
    
    static navigationOptions = { header: null }

    state = { mnemonics: null };

    componentWillMount() {
        const { mnemonics } = this.props.navigation.state.params;
        this.setState({ mnemonics });
    }

    onPressConfirm = () => {
        if (this.refs.confirm.isValidSequence()) {
            const { mnemonics } = this.state;
            this.props.navigation.navigate('WalletsOverview', { mnemonics });
        }
    }

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <View />
                    <ConfirmBox ref="confirm" mnemonics={this.state.mnemonics} />
                    <View style={styles.buttonsContainer}>
                        <Button onPress={this.onPressConfirm}>Confirm & open wallet</Button>
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
        padding: 8,
        paddingBottom: 32
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    message: {
        color: colors.secondary,
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