import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
  userdetails: [
    {
    username:'Daisy',
    age:35,
    city:'milpitas',
    state:'california'
  },
  {
    username:'rajiv',
    age:40,
    city:'sanjose',
    state:'california'
  },
    ]
 }

    switchNameHandler = (newname) =>{
      console.log("inside switch handler");
     this.setState({
      userdetails:[
         {
          username:'Daisy',
          age:35,
          city:'milpitas',
          state:'california'
          },
          {
            username:newname,
            age:40,
            city:'sanjose',
            state:'california'
          },
       ],
      }

     )}

     nameChangeHandler = (event) =>{
      console.log("inside name handler");
       this.setState({
        userdetails:[ 
            {
              username:event.target.value, 
              age:35,
              city:'milpitas',
              state:'california'
            },
            {
              username:'Rajiv',
              age:40,
              city:'sanjose',
              state:'california'
            },
            ],
      }
        )}
      
render() {

  const buttonstyle = {
      
    backgroundColor: 'yellow',
    font: 'inherit',
    border: '6px solid green',
    padding: '8px',
    cursor: 'pointer'
 };
 return (
      <div className="App">
         <h1>Hi, My first React  Assignment</h1>
       <UserOutput  
       name={this.state.userdetails[0].username} 
       age={this.state.userdetails[0].age}
       city={this.state.userdetails[0].city}
       state={this.state.userdetails[0].state}>
      
         My Hobbies : dance 
        </UserOutput>
         <UserInput
         changed={this.nameChangeHandler}>
         </UserInput>
         <UserOutput
       name={this.state.userdetails[1].username} 
       age={this.state.userdetails[1].age}
       city={this.state.userdetails[1].city}
       state={this.state.userdetails[1].state}> 
       </UserOutput>
      
         <button style={buttonstyle} onClick={this.switchNameHandler.bind(this,'Tanya')}>switch Name</button>
      </div>
    );
  }
}

export default App;
