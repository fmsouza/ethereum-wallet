import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Vibration, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Modal from 'react-native-modal';
import Permissions from 'react-native-permissions';
import { Icon } from '@components/widgets';
import { colors } from '@common/styles';

const { BarCodeType } = RNCamera.Constants;

export class Camera extends React.Component {

    state = { isModalVisible: false };

    async show() {
        var status;
        try {
            status = await Permissions.check('camera');
            if (status === 'authorized') this.setState({ isModalVisible: true });
            else {
                status = await Permissions.request('camera');
                if (status === 'authorized') this.setState({ isModalVisible: true });
                else throw new Error('Not allowed to use the camera.');
            }
        } catch (e) {
            console.error(e);
            this.setState({ isModalVisible: false });
        }
    }

    hide() {
        this.setState({ isModalVisible: false });
    }

    onBarCodeRead({ type, data }) {
        if (type === BarCodeType.qr) {
            Vibration.vibrate();
            this.hide();
            this.props.onBarCodeRead(data);
        }
    }

    renderView = (onClose) => (
        <View style={styles.container}>
            <RNCamera
                style={styles.camera}
                barCodeTypes={[BarCodeType.qr]}
                onBarCodeRead={(data) => this.onBarCodeRead(data)} />
            <TouchableWithoutFeedback onPress={onClose}>
                <Icon name='close' color={colors.white} style={styles.closeIcon} />
            </TouchableWithoutFeedback>
            <View style={styles.marker} />
        </View>
    );

    render() {
        const { modal, onClose } = this.props;
        return !modal ? this.renderView(onClose) : (
            <Modal
                onBackButtonPress={onClose}
                isVisible={this.state.isModalVisible}
                children={this.renderView(onClose)} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    camera: {
        flex: 1
    },
    closeIcon: {
        position: 'absolute',
        zIndex: 1,
        top: 8,
        right: 10
    },
    marker: {
        position: 'absolute',
        alignSelf: 'center',
        zIndex: 1,
        width: 200,
        height: 200,
        borderWidth: 4,
        borderColor: 'green'
    }
});