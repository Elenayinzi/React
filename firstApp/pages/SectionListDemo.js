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
  SectionList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

type Props = {};
const CITY_NAMES = [{data: ['北京', '上海', '广州', '深圳'], title: "一线"}, {
    data: ['杭州', '苏州', '成都', '武汉',],
    title: "二三线1"
}, {data: ['郑州', '洛阳', '厦门', '青岛', '拉萨'], title: "二三线2"}];
export default class SectionListDemo extends Component<Props> {

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

    _renderSectionHeader ({section}) {
        return <View style={styles.sectionHeader}>
            <Text style={styles.text}>{section.title}</Text>
        </View>
    }

    render () {
        return  <View style={styles.sectionContainer}>
            <SectionList
                sections={this.state.dataArray}
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
                renderSectionHeader={(data)=>this._renderSectionHeader(data)}
                ItemSeparatorComponent={()=><View style={styles.separator}/>}
            />
        </View>
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        backgroundColor:'#fafafa'
    },
    item: {
        height: 80,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    },
    sectionHeader: {
        height: 50,
        backgroundColor: '#93ebbe',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20
    },
    indicatorContainer: {
        alignItems: "center"
    },
    indicator: {
        color: 'red',
        margin: 10
    },
    separator: {
        height: 1,
        backgroundColor: 'gray',
        flex: 1
    },
});
