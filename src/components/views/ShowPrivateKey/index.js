import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { colors, measures } from '@common/styles';

export class ShowPrivateKey extends React.Component {
    
    static navigationOptions = { title: 'Private key' };

    render() {
        const { wallet: { item } } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <View style={styles.centered}>
                    <QRCode size={256} value={item.privateKey} />
                </View>
                <Text style={styles.centered}>{item.privateKey}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-around',
        padding: measures.defaultPadding
    },
    centered: {
        alignSelf: 'center',
        textAlign: 'center'
    }
});