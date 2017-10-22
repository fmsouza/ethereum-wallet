import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native';
import * as Utils from '../../../common/utils';
import Mnemonic from './Mnemonic';

export default class ConfirmBox extends React.Component {

    state = { selectable: [], selected: [] };

    isValidSequence() {
        const mnemonics = this.props.mnemonics.join(' ');
        const selected = this.state.selected.join(' ');
        return mnemonics === selected;
    }

    componentWillMount() {
        const selectable = Utils.shuffleArray([...this.props.mnemonics]);
        this.setState({ selectable });
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
        <TouchableHighlight style={styles.mnemonic} key={index} onPress={() => this.onPressMnemonic(mnemonic, selected)}>
            <View>
                <Mnemonic label={mnemonic} />
            </View>
        </TouchableHighlight>
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
                <Text>Sequence:</Text>
                {this.renderSelected()}
                <Text>Click on the words in the correct order:</Text>
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
    }
});