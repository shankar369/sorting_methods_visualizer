import React from 'react';
import BubbleSort from './SortingAlgorithms/BubbleSort'

class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            arr: ([...Array(50).keys()].map(x => ++x)).sort(()=>Math.random()-0.5)
        }
        
    }

    changeState = (modifiedArr) => {
        this.setState({
            arr : modifiedArr
        })
    }

    render() {
        return <div>
                    <BubbleSort changeState = {this.changeState} arr = {this.state.arr}/>
                    <div id="myProgress">
                        { this.state.arr.map((element) => 
                          
                                <div id="myBar" style={{ width: element* (100/this.state.arr.length)+"%", height : 100 / this.state.arr.length + "vh" }} ></div>
                           
                            
                        )} 
                    </div>
                </div>
        
    }
}

export default Dashboard ;

