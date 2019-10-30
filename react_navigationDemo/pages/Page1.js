import React from 'react'
import { Button,View,Text,StyleSheet } from 'react-native'

export default class Page1 extends React.Component{

    render(){
        const {navigation} = this.props;
        return <View style={{flex:1,backgroundColor:"gray",paddingTop:30}}>
            <Text style={{color:'white',textAlign:'center',fontSize:14}}>欢迎来到Page1</Text>
            <Button title={'Go Back'} onPress={()=>{
                navigation.goBack();
            }}/>
            <Button title={'Go to page2'} onPress={()=>{
                navigation.navigate('Page2');
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