import React from 'react';
import './App.css';
import CollegeCampus from './CollegeCampus.jpeg'
import CollegeCampus1 from './CollegeCampus1.jpeg'

class App extends React.Component{

  render(){
    return(
          <div>
              <h1>This is the homepage</h1>
                <img src={CollegeCampus} alt=""/>
            </div>
                );

  }
}

export default App;
