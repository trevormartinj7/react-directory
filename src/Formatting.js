import React, {Component} from 'react'
import data from './data'
import User from './User'

class Formatting extends Component{
    constructor(){
        super();
        this.state={
            index: 0
        }

        this.decreaseIndex = this.decreaseIndex.bind(this)
        this.increaseIndex = this.increaseIndex.bind(this)
    }

    decreaseIndex(){
        let temp = this.state.index - 1;
        this.setState({index: temp})
    }

    increaseIndex(){
        let temp = this.state.index + 1;
        this.setState({index: temp})
    }


    render(){
        return(
            <div className="background">
                <div>
                    <User dataUser={data[this.state.index]}/>
                </div>
                <div className="button-box">
                    <div className="sub-box">
                        <button onClick={this.decreaseIndex}>{"<"} Previous</button>
                    </div>
                    <div className="mid-box">
                        <div className="interior-buttons"></div>
                        <div className="interior-buttons"></div>
                        <div className="interior-buttons"></div>
                    </div>
                    <div className="sub-box">
                        <button onClick={this.increaseIndex}>Next {">"}</button>
                    </div>
                </div>
                
            </div>
        )
    }

}

export default Formatting