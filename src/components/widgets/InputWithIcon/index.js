import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from '@components/widgets';
import { colors } from '@common/styles';

export class InputWithIcon extends React.Component {

    state = { text: '' };

    onChangeText(text) {
        const { onChangeText } = this.props;
        this.setState({ text });
        if (onChangeText) onChangeText(text);
    }

    onPressIcon() {
        let { text } = this.state;
        text = text.trim();
        this.props.onPressIcon(text);
    }

    render() {
        const { autoFocus, icon, placeholder } = this.props;
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoFocus={autoFocus}
                    autoCorrect={false}
                    value={this.state.text}
                    onChangeText={(text) => this.onChangeText(text)}
                    underlineColorAndroid="transparent"
                    placeholder={placeholder}
                    placeholderTextColor={colors.black} />
                <TouchableOpacity onPress={() => this.onPressIcon()}>
                    <Icon
                        name={icon}
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