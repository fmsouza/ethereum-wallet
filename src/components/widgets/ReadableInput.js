import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'components/widgets';
import { colors } from 'common/styles';

export class ReadableInput extends React.Component {

    state = { text: '', showCamera: false };

    onChangeText = (text) => this.setState({ text });

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    autoFocus={this.props.autoFocus}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={this.state.text}
                    onChangeText={this.onChangeText}
                    placeholder={this.props.placeholder} />
                <TouchableOpacity onPress={this.onPressCamera}>
                    <Icon
                        name="camera"
                        size="large"
                        color={colors.primary} />
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
        color: colors.black
    },
    fullScreen: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
    }
});