import React, { Component } from 'react';
import Counter from './Counter';
class Counters extends Component {
    
    render() { 
        return (
            <div>
                <button
                    onClick ={this.props.onReset}
                    className=" btn btn-primary btn-sm m-2"
                    >
                        Reset
                </button>

                {this.props.counters.map(counter =>( 
                    <Counter key={counter.id} 
                             onDelete={this.props.onDelete}
                             onIncrement={this.props.onIncrement}
                             onDecrement = {this.props.onDecrement}
                             value={counter.value}
                             counter={counter}
                             //id={counter.id}
                             >
                                
                    <h4>
                        Counter #{counter.id}
                    </h4>
                </Counter>))}
            </div>
        );
    }
}
 
export default Counters;