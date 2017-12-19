import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Camera from 'react-native-camera';
import { Icon } from '@components/widgets';
import { colors } from '@common/styles';

export default ({ onBarCodeRead, onPressClose }) => (
    <View style={styles.container}>
        <Camera
            style={styles.camera}
            barCodeTypes={['qr']}
            onBarCodeRead={onBarCodeRead} />
        <TouchableWithoutFeedback onPress={onPressClose}>
            <Icon name="close" color={colors.white} style={styles.closeIcon} />
        </TouchableWithoutFeedback>
        <View style={styles.marker} />
    </View>
);

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