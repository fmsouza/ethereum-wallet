import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, ReadableInput } from 'components/widgets';
import { colors } from 'common/styles';

export class LoadPrivateKey extends React.Component {

    static navigationOptions = { header: null }

    state = { pk: '' };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <View />
                    <Image style={styles.logo} source={require('assets/img/ethereum.png')} />
                    <View style={styles.body}>
                        <Text style={styles.message}>Private key</Text>
                        <ReadableInput
                            placeholder="eg.: 3123012t3n1273v12n12b120b12731132b0t2"
                            onChangeText={pk => this.setState({ pk })} />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Button onPress={() => navigate('WalletsOverview')}>Open wallet</Button>
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
    body: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        maxHeight: 300
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
        justifyContent: 'space-between',
        height: 52
    }
});