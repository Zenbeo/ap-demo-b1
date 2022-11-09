/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import CustomButton from './src/CustomButton';
import Home from './src/Home';

// AppRegistry.registerComponent(appName, () => Home);
AppRegistry.registerComponent(appName, () => CustomButton);