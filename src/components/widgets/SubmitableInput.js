import React from 'react';
import { Image, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { colors } from 'common/styles';

export class SubmitableInput extends React.Component {

    state = { text: '', showCamera: false };

    onChangeText = (text) => this.setState({ text });

    onPressSend = () => {
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
                <TouchableWithoutFeedback onPress={this.onPressSend}>
                    <Image
                        style={styles.sendIcon}
                        source={require('assets/img/ic_send.png')} />
                </TouchableWithoutFeedback>
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
    },
    sendIcon: {
        width: 32,
        height: 32
    }
});