import React from 'react';
import { TabView } from '@components/widgets';
import { colors, measures } from '@common/styles';
import { ReceiveCoins, SendCoins, WalletExtract, WalletSettings } from '../index';

export class WalletDetails extends React.Component {
    
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: navigation.state.params.wallet.name
    });

    tabs = [
        { id: 'extract', label: 'Extract', icon: 'list', content: <WalletExtract {...this.props} /> },
        { id: 'receive', label: 'Receive', icon: 'qrcode', type: 'fa', content: <ReceiveCoins {...this.props} /> },
        { id: 'send', label: 'Send', icon: 'cube-send', type: 'mdc', content: <SendCoins {...this.props} /> },
        { id: 'settings', label: 'Settings', icon: 'settings', content: <WalletSettings {...this.props} /> }
    ];

    render() {
        return <TabView tabs={this.tabs} />;
    }
}