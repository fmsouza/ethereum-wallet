import React from 'react';
import { Image, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
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
                <TouchableWithoutFeedback onPress={this.onPressCamera}>
                    <Image
                        style={styles.cameraIcon}
                        source={require('assets/img/ic_camera.png')} />
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
        borderBottomColor: colors.secondary,
        padding: 4,
        paddingLeft: 0,
        marginRight: 2,
        color: colors.secondary
    },
    cameraIcon: {
        width: 36,
        height: 36
    },
    fullScreen: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
    }
});