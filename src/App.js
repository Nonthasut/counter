import React, { Component } from 'react'
import './App.css'

export class App extends Component {
    state = {
        data:0,
        addData:null,
        subData:null,  
        resetData:null,
        }
    onUp = () => {
        this.setState({data:this.state.data+1})
    }

    onDown = () => {
        this.setState({data:this.state.data-1})

    }
    onReset = () => {
        this.setState({data:0})
    }
    addDataSubmit =(e)=>{
        this.setState({data:this.state.data+Number(this.state.addData)})
    }
    addChange =(e)=>{
        this.setState({addData:e.target.value})
    }
    subDataSubmit =(e)=>{
        this.setState({data:this.state.data-Number(this.state.subData)})
    }
    subChange =(e)=>{
        this.setState({subData:e.target.value})
    }
    resetChange =(e)=>{
        this.setState({resetData:e.target.value})
    }
    resetSubmit=(e)=>{
        this.setState({data:Number(this.state.resetData)})
    }
    render() {
        return (
            <div>
                <h1>counter</h1>
                <div>{this.state.data}</div>
                <button onClick={this.onUp}>Up</button>
                <button onClick={this.onDown}>Down</button>
                <button onClick={this.onReset}>reset</button>
                <form onSubmit={(e)=>{e.preventDefault();this.addDataSubmit()}}>
                <input onChange={(e)=>{this.addChange(e)}} value={this.state.addData}></input> <span>Add</span>
                </form>
                <form onSubmit={(e)=>{e.preventDefault();this.subDataSubmit()}}>
                <input onChange={(e)=>{this.subChange(e)}} value={this.state.subData}></input> <span>Subtract</span>
                </form>
                <form onSubmit={(e)=>{e.preventDefault();this.resetSubmit()}}>
                <input onChange={(e)=>{this.resetChange(e)}} value={this.state.resetData}></input> <span>Reset</span>
                </form>
            </div>
        )
    }
}

export default App