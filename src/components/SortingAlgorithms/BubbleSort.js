import React from 'react';

class BubbleSort extends React.Component {

    constructor(){
        super();
        console.log(this.props,"props")
    }

    resolveAfter2Seconds = () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('resolved');
          }, 50);
        });
      }
      
      
    asyncCall = async (e) => {
        e.preventDefault();
        console.log('calling');
        // var a = await this.resolveAfter2Seconds();
        // console.log(a,2323);
        //this.props.changeState([3,4,5]);
        // expected output: 'resolved'
        var swapp;
        var n = this.props.arr.length-1;
        var x=this.props.arr;
        do {
            swapp = false;
            for (var i=0; i < n; i++)
            {
                if (x[i] < x[i+1])
                {
                var temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                swapp = true;
                var a = await this.resolveAfter2Seconds();
                console.log(a,2323);
                this.props.changeState(x);
                }
            }
            n--;
        } while (swapp);
    }

    // async bubbleSort(){

    // }

    render(){
        
        return <div>
            <button onClick = {this.asyncCall} >BubbleSort</button>
        </div>
    }
}

export default BubbleSort;