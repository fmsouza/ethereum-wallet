import { AppRegistry, YellowBox } from 'react-native';
import './src/common/utils/shims';
import App from './src';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount',
  'Warning: componentWillReceiveProps',
  'Module RCTImageLoader',
  'Class RCTCxxModule was not exported',
  'Remote debugger'
]);

AppRegistry.registerComponent('EthereumWallet', () => App);