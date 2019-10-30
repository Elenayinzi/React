import React from 'react'
import { Button,View,Text,StyleSheet } from 'react-native'

export default class HomePage extends React.Component{

    //在这里定义每个页面的导航属性
    static navigationOptions = {
        title: 'Home',
        headerBackTitle: '返回',//设置返回此页面的返回按钮文案，有长度限制,没有生效
        headerBackTitleVisible: true,
        headerTitleStyle: {
            fontWeight: '200',
            textAlign: 'center',
            flex: 1
        }
    };

    render(){
        const {navigation} = this.props;
        return <View style={{flex:1,backgroundColor:"pink",paddingTop:30}}>
            <Text style={{textAlign:'center',fontSize:14}}>欢迎来到HomePage</Text>
            {/* <Button title={'Go to Page1'} onPress={()=>{
                navigation.navigate('Page1',{name: '动态的'});
            }}/>
            <Button title={'Go to Page2'} onPress={()=>{
                navigation.navigate('Page2');
            }}/>
            <Button title={'Go to Page3'} onPress={()=>{
                navigation.navigate('Page3',{name: 'Devio'});
            }}/> */}
            {/* <Button title={'顶部导航器'} onPress={()=>{
                navigation.navigate('MaterialTopTabNavigator');
            }}/>
            <Button title={'底部导航器'} onPress={()=>{
                navigation.navigate('BottomTabNavigator');
            }}/> */}
            {/* <Button title={'Page1'} onPress={()=>{
                navigation.navigate('Page1');
            }}/> */}
            <Button title={'顶部导航器'} onPress={()=>{
                navigation.navigate('MaterialTopTabNavigator');
            }}/>
            <Button title={'底部导航器'} onPress={()=>{
                navigation.navigate('BottomTabNavigator');
            }}/>
            <Button title={'切换导航器'} onPress={()=>{
                navigation.navigate('SwitchNavigator');
            }}/>
            <Button title={'抽屉导航器'} onPress={()=>{
                navigation.navigate('DrawerNavigator');
            }}/>
        </View>
    }
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 20,
        color: 'white'
    }
})