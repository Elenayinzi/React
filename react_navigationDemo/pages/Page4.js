import React from 'react'
import { Button,View,Text,StyleSheet } from 'react-native'
import { DrawerActions } from 'react-navigation-drawer';

export default class Page4 extends React.Component{

    render(){
        const {navigation} = this.props;
        return <View style={{flex:1,backgroundColor:"gray",paddingTop:30}}>
            <Text style={{color:'white',textAlign:'center',fontSize:14}}>欢迎来到Page4</Text>
            <Button title={'open drawer'} onPress={()=>{
                navigation.dispatch(DrawerActions.openDrawer()) //打开侧滑栏
            }}/>
            <Button title={'Toggle Drawer'} onPress={()=>{
                navigation.toggleDrawer(); //切换关闭和打开侧滑栏
            }}/>
            <Button title={'open page5'} onPress={()=>{
                navigation.navigate('Page5'); //跳转到page4
            }}/>
            <Button title={'close Drawer'} onPress={()=>{
                navigation.closeDrawer(); //切换关闭和打开侧滑栏
            }}/>
        </View>
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'white'
    }
})