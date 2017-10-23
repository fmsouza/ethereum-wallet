import React from 'react';
import { Image, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { colors } from 'common/styles';

export class ReadableInput extends React.Component {

    state = { text: '', showCamera: false };

    onChangeText = (text) => {
        this.setState({ text });
    }

    onPressCamera = async () => {
        console.log("Getting camera permission");
        try {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            console.log("Permission:", status);
            console.log("Trying to show the camera...")
            this.setState({ showCamera: (status === 'granted') });
        } catch (e) {
            console.log("An error ocurred...");
            console.error(e);
        }
    }

    onBarCodeRead = ({ type, data }) => {
        console.log(type, data);
        this.setState({ text: data, showCamera: false });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    autoFocus={this.props.autoFocus}
                    autoCorrect={false}
                    value={this.state.text}
                    onChangeText={this.onChangeText}
                    placeholder={this.props.placeholder} />
                <TouchableWithoutFeedback onPress={this.onPressCamera}>
                    <Image
                        style={styles.cameraIcon}
                        source={require('assets/img/ic_camera.png')} />
                </TouchableWithoutFeedback>
                {this.state.showCamera && (
                    <BarCodeScanner
                        style={styles.fullScreen}
                        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                        onBarCodeRead={this.onBarCodeRead} />
                )}
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