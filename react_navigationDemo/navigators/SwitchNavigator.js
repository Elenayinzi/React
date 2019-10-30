import { createSwitchNavigator } from 'react-navigation'  //侧滑导航
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from '../pages/HomePage';
import Page1 from '../pages/Page1';
import Login from '../pages/Login';

const AppStack = createStackNavigator(
    routeConfigMap={
        Home: {
            screen: HomePage
        },
        Page1:{
            screen: Page1,
            navigationOptions:{
                //header: null
            }
        }
    }
)

const AuthStack = createStackNavigator(
    routeConfigMap={
        Login: {
            screen: Login
        }
    }
)

export default createSwitchNavigator(
    routeConfigMap={
        //AuthStack: AuthStack,
        AuthStack: {
            screen: AuthStack
        },
        App: AppStack
    }
)