import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Camera, InputWithIcon } from '@components/widgets';
import { colors, measures } from '@common/styles';
import Recents from './Recents';

export class SelectDestination extends React.Component {
    
    static navigationOptions = { title: 'Select destination' };

    state = { address: '' };
    
    onPressContinue() {
        const { amount } = this.props.navigation.state.params;
        const { address } = this.state;
        this.props.navigation.navigate('ConfirmTransaction', { address, amount });
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
                    onPressIcon={() => this.refs.camera.show()} />
                <View style={styles.content}>
                    <Recents onPressItem={address => this.refs.input.onChangeText(address)} />
                </View>
                <Button children="Continue" onPress={() =>this.onPressContinue()} />
                <Camera
                    ref="camera"
                    modal
                    onClose={() => this.refs.camera.hide()}
                    onBarCodeRead={address => this.refs.input.onChangeText(address)} />
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