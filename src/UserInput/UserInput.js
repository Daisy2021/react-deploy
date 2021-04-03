import React from 'react';
import './UserInput.css';

const person = (props) => {
    return(
        <div className="UserInput">
          
          <p>UserInput:<input type="text" onChange={props.changed}  value={props.name}></input></p>
                        
        </div>
    )
};
export default person;