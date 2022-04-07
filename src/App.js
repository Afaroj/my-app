import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
import Counters from './components/Counters';
import NavBar from './components/navbar';

class App extends Component {
      state = { 
        counters : [
            { id:1 , value:0},
            { id:2 , value:0},
            { id:3 , value:0},
            { id:4 , value:0},
            { id:5 , value:0},

        ]
    };
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters });
    }
    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({ counters });
    }

    handleReset = () =>
    {
        const counters = this.state.counters.map(c=> {
            c.value =0;
            return c;
        });
        this.setState({ counters });
    }

    handleDelete = counterId =>{
        console.log("Event handler called");
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }; 
    styles={
      backgroundColor:"SkyBlue",
      width:'100%',
      height:'100%',   //style={this.styles}
 };
    render(){
    return (
    <React.Fragment >
      <div style={this.styles}>
    
        <NavBar  totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement = {this.handleDecrement}
          />

        </main>
        </div>
    </React.Fragment> 
    );
  }
}


export default App;
