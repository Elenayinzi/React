import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator,  createMaterialTopTabNavigator} from 'react-navigation-tabs'; //底部导航器,顶部导航器
import { createDrawerNavigator,DrawerNavigatorItems } from 'react-navigation-drawer'  //抽屉导航器
import { SafeAreaView } from 'react-navigation'
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';
import HomePage from '../pages/HomePage';
import { Button ,Text, ScrollView} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SwitchNavigator from './SwitchNavigator'


const DrawerNavigator = createDrawerNavigator(
    routeConfigMap={
        Page4: {
            screen: Page4,
            navigationOptions: {
                drawerLabel: 'Page4',
                drawerIcon: ({tintColor}) => (
                    <MaterialIcons name="drafts" size={24} style={{color: tintColor}}/>
                ),
            }
        },
        Page5: {
            screen: Page5,
            navigationOptions: {
                drawerLabel: 'Page5',
                drawerIcon: ({tintColor}) => (
                    <MaterialIcons
                        name="move-to-inbox"
                        size={24}
                        style={{color: tintColor}}
                    />
                ),
            }
        }
    },
    config={
        contentComponent: (props) => (
            <ScrollView style={{backgroundColor: '#098', flex: 1}}>
                <SafeAreaView forceInset={{top: 'always'}}>
                    <DrawerNavigatorItems {...props} />
                </SafeAreaView>
            </ScrollView>
        ),
        contentOptions: {
            activeTintColor: 'orange'
        }
    }
)


const MaterialTopTabNavigator = createMaterialTopTabNavigator(
    routes={
        Page1: {
            screen:Page1,
            navigationOptions: {
                tabBarLabel: 'Page1'
            }
        },
        Page2: {
            screen:Page2,
            navigationOptions: {
                tabBarLabel: ({tintColor, focused})=>( //自定义Tab后文字没有居中
                    <Text style={{color:focused?'red':'white',textAlign:'center',fontSize:11}}>Page2</Text>
                )
            }
        },
        Page3: {
            screen:Page3,
            navigationOptions: {
                tabBarLabel: ({tintColor, focused})=>( //自定义Tab后文字没有居中
                    <Text style={{color:focused?'red':'white',textAlign:'center',fontSize:11}}>Page3</Text>
                )
            }
        }
    },
    config={
        tabBarOptions: {
            activeTintColor: 'red',
            tabStyle: {
                minWidth: 50
            },
            upperCaseLabel: false, //设置标题小写
            style: {
                backgroundColor: '#879'
            },
            indicatorStyle: { //指示线样式
                height: 2,
                backgroundColor: 'white'
            },
            labelStyle: {  //文字样式
                fontSize: 11,
                marginTop: 6,
                marginBottom: 6
            }
        }
    }
)


const BottomTabNavigator = createBottomTabNavigator(
    routes={
        Page1: {
            screen:Page1,
            navigationOptions: {
                tabBarLabel: 'Page1',
                tabBarIcon: ({tintColor, focused}) =>(
                    <Ionicons 
                        name={'ios-home'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        Page2: {
            screen:Page2,
            navigationOptions: {
                tabBarLabel: ({tintColor, focused})=>( //自定义Tab后文字没有居中
                    <Text style={{color:focused?'red':'grey',textAlign:'center',fontSize:11}}>Page2</Text>
                ),
                tabBarIcon: ({tintColor, focused}) =>(
                    <Ionicons 
                        name={'ios-people'}
                        size={26}
                        style={{color:focused?'red':'grey'}}
                    />
                )
            }
        }
    },
    config={
        tabBarOptions: {
            activeTintColor: 'red'
        }
    }
)

export const AppStackNavigator = createStackNavigator(
    routeConfigMap={
        HomePage: {
            screen: HomePage
            // screen: BottomTabNavigator,
            // navigationOptions: {
            //     title:'底部导航',
            //     headerTitleStyle: {
            //         fontWeight: '200',
            //         textAlign: 'center',
            //         flex: 1
            //     }
            // }
        },
        SwitchNavigator: {
            screen: SwitchNavigator
        },
        DrawerNavigator: {
            screen: DrawerNavigator
        },
        MaterialTopTabNavigator:{
            screen: MaterialTopTabNavigator,
            navigationOptions: {
                title: '顶部导航器'
            }
        },
        BottomTabNavigator:{
            screen: BottomTabNavigator,
            navigationOptions: {
                title: '底部导航器',
                header: null
            }
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
                const {params = {} } = state;
                return {
                    title: params.name?params.name:"This is Page3",
                    headerRight:(
                        <Button
                            title={params.mode === 'edit'?'保存':'编辑'}
                            onPress={()=>{
                                setParams({mode: params.mode === 'edit'?'':'edit'})
                            }}
                        />
                    )
                }
            }
        }
    },
    stackConfig={
        defaultNavigationOptions: {  //全局默认属性,对当前导航器的所有页面有效

        }
    }
    
);