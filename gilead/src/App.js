import React, { Component } from 'react';
import HouseholdList from './components/HouseholdList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      households: [
       {
        id: 0,
        lastname: 'Waterford',
        commander: 'Fred',
        wife: 'Serena Joy',
        handmaid:'Offred/June'
      },
      {
         id: 1,
         lastname: 'Putnam',
         commander: 'Warren',
         wife: 'Naomi',
         handmaid:'Ofwarren/Janine'
      },
      {
        id: 2,
        lastname:'Lawrence',
        commander: 'Joseph',
        wife: 'Eleanor',
        handmaid:'Ofjoseph/Emily'
      },
      ],
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Nolite te bastardes carborundorum</h1>
      <HouseholdList
        householdsArray={this.state.households}
     />
    </div>
    );
  }
}

export default App;
