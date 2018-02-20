import React, { Component } from 'react';
import Classified from './components/Classified';
import './App.css';

class App extends Component {

  state = {
    classifieds: {
      categories : [
        {
          categoryId : 14343, 
          categoryName : "Real Estate", 
          content : "Real Estate content"
        },
        {
          categoryId : 453453, 
          categoryName : "Autos", 
          content : "Autos Content"
        } ,
        {
          categoryId : 56453, 
          categoryName : "Jobs", 
          content : "Job Market"
        } 
      ] 
    }
  };

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          Classifieds Demo
        </header>
        
        <div className="App-intro">
          <Classified classifieds={this.state.classifieds}  />
        </div>
      </div>
    );
  }
}

export default App;
