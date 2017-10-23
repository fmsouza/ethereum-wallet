import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'components/widgets';
import { colors } from 'common/styles';

export class NewWallet extends React.Component {

    static navigationOptions = { header: null }
    
    onPressProceed = () => {
        this.props.navigation.navigate('CreateMnemonics');
    }

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <View />
                    <Image style={styles.logo} source={require('assets/img/ethereum.png')} />
                    <View>
                        <Text style={styles.message}>When creating a new wallet you will receive a sequence of words that represent your "personal password". Anyone with this sequence may be able to reconfigure your wallet in any new device. Keep it as secure as possible. Only you should have access to this information.</Text>
                        <Text style={styles.message}>Write it somewhere safe so you can make sure you won't lose it, or you may lose permanently all your coins. There is no way to recover it later.</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Button onPress={this.onPressProceed}>Proceed</Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'flex-end',
        padding: 8,
        paddingBottom: 32
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    message: {
        color: colors.secondary,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 8,
        marginHorizontal: 32
    },
    logo: {
        width: 128,
        height: 128,
    },
    buttonsContainer: {
        width: '100%',
        justifyContent: 'flex-end',
        height: 104
    }
});