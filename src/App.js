import React, {Component} from 'react';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/Welcome';

class App extends Component {
  render(){
    return (
      <div className="App">
       <Greet name="Suma" surname="Dixit">
        <p>This is child prop</p>
       </Greet>
       <Greet name="Praveen" surname="Upadhya">
        <button>
          Click
        </button>
       </Greet>
       <Greet name="Supavi" surname="Chinnu"/>
       <Welcome name="Suma" surname="Dixit"/>
      </div>
    );
  }
}

export default App;
