import React, { Component } from 'react';

class Counter extends Component {
    /*styles={
         backgroundColor:"MediumSlateBlue",
         width:'100%',
         height:'100px%',   //style={this.styles}
    };*/
    render() { 
        console.log(this.props);
        
        return (
           
            <div class = "container"> 
                {this.props.children}
                <span style={this.styles} className={this.getBadgeClasses()}>{ this.formatCount() }</span>
                <button onClick={()=> this.props.onIncrement(this.props.counter)} 
                        className='btn btn-secondary btn-sm'>
                        Increment
                </button> 
                <button 
                        onClick={() => this.props.onDecrement(this.props.counter)} 
                        className='btn btn-secondary btn-sm m-2'>
                            Decrement
                </button> 
                <button 
                        onClick={() => this.props.onDelete(this.props.counter.id)} 
                        className='btn btn-danger btn-sm m-2'>
                            Delete
                </button>  

                              
            </div>    
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount ()
    {
        const {value} =this.props.counter;
        return value === 0 ?   'ZERO' : value ; 
    }
    
}
 
export default Counter;