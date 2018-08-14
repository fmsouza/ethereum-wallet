import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import _ from 'lodash';
import { TextBullet } from '@components/widgets';
import { colors } from '@common/styles';

export default class ConfirmBox extends React.Component {

    state = { selectable: [], selected: [] };

    isValidSequence() {
        return _.isEqual(this.props.mnemonics, this.state.selected);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const newState = { ...prevState };
        if (!prevState.selectable.length && !prevState.selected.length) {
            newState.selectable = _.shuffle([...nextProps.mnemonics]);
        }
        return newState;
    }

    onPressMnemonic(mnemonic, isSelected) {
        const { selectable, selected } = this.state;
        if (isSelected) this.setState({
            selectable: selectable.filter(m => m !== mnemonic),
            selected: selected.concat([mnemonic])
        });
        else this.setState({
            selectable: selectable.concat([mnemonic]),
            selected: selected.filter(m => m !== mnemonic)
        });
    }
    
    renderMnemonic = (mnemonic, index, selected) => (
        <TouchableOpacity style={styles.mnemonic} key={index} onPress={() => this.onPressMnemonic(mnemonic, selected)}>
            <View>
                <TextBullet>{mnemonic}</TextBullet>
            </View>
        </TouchableOpacity>
    );
    
    renderSelected = () => (
        <View style={styles.mnemonics}>
            {this.state.selected.map((mnemonic, index) => this.renderMnemonic(mnemonic, index, false))}
        </View>
    );
    
    renderSelectable = () => (
        <View style={styles.mnemonics}>
            {this.state.selectable.map((mnemonic, index) => this.renderMnemonic(mnemonic, index, true))}
        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Sequence:</Text>
                {this.renderSelected()}
                <Text style={styles.text}>Click on the words in the correct order:</Text>
                {this.renderSelectable()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    mnemonics: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: 4
    },
    mnemonic: {
        margin: 4
    },
    text: {
        color: colors.black
    }
});