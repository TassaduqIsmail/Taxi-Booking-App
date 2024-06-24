/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Route from './src/routes';
import Taxiselection from './src/screens/Taxiselection';
import Texx from './src/screens/Texxs';
import SecondeTex from './src/screens/SecondeTex';
import Eyeforeye from './src/screens/Eyeforeye';

AppRegistry.registerComponent(appName, () => Route);
