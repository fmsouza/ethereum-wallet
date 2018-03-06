import { AppRegistry, YellowBox } from 'react-native';
import './src/common/utils/shims';
import App from './src';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount',
  'Warning: componentWillReceiveProps',
  'Module RCTImageLoader'
]);

AppRegistry.registerComponent('EthereumWallet', () => App);