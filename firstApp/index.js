/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FlatListDemo from './pages/FlatListDemo'
import SectionListDemo from './pages/SectionListDemo'
import {name as appName} from './app.json';

const AppRoot = createStackNavigator({
    App: {
        screen: App,
    },
    FlatListDemo: {
        screen: FlatListDemo,
        navigationOptions: {
            title: 'FlatListDemo'
        }
    },
    SectionListDemo: {
        screen: SectionListDemo,
        navigationOptions: {
            title: 'SectionListDemo'
        }
    }
})

const AppNavigator = createAppContainer(AppRoot);
AppRegistry.registerComponent(appName, () => AppNavigator);

