import { AppRegistry, YellowBox } from 'react-native';
import App from './src';
import './src/common/utils/shims';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount',
  'Warning: componentWillReceiveProps',
  'Module RCTImageLoader',
  'Class RCTCxxModule was not exported',
  'Remote debugger'
]);

AppRegistry.registerComponent(appName, () => App);
