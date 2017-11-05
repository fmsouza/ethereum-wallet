import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import autobind from 'autobind-decorator';
import { Icon } from 'components/widgets';
import { colors } from 'common/styles';

export class SubmitableInput extends React.Component {

    state = { text: '' };

    onChangeText = (text) => this.setState({ text });

    @autobind
    onPressSend() {
        let { text } = this.state;
        text = text.trim();
        if (text.length === 0) return;
        this.props.onPressSave(text);
        this.onChangeText('');
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoFocus={this.props.autoFocus}
                    autoCorrect={false}
                    value={this.state.text}
                    onChangeText={this.onChangeText}
                    placeholderTextColor={colors.black}
                    placeholder={this.props.placeholder} />
                <TouchableOpacity onPress={this.onPressSend}>
                    <Icon
                        name="send"
                        size="large"
                        color={colors.black} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: colors.black,
        padding: 4,
        paddingLeft: 0,
        marginRight: 2,
        textAlign: 'center',
        color: colors.black
    }
});