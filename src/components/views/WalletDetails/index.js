import React from 'react';
import { TabView } from 'components/widgets';
import { colors, measures } from 'common/styles';
import { ReceiveCoins, SendCoins, WalletExtract, WalletSettings } from '../index';

export class WalletDetails extends React.Component {
    
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: navigation.state.params.wallet.name
    });

    tabs = [
        { id: 'extract', label: 'Extract', icon: 'list', content: <WalletExtract /> },
        { id: 'receive', label: 'Receive', icon: 'qrcode', type: 'fa', content: <ReceiveCoins /> },
        { id: 'send', label: 'Send', icon: 'cube-send', type: 'mdc', content: <SendCoins /> },
        { id: 'settings', label: 'Settings', icon: 'settings', content: <WalletSettings /> }
    ];

    render() {
        return <TabView tabs={this.tabs} />;
    }
}