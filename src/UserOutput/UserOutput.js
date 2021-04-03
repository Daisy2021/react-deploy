import React from 'react';
import './UserOutput.css';

const user = (props) => {
    return(
        <div className="UserOutput">
          <p>I am {props.name} and My age is {props.age}.{props.children}.</p>
          <p>I lived in {props.city},{props.state}.</p>
          
                        
        </div>
    )
};
export default user;