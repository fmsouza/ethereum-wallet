import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabView } from 'components/widgets';
import { colors, measures } from 'common/styles';

export class WalletDetails extends React.Component {
    
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: navigation.state.params.wallet.name
    });

    tabs = [
        { id: 'home', label: 'Home', icon: 'home', content: <Text children="home" /> },
        { id: 'receive', label: 'Receive', icon: 'qrcode', type: 'fa', content: <Text children="receive" /> },
        { id: 'send', label: 'Send', icon: 'cube-send', type: 'mdc', content: <Text children="send" /> },
        { id: 'settings', label: 'Settings', icon: 'settings', content: <Text children="settings" /> }
    ];

    render() {
        return (
            <View style={styles.container}>
                <TabView tabs={this.tabs} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.defaultBackground,
        alignItems: 'stretch',
        flex: 1
    }
});