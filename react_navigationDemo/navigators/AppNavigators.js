import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import HomePage from '../pages/HomePage';

export const AppStackNavigator = createStackNavigator(
    routeConfigMap={
        HomePage: {
            screen: HomePage
        },
        Page1: {
            screen: Page1,
            navigationOptions: ({navigation}) => (
                {
                    title: `${navigation.state.params&&navigation.state.params.name}`
                }
            )
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                title: 'Page2'
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: (props) => {
                const {navigation} = props;
                const {state, setParams} = navigation;
                const {params} = state;
            }
        }
    },
    stackConfig={
        defaultNavigationOptions: {  //全局默认属性,对当前导航器的所有页面有效

        }
    }
    
);