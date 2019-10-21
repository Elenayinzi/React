import React from 'react'
import Child from './Child'
import {Button} from 'antd'
import './test.less'
//import 'antd/dist/antd.css'

export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    handleAdd = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClick(){
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return <div className="content">
            <p>React生命周期</p>
            <Button onClick={this.handleClick.bind(this)}>Antd点击一下</Button>
            <button onClick={this.handleClick.bind(this)}>点击一下1</button>
            <button onClick={this.handleAdd}>点击一下2</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    }
}