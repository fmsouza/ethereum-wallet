import React from 'react';
import { StyleSheet, Text, Vibration, View } from 'react-native';
import Permissions from 'react-native-permissions';
import autobind from 'autobind-decorator';
import { Button, InputWithIcon } from '@components/widgets';
import { colors, measures } from '@common/styles';
import CameraView from './CameraView';
import Recents from './Recents';

export class SelectDestination extends React.Component {
    
    static navigationOptions = { title: 'Select destination' };

    state = { address: '', showCamera: false };

    @autobind
    async onPressCamera() {
        var status;
        try {
            status = await Permissions.check('camera');
            if (status === 'authorized') this.setState({ showCamera: true });
            else {
                status = await Permissions.request('camera');
                if (status === 'authorized') this.setState({ showCamera: true });
                else throw new Error('Not allowed to use the camera.');
            }
        } catch (e) {
            console.error(e);
            this.setState({ showCamera: false });
        }
    }
    
    @autobind
    onCameraRead({ type, data }) {
        if (type === 'QR_CODE') {
            Vibration.vibrate();
            this.refs.input.onChangeText(data);
            this.setState({ showCamera: false });
        }
    }
    
    @autobind
    onPressContinue() {
        console.log(this.state.address);
    }

    renderContent() {
        if (!this.state.showCamera) return <Recents onPressItem={address => this.refs.input.onChangeText(address)} />;
        return (
            <CameraView
                onBarCodeRead={this.onCameraRead}
                onPressClose={() => this.setState({ showCamera: false })} />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <InputWithIcon
                    ref="input"
                    autoFocus
                    icon="qr-scanner"
                    placeholder="Destination address"
                    onChangeText={(address) => this.setState({ address })}
                    onPressIcon={this.onPressCamera} />
                <View style={styles.content} children={this.renderContent()} />
                <Button children="Continue" onPress={this.onPressContinue} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        padding: measures.defaultPadding
    },
    content: {
        flex: 1,
        alignItems: 'stretch',
        marginVertical: measures.defaultMargin
    }
});