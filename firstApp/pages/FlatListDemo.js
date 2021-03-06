/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component}from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

type Props = {};
const CITY_NAMES = ['北京', '上海', '广州', '深圳', '杭州', '苏州', '成都', '武汉', '郑州', '洛阳', '厦门', '青岛', '拉萨'];
export default class FlatListDemo extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            dataArray: CITY_NAMES
        }
    }

    genIndicator () {
        return <View style={styles.indicatorContainer}>
            <ActivityIndicator 
                style={styles.indicator}
                size={'large'}
                color={'red'}
                animating={true}
            />
            <Text>正在加载更多</Text>
        </View>
    }

    loadData (isRefreshing) {
        if(isRefreshing){
            this.setState({
                isLoading: true
            })
        }
        setTimeout(() => {
            let dataArray = [];
            if (isRefreshing) {
                for (let i=this.state.dataArray.length-1;i>=0;i--) {
                    dataArray.push(this.state.dataArray[i])
                }
            } else {
                dataArray = this.state.dataArray.concat(CITY_NAMES);
            }
            this.setState({
                dataArray: dataArray,
                isLoading: false
            })
        }, 2000)
    }

    _renderItem (data) {
        return <View style={styles.item}>
            <Text style={styles.text}>{data.item}</Text>
        </View>
    }

    render () {
        return  <View style={styles.sectionContainer}>
            <FlatList 
                data={this.state.dataArray}
                renderItem = {(data)=>this._renderItem(data)}
                refreshControl = {
                    <RefreshControl
                        colors={['red']}
                        titleColor ={'red'}
                        title={'Loading'}
                        refreshing={this.state.isLoading}
                        onRefresh={() => {
                            this.loadData(true)
                        }}
                    />
                }
                ListFooterComponent={()=>this.genIndicator()}
                onEndReached={()=> {
                    this.loadData();
                }}
            />
        </View>
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
    },
    item: {
        height: 200,
        backgroundColor: '#169',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20
    },
    indicatorContainer: {
        alignItems: "center"
    },
    indicator: {
        color: 'red',
        margin: 10
    }
});
